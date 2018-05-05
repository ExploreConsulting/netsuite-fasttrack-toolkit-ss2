/**
 * NetSuite Purchase Order Record
 */

import * as record from 'N/record'
import {TransactionBase} from "NFT/DataAccess/Transaction";
import {SublistLine, SublistFieldType} from "NFT/DataAccess/Sublist"
import {FieldType} from "NFT/DataAccess/Record"

/**
 * NetSuite Purchase Order Record
 */
export class Base extends TransactionBase {
   static recordType = record.Type.PURCHASE_ORDER

   @FieldType.select
   approvalstatus:number

}

/**
 * Sublist 'item' on purchase orders
 */
export class ItemSublist extends SublistLine {

   @SublistFieldType.select
   item:number

   @SublistFieldType.decimalnumber
   quantity:number

   @SublistFieldType.decimalnumber
   amount:number

   @SublistFieldType.decimalnumber
   rate:number

   @SublistFieldType.select
   department:number
}
