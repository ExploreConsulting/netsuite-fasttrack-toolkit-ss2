import * as record from 'N/record'
import { FieldType, NetsuiteRecord } from './Record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'

/**
 * the Components (component) sublist on AssemblyBuild records
 */
export class ComponentSublist extends SublistLine {
  @SublistFieldType.freeformtext
  item:string

  @SublistFieldType.integernumber
  linenumber:number

  @SublistFieldType.float
  quantity:number

  @SublistFieldType.float
  quantityonhand:number

  @SublistFieldType.float
  unitcost:number
}

/**
 * NetSuite Assembly Build (assemblybuild) transaction type.
 * Note it does not inherit from our transaction base because it has a differing subset of fields documented in the
 * records browser
 */
export class AssemblyBuildBase extends NetsuiteRecord {

  static recordType: record.Type = record.Type.ASSEMBLY_BUILD

  @FieldType.select
  billofmaterials:number

  @FieldType.select
  billofmaterialsrevision:number

  @FieldType.float
  buildable:number

  @FieldType.select
  class:number

  @FieldType.datetime
  createddate:Date

  @FieldType.select
  customform:number

  @FieldType.select
  department:number

  @FieldType.freeformtext
  externalid:string

  /**
   * Select the assembly item you want to build. You must create assembly item records first before you can build assembly items.
   */
  @FieldType.select
  item:number

  @FieldType.datetime
  lastmodifieddate:Date

  @FieldType.select
  location:number

  @FieldType.freeformtext
  memo:string

  @FieldType.select
  postingperiod:number

  /**
   * Enter the number of assembly items you want to build or unbuild. You cannot build a number higher than the number
   * in the Buildable Quantity (buildable) field. You cannot unbuild a number higher than the number in the Built field.
   */
  @FieldType.float
  quantity:number

  @FieldType.select
  revision:number

  @FieldType.textarea
  revisionmemo:string

  @FieldType.select
  subsidiary:number

  @FieldType.date
  trandate:Date | string

  @FieldType.freeformtext
  tranid:string

  @FieldType.select
  units:number

  @FieldType.sublist(ComponentSublist)
  component: Sublist<ComponentSublist>
}
