/**
 * NS Base customer record - contains definitions for most of the built in fields
 */

import {FieldType, NetsuiteRecord} from './Record'
import * as record from 'N/record'
import {SublistLine, SublistFieldType} from './Sublist'


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


export class AddressSublist extends SublistLine {

   @SublistFieldType.freeformtext
   addr1:string

   @SublistFieldType.freeformtext
   addr2:string

   @SublistFieldType.freeformtext
   addr3:string

   @SublistFieldType.freeformtext
   addressee:string

   @SublistFieldType.freeformtext
   attention:string

   @SublistFieldType.freeformtext
   city:string

   @SublistFieldType.select
   country:number

   @SublistFieldType.checkbox
   defaultbilling:boolean

   @SublistFieldType.checkbox
   defaultshipping:boolean

   @SublistFieldType.freeformtext
   label:string

   @SublistFieldType.freeformtext
   phone:string

   @SublistFieldType.freeformtext
   state:string

   @SublistFieldType.freeformtext
   zip:string

}
