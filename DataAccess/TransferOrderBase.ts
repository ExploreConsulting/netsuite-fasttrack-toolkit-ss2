/**
 *  Represents a Transfer Order (transferorder) transaction type in NetSuite
 */

import { SublistFieldType, SublistLine } from './Sublist'
import * as record from 'N/record'
import { TransactionBase } from './Transaction'
import { FieldType } from './Record'

/**
 * NetSuite Transfer Order Record
 */
export class TransferOrderBase extends TransactionBase {
   static recordType = record.Type.TRANSFER_ORDER

   @FieldType.select
   "class": number

   @FieldType.select
   createdfrom: number

   @FieldType.select
   employee: number

   @FieldType.checkbox
   firmed: boolean

   @FieldType.select
   nexus: number

   @FieldType.select
   orderstatus: number

   @FieldType.checkbox
   shipcomplete: boolean

   @FieldType.date
   shipdate: Date

   @FieldType.currency
   subtotal: number

   @FieldType.currency
   total: number

   @FieldType.select
   transferlocation: number

   @FieldType.checkbox
   useitemcostastransfercost: boolean
}

/**
 * Sublist 'item' on the Tranfer Order record
 */
export class ItemSublist extends SublistLine {

   @SublistFieldType.currency
   amount: number

   @SublistFieldType.select
   catchupperiod: number

   @SublistFieldType.select
   commitinventory: number

   @SublistFieldType.checkbox
   deferrevrec: string

   @SublistFieldType.textarea
   description: string

   @SublistFieldType.date
   expectedreceiptdate: string

   @SublistFieldType.date
   expectedshipdate: string

   @SublistFieldType.checkbox
   isclosed: boolean

   @SublistFieldType.select
   item: number

   @SublistFieldType.integernumber
   linenumber: number

   @SublistFieldType.float
   quantity: number

   @SublistFieldType.float
   quantityavailable: number

   @SublistFieldType.float
   quantitybackordered: number

   @SublistFieldType.float
   quantitycommitted: number

   @SublistFieldType.float
   quantityfulfilled: number

   @SublistFieldType.float
   quantityreceived: number

   @SublistFieldType.currency
   rate: number

   @SublistFieldType.select
   units: number
}

