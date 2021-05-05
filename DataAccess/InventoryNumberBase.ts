/**
 * NetSuite Serial Number (Inventory Number) Record Type
 */
import {FieldType, NetsuiteRecord} from './Record'
import * as record from 'N/record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'

/**
 * The 'locations' sublist on Inventory Number records
 */
export class LocationsSublist extends SublistLine {
   /**
    * Note the record browser claims this is a select field but it's actually just the text of the location
    * (not internalid)
    */
   @SublistFieldType.freeformtext
   location: string

   @SublistFieldType.float
   quantityavailable: number

   @SublistFieldType.float
   quantityintransit: number

   @SublistFieldType.float
   quantityonhand: number

   @SublistFieldType.float
   quantityonorder: number
}

/**
 * NetSuite Inventory Number Record Type (inventorynumber)
 */
export class InventoryNumberBase extends NetsuiteRecord {
   static recordType() { return record.Type.INVENTORY_NUMBER }

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

   @FieldType.sublist(LocationsSublist)
   locations: Sublist<LocationsSublist>
}
