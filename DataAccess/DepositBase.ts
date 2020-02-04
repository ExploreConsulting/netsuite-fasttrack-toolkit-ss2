/**
 * Represents an Deposit record {deposit} in NetSuite
 */

import { FieldType, NetsuiteRecord } from './Record'
import { SublistLine, SublistFieldType, Sublist } from './Sublist'
import * as record from 'N/record'

/**
 * Deposit payments sublist
 */
export class PaymentsSublist extends SublistLine {

   @SublistFieldType.select
   'class': number

   @SublistFieldType.currency
   currency: number

   @SublistFieldType.select
   department: string

   @SublistFieldType.checkbox
   deposit: boolean

   @SublistFieldType.date
   docdate: Date

   @SublistFieldType.freeformtext
   docnumber: string

   @SublistFieldType.select
   entity: number

   @SublistFieldType.select
   id: number

   @SublistFieldType.integernumber
   lineid: string

   @SublistFieldType.select
   location: number

   @SublistFieldType.longtext
   memo: string

   @SublistFieldType.currency
   paymentamount: number

   @SublistFieldType.select
   paymentmethod: number

   @SublistFieldType.freeformtext
   pmtcurrencyprecision: string

   @SublistFieldType.freeformtext
   refnum: string

   @SublistFieldType.currency
   transactionamount: number

   /**
    * This is a select list but not the standard numeric type.
    * It contains string ids like 'CashSale' or 'CashRfnd'
    */
   @SublistFieldType.select
   type: string
}

/**
 * Deposit Record Header
 */
export class DepositBase extends NetsuiteRecord {

   static recordType = record.Type.DEPOSIT

   @FieldType.select
   account: number

   @FieldType.select
   class: number

   @FieldType.date
   createddate: Date

   @FieldType.select
   creditcardprocessor: number

   @FieldType.select
   department: number

   @FieldType.currency
   exchangerate: number

   @FieldType.select
   location: number

   @FieldType.longtext
   memo: string

   @FieldType.select
   postingperiod: number

   @FieldType.select
   subsidiary: number

   @FieldType.checkbox
   tobeprinted: boolean

   @FieldType.currency
   total: number

   @FieldType.date
   trandate: Date

   @FieldType.freeformtext
   tranid: string

   @FieldType.sublist(PaymentsSublist)
   payment: Sublist<PaymentsSublist>
}
