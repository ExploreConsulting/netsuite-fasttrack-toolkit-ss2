/**
 * NetSuite Vendor Bill record
 */

import { SublistLine, Sublist, SublistFieldType } from './Sublist'
import * as record from 'N/record'
import { TransactionBase } from './Transaction'
import { FieldType } from './Record'
import { AddressBase } from './AddressBase'

/**
 * Sublist 'item' on the Vendor Bill record
 */
export class ItemSublist extends SublistLine {
   @SublistFieldType.select
   item: number

   @SublistFieldType.integernumber
   quantity: number

   @SublistFieldType.currency
   amount: number

   @SublistFieldType.currency
   rate: number
}

/**
 * Sublist 'expense' on the Vendor Bill record
 */
export class ExpenseSublist extends SublistLine {
   @SublistFieldType.select
   account: number

   @SublistFieldType.currency
   amount: number

   @SublistFieldType.select
   categoryexpaccount: number

   @SublistFieldType.select
   department: number

   @SublistFieldType.integernumber
   line: number

   @SublistFieldType.freeformtext
   lineuniquekey: string

   @SublistFieldType.select
   location: number

   /**
    * Memo
    * Enter a memo that will appear on such reports as the 2-line Accounts Payable Register.
    */
   @SublistFieldType.freeformtext
   memo: string
}

/**
 * NetSuite Vendor Bill Record
 */
export class VendorBillBase extends TransactionBase {
   static recordType = record.Type.VENDOR_BILL

   @FieldType.select
   account: number

   @FieldType.select
   approvalstatus: number

   @FieldType.currency
   availablevendorcredit: number | string

   @FieldType.freeformtext
   balance: string

   @FieldType.select
   class: number

   @FieldType.currency
   creditlimit: number | string

   @FieldType.select
   currency: number

   @FieldType.freeformtext
   currencyname: string

   @FieldType.freeformtext
   currencysymbol: string

   @FieldType.currency
   discountamount: number | string

   @FieldType.date
   discountdate: Date

   @FieldType.freeformtext
   documentstatus: string

   @FieldType.date
   duedate: Date

   @FieldType.select
   entitynexus: number

   @FieldType.select
   entitytaxregnum: number

   @FieldType.currency
   exchangerate: string | number

   @FieldType.checkbox
   landedcostperline: boolean

   @FieldType.select
   nextapprover: number

   @FieldType.select
   nexus: number

   @FieldType.checkbox
   overrideinstallments: boolean

   @FieldType.checkbox
   paymenthold: boolean

   @FieldType.date
   taxpointdate: Date

   @FieldType.checkbox
   taxpointdateoverride: boolean

   @FieldType.checkbox
   taxregoverride: boolean

   @FieldType.select
   terms: number

   @FieldType.currency
   usertotal: number | string

   @FieldType.subrecord(AddressBase)
   billingaddress: AddressBase

   @FieldType.sublist(ItemSublist)
   item: Sublist<ItemSublist>

   @FieldType.sublist(ExpenseSublist)
   expense: Sublist<ExpenseSublist>
}
