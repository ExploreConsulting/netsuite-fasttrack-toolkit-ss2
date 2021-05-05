// the inventory item record in NetSuite
import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'

/**
 * Netsuite Inventory Item record type
 */
export class InventoryItem extends NetsuiteRecord {

   static recordType () { return record.Type.INVENTORY_ITEM }

   @FieldType.select
   assetaccount: number

   @FieldType.select
   cogsaccount: number

   @FieldType.select
   costcategory: number

   @FieldType.freeformtext
   externalid: string

   @FieldType.checkbox
   includechildren: boolean

   @FieldType.select
   incomeaccount: number

   @FieldType.freeformtext
   itemid: string

   @FieldType.freeformtext
   purchasedescription: string

   @FieldType.select
   subsidiary: number

   @FieldType.select
   taxschedule: number

   @FieldType.checkbox
   tracklandedcost: boolean

   @FieldType.freeformtext
   upccode: string

   @FieldType.select
   unitstype: number

   @FieldType.freeformtext
   vendorname: string

}
