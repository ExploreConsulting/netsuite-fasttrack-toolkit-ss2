/**
 * NetSuite generic Transaction record
 */

import {SublistLine, SublistFieldType} from './Sublist'
import * as moment from "../moment"
import * as record from 'N/record'
import {TransactionBase} from "./Transaction";

/**
 * NetSuite Sales Order Record
 */
export class SalesOrderBase extends TransactionBase {

   static recordType = record.Type.SALES_ORDER
}


/**
 * Sublist 'item' on the Sales Order record
 */
export class ItemSublist extends SublistLine {

   @SublistFieldType.decimalnumber
   amount:number

   @SublistFieldType.select
   commitinventory:number

   @SublistFieldType.currency
   costestimate:number

   @SublistFieldType.currency
   costestimaterate:number

   @SublistFieldType.checkbox
   deferrevrec:boolean

   @SublistFieldType.textarea
   description:string

   @SublistFieldType.date
   expectedshipdate:moment.Moment

   @SublistFieldType.checkbox
   isclosed:boolean

   @SublistFieldType.checkbox
   isestimate:boolean

   @SublistFieldType.checkbox
   istaxable:boolean


   @SublistFieldType.select
   item: number

   @SublistFieldType.freeformtext
   itemtype:string

   @SublistFieldType.currency
   porate:number

   @SublistFieldType.select
   price:number

   @SublistFieldType.float
   quantity:number

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

/**
 * 'salesteam' sublist
 */
export class SalesTeamSublist extends SublistLine {

   @SublistFieldType.select
   employee:number

   @SublistFieldType.checkbox
   isprimary:boolean

   @SublistFieldType.decimalnumber
   contribution:number
}

