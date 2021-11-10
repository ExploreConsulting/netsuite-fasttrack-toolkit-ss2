import { TransactionBase } from './Transaction'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import { FieldType } from './Record'
import * as record from 'N/record'

/**
 * Vendor Credit Expense Sublist
 */
export class ExpenseSublist extends SublistLine {

   @SublistFieldType.select
   account: number

   @SublistFieldType.currency
   amount: number | string

   @SublistFieldType.freeformtext
   memo: string

   @SublistFieldType.select
   department: number

   @SublistFieldType.select
   location: number

   @SublistFieldType.select
   expense: number
}

/**
 * Vendor Credit Item Sublist
 */
export class ItemSublist extends SublistLine {

   @SublistFieldType.select
   account: number

   @SublistFieldType.currency
   amount: number | string

   @SublistFieldType.freeformtext
   memo: string

   @SublistFieldType.select
   item: number
}

/**
 * Vendor Credit Apply Sublist
 */
export class ApplySublist extends SublistLine {

   @SublistFieldType.checkbox
   apply: boolean

   @SublistFieldType.currency
   amount: number | string

   @SublistFieldType.date
   applydate: Date

   @SublistFieldType.freeformtext
   doc: string

}

/**
 * Vendor Credit record Type
 */
export class VendorCreditBase extends TransactionBase {

   @FieldType.checkbox
   autoapply: boolean

   @FieldType.select
   account: number

   @FieldType.sublist(ItemSublist)
   item: Sublist<ItemSublist>

   @FieldType.sublist(ExpenseSublist)
   expense: Sublist<ExpenseSublist>

   @FieldType.sublist(ApplySublist)
   apply: Sublist<ApplySublist>

   static recordType () { return record.Type.VENDOR_CREDIT }
}
