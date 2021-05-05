// the inventory item record in NetSuite
import { FieldType } from './Record'
import * as record from 'N/record'
import { ItemBase } from './ItemBase'

/**
 * Netsuite Inventory Item record type
 */
export class InventoryItem extends ItemBase {

   static recordType () { return record.Type.INVENTORY_ITEM }

   @FieldType.checkbox
   contingentrevenuehandling: boolean


   @FieldType.freeformtext
   vendorname: string
}
