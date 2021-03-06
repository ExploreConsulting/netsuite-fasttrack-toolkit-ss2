/**
 * Represents an Item Fulfillment (itemfulfillment) transaction type in NetSuite
 */

import { FieldType } from './Record'
import * as record from 'N/record'
import { TransactionBase } from './Transaction'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import { AddressBase } from './AddressBase'

/**
 * This is the undocumented but standard package sublist. This sublist has shown to be stable and scriptable for some time so
 * including here even though not documented.
 */
export class PackageSublist extends SublistLine {
   @SublistFieldType.freeformtext
   packagetrackingnumber:string

   @SublistFieldType.decimalnumber
   packageweight:number

   @SublistFieldType.integernumber
   pkgTrackingNumberKey:number

   @SublistFieldType.freeformtext
   pkgTrackingNumberUrl:string

   @SublistFieldType.integernumber
   trackingnumberkey:number
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
   inventorydetailreq?: 'T' | 'F'

   @SublistFieldType.freeformtext
   isnumbered?:string

   @SublistFieldType.freeformtext
   item:string

   @SublistFieldType.checkbox
   itemreceive:boolean

   @SublistFieldType.freeformtext
   itemtype: string

   /**
    * field only applies to kit items
    */
   @SublistFieldType.freeformtext
   kitlineid?:string

   /**
    * field only applies to kit items
    */
   @SublistFieldType.freeformtext
   kitlevel?:string


   @SublistFieldType.select
   location:number

   @SublistFieldType.float
   onhand:number

   @SublistFieldType.decimalnumber
   quantity:number

   @SublistFieldType.float
   quantityremaining:number
   /**
    * lookup to the units of measure type (SuiteQL table name unitstypeuom)
    */
   @SublistFieldType.select
   units: number
}

/**
 * Item Fulfillment Base Type
 */
export class ItemFulfillmentBase extends TransactionBase {

   static recordType() { return record.Type.ITEM_FULFILLMENT }

   /**
    * This field shows the transaction this fulfillment was created from.
    */
   @FieldType.select
   createdfrom:number

   @FieldType.currency
   handlingcost: number | string

   @FieldType.subrecord(AddressBase)
   shippingaddress: AddressBase

   @FieldType.freeformtext
   shipstatus: string

   @FieldType.date
   shippeddate: Date

   @FieldType.select
   shipmethod: number

   @FieldType.currency
   shippingcost: number | string

   @FieldType.select
   termsofsalefedex: number

   @FieldType.sublist(ItemSublist)
   item: Sublist<ItemSublist>
   /**
    * The sublist for shipping info used by default (if not using more advanced shipping integration options).
    */
   @FieldType.sublist(PackageSublist)
   package: Sublist<PackageSublist>
}
