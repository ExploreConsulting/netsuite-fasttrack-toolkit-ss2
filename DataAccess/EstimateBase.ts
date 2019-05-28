/**
 * NFT Quote/Estimate (estimate) Netsuite record type
 */

import { FieldType } from './Record'
import { TransactionBase } from './Transaction'
import * as record from 'N/record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import { AddressBase } from './AddressBase'

/**
 * Sublist 'item' on the Estimate record
 */
export class ItemSublist extends SublistLine {
   @SublistFieldType.select
   item: number
   @SublistFieldType.integernumber
   quantity: number
   @SublistFieldType.currency
   amount: number
   @SublistFieldType.currency
   rate: number
}

/**
 * Estimate (Quote)
 */
export class EstimateBase extends TransactionBase {

   static recordType = record.Type.ESTIMATE

   @FieldType.currency
   althandlingcost: number | string

   @FieldType.currency
   altsalestotal: number | string

   @FieldType.currency
   altshippingcost: number | string

   @FieldType.currency
   balance: number | string

   @FieldType.subrecord(AddressBase)
   billingaddress: AddressBase

   @FieldType.select
   billaddresslist: number

   @FieldType.select
   class: number

   @FieldType.select
   couponcode: number

   @FieldType.select
   createdfrom: number

   @FieldType.select
   currency: number

   @FieldType.freeformtext
   currencyname: string

   @FieldType.freeformtext
   currencysymbol: string

   @FieldType.select
   discountitem: number

   @FieldType.decimalnumber
   discountrate: number | string

   @FieldType.currency
   discounttotal: number | string

   @FieldType.date
   duedate: Date

   @FieldType.date
   enddate: Date

   @FieldType.select
   entitynexus: number

   @FieldType.select
   entitystatus: number

   @FieldType.select
   forecasttype: number

   @FieldType.checkbox
   istaxable: boolean

   @FieldType.select
   job: number

   @FieldType.select
   leadsource: number

   @FieldType.textarea
   message: string

   @FieldType.select
   messagesel: number

   @FieldType.select
   opportunity: number

   @FieldType.select
   partner: number

   @FieldType.percent
   probability: string | number

   @FieldType.select
   promocode: number

   @FieldType.select
   salesgroup: number

   @FieldType.date
   shipdate: Date

   @FieldType.select
   shipmethod: number

   @FieldType.subrecord(AddressBase)
   shippingaddress: AddressBase

   @FieldType.select
   shippingtaxcode: number


   @FieldType.freeformtext
   title: string

   @FieldType.checkbox
   tobeemailed: boolean

   @FieldType.checkbox
   tobefaxed: boolean

   @FieldType.checkbox
   tobeprinted: boolean

   @FieldType.currency
   total: string | number

   @FieldType.currency
   totalcostestimate: string | number

   @FieldType.checkbox
   visibletocustomer: boolean

   @FieldType.sublist(ItemSublist)
   item: Sublist<ItemSublist>
}
