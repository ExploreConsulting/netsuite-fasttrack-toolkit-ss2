/**
 * Represents a Return Authorization (returnauthorization) transaction type in NetSuite
 */


import {FieldType} from './Record'
import * as record from 'N/record'
import {TransactionBase} from "./Transaction";
import {SublistLine, SublistFieldType, Sublist} from './Sublist'
import * as moment from "../moment"


/**
 * Return Authorization Items (item) sublist
 */
export class ItemSublist extends SublistLine {

  @SublistFieldType.currency
  amount:number

  @SublistFieldType.textarea
  description:string

  @SublistFieldType.checkbox
  istaxable:boolean

  @SublistFieldType.select
  item:number

  @SublistFieldType.freeformtext
  itemtype:string

  @SublistFieldType.integernumber
  linenumber:number

  @SublistFieldType.select
  price:number

  @SublistFieldType.float
  quantity:number

  @SublistFieldType.float
  rate:number

  @SublistFieldType.date
  revrecstartdate:moment.Moment

  @SublistFieldType.date
  revrecenddate:moment.Moment

  @SublistFieldType.select
  taxcode:number

  @SublistFieldType.percent
  taxrate1:number

  @SublistFieldType.select
  units:number
}

/**
 * Return Authorization Base Type
 */
export class Base extends TransactionBase {

  static recordType = record.Type.RETURN_AUTHORIZATION

  /**
   * This field shows the transaction this transaction was created from.
   */
  @FieldType.select
  createdfrom:number

  @FieldType.sublist(ItemSublist)
  item: Sublist<ItemSublist>
}
