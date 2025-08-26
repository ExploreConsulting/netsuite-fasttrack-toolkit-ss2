/**
 * NetSuite Blanket Purchase Order Record Type
 */
import { SublistFieldType, SublistLine } from './Sublist'
import { NetsuiteRecord, FieldType } from './Record'
import * as record from 'N/record'

export class ItemSublist extends SublistLine {
  @SublistFieldType.freeformtext
  description: string

  @SublistFieldType.select
  item: number

  @SublistFieldType.float
  quantity: number
}

/**
 * NetSuite Blanket Purchase Order Record type
 */
export class BlanketPurchaseOrderBase extends NetsuiteRecord {

  static override recordType() { return record.Type.BLANKET_PURCHASE_ORDER  as const }

  @FieldType.select
  location: number

  @FieldType.longtext
  memo: string

  @FieldType.select
  subsidiary: number

  @FieldType.date
  trandate: Date
}
