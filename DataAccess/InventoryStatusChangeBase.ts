/**
 * NetSuite Inventory Status Change Record Type
 */
import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'

/**
 *
 * Inventory Status Change NetSuite record
 */
export class InventoryStatusChangeBase extends NetsuiteRecord {
  static override recordType() { return record.Type.INVENTORY_STATUS_CHANGE }

  @FieldType.freeformtext
  externalid: string

  @FieldType.select
  location: number

  @FieldType.freeformtext
  memo: string

  @FieldType.select
  previousstatus: number

  @FieldType.select
  revisedstatus: number
}
