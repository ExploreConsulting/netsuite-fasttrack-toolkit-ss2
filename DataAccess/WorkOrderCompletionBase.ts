import { TransactionBase } from './Transaction'
import { FieldType } from './Record'
import * as record from 'N/record'
import { InventoryDetailBase } from './InventoryDetailBase'
import { SublistFieldType, SublistLine } from './Sublist'

/**
 * Work Order Completion Components sublist.
 */
export class ComponentSublist extends SublistLine {
   @SublistFieldType.select
   item: number

   @SublistFieldType.integernumber
   linenumber: number

   @SublistFieldType.integernumber
   quantity: number

   @SublistFieldType.float
   quantityper: number

   @SublistFieldType.float
   unitcost: number

   @SublistFieldType.subrecord(InventoryDetailBase)
   componentinventorydetail: InventoryDetailBase
}

/**
 * NetSuite Work Order Completion record type
 */
export class WorkOrderCompletionBase extends TransactionBase {

   @FieldType.float
   completedquantity: number

   @FieldType.select
   endoperation: number

   @FieldType.checkbox
   isbackflush: boolean

   @FieldType.select
   manufacturingrouting: number

   @FieldType.float
   orderquantity: number

   @FieldType.select
   revision: number

   @FieldType.freeformtext
   revisionmemo: string

   @FieldType.float
   scrapquantity: number

   @FieldType.select
   startoperation: number

   @FieldType.select
   item: number

   @FieldType.freeformtext
   quantity: string

   @FieldType.float
   unitcost: number

   @FieldType.select
   units: number

   @FieldType.subrecord(InventoryDetailBase)
   inventorydetail: InventoryDetailBase

   static override recordType() { return record.Type.WORK_ORDER_COMPLETION }
}
