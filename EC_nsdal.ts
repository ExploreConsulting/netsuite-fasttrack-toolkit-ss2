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

abstract class NetsuiteRecord {

   private type:string
   protected _nsrecord:record.Record
   @nsdal.freeformtext
   id:number

   constructor(id:number){
      this.id = id;
    
   }
}


export class Customer {
   @nsdal.freeformtext
   phone:string = undefined
} 

export class nsdal<T> extends Record {

   /**
    * Generic property descriptor with basic default algorithm that exposes the field value directly with no
    * other processing.
    * @returns an object property descriptor to be used
    * with Object.defineProperty
    */
   private static defaultDescriptor(target:any, propertyKey:string) :any {
      return {
         get: function () {
            return this.getValue({fieldId: propertyKey})
         },
         set: function (value) {
            // ignore undefined's
            if (value !== undefined) this.setValue({fieldId: propertyKey, value: value})
            else log.debug('ignoring', 'field value is undefined')
         },
         enumerable: true //default is false
      };
   }

   static freeformtext = nsdal.defaultDescriptor
   static longtext = nsdal.defaultDescriptor
   static textarea = nsdal.defaultDescriptor

   static load<T>() : T


}

