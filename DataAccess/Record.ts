/**
 * Defines the nsdal handling for record body fields.
 *
 */

import * as record from 'N/record'
import * as format from 'N/format'
import * as LogManager from '../EC_Logger'
import { Sublist, SublistLine } from './Sublist'

const log = LogManager.getLogger('nsdal')

/**
 * Since the netsuite defined 'CurrentRecord' type has almost all the same operations as the normal 'Record'
 * we use this as our base class
 */
export abstract class NetsuiteCurrentRecord {

   /**
    * Netsuite internal id of this record
    * @type {number}
    */
   protected _id: number
   get id () {
      return this._id
   }

   /**
    * The netsuite record type (constant string) - this is declared here and overriden in derived classes
    */
   public static recordType: record.Type | string

   /**
    * The underlying netsuite 'record' object. For client scripts, this is the slightly less feature rich
    * 'ClientCurrentRecord' when accessing the 'current' record the script is associated to.
    */
   nsrecord: record.Record | record.ClientCurrentRecord

   /**
    * Defines a descriptor for nsrecord so as to prevent it from being enumerable. Conceptually only the
    * field properties defined on derived classes should be seen when enumerating
    * @param value
    */
   private makeRecordProp = (value) => Object.defineProperty(this, 'nsrecord', { value: value })

   constructor (rec?: number | string | record.Record | record.ClientCurrentRecord, isDynamic?: boolean, protected defaultValues?: object) {
      // since the context of this.constructor is the derived class we're instantiating, using the line below we can
      // pull the 'static' recordType from the derived class and remove the need for derived classes to
      // define a constructor to pass the record type to super()
      let type = Object.getPrototypeOf(this).constructor.recordType
      if (!rec) {
         log.debug('creating new record', `type:${type}  isDyanamic:${isDynamic} defaultValues:${defaultValues}`)
         this.makeRecordProp(record.create({ type: type, isDynamic: isDynamic, defaultValues: defaultValues }))
      } else if (typeof rec === 'object') {
         log.debug('using existing record', `type:${rec.type}, id:${rec.id}`)
         this.makeRecordProp(rec)
         this._id = rec.id
      }
      // allow
      else if (typeof rec === 'number' || +rec) {
         log.debug('loading existing record', `type:${type}, id:${rec}`)
         this.makeRecordProp(record.load({
            type: type,
            id: rec,
            isDynamic: isDynamic || false,
            defaultValue: defaultValues,
         }))
         this._id = this.nsrecord.id
      } else throw new Error(`invalid value for argument "rec": ${rec}. 
      Must be one of: null/undefined, an internal id, or an existing record`)
   }

   toJSON () {
      // surface inherited properties on a new object so JSON.stringify() sees them all
      const result: any = {}
      for (const key in this) { // noinspection JSUnfilteredForInLoop
         result[key] = this[key]
      }
      return result
   }
}

/**
 * A regular netsuite record.
 */
export abstract class NetsuiteRecord extends NetsuiteCurrentRecord {
   /**
    * underlying netsuite record
    */
   nsrecord: record.Record

   /**
    * Persists this record to the NS database
    * @param enableSourcing
    * @param ignoreMandatoryFields
    * @returns {number}
    */
   save (enableSourcing?: boolean, ignoreMandatoryFields?: boolean) {
      const id = this.nsrecord.save({
         enableSourcing: enableSourcing,
         ignoreMandatoryFields: ignoreMandatoryFields,
      })
      this._id = id
      return id
   }
}

/**
 * parses a property name from a declaration (supporting 'Text' suffix per our convention)
 * @param propertyKey original property name as declared on class
 * @returns pair consisting of a flag indicating this field wants 'text' behavior and the actual ns field name (with
 * Text suffix removed)
 */
const parseProp = suffixParser('Text')

/**
 * returns a function for parsing property names from a declaration (e.g.
 * properties that end with 'Text' or 'Sublist' suffix per convention)
 * @param suffixToSearch string that may be at the end of a property name. this string will be strippped off
 * the end of the property name if it is present.
 * @returns function that takes a property name and returns a pair [flag indicating this field matched the suffix,
 * the stripped property name (with suffix removed)]
 */
