/**
 * NetSuite Purchase Order Record
 */

import * as record from 'N/record'
import { TransactionBase } from './Transaction'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import { FieldType } from './Record'
import { AddressBase } from './AddressBase'

/**
 * Sublist 'item' on purchase orders
 */
export class ItemSublist extends SublistLine {

   @SublistFieldType.decimalnumber
   amount:number

   @SublistFieldType.select
   class:number

   @SublistFieldType.select
   customer:number

   @SublistFieldType.checkbox
   deferrevrec:boolean

   @SublistFieldType.select
   department:number

   @SublistFieldType.textarea
   description:string

   @SublistFieldType.checkbox
   isclosed: boolean

   @SublistFieldType.select
   item:number

   @SublistFieldType.decimalnumber
   quantity:number

   @SublistFieldType.decimalnumber
   rate:number

}

/**
 * NetSuite Purchase Order Record
 */
export class PurchaseOrderBase extends TransactionBase {
   static recordType() { return record.Type.PURCHASE_ORDER }

   @FieldType.subrecord(AddressBase)
   billingaddress: AddressBase

   @FieldType.subrecord(AddressBase)
   shippingaddress: AddressBase

   @FieldType.select
   approvalstatus:number

   @FieldType.sublist(ItemSublist)
   item: Sublist<ItemSublist>
}


