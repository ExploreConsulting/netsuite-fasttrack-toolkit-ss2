/**
 * Represents a Customer Refund (customerrefund) transaction type in NetSuite
 */


import {FieldType} from './Record'
import * as record from 'N/record'
import {TransactionBase} from "./Transaction"
import {SublistLine, SublistFieldType, Sublist} from './Sublist'
import * as moment from "../moment"

/**
 * The Credits (apply) sublist on Customer Refund transaction
 */
export class ApplySublist extends SublistLine {
   @SublistFieldType.currency
   amount:number

   @SublistFieldType.checkbox
   apply:boolean

   @SublistFieldType.date
   applydate: moment.Moment

   @SublistFieldType.freeformtext
   createdfrom:string

   @SublistFieldType.freeformtext
   doc:string

   @SublistFieldType.currency
   due:number

   @SublistFieldType.date
   duedate:moment.Moment

   @SublistFieldType.freeformtext
   internalid:string

   @SublistFieldType.freeformtext
   line:string

   @SublistFieldType.freeformtext
   refnum:string

   @SublistFieldType.currency
   total:number

   @SublistFieldType.freeformtext
   url:string
}

/**
 * The Customer Refund (customerrefund) transaction in NetSuite
 */
export class Base extends TransactionBase {

   static recordType = record.Type.CUSTOMER_REFUND

   @FieldType.select
   account:number

   @FieldType.select
   aracct:number

   @FieldType.freeformtext
   ccname:string

   @FieldType.freeformtext
   ccnumber:string

   @FieldType.checkbox
   chargeit:boolean

   @FieldType.select
   creditcard:number

   @FieldType.select
   customer:number

   @FieldType.select
   paymentmethod:number

   @FieldType.sublist(ApplySublist)
   apply: Sublist<ApplySublist>
}

