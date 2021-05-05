// the inventory item record in NetSuite
import { FieldType } from './Record'
import * as record from 'N/record'
import { Item } from './Item'

/**
 * Netsuite Inventory Item record type
 */
export class InventoryItem extends Item {

   static recordType () { return record.Type.INVENTORY_ITEM }

   @FieldType.checkbox
   contingentrevenuehandling: boolean


   @FieldType.freeformtext
   vendorname: string
}
