/**
 * Vendor Payment base record
 */

import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import * as record from 'N/record'
import { TransactionBase } from './Transaction'
import { FieldType } from './Record'

/**
 * Sublist 'apply' on the Vendor Payment record
 */
export class ApplySublist extends SublistLine {
   @SublistFieldType.checkbox
   apply: boolean
   @SublistFieldType.date
   applydate: Date
   @SublistFieldType.currency
   amount: number
   @SublistFieldType.freeformtext
   createdfrom: number
   @SublistFieldType.currency
   disc: number
   @SublistFieldType.currency
   discamt: number
   @SublistFieldType.date
   discdate: Date
   @SublistFieldType.freeformtext
   doc: string
   @SublistFieldType.currency
   due: number
   @SublistFieldType.date
   duedate: Date
   @SublistFieldType.freeformtext
   internalid: string
   @SublistFieldType.integernumber
   line: number
   @SublistFieldType.freeformtext
   refnum: string
   @SublistFieldType.currency
   total: number
   @SublistFieldType.freeformtext
   url: string
}

/**
 * NetSuite Vendor Payment Record
 */
export class VendorPaymentBase extends TransactionBase {
   static override recordType() { return record.Type.VENDOR_PAYMENT }

   @FieldType.select
   account: number

   // A/P ACCOUNT
   @FieldType.select
   apacct: number

   @FieldType.currency
   balance: number

   @FieldType.checkbox
   billpay: boolean

   @FieldType.select
   currency: number

   @FieldType.freeformtext
   currencyname: string

   @FieldType.freeformtext
   currencysymbol: string

   @FieldType.currency
   exchangerate: number

   @FieldType.checkbox
   isbasecurrency: boolean

   @FieldType.select
   nexus: number

   @FieldType.checkbox
   printvoucher: boolean

   @FieldType.checkbox
   toach: boolean

   @FieldType.checkbox
   tobeemailed: boolean

   @FieldType.checkbox
   tobeprinted: boolean

   @FieldType.currency
   total: number

   @FieldType.freeformtext
   transactionnumber: string

   @FieldType.currency
   unapplied: number

   @FieldType.sublist(ApplySublist)
   apply: Sublist<ApplySublist>
}



