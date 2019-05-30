/**
 * NS Base Inventory Detail subrecord contains definitions for the built in fields
 */

import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'

export class InventoryAssignmentSublist extends SublistLine {

   @SublistFieldType.select
   binnumber: number

   @SublistFieldType.date
   expirationdate: Date

   @SublistFieldType.integernumber
   internalid: number

   @SublistFieldType.select
   issueinventorynumber: number

   @SublistFieldType.float
   quantity: number

   @SublistFieldType.float
   quantityavailable: number

   @SublistFieldType.select
   tobinnumber: number

   @SublistFieldType.select
   toinventorystatus: number

}

/**
 * The inventory detail 'subrecord'. In SS2.0 this is mostly treated as a normal record object.
 * However I caution against trying to create new instances of it, only passing an existing record
 * to the constructor.
 */
export class InventoryDetailBase extends NetsuiteRecord {

   static recordType = record.Type.INVENTORY_DETAIL

   @FieldType.select
   item: number

   @FieldType.freeformtext
   itemdescription: string

   @FieldType.select
   location: number

   @FieldType.float
   quantity: number

   @FieldType.select
   tolocation: number

   @FieldType.select
   unit: number

   @FieldType.sublist(InventoryAssignmentSublist)
   inventoryassignment: Sublist<InventoryAssignmentSublist>
}
