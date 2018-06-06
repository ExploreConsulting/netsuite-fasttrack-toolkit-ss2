/**
 * NetSuite Vendor Bill record
 */

import * as nsdal from "./EC_nsdal"
import {SublistLine, Sublist} from "./Sublist"
import * as record from 'N/record'
import {TransactionBase} from "./Transaction"

/**
 * Sublist 'item' on the Vendor Bill record
 */
export class ItemSublist extends SublistLine {
   @nsdal.SublistFieldType.select
   item: number
   @nsdal.SublistFieldType.integernumber
   quantity: number
   @nsdal.SublistFieldType.currency
   amount: number
   @nsdal.SublistFieldType.currency
   rate: number
}

/**
 * Sublist 'expense' on the Vendor Bill record
 */
export class ExpenseSublist extends SublistLine {
   @nsdal.SublistFieldType.select
   account: number

   @nsdal.SublistFieldType.currency
   amount: number

   @nsdal.SublistFieldType.select
   categoryexpaccount: number

   @nsdal.SublistFieldType.select
   department: number

   @nsdal.SublistFieldType.integernumber
   line: number

   @nsdal.SublistFieldType.freeformtext
   lineuniquekey: string

   @nsdal.SublistFieldType.select
   location: number
}

/**
 * NetSuite Vendor Bill Record
 */
export class VendorBillBase extends TransactionBase {
   static recordType = record.Type.VENDOR_BILL

   @nsdal.FieldType.sublist(ItemSublist)
   item: Sublist<ItemSublist>

   @nsdal.FieldType.sublist(ExpenseSublist)
   expense: Sublist<ExpenseSublist>
}



