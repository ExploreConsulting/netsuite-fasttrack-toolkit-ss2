/**
 * NetSuite generic Transaction record
 */

import {SublistLine, SublistFieldType} from './Sublist'
import * as record from 'N/record'
import {TransactionBase} from "./Transaction";
import {FieldType} from "./Record";
import * as moment from "../moment"

/**
 * NetSuite Inventory Adjustment Record
 */
export class InventoryAdjustmentBase extends TransactionBase {
   static recordType = record.Type.INVENTORY_ADJUSTMENT

   @FieldType.select
   account:number

   @FieldType.select
   adjlocation:number

   @FieldType.select
   "class":number

   @FieldType.datetime
   createddate:moment.Moment

   @FieldType.select
   customer:number

   @FieldType.currency
   estimatedtotalvalue:number

   @FieldType.datetime
   lastmodifieddate:moment.Moment

}

/**
 * Sublist 'inventory' on the Inventory Adjustment record.
 */
export class InventorySublist extends SublistLine {

   @SublistFieldType.float
   adjustqtyby:number

   @SublistFieldType.select
   "class":number

   @SublistFieldType.freeformtext
   costingmethod:string

   @SublistFieldType.freeformtext
   currency:string

   @SublistFieldType.currency
   currentvalue:string

   @SublistFieldType.select
   department:string

   @SublistFieldType.freeformtext
   description:string

   @SublistFieldType.select
   item:number

   @SublistFieldType.select
   location:number

   @SublistFieldType.float
   newquantity:number

   @SublistFieldType.float
   quantityonhand:number

   @SublistFieldType.currency
   unitcost:number

   @SublistFieldType.select
   units:number
}

