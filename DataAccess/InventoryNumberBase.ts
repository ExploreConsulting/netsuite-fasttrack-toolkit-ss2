/**
 * NetSuite Serial Number (Inventory Number) Record Type
 */
import {FieldType, NetsuiteRecord} from './Record'
import * as record from 'N/record'

/**
 * NetSuite Inventory Number Record Type (inventorynumber)
 */
export class InventoryNumber extends NetsuiteRecord {
   static recordType = record.Type.INVENTORY_NUMBER

   @FieldType.date
   expirationdate: Date

   @FieldType.freeformtext
   externalid: string

   @FieldType.freeformtext
   inventorynumber: string

   @FieldType.textarea
   memo: string

   @FieldType.freeformtext
   status: string

   @FieldType.select
   units: number
}
