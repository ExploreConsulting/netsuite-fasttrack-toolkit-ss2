/**
 * NetSuite Customer Payment (customerpayment) record
 */

import { SublistLine, SublistFieldType, Sublist } from './Sublist'
import * as record from 'N/record'
import { TransactionBase } from './Transaction'
import { FieldType } from './Record'

export class ApplySublist extends SublistLine {
   @SublistFieldType.currency
   amount: number

   @SublistFieldType.checkbox
   apply: boolean

   @SublistFieldType.date
   applydate: Date

   @SublistFieldType.freeformtext
   createdfrom: string

   @SublistFieldType.currency
   disc: number

   @SublistFieldType.freeformtext
   doc: string

   @SublistFieldType.currency
   discamt: number

   @SublistFieldType.freeformtext
   internalid: string

   @SublistFieldType.integernumber
   job: number

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
 * Customer Payment Record
 */
export class CustomerPaymentBase extends TransactionBase {

   static override recordType() { return record.Type.CUSTOMER_PAYMENT }

   @FieldType.select
   customer: number

   @FieldType.freeformtext
   checknum: string

   @FieldType.currency
   payment: number

   @FieldType.select
   paymentmethod: number

   @FieldType.checkbox
   autoapply: boolean

   @FieldType.sublist(ApplySublist)
   apply: Sublist<ApplySublist>
}


