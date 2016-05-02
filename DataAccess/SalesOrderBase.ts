/**
 * NetSuite generic Transaction record
 */

import {SublistLine, SublistFieldType} from './Sublist'
import * as record from 'N/record'
import {TransactionBase} from "./Transaction";
import {FieldType} from './Record'
import {Sublist} from "../N/record";

/**
 * NetSuite Sales Order Record
 */
export class SalesOrderBase extends TransactionBase {

   static recordType = record.Type.SALES_ORDER
}

/**
 * Sublist 'item' on the Sales Order record
 */
export class SalesOrderBaseLineItem extends SublistLine {

   @SublistFieldType.select
   item:number

   @SublistFieldType.decimalnumber
   quantity:number

   @SublistFieldType.decimalnumber
   amount:number

   @SublistFieldType.decimalnumber
   rate:number

   @SublistFieldType.select
   taxcode:number

   @SublistFieldType.select
   department:number

   @SublistFieldType.date
   revrecstartdate:moment.Moment

   @SublistFieldType.date
   revrecenddate:moment.Moment

   @SublistFieldType.decimalnumber
   taxrate1:number
}

export class SalesOrderBaseSalesTeam extends SublistLine {

   @SublistFieldType.select
   employee:number

   @SublistFieldType.checkbox
   isprimary:boolean

   @SublistFieldType.decimalnumber
   contribution:number
}
