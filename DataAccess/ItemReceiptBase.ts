/**
 * Represents an Item Receipt (itemreceipt) transaction type in NetSuite
 */

import { FieldType } from './Record'
import * as record from 'N/record'
import { TransactionBase } from './Transaction'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'

/**
 * Item Receipt Items (item) sublist
 */
export class ItemSublist extends SublistLine {

   @SublistFieldType.freeformtext
   class:string

   @SublistFieldType.freeformtext
   countryofmanufacture:string

   @SublistFieldType.freeformtext
   item:string

   @SublistFieldType.checkbox
   itemreceive:boolean

   @FieldType.integernumber
   line:number

   @FieldType.freeformtext
   lineuniquekey:string

   @SublistFieldType.select
   location:number

   @SublistFieldType.float
   onhand:number

   @SublistFieldType.currency
   rate: number

   @SublistFieldType.date
   revrecenddate:Date

   @SublistFieldType.decimalnumber
   quantity:number

   @SublistFieldType.checkbox
   restock:boolean

   @SublistFieldType.freeformtext
   units:string
}

/**
 * NetSuite ItemReceipt record class
 */
export class ItemReceiptBase extends TransactionBase {

   static recordType = record.Type.ITEM_RECEIPT

   @FieldType.select
   class:number

   /**
    * This field shows the purchase order this item receipt is created from.
    */
   @FieldType.select
   createdfrom:number

   @FieldType.select
   currency:number

   @FieldType.freeformtext
   currencyname:string

   @FieldType.freeformtext
   currencysymbol:string

   @FieldType.currency
   exchangerate:number

   @FieldType.select
   inboundshipment:number

   @FieldType.checkbox
   isbasecurrency:boolean

   @FieldType.select
   itemfulfillment:number

   @FieldType.checkbox
   landedcostperline:boolean

   @FieldType.sublist(ItemSublist)
   item: Sublist<ItemSublist>
}