function suffixParser (suffixToSearch: string) : (propertyKey: string) => [boolean, string] {
   const suffixLength = suffixToSearch.length
   return function (propertyKey: string) {
      const endsWithSuffix = propertyKey.slice(-suffixLength) === suffixToSearch
      return [endsWithSuffix, endsWithSuffix ? propertyKey.slice(0, -suffixLength) : propertyKey]
   }
}

/**
 * parses a property name from a declaration (supporting 'Sublist' suffix per convention)
 * @param propertyKey original property name as declared on class
 * @returns pair consisting of a flag indicating this is actually a sublist and the actual ns sublist name (with
 * Sublist suffix removed)
 */
const parseSublistProp = suffixParser('Sublist')

/**
 * Generic decorator factory with basic default algorithm that exposes the field value directly with no
 * other processing. If the property name ends with "Text" then the property will use getText()/setText()
 *
 * @returns a decorator that returns a property descriptor to be used
 * with Object.defineProperty
 */
export function defaultDescriptor (target: any, propertyKey: string): any {
   const [isTextField, nsfield] = parseProp(propertyKey)
   return {
      get: function () {
         log.debug('field GET', `${nsfield}, as text:${isTextField}`)
         return isTextField ? this.nsrecord.getText({ fieldId: nsfield })
            : this.nsrecord.getValue({ fieldId: nsfield })
      },
      set: function (value) {
         // ignore undefined's
         if (value !== undefined) {
            if (isTextField) this.nsrecord.setText({ fieldId: nsfield, text: value })
            else this.nsrecord.setValue({ fieldId: nsfield, value: value })
         } else log.info(`ignoring field [${propertyKey}]`, 'field value is undefined')
      },
      enumerable: true //default is false
   }
}

/**
 * Just like the default decriptor but calls Number() on the value. This exists for numeric types that
 * would blow up if you tried to assign number primitive values to a field. Don't know why - did various checks
 * with lodash and typeof to confirm the raw value was a number but only passing through Number() worked on sets.
 * Reads still seem to return a number.
 * @returns an object property descriptor to be used
 * with Object.defineProperty
 */
export function numericDescriptor (target: any, propertyKey: string): any {
   const [isTextField, nsfield] = parseProp(propertyKey)
   return {
      get: function () {
         return isTextField ? this.nsrecord.getText({ fieldId: nsfield })
            : this.nsrecord.getValue({ fieldId: nsfield })
      },
      set: function (value) {
         // ignore undefined's
         if (value !== undefined) {
            if (isTextField) this.nsrecord.setText({ fieldId: nsfield, text: value })
            else this.nsrecord.setValue({ fieldId: nsfield, value: Number(value) })
         } else log.info(`ignoring field [${propertyKey}]`, 'field value is undefined')
      },
      enumerable: true //default is false
   }
}

// this is the shape of SublistLine class constructor
type LineConstructor<T extends SublistLine> = new (s: string, r: record.Record, n: number) => T

/**
 * Decorator for adding sublists with each line of the sublist represented by a type T which
 * defines the properties you want on the sublist
 * @param ctor Constructor for the type that has the properties you want from each sublist line.
 * e.g. Invoice.ItemSublistLine
 */
function sublistDescriptor<T extends SublistLine> (ctor: LineConstructor<T>) {
   return function (target: any, propertyKey: string): any {
      const [_, nssublist] = parseSublistProp(propertyKey)
      const privateProp = `_${nssublist}`
      return {
         enumerable: true,
         // sublist is read only for now - if we have a use case where this should be assigned then tackle it
         get: function () {

            if (!this[privateProp]) {
               log.debug('initializing sublist', `sublist property named ${propertyKey}, sublist id ${nssublist}`)
               // using defineProperty() here defaults to making the property non-enumerable which is what we want
               // for this 'private' property so it doesn't appear on serialization (e.g. JSON.stringify())
               Object.defineProperty(this, privateProp, { value: new Sublist(ctor, this.nsrecord, nssublist) })
            }
            return this[privateProp]
         },
      }
   }
}

