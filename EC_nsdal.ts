/**
 * Copyright Explore Consulting, LLC
 *
 * NSDAL is NetSuite Data Access Layer and provides an improved interface to netsuite records.
 */

import * as record from 'N/record'
import * as search from 'N/search'
import * as format from 'N/format'


import * as LogManager from './EC_Logger'

import {Record} from "N/record"

var log = LogManager.getLogger('nsdal')

class NetsuiteRecord {

   recordType:string
   nsrecord:record.Record

   /**
    * Loads a strongly typed record
    * @param id
    */
   loadObject(id:number, isDynamic?:boolean, defaultValue?:Object): this {
      log.debug(`loading record type ${this.recordType}`, `customer ${id}`)
      Object.defineProperty(this,'nsrecord', {
         value: record.load({type: this.recordType, id: id, isDynamic: isDynamic, defaultValue: defaultValue}),
         enumerable:false
      })
      return this
   }

}

export namespace nsdal {

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
            else log.debug('ignoring', 'field value is undefined')
         },
         enumerable: true //default is false
      };
   }

   /**
    * Add this decorator to an entity property to indicate it as NetSuite field type 'free form text'
     */
    export var freeformtext = defaultDescriptor
}


export class CustomerBase extends NetsuiteRecord {
   recordType = 'customer'

   @nsdal.freeformtext
   phone:string
}
