/**
 * NS Base subsidiary record - contains definitions built in fields
 */

import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'
import { SublistFieldType, SublistLine } from './Sublist'

export class SubsidiaryBase extends NetsuiteRecord {
   static recordType() { return record.Type.SUBSIDIARY }

   @FieldType.freeformtext
   addr1:string
   
   @FieldType.freeformtext
   addr2:string
   
   @FieldType.freeformtext
   addr3:string
   
   @FieldType.freeformtext
   
   @FieldType.select
   currency:number

   @FieldType.email
   email:string

   @FieldType.freeformtext
   externalid:string

   @FieldType.freeformtext
   fax:string

   @FieldType.checkbox
   iselimination:boolean

   @FieldType.checkbox
   isinactive:boolean

   @FieldType.freeformtext
   legalname:string

   @FieldType.select
   logo:number

   @FieldType.freeformtext
   name:string
   
   @FieldType.checkbox
   override:boolean
   
   @FieldType.select
   parent:number
}

export class AccountBookDetail extends SublistLine {
   @SublistFieldType.select
   accountingbook:number

   @SublistFieldType.select
   currency:number
}
