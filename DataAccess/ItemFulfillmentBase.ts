/**
 * Represents an Item Fulfillment (itemfulfillment) transaction type in NetSuite
 */


import {FieldType} from 'NFT/DataAccess/Record'
import * as record from 'N/record'
import {TransactionBase} from "NFT/DataAccess/Transaction";
import {SublistLine, SublistFieldType} from 'NFT/DataAccess/Sublist'

/**
 * Item Fulfillment Base Type
 */
export class Base extends TransactionBase {

   static recordType = record.Type.ITEM_FULFILLMENT

   /**
    * This field shows the transaction this fulfillment was created from.
    */
   @FieldType.select
   createdfrom:number


}

/**
 * Item Fulfillment Items (item) sublist
 */
export class ItemSublist extends SublistLine {

   @SublistFieldType.freeformtext
   "class":string

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

   @SublistFieldType.decimalnumber
   quantity:number

   @SublistFieldType.float
   quantityremaining:number

   @SublistFieldType.freeformtext
   units:string
}
