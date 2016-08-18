/**
 * NetSuite generic Transaction record
 */

import {FieldType} from './EC_nsdal'
import * as record from 'N/record'
import {TransactionBase} from "./Transaction";

/**
 * Customer Payment Record
 */
export class CustomerPaymentBase extends TransactionBase {
   
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


export class ApplyList  {
    @FieldType.currency
    amount:number
   
   @FieldType.checkbox
   apply:boolean
   
   @FieldType.freeformtext
   refnum:string
}
