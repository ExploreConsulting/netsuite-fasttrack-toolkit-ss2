/**
 * NetSuite Purchase Order Record
 */

import * as record from 'N/record'
import { TransactionBase } from './Transaction'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import { FieldType, Nullable } from './Record'
import { AddressBase } from './AddressBase'

/**
 * Sublist 'item' on purchase orders
 */
export class ItemSublist extends SublistLine {

   @SublistFieldType.decimalnumber
   amount: number

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

   @SublistFieldType.date
   expectedreceiptdate: Date

   @SublistFieldType.checkbox
   isclosed: boolean

   @SublistFieldType.select
   item: number

   @SublistFieldType.integernumber
   leadtime: Nullable<number>

   @SublistFieldType.float
   quantity: number

   @SublistFieldType.float
   quantityreceived: number

   @SublistFieldType.float
   quantitybilled: number

   @SublistFieldType.decimalnumber
   rate: number

   @SublistFieldType.select
   units: number

   // this is documented as `text` in the records browser but shows up as what appears to be vendor internal id on records.
   @SublistFieldType.freeformtext
   vendorname: string | number
}

/**
 * NetSuite Purchase Order Record
 */
export class PurchaseOrderBase extends TransactionBase {

   @FieldType.select
   approvalstatus: number

   @FieldType.currency
   balance: Nullable<number>

   @FieldType.select
   class: Nullable<number>

   @FieldType.select
   createdfrom: Nullable<number>

   @FieldType.select
   currency: number

   @FieldType.select
   employee: Nullable<number>

   @FieldType.select
   incoterm: Nullable<number>

   @FieldType.select
   intercotransaction: Nullable<number>

   @FieldType.checkbox
   isbasecurrency: boolean

   @FieldType.date
   shipdate: Date

   @FieldType.select
   shipmethod: Nullable<number>

   @FieldType.select
   shipto: Nullable<number>

   @FieldType.subrecord(AddressBase)
   billingaddress: AddressBase

   @FieldType.subrecord(AddressBase)
   shippingaddress: AddressBase

   @FieldType.select
   terms: Nullable<number>

   @FieldType.checkbox
   tobeemailed: Nullable<boolean>

   @FieldType.checkbox
   tobefaxed: Nullable<boolean>

   @FieldType.checkbox
   tobeprinted: Nullable<boolean>

   @FieldType.currency
   total: number

   @FieldType.currency
   unbilledorders: Nullable<number>

   @FieldType.sublist(ItemSublist)
   item: Sublist<ItemSublist>

   static recordType () { return record.Type.PURCHASE_ORDER }
}


