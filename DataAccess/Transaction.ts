/**
 * NetSuite generic Transaction record
 */

import {FieldType, NetsuiteRecord} from './Record'

/**
 * Fields common to all transactions in NS
 */
export abstract class TransactionBase extends NetsuiteRecord {

   @FieldType.select
   customform:number

   @FieldType.select
   department:number

   @FieldType.freeformtext
   email:string

   @FieldType.select
   entity:number

   @FieldType.freeformtext
   externalid:string

   @FieldType.select
   location:number

   @FieldType.freeformtext
   memo:string

   @FieldType.freeformtext
   otherrefnum:string

   @FieldType.select
   postingperiod:number

   @FieldType.select
   salesrep:number

   @FieldType.freeformtext
   status:number

   @FieldType.freeformtext
   statusRef:number

   @FieldType.select
   subsidiary:number

   @FieldType.freeformtext
   tranid:string

   @FieldType.date
   trandate:moment.Moment | string

}

