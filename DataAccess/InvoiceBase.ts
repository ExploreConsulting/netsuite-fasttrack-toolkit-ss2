/**
 * NetSuite generic Transaction record
 */

import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import * as record from 'N/record'
import { TransactionBase } from './Transaction'
import { FieldType } from './Record'
import { AddressBase } from './AddressBase'

/**
 * The 'item' sublist on invoices
 */
export class ItemSublist extends SublistLine {

   @SublistFieldType.freeformtext
   account:string

   @SublistFieldType.currency
   amount:number

   @SublistFieldType.textarea
   description:string

   @SublistFieldType.checkbox
   istaxable:boolean

   @SublistFieldType.select
   item:number

   @SublistFieldType.integernumber
   linenumber:number

   @SublistFieldType.select
   price:number

   @SublistFieldType.float
   quantity:number

   @SublistFieldType.float
   rate:number

   @SublistFieldType.date
   revrecstartdate:Date

   @SublistFieldType.date
   revrecenddate:Date

   @SublistFieldType.select
   taxcode:number

   @SublistFieldType.percent
   taxrate1:number

   @SublistFieldType.select
   units:number
}


/**
 * NetSuite Invoice Record
 */
export class InvoiceBase extends TransactionBase {

   static recordType = record.Type.INVOICE

   @FieldType.select
   account:number

   @FieldType.currency
   amountpaid:number

   @FieldType.currency
   amountremaining:number

   @FieldType.select
   approvalstatus:number

   @FieldType.currency
   balance:number

   @FieldType.subrecord(AddressBase)
   billingaddress: AddressBase

   @FieldType.freeformtext
   billaddr1:string

   @FieldType.freeformtext
   billaddr2:string

   @FieldType.freeformtext
   billaddr3:string

   @FieldType.freeformtext
   billphone:string

   @FieldType.freeformtext
   billstate:string

   @FieldType.freeformtext
   billzip:string

   @FieldType.freeformtext
   billaddress:string

   @FieldType.select
   currency:number

   @FieldType.currency
   discountamount:number

   @FieldType.date
   discountdate:Date

   @FieldType.date
   duedate:Date

   @FieldType.freeformtext
   fob:string

   @FieldType.currency
   giftcertapplied:number

   @FieldType.currency
   handlingcost:number

   @FieldType.select
   handlingtaxcode:number

   @FieldType.select
   leadsource:number

   @FieldType.freeformtext
   linkedtrackingnumbers:string

   @FieldType.select
   promocode:number

   @FieldType.subrecord(AddressBase)
   shippingaddress: AddressBase

   @FieldType.checkbox
   tobeemailed:boolean

   @FieldType.checkbox
   tobeprinted:boolean

   @FieldType.checkbox
   tobefaxed:boolean

   @FieldType.currency
   total:number

   @FieldType.currency
   subtotal:number

   @FieldType.select
   taxitem:number

   @FieldType.freeformtext
   trackingnumbers:string

   @FieldType.sublist(ItemSublist)
   item : Sublist<ItemSublist>
}



