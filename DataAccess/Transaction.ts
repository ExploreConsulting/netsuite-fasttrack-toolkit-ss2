/**
 * NetSuite generic Transaction record
 */

import {FieldType, NetsuiteRecord} from './Record'

/**
 * Fields common to all transactions in NS
 */
export abstract class TransactionBase extends NetsuiteRecord {
   @FieldType.freeformtext
   tranid:string
   
   @FieldType.date
   trandate:moment.Moment
   
   @FieldType.select
   department:number

   @FieldType.select
   subsidiary:number

   @FieldType.freeformtext
   email:string

   @FieldType.select
   entity:number
   
}

