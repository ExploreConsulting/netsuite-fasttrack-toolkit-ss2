/**
 * Represents Sublists and their field access. Sublists use a different api than body fields in NS.
 * Note that in NFT-SS1.0 we collapsed the sublist and body descriptors into a common codebase. Decided not to do
 * that here (yet) in interest of code clarity. Also the fact that it's only two copies (usually use the rule of
 * three's for DRY).
 */

import * as record from 'N/record'
import * as format from 'N/format'
import * as LogManager from '../EC_Logger'
import * as moment from '../moment'
import * as _ from '../lodash'

const log = LogManager.getLogger('nsdal')

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
   export var currency = defaultSublistDescriptor//_.partial(formattedSublistDescriptor, format.Type.CURRENCY)
   export var date = _.partial(dateTimeSublistDescriptor, format.Type.DATE)
   export var datetime = _.partial(dateTimeSublistDescriptor, format.Type.DATETIME)
   export var email = defaultSublistDescriptor
   export var freeformtext = defaultSublistDescriptor
   export var decimalnumber = defaultSublistDescriptor// _.partial(formattedSublistDescriptor, format.Type.FLOAT)
   export var float = defaultSublistDescriptor //_.partial(formattedSublistDescriptor, format.Type.FLOAT)
   export var hyperlink = defaultSublistDescriptor
   export var image = defaultSublistDescriptor
   export var inlinehtml = defaultSublistDescriptor
   export var integernumber = defaultSublistDescriptor// _.partial(formattedSublistDescriptor, format.Type.INTEGER)
   export var longtext = defaultSublistDescriptor
   export var multiselect = defaultSublistDescriptor
   export var percent = _.partial(formattedSublistDescriptor, format.Type.PERCENT)
   export var select = defaultSublistDescriptor
   export var textarea = defaultSublistDescriptor
}

/**
 * Generic property descriptor with basic default algorithm that exposes the field value directly with no
 * other processing.
 * @returns an object property descriptor to be used
 * with Object.defineProperty
 */
export function defaultSublistDescriptor (target: any, propertyKey: string): any {
   log.debug('creating default descriptor', `field: ${propertyKey}`)
   return {
      get: function (this: SublistLine) {
         const options = {
            sublistId: this.sublistId,
            line: this._line,
            fieldId: propertyKey,
         }
         log.debug('getting sublist value', options)
         return this.nsrecord.getSublistValue(options)
      },
      set: function (this: SublistLine, value) {
         // ignore undefined's
         if (value !== undefined) this.nsrecord.setSublistValue({
            sublistId: this.sublistId,
            line: this._line,
            fieldId: propertyKey,
            value: value
         })
         else log.debug(`ignoring field [${propertyKey}]`, 'field value is undefined')
      },
      enumerable: true //default is false
   }
}

/**
 * Generic sublist property descriptor with algorithm for date handling. Surfaces dates as moment() instances
 * note: does not take into account timezone
 * @param {string} formatType the NS field type (e.g. 'date')
 * @param target
 * @param propertyKey
 * @returns  an object property descriptor to be used
 * with decorators
 */
export function dateTimeSublistDescriptor (formatType: format.Type, target: any, propertyKey: string): any {
   return {
      get: function (this: SublistLine) {
         const value = this.nsrecord.getSublistValue({
            sublistId: this.sublistId,
            line: this._line,
            fieldId: propertyKey
         }) as any
         log.debug(`transforming field format type [${formatType}]`, `with value ${value}`)
         // ensure we don't return moments for null, undefined, etc.
         return value ? moment(format.parse({ type: formatType, value: value })) : value
      },
      set: function (this: SublistLine, value) {
         // allow null to flow through, but ignore undefined's
         if (value !== undefined) {
            let asDate
            // the value needs to either be a moment already, or a moment compatible string else null
            if (moment.isMoment(value)) asDate = value.toDate()
            else asDate = value ? moment(value).toDate() : null
            this.nsrecord.setSublistValue({
               sublistId: this.sublistId,
               line: this._line,
               fieldId: propertyKey,
               value: asDate
            })
         } else log.debug(`not setting sublist ${propertyKey} field`, 'value was undefined')
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
         const value = this.nsrecord.getSublistValue({
            sublistId: this.sublistId,
            line: this._line,
            fieldId: propertyKey,
         }) as string // to satisfy typing for format.parse(value) below.
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
            if (value === null) this.nsrecord.setSublistValue({
               sublistId: this.sublistId,
               line: this._line,
               fieldId: propertyKey,
               value: null
            })
            else this.nsrecord.setSublistValue({
               sublistId: this.sublistId,
               line: this._line,
               fieldId: propertyKey,
               value: formattedValue
            })
         } else log.info(`not setting sublist ${propertyKey} field`, 'value was undefined')
      },
      enumerable: true //default is false
   }
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
    * adds a new line to this sublist
    * @param ignoreRecalc
    */
   addLine (ignoreRecalc = true): T {
      log.debug('inserting line', `sublist: ${this.sublistId} insert at line:${this.length}`)
      let insertAt = this.length
      this[insertAt] = new this.sublistLineType(this.sublistId, this.nsrecord, insertAt)
      this.nsrecord.insertLine({
         sublistId: this.sublistId,
         line: insertAt,
         ignoreRecalc: ignoreRecalc
      })
      log.debug('line count after adding', this.length)
      return this[insertAt]
   }

   /**
    * Removes all existing lines of this sublist, leaving effectively an empty array
    * @param ignoreRecalc passed through to nsrecord.removeLine (ignores firing recalc event as each line is removed )
    */
   removeAllLines (ignoreRecalc:boolean = true) {
      while (this.length > 0) {
         let line = {
            sublistId:this.sublistId,
            ignoreRecalc:ignoreRecalc,
            line:this.length - 1
         }
         this.nsrecord.removeLine(line)
         log.debug('removed line', line)
      }
      return this
   }


   /**
    * commits the currently selected line on this sublist. When adding new lines you don't need to call this method
    */
   commitLine () {
      log.debug('committing line', `sublist: ${this.sublistId}`)
      this.nsrecord.commitLine({ sublistId: this.sublistId })
   }

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

   constructor (public readonly sublistLineType: { new (sublistId: string, nsrec: record.Record, line: number): T },
                rec: record.Record, public sublistId: string) {
      this.sublistLineType = sublistLineType
      this.makeRecordProp(rec)
      log.debug('creating sublist', `type:${sublistId}, linecount:${this.length}`)
      // create a sublist line indexed property of type T for each member of the underlying sublist
      for (let i = 0; i < this.length; i++) {
         this[i] = new sublistLineType(this.sublistId, this.nsrecord, i)
      }
   }

   // serialize lines to an array with properties shown
   toJSON () { return _.map(this, _.toPlainObject) }
}

/**
 * contains minimum requirements for a sublist line - 1. which sublist are we working with, 2. on which record
 * 3. which line on the sublist does this instance represent
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
}

