/**
 * NetSuite Vendor Bill record
 */

import {SublistLine, Sublist, SublistFieldType} from "./Sublist"
import * as record from 'N/record'
import {TransactionBase} from "./Transaction"
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

   @FieldType.subrecord(AddressBase)
   billingaddress: AddressBase

   @FieldType.sublist(ItemSublist)
   item: Sublist<ItemSublist>

   @FieldType.sublist(ExpenseSublist)
   expense: Sublist<ExpenseSublist>
}
