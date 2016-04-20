/**
 * Copyright Explore Consulting, LLC
 *
 * NSDAL is NetSuite Data Access Layer and provides an improved interface to netsuite records.
 * @NApiVersion 2.x
 */

///<amd-dependency path='../lodash' name="_">
///<amd-dependency path='../moment' name="moment">

import * as record from 'N/record'
import * as format from 'N/format'

import * as LogManager from '../EC_Logger'

export var log = LogManager.getLogger('nsdal')

export abstract class NetsuiteRecord {
   /**
    * The netsuite record type (constant string) - this is declared here and overriden in derived classes
    */
   public static recordType: record.Type

    /**
     * The underlying netsuite 'record' object
     */
   nsrecord:record.Record

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

    /**
     * Persists this record to the NS database
     * @param enableSourcing
     * @param ignoreMandatoryFields
     * @returns {number}
     */
   save(enableSourcing?:boolean, ignoreMandatoryFields?:boolean) {
      return this.nsrecord.save({
         enableSourcing: enableSourcing,
         ignoreMandatoryFields: ignoreMandatoryFields
      })
   }

   constructor(rec?: number | record.Record, isDynamic?:boolean, defaultValue?:Object) {
      // since the context of this.constructor is the derived class we're instantiating, using the line below we can
      // pull the 'static' recordType from the derived class and remove the need for derived classes to
      // define a constructor to pass the record type to super()
      var type = Object.getPrototypeOf(this).constructor.recordType
      if (typeof rec === "number"){
         log.debug('loading existing record', `type:${type}, id:${rec}`)
         this.makeRecordProp(record.load({
            type: type,
            id: rec,
            isDynamic: isDynamic || false,
            defaultValue: defaultValue
         }))
      }
      else if (!rec) {
         log.debug('creating new record', `type:${type}`)
         this.makeRecordProp(record.create({type: type}))
      }
      else {
         log.debug('using existing record', `type:${rec.type}, id:${rec.id}`)
         this.makeRecordProp(rec)
      }
   }
}

/**
 * Generic property descriptor with basic default algorithm that exposes the field value directly with no
 * other processing.
 * @returns an object property descriptor to be used
 * with Object.defineProperty
 */
function defaultDescriptor(target:any, propertyKey:string):any {
   return {
      get: function () {
         return this.nsrecord.getValue({fieldId: propertyKey})
      },
      set: function (value) {
         // ignore undefined's
         if (value !== undefined) this.nsrecord.setValue({fieldId: propertyKey, value: value})
         else log.debug(`ignoring field [${propertyKey}]`, 'field value is undefined')
      },
      enumerable: true //default is false
   };
}

/**
 * Generic property descriptor with algorithm NS checkbox to native boolean.
 */
function checkboxDescriptor(target:any, propertyKey:string):any {
   log.debug('creating property', `${propertyKey} as boolean`)
   return {
      get: function () {
         return this.nsrecord.getValue({fieldId:propertyKey}) === 'T';
      },
      set: function (value) {
         // allow null to flow through, but ignore undefined's
         if (value !== undefined) this.nsrecord.setValue({
            fieldId: propertyKey,
            value: value === true ? 'T' : 'F'
         })
      },
      enumerable: true // default is false - this lets you JSON.stringify() this prop
   }
}
/**
 * Generic property descriptor with algorithm for date handling. Surfaces dates as moment() instances
 * note: does not take into account timezone 
 * @param {string} formatType the NS field type (e.g. 'date')
 * @param target
 * @param propertyKey
 * @returns  an object property descriptor to be used
 * with decorators
 */
