/**
 * Represents Sublists and their field access. Sublists use a different api than body fields in NS.
 * Note that in NFT-SS1.0 we collapsed the sublist and body descriptors into a common codebase. Decided not to do
 * that here (yet) in interest of code clarity. Also the fact that it's only two copies (usually use the rule of
 * three's for DRY).
 */

import * as record from 'N/record'
import * as format from 'N/format'
import * as LogManager from '../EC_Logger'
import * as error from "N/error"
import { NetsuiteCurrentRecord } from './Record'

const log = LogManager.getLogger('nsdal-sublist')

// from https://www.typescriptlang.org/v2/docs/handbook/advanced-types.html#distributive-conditional-types
type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
/*
 note that numeric sublist fields seem to do ok with the defaultdescriptor with the exception of percent fields.
 this differs from body fields behavior - it seems body fields required the numericDescriptor (see numericDescriptor
 in Record.ts
 */

/**
 * decorators for sublist fields. Adorn your class properties with these to bind your class property name with
 * the specific behavior for the type of field it represents in NetSuite.
 */
export namespace SublistFieldType {
   export var checkbox = defaultSublistDescriptor
   export var currency = defaultSublistDescriptor
   export var date = defaultSublistDescriptor
   export var datetime = defaultSublistDescriptor
   export var email = defaultSublistDescriptor
   export var freeformtext = defaultSublistDescriptor
   export var decimalnumber = defaultSublistDescriptor
   export var float = defaultSublistDescriptor
   export var hyperlink = defaultSublistDescriptor
   export var image = defaultSublistDescriptor
   export var inlinehtml = defaultSublistDescriptor
   export var integernumber = defaultSublistDescriptor
   export var longtext = defaultSublistDescriptor
   export var multiselect = defaultSublistDescriptor
   export var percent = (target, propertyKey) => formattedSublistDescriptor(format.Type.PERCENT, target, propertyKey)
   export var select = defaultSublistDescriptor
   export var textarea = defaultSublistDescriptor
   export const subrecord = subrecordDescriptor
}

/**
 * handles setting sublist fields for any combination of setValue/setText and standard/dynamic record
 * @param fieldId
 * @param value
 * @param isText
 */
function setSublistValue (this: SublistLine, fieldId: string, value: any, isText: boolean) {
   // ignore undefined's
   if (value !== undefined) {

      const options = {
         sublistId: this.sublistId,
         fieldId: fieldId
      }

      if (this.nsrecord.isDynamic) {
         this.nsrecord.selectLine({ sublistId: this.sublistId, line: this._line })
         isText ? this.nsrecord.setCurrentSublistText({ ...options, ignoreFieldChange: this.ignoreFieldChange, text: value })
            : this.nsrecord.setCurrentSublistValue({ ...options, ignoreFieldChange: this.ignoreFieldChange, value: value })
      } else {
         isText ? this.nsrecord.setSublistText({ ...options, line: this._line, text: value })
            : this.nsrecord.setSublistValue({ ...options, line: this._line, value: value })
      }
   } else log.debug(`ignoring field [${fieldId}]`, 'field value is undefined')
}

function getSublistValue (this: SublistLine, fieldId: string, isText: boolean) {
   const options = {
      sublistId: this.sublistId,
      fieldId: fieldId,
   }
   log.debug(`getting sublist ${isText ? 'text' : 'value'}`, options)
   if (this.nsrecord.isDynamic) {
      this.nsrecord.selectLine({ sublistId: this.sublistId, line: this._line })
      return isText ? this.nsrecord.getCurrentSublistText(options)
         : this.nsrecord.getCurrentSublistValue(options)
   } else {
      return isText ? this.nsrecord.getSublistText({ ...options, line: this._line })
         : this.nsrecord.getSublistValue({ ...options, line: this._line })
   }
}

/**
 * Generic property descriptor with basic default algorithm that exposes the field value directly with no
 * other processing. If the target field name ends with 'Text' it uses NetSuite `getText()/setText()` otherwise (default)
 * uses `getValue()/setValue()`
 * @returns an object property descriptor to be used
 * with Object.defineProperty
 */
