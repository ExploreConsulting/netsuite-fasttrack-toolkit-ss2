/**
 * NetSuite generic Entity, meant to be inherited by concrete record types to avoid duplicating effort on fields
 */

import { FieldType, NetsuiteRecord } from './Record'

/**
 * Fields common to all 'entity' records in NS
 */
export abstract class Entity extends NetsuiteRecord {

   @FieldType.freeformtext
   accountnumber: string

   @FieldType.email
   altemail: string

   @FieldType.freeformtext
   altphone: string

   @FieldType.currency
   balance: number

   @FieldType.checkbox
   billpay: boolean

   @FieldType.select
   category: number

   @FieldType.textarea
   comments: string

   @FieldType.freeformtext
   companyname: string

   @FieldType.select
   currency: number

   @FieldType.select
   customform: number

   @FieldType.datetime
   datecreated: Date

   @FieldType.freeformtext
   email: string

   @FieldType.freeformtext
   entityid: string

   @FieldType.select
   entitystatus: number

   @FieldType.freeformtext
   externalid: string

   @FieldType.freeformtext
   fax: string

   @FieldType.freeformtext
   firstname: string

   @FieldType.checkbox
   isinactive: boolean

   @FieldType.checkbox
   isperson: boolean

   @FieldType.datetime
   lastmodifieddate: Date

   @FieldType.select
   language: number

   @FieldType.freeformtext
   lastname: string

   @FieldType.select
   parent: number

   @FieldType.freeformtext
   phone: string

   @FieldType.select
   subsidiary: number

   @FieldType.select
   taxitem: number

   @FieldType.select
   terms: number

}



