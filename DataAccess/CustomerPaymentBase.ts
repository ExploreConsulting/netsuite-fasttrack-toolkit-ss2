/**
 * NetSuite generic Transaction record
 */

import {SublistLine, SublistFieldType} from 'NFT/DataAccess/Sublist'
import * as record from 'N/record'
import {TransactionBase} from "NFT/DataAccess/Transaction";
import {FieldType} from 'NFT/DataAccess/Record'

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
