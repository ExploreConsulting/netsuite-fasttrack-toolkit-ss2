/**
 * NetSuite cash sale Transaction record
 */

import {SublistLine, SublistFieldType} from './Sublist'
import * as record from 'N/record'
import {TransactionBase} from "./Transaction";
import {FieldType} from "./Record"
import * as moment from "../moment"
/**
 * NetSuite Cashsale Record
 */
export class Base extends TransactionBase {

   static recordType = record.Type.CASH_SALE

   @FieldType.select
   account:number

   @FieldType.freeformtext
   billaddr1:string

   @FieldType.freeformtext
   billaddr2:string

   @FieldType.freeformtext
   billaddr3:string

   @FieldType.freeformtext
   billphone:string

   @FieldType.freeformtext
   billstate:string

   @FieldType.freeformtext
   billzip:string

   @FieldType.freeformtext
   billaddress:string

   @FieldType.select
   createdfrom: number

   @FieldType.select
   currency:number

   @FieldType.currency
   discounttotal:number

   @FieldType.freeformtext
   fob:string

   @FieldType.currency
   giftcertapplied:number

   @FieldType.currency
   handlingcost:number

   @FieldType.select
   handlingtaxcode:number

   @FieldType.checkbox
   istaxable:boolean

   @FieldType.select
   leadsource:number

   @FieldType.freeformtext
   linkedtrackingnumbers:string

   @FieldType.select
   partner:number

   @FieldType.select
   paymentmethod:number

   @FieldType.select
   promocode:number

   @FieldType.currency
   subtotal:number

   @FieldType.select
   taxitem:number

   @FieldType.checkbox
   tobeemailed:boolean

   @FieldType.checkbox
   tobefaxed:boolean

   @FieldType.checkbox
   tobeprinted:boolean

   @FieldType.freeformtext
   trackingnumbers:string

   @FieldType.currency
   total:number
}

/**
 * The 'item' sublist on invoices
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




