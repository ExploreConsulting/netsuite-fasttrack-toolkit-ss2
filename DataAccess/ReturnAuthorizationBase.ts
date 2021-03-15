/**
 * Represents a Return Authorization (returnauthorization) transaction type in NetSuite
 */

import { FieldType } from './Record'
import * as record from 'N/record'
import { TransactionBase } from './Transaction'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'

/**
 * Return Authorization Items (item) sublist
 */
export class ItemSublist extends SublistLine {

   @SublistFieldType.currency
   amount: number

   @SublistFieldType.textarea
   description: string

   @SublistFieldType.checkbox
   istaxable: boolean

   @SublistFieldType.select
   item: number

   @SublistFieldType.freeformtext
   itemtype: string

   @SublistFieldType.integernumber
   linenumber: number

   @SublistFieldType.select
   price: number

   @SublistFieldType.float
   quantity: number

   @SublistFieldType.float
   rate: number

   @SublistFieldType.date
   revrecstartdate: Date

   @SublistFieldType.date
   revrecenddate: Date

   @SublistFieldType.select
   taxcode: number

   @SublistFieldType.percent
   taxrate: number

   @SublistFieldType.select
   units: number
}

/**
 * Return Authorization Base Type
 */
export class ReturnAuthorizationBase extends TransactionBase {

   static recordType() { return record.Type.RETURN_AUTHORIZATION }

   @FieldType.select
   class:number

   /**
    * This field shows the transaction this transaction was created from.
    */
   @FieldType.select
   createdfrom: number

   @FieldType.select
   discountitem: number

   @FieldType.textarea
   message:string

   @FieldType.select
   messagesel:number

   @FieldType.select
   orderstatus:number

   @FieldType.checkbox
   tobeemailed:boolean

   @FieldType.currency
   subtotal: number

   @FieldType.currency
   total: number

   @FieldType.sublist(ItemSublist)
   item: Sublist<ItemSublist>
}
