
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import * as record from 'N/record'
import { TransactionBase } from './Transaction'
import { FieldType } from './Record'
import { AddressBase } from './AddressBase'

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
   expectedshipdate:Date

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

   @SublistFieldType.freeformtext
   lineuniquekey:string

   @SublistFieldType.integernumber
   linenumber:number

   @SublistFieldType.select
   location:number

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
   revrecstartdate:Date

   @SublistFieldType.date
   revrecenddate:Date

   @SublistFieldType.decimalnumber
   taxrate1:number

   @SublistFieldType.select
   units:number
}

/**
 * 'salesteam' sublist
 */
export class SalesTeamSublist extends SublistLine {

   @SublistFieldType.decimalnumber
   contribution:number

   @SublistFieldType.select
   employee:number

   @SublistFieldType.checkbox
   isprimary:boolean

   @SublistFieldType.select
   salesrole:number
}


/**
 * NetSuite Sales Order Record
 */
export class SalesOrderBase extends TransactionBase {

   static recordType() { return record.Type.SALES_ORDER }

   @FieldType.subrecord(AddressBase)
   billingaddress: AddressBase

   @FieldType.sublist(ItemSublist)
   item: Sublist<ItemSublist>

   @FieldType.select
   paymentmethod: number

   @FieldType.sublist(SalesTeamSublist)
   salesteam: Sublist<SalesTeamSublist>

   @FieldType.select
   shipmethod: number

   @FieldType.subrecord(AddressBase)
   shippingaddress: AddressBase

   @FieldType.currency
   shippingcost: number

   @FieldType.select
   terms: number

   @FieldType.currency
   total: number

   @FieldType.select
   class: number
}
