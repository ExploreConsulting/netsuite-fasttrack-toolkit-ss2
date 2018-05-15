/**
 * Created by shawn on 4/15/16.
 */

import {FieldType} from './Record'
import * as record from 'N/record'
import {TransactionBase} from "./Transaction";
import {SublistLine, SublistFieldType} from './Sublist'
import * as moment from "../moment"

export class CreditMemoBase extends TransactionBase {

   static recordType = record.Type.CREDIT_MEMO

   @FieldType.currency
   amountpaid:number

   @FieldType.currency
   amountremaining:number

   @FieldType.currency
   applied:number

   @FieldType.checkbox
   autoapply:boolean

   @FieldType.currency
   balance:number

   @FieldType.currency
   total:number

   @FieldType.currency
   subtotal:number
}


export class ItemSublist extends SublistLine {

   @SublistFieldType.date
   revrecstartdate:moment.Moment
   
   @SublistFieldType.date
   revrecenddate:moment.Moment
   
   @SublistFieldType.select
   item:number

   @SublistFieldType.currency
   amount:number

   @SublistFieldType.decimalnumber
   quantity:number

   @SublistFieldType.decimalnumber
   rate:number

   @SublistFieldType.select
   taxcode:number

   @SublistFieldType.decimalnumber
   taxrate1:number

   @SublistFieldType.checkbox
   autoapply:boolean
}

export class ApplySublist extends SublistLine {
   @SublistFieldType.currency
   amount:number

   @SublistFieldType.checkbox
   apply:boolean

   @SublistFieldType.select
   createdfrom:number

   @SublistFieldType.freeformtext
   refnum:string
}
