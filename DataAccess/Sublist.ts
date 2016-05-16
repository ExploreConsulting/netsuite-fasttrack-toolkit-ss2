/**
 * Represents Sublists and their field access. Sublists use a different api than body fields in NS.
 * Note that in NFT-SS1.0 we collapsed the sublist and body descriptors into a common codebase. Decided not to do 
 * that here (yet) in interest of code clarity. Also the fact that it's only two copies (usually use the rule of
 * three's for DRY).
 */


///<amd-dependency path='../lodash' name="_">
///<amd-dependency path='../moment' name="moment">

import * as record from 'N/record'
import * as format from 'N/format'
import * as LogManager from '../EC_Logger'


var log = LogManager.getLogger('nsdal')

export namespace SublistFieldType {
   export var freeformtext = defaultSublistDescriptor
   export var longtext = defaultSublistDescriptor
   export var textarea = defaultSublistDescriptor
   export var checkbox = defaultSublistDescriptor
   export var multiselect = defaultSublistDescriptor
   export var select = defaultSublistDescriptor
   export var email = defaultSublistDescriptor
   export var datetime = _.partial(dateTimeSublistDescriptor, format.Type.DATETIME)
   export var date = _.partial(dateTimeSublistDescriptor, format.Type.DATE)
   export var integernumber = defaultSublistDescriptor
   export var decimalnumber = defaultSublistDescriptor
   export var currency = defaultSublistDescriptor
   export var hyperlink = defaultSublistDescriptor
   export var image = defaultSublistDescriptor
}


/**
 * Generic property descriptor with basic default algorithm that exposes the field value directly with no
 * other processing.
 * @returns an object property descriptor to be used
 * with Object.defineProperty
 */
export function defaultSublistDescriptor(target:any, propertyKey:string):any {
   log.debug('creating default descriptor', `field: ${propertyKey}`)
   return {
      get: function () {
         return this.nsrecord.getSublistValue({
            sublistId: this.sublistId,
            line: this.line,
            fieldId: propertyKey
         })
      },
      set: function (value) {
         // ignore undefined's
         if (value !== undefined) this.nsrecord.setSublistValue({
            sublistId: this.sublistId,
            line: this.line,
            fieldId: propertyKey,
            value: value
         })
         else log.debug(`ignoring field [${propertyKey}]`, 'field value is undefined')
      },
      enumerable: true //default is false
   };
}

/**
 * Generic sublist property descriptor with algorithm NS checkbox to native boolean.
 */
// TODO: confirm that sublists use true booleans in SS2.0
// export function checkboxSublistDescriptor(target:any, propertyKey:string):any {
//    log.debug('creating property', `${propertyKey} as boolean`)
//    return {
//       get: function () {
//          return this.nsrecord.getSublistValue({
//                sublistId: this.sublistId,
//                line: this.line,
//                fieldId:propertyKey}) === 'T';
//       },
//       set: function (value) {
//          // allow null to flow through, but ignore undefined's
//          if (value !== undefined) this.nsrecord.setSublistValue({
//             sublistId: this.sublistId,
//             fieldId: propertyKey,
//             value: value === true ? 'T' : 'F',
//             line: this.line
//          })
//       },
//       enumerable: true // default is false - this lets you JSON.stringify() this prop
//    }
// }
/**
 * Generic sublist property descriptor with algorithm for date handling. Surfaces dates as moment() instances
 * note: does not take into account timezone
 * @param {string} formatType the NS field type (e.g. 'date')
 * @param target
 * @param propertyKey
 * @returns  an object property descriptor to be used
 * with decorators
 */
export function dateTimeSublistDescriptor(formatType: format.Type, target:any, propertyKey:string) :any {
   return {
      get: function () {
         var value = this.nsrecord.getSublistValue({
            sublistId: this.sublistId,
            line: this.line,
            fieldId: propertyKey})
         log.debug(`transforming field format type [${formatType}]`, `with value ${value}`)
         // ensure we don't return moments for null, undefined, etc.
         return value ? moment(format.parse({type: formatType, value: value})) : value
      },
      set: function (value) {
         // allow null to flow through, but ignore undefined's
         if (value !== undefined)
            this.nsrecord.setSublistValue({
               sublistId: this.sublistId,
               line:this.line,
               fieldId: propertyKey,
               value: value ? format.format({type: formatType, value: moment(value).toDate()}) : null
            })
         else log.debug(`not setting ${propertyKey} field`, 'value was undefined')
      },
      enumerable: true //default is false
   };
}



/**
 * creates a sublist whose lines are of type T
 */
export class Sublist<T extends SublistLine> {
   nsrecord:record.Record
   // enforce 'array like' interaction through indexers
   [i:number]:T

   /**
    * array-like length property (linecount)
    * @returns {number} number of lines in this list
    */
   get length() {
      return this.nsrecord.getLineCount({sublistId: this.sublistId})
   }

   /**
    * adds a new line to this sublist
    * @param ignoreRecalc
    * @returns {T}
    */
   addLine(ignoreRecalc = true):T {
      log.debug('inserting line', `sublist: ${this.sublistId} insert at line:${this.length}`)
      let insertAt = this.length
      this[insertAt] = new this.sublistLineType(this.sublistId,this.nsrecord,insertAt)
      this.nsrecord.insertLine({
         sublistId: this.sublistId,
         line: insertAt,
         ignoreRecalc: ignoreRecalc
      })
      log.debug('line count after adding', this.length)
      return this[insertAt]
   }

   /**
    * commits the currently selected line on this sublist. When adding new lines you don't need to call this method
    */
   commitLine() {
      log.debug('committing line',`sublist: ${this.sublistId}` )
      this.nsrecord.commitLine({ sublistId:this.sublistId })
   }

   selectLine(line:number) {
      log.debug('selecting line', line)
      this.nsrecord.selectLine({sublistId: this.sublistId, line: line})
   }

   /**
    * Defines a descriptor for nsrecord so as to prevent it from being enumerable. Conceptually only the
    * field properties defined on derived classes should be seen when enumerating
    * @param value
    */
   private makeRecordProp(value) {
      Object.defineProperty(this, 'nsrecord', {
         value: value,
         enumerable: false
      })
   }

   constructor(private sublistLineType: { new(sublistId:string, nsrec:record.Record, line:number): T },
               rec:record.Record, public sublistId:string) {
      this.makeRecordProp(rec)
      log.debug('creating sublist', `type:${sublistId}, linecount:${this.length}`)
      // create properties for all keys in our target type T
      for (let i = 0; i < this.length; i++ ){
         this[i] = new sublistLineType(this.sublistId, this.nsrecord, i)
      }
   }

}

/**
 * contains minimim requirements for a sublist line - 1. which sublist are we working with, 2. on which record
 * 3. which line on the sublist does this instance represent
 */
export abstract class SublistLine {

   /**
    * Defines a descriptor for nsrecord so as to prevent it from being enumerable. Conceptually only the
    * field properties defined on derived classes should be seen when enumerating
    * @param value
    */
   private makeRecordProp(value) {
      Object.defineProperty(this, 'nsrecord', {
         value: value,
         enumerable: false
      })
   }

   nsrecord:record.Record

   constructor(public sublistId:string, rec:record.Record, public line:number){
      this.makeRecordProp(rec)
   }
}

