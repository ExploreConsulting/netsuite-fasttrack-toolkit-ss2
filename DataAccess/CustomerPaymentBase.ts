/**
 * NetSuite generic Transaction record
 */

import {SublistLine, SublistFieldType} from './Sublist'
import * as record from 'N/record'
import {TransactionBase} from "./Transaction";
import {FieldType} from './Record'

/**
 * Customer Payment Record
 */
export class Base extends TransactionBase {

   static recordType = record.Type.CUSTOMER_PAYMENT

   @FieldType.select
   customer:number

   @FieldType.freeformtext
   checknum:string

   @FieldType.currency
   payment:number

   @FieldType.select
   paymentmethod:number

   @FieldType.checkbox
   autoapply:boolean
}


export class ApplySublist extends SublistLine {
   @SublistFieldType.currency
   amount:number

   @SublistFieldType.checkbox
   apply:boolean

   @SublistFieldType.freeformtext
   refnum:string
}
