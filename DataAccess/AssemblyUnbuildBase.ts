import * as record from 'N/record'
import { FieldType, NetsuiteRecord } from './Record'
import { Sublist, SublistLine, SublistFieldType } from './Sublist'
import { InventoryDetailBase } from './InventoryDetailBase'

/**
 * Components sublist
 */
export class ComponentSublist extends SublistLine {
  /**
   * Bin Item
   */
  @SublistFieldType.checkbox
  binitem: boolean

  /**
   * Component
   */
  @SublistFieldType.freeformtext
  compitemname: string

  /**
   * Inventory Detail subrecord
   */
  @SublistFieldType.subrecord(InventoryDetailBase)
  componentinventorydetail: InventoryDetailBase

  /**
   * Inventory Detail Available
   */
  @SublistFieldType.checkbox
  componentinventorydetailavail: boolean

  /**
   * Inventory Detail Required
   */
  @SublistFieldType.checkbox
  componentinventorydetailreq: boolean

  /**
   * Is Non Inventory
   */
  @SublistFieldType.checkbox
  isnoninventory: boolean

  /**
   * Is Numbered
   */
  @SublistFieldType.checkbox
  isnumbered: boolean

  /**
   * Is Serial
   */
  @SublistFieldType.checkbox
  isserial: boolean

  /**
   * Component
   */
  @SublistFieldType.freeformtext
  item: string

  /**
   * Item Cost
   */
  @SublistFieldType.currency
  itemcost: number

  /**
   * Line Number
   */
  @SublistFieldType.integernumber
  linenumber: number

  /**
   * Location Uses Bins
   */
  @SublistFieldType.checkbox
  locationusesbins: boolean

  /**
   * Quantity
   */
  @SublistFieldType.float
  quantity: number

  /**
   * Quantity On Hand
   */
  @SublistFieldType.float
  quantityonhand: number

  /**
   * Unit Cost
   */
  @SublistFieldType.float
  unitcost: number
}

/**
 * Assembly Unbuild record
 */
export class AssemblyUnbuildBase extends NetsuiteRecord {
  /**
   * Record type
   */
  static recordType () {
    return record.Type.ASSEMBLY_UNBUILD
  }

  /**
   * Bill of Materials
   */
  @FieldType.select
  billofmaterials: number

  /**
   * Bill of Materials Revision
   */
  @FieldType.select
  billofmaterialsrevision: number

  /**
   * Quantity Built
   */
  @FieldType.float
  built: number

  /**
   * Class
   */
  @FieldType.select
  class: number

  /**
   * Created Date
   */
  @FieldType.datetime
  createddate: Date

  /**
   * Custom Form
   */
  @FieldType.select
  customform: number

  /**
   * Department
   */
  @FieldType.select
  department: number

  /**
   * Has Lines
   */
  @FieldType.checkbox
  haslines: boolean

  /**
   * Inventory Detail Available
   */
  @FieldType.checkbox
  inventorydetailavail: boolean

  /**
   * Inventory Detail Required
   */
  @FieldType.checkbox
  inventorydetailreq: boolean

  /**
   *  Inventory Detail
   */
  @FieldType.subrecord(InventoryDetailBase)
  inventorydetail: InventoryDetailBase

  /**
   * Assembly
   */
  @FieldType.select
  item: number

  /**
   * Last Modified Date
   */
  @FieldType.datetime
  lastmodifieddate: Date

  /**
   * Location
   */
  @FieldType.select
  location: number

  /**
   * Location Uses Bins
   */
  @FieldType.checkbox
  locationusesbins: boolean

  /**
   * Memo
   */
  @FieldType.freeformtext
  memo: string

  /**
   *  Posting Period
   */
  @FieldType.select
  postingperiod: number

  /**
   * Quantity to Unbuild
   */
  @FieldType.float
  quantity: number

  /**
   *  Revision
   */
  @FieldType.select
  revision: number

  /**
   * Revision Memo
   */
  @FieldType.textarea
  revisionmemo: string

  /**
   * Subsidiary
   */
  @FieldType.select
  subsidiary: number

  /**
   * Projected Value
   */
  @FieldType.currency
  total: number

  /**
   * Date
   */
  @FieldType.date
  trandate: Date

  /**
   * Reference #
   */
  @FieldType.freeformtext
  tranid: string

  /**
   * Units
   */
  @FieldType.select
  units: number

  /**
   * Components
   */
  @FieldType.sublist(ComponentSublist)
  component: Sublist<ComponentSublist>
}
