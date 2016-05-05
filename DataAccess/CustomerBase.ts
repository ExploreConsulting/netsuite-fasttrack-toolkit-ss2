/**
 * NS Base customer record - contains definitions for most of the built in fields
 */

import {FieldType, NetsuiteRecord} from './Record'
import * as record from 'N/record'


export class Base extends NetsuiteRecord {
   static recordType = record.Type.CUSTOMER

   @FieldType.freeformtext
   accountnumber:string

   @FieldType.select
   category:number

   @FieldType.textarea
   comments:string

   @FieldType.freeformtext
   companyname:string

   @FieldType.select
   customform:number

   @FieldType.datetime
   datecreated:moment.Moment

   @FieldType.email
   email:string

   @FieldType.freeformtext
   entityid:string

   @FieldType.select
   entitystatus:number

   @FieldType.freeformtext
   externalid:string

   @FieldType.freeformtext
   fax:string

   @FieldType.freeformtext
   firstname:string

   @FieldType.checkbox
   isinactive:boolean

   @FieldType.checkbox
   isperson:boolean

   @FieldType.datetime
   lastmodifieddate:moment.Moment

   @FieldType.freeformtext
   lastname:string


   @FieldType.select
   parent:number

   @FieldType.freeformtext
   phone:string

   @FieldType.select
   salesrep:number

   @FieldType.select
   subsidiary:number

   @FieldType.checkbox
   taxable:boolean

   @FieldType.select
   terms:number
}
