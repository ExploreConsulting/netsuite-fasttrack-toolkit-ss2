/**
 * NetSuite generic Transaction record
 */

import {FieldType, NetsuiteRecord} from './Record'
import * as moment from "../moment"

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

   /**
    * Note unlike other identifiers in NetSuite, this one is a string (e.g. 'Partially Fulfilled')
    */
   @FieldType.freeformtext
   status:string

   /**
    * Note unlike other references in NetSuite, this one is a set of undocumented string keys (e.g. 'partiallyFulfilled')
    * The possible statusref values differ for each transaction type
    */
   @FieldType.freeformtext
   statusRef:string

   @FieldType.select
   subsidiary:number

   @FieldType.freeformtext
   tranid:string

   @FieldType.date
   trandate:moment.Moment | string

}