function defaultSublistDescriptor (target: any, propertyKey: string): any {
   log.debug('creating default descriptor', `field: ${propertyKey}`)
   const [isTextField, nsfield] = parseProp(propertyKey)
   return {
      get: function (this: SublistLine) {
         return getSublistValue.call(this, nsfield, isTextField)
      },
      set: function (this: SublistLine, value) {
         setSublistValue.call(this, nsfield, value, isTextField)
      },
      enumerable: true //default is false
   }
}

/**
 * Generic property descriptor with algorithm for values that need to go through the NS format module
 * note: does not take into account timezone
 * @param {string} formatType the NS field type (e.g. 'date')
 * @param target
 * @param propertyKey
 * @returns  an object property descriptor to be used
 * with decorators
 */
export function formattedSublistDescriptor (formatType: format.Type, target: any, propertyKey: string): any {
   return {
      get: function (this: SublistLine) {
         log.debug(`getting formatted field [${propertyKey}]`)
         const value = getSublistValue.call(this, propertyKey, false) as string // to satisfy typing for format.parse(value) below.
         log.debug(`transforming field [${propertyKey}] of type [${formatType}]`, `with value ${value}`)
         // ensure we don't return moments for null, undefined, etc.
         // returns the 'raw' type which is a string or number for our purposes
         return value ? format.parse({ type: formatType, value: value }) : value
      },
      set: function (this: SublistLine, value) {
         let formattedValue: number | null
         // allow null to flow through, but ignore undefined's
         if (value !== undefined) {
            switch (formatType) {
               // ensure numeric typed fields get formatted to what netsuite needs
               // in testing with 2016.1 fields like currency had to be a number formatted specifically (e.g. 1.00
               // rather than 1 or 1.0 for them to be accepted without error
               case format.Type.CURRENCY:
               case format.Type.CURRENCY2:
               case format.Type.FLOAT:
               case format.Type.INTEGER:
               case format.Type.NONNEGCURRENCY:
               case format.Type.NONNEGFLOAT:
               case format.Type.POSCURRENCY:
               case format.Type.POSFLOAT:
               case format.Type.POSINTEGER:
               case format.Type.RATE:
               case format.Type.RATEHIGHPRECISION:
                  formattedValue = Number(format.format({ type: formatType, value: value }))
                  break
               default:
                  formattedValue = format.format({ type: formatType, value: value })
            }
            log.debug(`setting sublist field [${propertyKey}:${formatType}]`,
               `to formatted value [${formattedValue}] (unformatted vale: ${value})`)
            if (value === null) setSublistValue.call(this, propertyKey, null)
            else setSublistValue.call(this, propertyKey, formattedValue)
         } else log.info(`not setting sublist ${propertyKey} field`, 'value was undefined')
      },
      enumerable: true //default is false
   }
}

/**
 * Decorator for sublist *subrecord* fields with the subrecord shape represented by T (which
 * defines the properties you want on the subrecord)
 * @param ctor Constructor for the subrecord class you want (e.g. `AddressBase`, `InventoryDetail`).
 */
export function subrecordDescriptor<T extends NetsuiteCurrentRecord> (ctor: new (rec: record.Record) => T) {
   return function (target: any, propertyKey: string): any {
      return {
         enumerable: true,
         // sublist is read only for now - if we have a use case where this should be assigned then tackle it
         get: function (this: SublistLine) {
            return new ctor(this.getSubRecord(propertyKey))
         }
      }
   }
}

/**
 * parses a property name from a declaration (supporting 'Text' suffix per our convention)
 * @param propertyKey original property name as declared on class
 * @returns pair consisting of a flag indicating this field wants 'text' behavior and the actual ns field name (with
 * Text suffix removed)
 */
function parseProp (propertyKey: string): [boolean, string] {
   let endsWithText = propertyKey.slice(-4) === 'Text'
   return [endsWithText, endsWithText ? propertyKey.replace('Text', '') : propertyKey]
}

/**
 * creates a sublist whose lines are of type T
 */
export class Sublist<T extends SublistLine> {
   nsrecord: record.Record
   // enforce 'array like' interaction through indexers
   [i: number]: T

   /**
    * array-like length property (linecount)
    * @returns {number} number of lines in this list
    */
   get length () {
      return this.nsrecord.getLineCount({ sublistId: this.sublistId })
   }

