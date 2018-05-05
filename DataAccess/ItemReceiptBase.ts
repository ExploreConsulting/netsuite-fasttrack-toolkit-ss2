/**
 * Represents an Item Receipt (itemreceipt) transaction type in NetSuite
 */


import {FieldType} from 'NFT/DataAccess/Record'
import * as record from 'N/record'
import {TransactionBase} from "NFT/DataAccess/Transaction";
import {SublistLine, SublistFieldType} from 'NFT/DataAccess/Sublist'
import * as moment from "../moment"

export class Base extends TransactionBase {

   static recordType = record.Type.ITEM_RECEIPT

   @FieldType.select
   class:number

   /**
    * This field shows the purchase order this item receipt is created from.
    */
   @FieldType.select
   createdfrom:number

   @FieldType.select
   itemfulfillment:number

   @FieldType.checkbox
   landedcostperline:boolean

   @FieldType.select
   location:number

}
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

   @SublistFieldType.select
   location:number

   @SublistFieldType.float
   onhand:number

   @SublistFieldType.date
   revrecenddate:moment.Moment

   @SublistFieldType.decimalnumber
   quantity:number

   @SublistFieldType.checkbox
   restock:boolean

   @SublistFieldType.freeformtext
   units:string
}
