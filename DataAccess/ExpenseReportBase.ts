/**
 * NetSuite Expense Report record
 */
import { TransactionBase } from './Transaction'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import { FieldType } from './Record'
import * as record from 'N/record'

/**
 * The 'expense' sublist
 */
export class ExpenseSublist extends SublistLine {
   @SublistFieldType.currency
   amount: number

   @SublistFieldType.select
   category: number

   @SublistFieldType.select
   class: number

   @SublistFieldType.select
   customer: number

   @SublistFieldType.select
   department: number

   @SublistFieldType.select
   expenseaccount: number

   @SublistFieldType.date
   expensedate: Date

   @SublistFieldType.select
   expenseitem: number

   @SublistFieldType.integernumber
   line: number

   @SublistFieldType.select
   location: number

   @SublistFieldType.freeformtext
   memo: string

   @SublistFieldType.float
   quantity: number

   @SublistFieldType.currency
   rate: number

   @SublistFieldType.freeformtext
   refnumber: string
}

/**
 * NetSuite Expense Report Record Type
 */
export class ExpenseReportBase extends TransactionBase {
   @FieldType.select
   account: number

   @FieldType.currency
   amount: number

   @FieldType.select
   approvalstatus: string

   @FieldType.select
   class: number

   @FieldType.date
   duedate: Date

   @FieldType.freeformtext
   transactionnumber: string

   @FieldType.sublist(ExpenseSublist)
   items: Sublist<ExpenseSublist>

   static override recordType() {
      return record.Type.EXPENSE_REPORT
   }
}