/**
 * Decorator for *subrecord* fields with the subrecord shape represented by T (which
 * defines the properties you want on the subrecord)
 * @param ctor Constructor for the type that has the properties you want from the subrecord.
 * e.g. AssemblyBuild.InventoryDetail
 */
function subrecordDescriptor<T extends NetsuiteCurrentRecord> (ctor: new (rec: record.Record) => T) {
   return function (target: any, propertyKey: string): any {
      return {
         enumerable: true,
         // sublist is read only for now - if we have a use case where this should be assigned then tackle it
         get: function () {
            return new ctor(this.nsrecord.getSubrecord({
               fieldId: propertyKey
            }))
         },
      }
   }
}

/**
 * Generic property descriptor with algorithm for values that need to go through the NS format module on field
 * write. Returns plain getValue() on reads
 * note: does not take into account timezone
 * @param {string} formatType the NS field type (e.g. 'date')
 * @param target
 * @param propertyKey
 * @returns  an object property descriptor to be used
 * with decorators
 */
function formattedDescriptor (formatType: format.Type, target: any, propertyKey: string): any {
   return {
      get: function () {
         return this.nsrecord.getValue({ fieldId: propertyKey })
      },
      set: function (value) {
         // allow null to flow through, but ignore undefined's
         if (value !== undefined) {
            let formattedValue = format.format({ type: formatType, value: value })
            log.debug(`setting field [${propertyKey}:${formatType}]`,
               `to formatted value [${formattedValue}] javascript type:${typeof formattedValue}`)
            if (value === null) this.nsrecord.setValue({ fieldId: propertyKey, value: null })
            else this.nsrecord.setValue({ fieldId: propertyKey, value: formattedValue })
         } else log.info(`not setting ${propertyKey} field`, 'value was undefined')
      },
      enumerable: true //default is false
   }
}

/**
 *  Netsuite field types - decorate your model properties with these to tie netsuite field types to your
 *  model's field type.
 *  To get 'Text' rather than field value, suffix your property name with 'Text' e.g. 'afieldText' for the
 *  field 'afield'.
 */
export namespace FieldType {
   /**
    * use for ns  _address_ field type
    */
   export const address = defaultDescriptor
   /**
    * use for NS _checkbox_ field type - surfaces as `boolean` in TypeScript
    */
   export const checkbox = defaultDescriptor
   export const date = defaultDescriptor
   export const currency = numericDescriptor
   export const datetime = defaultDescriptor
   export const document = defaultDescriptor
   export const email = defaultDescriptor
   export const freeformtext = defaultDescriptor

   export const float = numericDescriptor
   export const decimalnumber = float
   export const hyperlink = defaultDescriptor
   export const inlinehtml = defaultDescriptor
   export const image = defaultDescriptor
   export const integernumber = numericDescriptor
   export const longtext = defaultDescriptor
   export const multiselect = defaultDescriptor
   //@see formattedDescriptor
   export const percent = (target, propertyKey) => formattedDescriptor(format.Type.PERCENT, target, propertyKey)
   /**
    * NetSuite 'Select' field type.
    */
   export var select = defaultDescriptor
   export var textarea = defaultDescriptor
   /**
    * this isn't a native NS 'field' type, but rather is used to indicate a property should represent a NS sub-list.
    * Pass a type derived from SublistLine that describes the sublist fields you want. e.g. Invoice.ItemSublistLine
    * @example
    * class MySublistLine extends Invoice.ItemSublistLine { custcol_foo:string }
    * class Invoice {
    * @FieldType.sublist(MySublistLine)
    * item: SublistLine<MySublistLine>
    * }
    */
   export var sublist = sublistDescriptor
   /**
    * NetSuite _SubRecord_ field type (reference to a subrecord object, usually described as 'summary' in the
    * records browser.
    * Pass in the (TypeScript) type that matches the subrecord this property points to
    * @example the `assemblybuild.inventorydetail` property
    * ```typescript
    * import { InventoryDetail } from './DataAceess/InventoryDetail'
    *
    * class AssemblyBuild {
    *    @FieldType.subrecord(InventoryDetail)
    *    inventorydetail: InventoryDetail
    * }
    * ```
    */
   export var subrecord = subrecordDescriptor
}

