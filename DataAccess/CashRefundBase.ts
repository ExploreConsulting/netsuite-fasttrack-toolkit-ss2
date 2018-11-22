/**
 * Represents a Cash Refund (cashrefund) transaction type in NetSuite
 */

import { FieldType } from './Record'
import * as record from 'N/record'
import { TransactionBase } from './Transaction'
import { SublistFieldType, SublistLine } from './Sublist'

export class CashRefundBase extends TransactionBase {

   static recordType = record.Type.CASH_REFUND

   @FieldType.select
   account:number

   @FieldType.freeformtext
   ccname:string

   @FieldType.freeformtext
   ccnumber:string

}

export class ItemSublist extends SublistLine {

   @SublistFieldType.currency
   amount:number

   @SublistFieldType.select
   item:number

   @SublistFieldType.decimalnumber
   quantity:number

   @SublistFieldType.date
   revrecstartdate:Date

   @SublistFieldType.date
   revrecenddate:Date

   @SublistFieldType.decimalnumber
   rate:number

   @SublistFieldType.select
   taxcode:number

   @SublistFieldType.decimalnumber
   taxrate1:number
}
