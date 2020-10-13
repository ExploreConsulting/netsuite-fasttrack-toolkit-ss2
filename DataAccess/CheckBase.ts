/**
 * Represents an Check (check) transaction type in NetSuite
 */

import { FieldType } from './Record'
import { SublistFieldType, Sublist, SublistLine } from './Sublist'
import { TransactionBase } from './Transaction'
import * as record from 'N/record'

/**
 * Check (expense) sublist definition
 */
export class ExpenseSublist extends SublistLine {

   @SublistFieldType.select
   account?: number

   @SublistFieldType.select
   class?: number

   @SublistFieldType.select
   cseg_product_class?: number

}

/**
 * Check (item) sublist definition
 */
export class ItemSublist extends SublistLine {

   @SublistFieldType.currency
   amount: number | string

   @SublistFieldType.select
   catchupperiod: number

   @SublistFieldType.select
   class: number

   @SublistFieldType.select
   customer: number

   @SublistFieldType.checkbox
   deferrevrec: boolean

   @SublistFieldType.select
   department: number

   @SublistFieldType.textarea
   description: string

   @SublistFieldType.checkbox
   isbillable: boolean

   @SublistFieldType.select
   item: number

   @SublistFieldType.freeformtext
   itemsubtype: string

   @SublistFieldType.freeformtext
   itemtype: string

   @SublistFieldType.freeformtext
   line: string

   @SublistFieldType.integernumber
   linenumber: number

   @SublistFieldType.select
   location: number

   @SublistFieldType.freeformtext
   matrixtype: string

   @SublistFieldType.freeformtext
   options: any

   @SublistFieldType.float
   quantity: number | string

   @SublistFieldType.float
   rate: number | string

   @SublistFieldType.select
   taxcode: number

   @SublistFieldType.percent
   taxrate1: number | string

   @SublistFieldType.select
   units: number

   @SublistFieldType.freeformtext
   vendorname: string
}

/**
 *  NetSuite Check Record definition
 */
export class CheckBase extends TransactionBase {
   static recordType = record.Type.CHECK

   @FieldType.select
   account: number

   @FieldType.currency
   balance: number | string

   @FieldType.checkbox
   billpay: boolean

   @FieldType.select
   class: number

   @FieldType.select
   currency: number

   @FieldType.freeformtext
   currencyname: string

   @FieldType.select
   entitynexus: number

   @FieldType.currency
   exchangerate: number | string

   @FieldType.checkbox
   isbasecurrency: boolean

   @FieldType.checkbox
   landedcostperline: boolean

   @FieldType.select
   nexus: number

   @FieldType.select
   payeeaddresslist: number

   @FieldType.checkbox
   tobeprinted: boolean

   @FieldType.currency
   total: number | string

   @FieldType.currency
   usertotal: number | string

   @FieldType.sublist(ExpenseSublist)
   expense: Sublist<ExpenseSublist>
}
