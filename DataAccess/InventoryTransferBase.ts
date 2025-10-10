/**
 * NetSuite Inventory Transfer Record Type
 */
import { type Sublist, SublistFieldType, SublistLine } from './Sublist'
import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'
/**
 * Adjustments sublist
 */
export class InventorySublist extends SublistLine {
 @SublistFieldType.select
  item: number
}

/**
 * NetSuite Inventory Transfer Record type
 */
export class InventoryTransferBase extends NetsuiteRecord {

  static override recordType() { return record.Type.INVENTORY_TRANSFER }

  @FieldType.sublist(InventorySublist)
  inventory: Sublist<InventorySublist>
}