function dateTimeDescriptor(formatType: format.Type, target:any, propertyKey:string) :any {
   return {
      get: function () {
         var value = this.nsrecord.getValue({fieldId:propertyKey})
         log.debug(`transforming field format type [${formatType}]`,`with value ${value}`)
         // ensure we don't return moments for null, undefined, etc.
         return value ? moment(format.parse({type:formatType, value:value})) : value
      },
      set: function (value) {
         // allow null to flow through, but ignore undefined's
         if (value !== undefined)
            this.nsrecord.setValue({ fieldId:propertyKey, value: value ? format.format({
               type:formatType, value:moment(value).toDate()}) : null})
         else log.debug(`not setting ${propertyKey} field`, 'value was undefined')
      },
      enumerable: true //default is false
   };
}
/**
   Netsuite field types - decorate your model properties with these to tie netsuite field types to your 
   model's field type.
 */
export namespace FieldType {
   export var freeformtext = defaultDescriptor
   export var longtext = defaultDescriptor
   export var textarea = defaultDescriptor
   export var checkbox = checkboxDescriptor
   export var multiselect = defaultDescriptor
   export var select = defaultDescriptor
   export var email = defaultDescriptor
   export var datetime = _.partial(dateTimeDescriptor, format.Type.DATETIME)
   export var date = _.partial(dateTimeDescriptor, format.Type.DATE)
   export var integernumber = defaultDescriptor
   export var decimalnumber = defaultDescriptor
   export var currency = defaultDescriptor
   export var hyperlink = defaultDescriptor
   export var image = defaultDescriptor
}

export namespace SublistFieldType {
   export var freeformtext = defaultSublistDescriptor
   export var longtext = defaultSublistDescriptor
   export var textarea = defaultSublistDescriptor
   export var checkbox = checkboxSublistDescriptor
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
function defaultSublistDescriptor(target:any, propertyKey:string):any {
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
function checkboxSublistDescriptor(target:any, propertyKey:string):any {
   log.debug('creating property', `${propertyKey} as boolean`)
   return {
      get: function () {
         return this.nsrecord.getSublistValue({
               sublistId: this.sublistId,
               line: this.line,
               fieldId:propertyKey}) === 'T';
      },
      set: function (value) {
         // allow null to flow through, but ignore undefined's
         if (value !== undefined) this.nsrecord.setSublistValue({
            sublistId: this.sublistId,
            fieldId: propertyKey,
            value: value === true ? 'T' : 'F',
            line: this.line
         })
      },
      enumerable: true // default is false - this lets you JSON.stringify() this prop
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
function dateTimeSublistDescriptor(formatType: format.Type, target:any, propertyKey:string) :any {
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

   // enforce 'array like' interaction through indexers
   [i:number]:T

    /**
     * array-like length property (linecount)
     * @returns {number} number of lines in this list
     */
   get length() {
      return this.rec.getLineCount({sublistId: this.sublistId})
   }

   /**
    * adds a new line to this sublist
    * @param ignoreRecalc
    * @returns {T}
     */
   addLine(ignoreRecalc = true):T {
      log.debug('inserting line', `sublist: ${this.sublistId} insert at line:${this.length}`)
      this.rec.insertLine({
         sublistId: this.sublistId,
         line: this.length,
         ignoreRecalc: ignoreRecalc
      })
      log.debug('line count after adding', this.length)
      return this[this.length]
   }

   /**
    * commits the currently selected line on this sublist. When adding new lines you don't need to call this method
    */
   commitLine() {
      log.debug('committing line',`sublist: ${this.sublistId}` )
      this.rec.commitLine({ sublistId:this.sublistId })
   }

   selectLine(line:number) {
      log.debug('selecting line', line)
      this.rec.selectLine({sublistId: this.sublistId, line: line})
   }

   constructor(sublistLineType: { new(sublistId:string, nsrec:record.Record, line:number): T }, 
               protected rec:record.Record, protected sublistId:string) {
      log.debug('creating sublist', `type:${sublistId}, linecount:${this.length}`)
      // create properties for all keys in our target type T
      for (let i = 0; i < this.length; i++ ){
         this[i] = new sublistLineType(this.sublistId, this.rec, i)
      }
   }
   
}


export abstract class SublistLine {
   constructor(protected sublistId:string, protected nsrec:record.Record, protected line:number){

   }
}

