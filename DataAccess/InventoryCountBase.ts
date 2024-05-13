/**
 * NetSuite Inventory Count Record Type
 */
import { type Sublist, SublistFieldType, SublistLine } from './Sublist'
import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'
/**
 * Items sublist
 */
export class ItemSublist extends SublistLine {
 @SublistFieldType.select
  item: number
}

/**
 * NetSuite Inventory Transfer Record type
 */
export class InventoryCountBase extends NetsuiteRecord {

  static recordType () { return record.Type.INVENTORY_COUNT }

  @FieldType.sublist(ItemSublist)
  item: Sublist<ItemSublist>
}