   /**
    * adds a new line to this sublist at the given line number.
    * @param ignoreRecalc set true to avoid line recalc
    * @param insertAt optionally set line # insertion point - defaults to insert at the end of the sublist. If
    * in dynamic mode this parameter is ignored (dynamic mode uses selectNewLine()). The insertion point
    * should be <= length of the list
    */
   addLine (ignoreRecalc = true, insertAt: number = this.length): T {
      log.info('inserting line', `sublist: ${this.sublistId} insert at line:${insertAt}`)
      if (insertAt > this.length) {
         throw error.create({
            message:`insertion index (${insertAt}) cannot be greater than sublist length (${this.length})`,
            name:'NFT_INSERT_LINE_OUT_OF_BOUNDS'
         })
      }
      if (this.nsrecord.isDynamic) this.nsrecord.selectNewLine({ sublistId: this.sublistId })
      else {
         this.nsrecord.insertLine({
            sublistId: this.sublistId,
            line: insertAt,
            ignoreRecalc: ignoreRecalc
         })
         this.rebuildArray()
      }
      log.info('line count after adding', this.length)
      return (this.nsrecord.isDynamic) ? this[this.length] : this[insertAt]
   }

   /**
    * Removes all existing lines of this sublist, leaving effectively an empty array
    * @param ignoreRecalc passed through to nsrecord.removeLine (ignores firing recalc event as each line is removed )
    */
   removeAllLines (ignoreRecalc: boolean = true) {
      while (this.length > 0) {
         const lineNum = this.length - 1
         this.removeLine(lineNum, ignoreRecalc)
         log.debug('removed line', lineNum)
      }
      this.rebuildArray()
      return this
   }

   /**
    * commits the currently selected line on this sublist. When adding new lines in standard mode
    * you don't need to call this method
    */
   commitLine () {
      if (!this.nsrecord.isDynamic) {
         throw error.create({
            message:'do not call commitLine() on records in standard mode, commitLine() is only needed in dynamic mode',
            name:'NFT_COMMITLINE_BUT_NOT_DYNAMIC_MODE_RECORD'
         })
      }
      log.info('committing line', `sublist: ${this.sublistId}`)
      this.nsrecord.commitLine({ sublistId: this.sublistId })
      this.rebuildArray()
   }

   /**
    * Selects the given line on this sublist
    * @param line line number
    */
   selectLine (line: number) {
      log.debug('selecting line', line)
      this.nsrecord.selectLine({ sublistId: this.sublistId, line: line })
   }

   /**
    * Defines a descriptor for nsrecord so as to prevent it from being enumerable. Conceptually only the
    * field properties defined on derived classes should be seen when enumerating
    * @param value
    */
   private makeRecordProp (value) {
      Object.defineProperty(this, 'nsrecord', {
         value: value,
         enumerable: false
      })
   }

   /**
    * Constructs a new array-like representation of a NS sublist.
    * @param sublistLineType the type (should be a class extending `SublistLine`) to represent individual rows
    * of this sublist
    * @param rec the NS native`record.Record` instance to manipulate
    * @param sublistId name of the sublist we're representing
    */
   constructor (readonly sublistLineType: { new (sublistId: string, nsrec: record.Record, line: number): T },
                rec: record.Record, public sublistId: string) {
      this.sublistLineType = sublistLineType
      this.makeRecordProp(rec)
      this.rebuildArray()
   }

   /**
    * removes a line at the given index. Note this causes the array to rebuild.
    * @param line
    * @param ignoreRecalc
    */
   removeLine (line: number, ignoreRecalc = false) {
      this.nsrecord.removeLine({ line: line, sublistId: this.sublistId, ignoreRecalc: ignoreRecalc })
      this.rebuildArray()
   }

   /**
    * Gets the NetSuite metadata for the given sublist field. Useful when you want to do things like disable
    * a sublist field or other operations on the field itself (rather than the field value/text)
    * Note: this uses the first sublist line (0) when retrieving field data
    * @param field name of the desired sublist field
    */
   getField (field: NonFunctionPropertyNames<T>) {
      return this.nsrecord.getSublistField({
         fieldId: field as string,
         sublistId: this.sublistId,
         line: 0
      })
   }

