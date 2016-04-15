/**
 * Copyright Explore Consulting, LLC
 *
 * NSDAL is NetSuite Data Access Layer and provides an improved interface to netsuite records.
 */

///<amd-dependency path='./lodash' name="_">

///<reference path="typings/browser.d.ts"/>


import * as record from 'N/record'
import * as search from 'N/search'
import * as format from 'N/format'


import * as LogManager from './EC_Logger'

export var log = LogManager.getLogger('nsdal')

class NetsuiteRecord {

   nsrecord:record.Record

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

   
   constructor(type:string, rec?: number | record.Record, isDynamic?:boolean, defaultValue?:Object) {
      if (_.isObject(rec)){
         var r = <record.Record>rec
         log.debug('using existing record', `type:${r.type}, id:${r.id}`)
         this.makeRecordProp(rec)
      }
      else if (!rec) {
         log.debug('creating new record', `type:${type}`)
         this.makeRecordProp(record.create({type: type}))
      }
      else {
         log.debug('loading existing record', `type:${type}, id:${rec}`)
         this.makeRecordProp(record.load({
            type: type,
            id: <number>rec,
            isDynamic: isDynamic || false,
            defaultValue: defaultValue
         }))
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
 * Add this decorator to an entity property to indicate it as NetSuite field type 'free form text'
 */
export var freeformtext = defaultDescriptor


export class CustomerBase extends NetsuiteRecord {
   static recordType = 'customer'

   @freeformtext
   phone:string

   constructor(rec?:number | record.Record, isDynamic?:boolean, defaultValue?:Object) {
      super(CustomerBase.recordType, rec, isDynamic, defaultValue)
   }
}
