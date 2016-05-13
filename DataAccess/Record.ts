/**
 * Defines the nsdal handling for record body fields.
 * 
 */

///<amd-dependency path='../lodash' name="_">
///<amd-dependency path='../moment' name="moment">

import * as record from 'N/record'
import * as format from 'N/format'
import * as LogManager from '../EC_Logger'

var log = LogManager.getLogger('nsdal')

export abstract class NetsuiteRecord {

   /**
    * Netsuite internal id of this record
    * @type {number}
    */
   get id() { return this.nsrecord.id }

   /**
    * The netsuite record type (constant string) - this is declared here and overriden in derived classes
    */
   public static recordType: record.Type | string

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
export function defaultDescriptor(target:any, propertyKey:string):any {
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
export function checkboxDescriptor(target:any, propertyKey:string):any {
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
         log.debug(`transforming field [${propertyKey}] of type [${formatType}]`,`with value ${value}`)
         // ensure we don't return moments for null, undefined, etc.
         return value ? moment(format.parse({type:formatType, value:value})) : value
      },
      set: function (value) {
         // allow null to flow through, but ignore undefined's
         if (value !== undefined) {
            var asDate = value ? moment(value).toDate() : null
            log.debug(`setting field [${propertyKey}:${formatType}]`, `to date [${asDate}]`)
            this.nsrecord.setValue({fieldId: propertyKey, value: asDate})
         }
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
   export var address = defaultDescriptor
   export var checkbox = checkboxDescriptor
   export var currency = defaultDescriptor
   export var date = _.partial(dateTimeDescriptor, format.Type.DATE)
   export var datetime = _.partial(dateTimeDescriptor, format.Type.DATETIME)
   export var decimalnumber = defaultDescriptor
   export var email = defaultDescriptor
   export var freeformtext = defaultDescriptor
   export var float = defaultDescriptor
   export var hyperlink = defaultDescriptor
   export var image = defaultDescriptor
   export var integernumber = defaultDescriptor
   export var longtext = defaultDescriptor
   export var multiselect = defaultDescriptor
   export var select = defaultDescriptor
   export var textarea = defaultDescriptor
}