   /**
    * upserts the indexed props (array-like structure) This is called once at construction, but also
    * as needed when a user dynamically inserts rows.
    */
   protected rebuildArray () {
      log.info('deleting existing numeric properties')
      Object.getOwnPropertyNames(this).filter(key => !isNaN(+key)).forEach(key => delete this[key], this)
      log.debug('sublist after deleting properties', this)
      log.info('building sublist', `type:${this.sublistId}, linecount:${this.length}`)
      // create a sublist line indexed property of type T for each member of the underlying sublist
      for (let i = 0; i < this.length; i++) {
         this[i] = new this.sublistLineType(this.sublistId, this.nsrecord, i)
      }
      // if dynamic mode we always have an additional ready-to-fill out line at the end of the list,
      // but note that `this.length` does not include this line because it's not committed. This mirrors the
      // actual behavior NetSuite shows - e.g. in dynamic mode, native getLineCount() returns zero until the first
      // line is actually committed.
      // This allows normal NSDAL object access to sublist properties even on the uncommitted line currently
      // being edited. This is most useful in client scripts e.g. on `fieldChanged()` of a fresh line.
      if (this.nsrecord.isDynamic) {
         Object.defineProperty(this, this.length, {
            value: new this.sublistLineType(this.sublistId, this.nsrecord, this.length),
            // mark this phantom line as non-enumerable so toJSON() doesn't try to render it as it's not really there
            enumerable: false,
            writable: true,
            configurable: true // so prop can be deleted
         })
      }
   }
}

/**
 * Base class for a sublist line. Encapsulates - 1. which sublist are we working with, 2. on which record
 * 3. which line on the sublist does this instance represent
 *
 * You extend from this class (or a pre-existing subclass) to define the fields to surface on the NetSuite sublist.
 * Class property names should be the netsuite field internal id. By default these fields surface the `value` of the field
 * To `get/setText()` instead, append the field name with `Text`.
 *
 * @example Surfaces the `price` field both as _value_ (numeric internal id) and _text_
 *       class SalesOrderItemSublist extends SublistLine {
 *         @SublistFieldType.select
 *         price:number
 *
 *         @SublistFieldType.freeformtext
 *         priceText:string
 *       }
 */
export abstract class SublistLine {

   /**
    * Defines a descriptor for nsrecord so as to prevent it from being enumerable. Conceptually only the
    * field properties defined on derived classes should be seen when enumerating
    * @param value
    */
   protected makeRecordProp (value) {
      Object.defineProperty(this, 'nsrecord', {
         value: value,
         enumerable: false
      })
   }

   nsrecord: record.Record
   ignoreFieldChange = false
   /**
    * Note that the sublistId and _line are used by the Sublist decorators to actually implement functionality, even
    * though they are not referenced directly in this class. We mark them as not-enumerable because they are an implementation
    * detail and need not be exposed to the typical consumer
    * @param {string} sublistId netsuite internal id (string name) of the sublist
    * @param {Record} rec netsuite record on which the sublist exists
    * @param {number} _line the line number needed in decorator calls to underlying sublist. That's also why this is
    * public - so that the decorators have access to it.
    */
   constructor (public sublistId: string, rec: record.Record, public _line: number) {
      this.makeRecordProp(rec)
      Object.defineProperty(this, 'sublistId', { enumerable: false })
      Object.defineProperty(this, '_line', { enumerable: false })
   }

   /**
    * Gets the subrecord for the given field name, handling both dynamic and standard mode.
    *
    * Normally you don't call this method directly. Instead, simply define a property
    * on your sublist class matching the field name for the subrecord and decorate it as a subrecord.
    * e.g.
    * ```
    * @FieldType.subrecord(AddressBase)
    * billingaddress: AddressBase
    * ```
    * @param fieldId the field that points to the subrecord
    */
   getSubRecord (fieldId) {
      if (this.nsrecord.isDynamic) {
         this.nsrecord.selectLine({ sublistId: this.sublistId, line: this._line })
         return this.nsrecord.getCurrentSublistSubrecord({ fieldId: fieldId, sublistId: this.sublistId })
      } else return this.nsrecord.getSublistSubrecord({ fieldId: fieldId, sublistId: this.sublistId, line: this._line })
   }

   // serialize lines to an array with properties shown
   toJSON () { // surface inherited properties on a new object so JSON.stringify() sees them all
      const result: any = {}
      for (const key in this) { // noinspection JSUnfilteredForInLoop
         result[key] = this[key]
      }
      return result
   }
}

