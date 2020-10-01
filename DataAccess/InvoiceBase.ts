/**
 * NetSuite generic Transaction record
 */

import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import * as record from 'N/record'
import { TransactionBase } from './Transaction'
import { FieldType } from './Record'
import { AddressBase } from './AddressBase'

/**
 * The 'item' sublist on invoices
 */
export class ItemSublist extends SublistLine {

   @SublistFieldType.freeformtext
   account: string

   @SublistFieldType.currency
   amount: number

   @SublistFieldType.textarea
   description: string

   @SublistFieldType.checkbox
   istaxable: boolean

   @SublistFieldType.select
   item: number

   @SublistFieldType.integernumber
   linenumber: number

   @SublistFieldType.select
   price: number

   @SublistFieldType.float
   quantity: number

   @SublistFieldType.float
   rate: number

   @SublistFieldType.date
   revrecstartdate: Date

   @SublistFieldType.date
   revrecenddate: Date

   @SublistFieldType.select
   taxcode: number

   @SublistFieldType.percent
   taxrate1: number

   @SublistFieldType.select
   units: number
}

/**
 * The Billable Expenses (expcost) sublist fields
 */
export class ExpCostSublist extends SublistLine {

   @SublistFieldType.freeformtext
   amortizationperiod: string

   @SublistFieldType.freeformtext
   amortizationtype: string

   @SublistFieldType.currency
   amount: number | string

   @SublistFieldType.checkbox
   apply: boolean

   @SublistFieldType.date
   billeddate: Date

   @SublistFieldType.freeformtext
   category: string

   @SublistFieldType.select
   doc: number

   @SublistFieldType.freeformtext
   employee: string

   @SublistFieldType.freeformtext
   job: string

   @SublistFieldType.integernumber
   line: number

   @SublistFieldType.select
   location: number

   @SublistFieldType.textarea
   memo: string

   @SublistFieldType.currency
   originalamount: number | string

   @SublistFieldType.date
   revrecenddate: Date

   @SublistFieldType.select
   revrecschedule: number

   @SublistFieldType.date
   revrecstartdate: Date

   @SublistFieldType.freeformtext
   taxable: string

   @SublistFieldType.select
   taxcode: number

   @SublistFieldType.percent
   taxrate1: string | number

   @SublistFieldType.checkbox
   isbillable?: boolean

   @SublistFieldType.freeformtext
   url: string
}

/**
 * The Billable Items (itemcost) sublist fields
 */
export class ItemCostSublist extends SublistLine {

   @SublistFieldType.freeformtext
   amortizationperiod: string

   @SublistFieldType.freeformtext
   amortizationtype: string

   @SublistFieldType.currency
   amount: number | string

   @SublistFieldType.checkbox
   apply: boolean

   @SublistFieldType.date
   billeddate: Date

   @SublistFieldType.textarea
   binnumbers: string

   @SublistFieldType.currency
   cost: number | string

   @SublistFieldType.select
   doc: number

   @SublistFieldType.select
   item: number

   @SublistFieldType.freeformtext
   itemcostcount: string

   @SublistFieldType.freeformtext
   job: string

   @SublistFieldType.integernumber
   line: number

   @SublistFieldType.select
   location: number

   @SublistFieldType.freeformtext
   memo: string

   @SublistFieldType.freeformtext
   options: string

   @SublistFieldType.freeformtext
   rateschedule: string

   @SublistFieldType.date
   revrecenddate: Date

   @SublistFieldType.select
   revrecschedule: number

   @SublistFieldType.date
   revrecstartdate: Date

   @SublistFieldType.textarea
   serialnumbers: string

   @SublistFieldType.freeformtext
   taxable: string

   @SublistFieldType.select
   taxcode: number

   @SublistFieldType.percent
   taxrate1: string | number

   @SublistFieldType.freeformtext
   unit: string

   @SublistFieldType.checkbox
   isbillable?: boolean

   @SublistFieldType.freeformtext
   url: string
}

/**
 * NetSuite Invoice Record
 */
export class InvoiceBase extends TransactionBase {

   static recordType = record.Type.INVOICE

   @FieldType.select
   account: number

   @FieldType.currency
   althandlingcost: string | number

   @FieldType.currency
   altshippingcost: string | number

   @FieldType.currency
   amountpaid: number

   @FieldType.currency
   amountremaining: number

   @FieldType.select
   approvalstatus: number

   @FieldType.currency
   balance: number

   @FieldType.subrecord(AddressBase)
   billingaddress: AddressBase

   @FieldType.freeformtext
   billaddress: string

   @FieldType.select
   billaddresslist: number

   @FieldType.freeformtext
   billaddr1: string

   @FieldType.freeformtext
   billaddr2: string

   @FieldType.freeformtext
   billaddr3: string

   @FieldType.freeformtext
   billphone: string

   @FieldType.freeformtext
   billstate: string

   @FieldType.freeformtext
   billzip: string

   @FieldType.select
   billingaccount: number

   @FieldType.checkbox
   canhavestackable: boolean

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

   @FieldType.currency
   discountamount: number

   @FieldType.select
   discountitem: number

   @FieldType.date
   discountdate: Date

   @FieldType.freeformtext
   discountrate: number | string

   @FieldType.freeformtext
   discounttotal: number | string

   @FieldType.date
   duedate: Date

   @FieldType.date
   enddate: Date

   @FieldType.select
   entitynexus: number

   @FieldType.checkbox
   excludecommission: boolean

   @FieldType.freeformtext
   fob: string

   @FieldType.currency
   giftcertapplied: number

   @FieldType.currency
   handlingcost: number

   @FieldType.select
   handlingtaxcode: number

   @FieldType.select
   leadsource: number

   @FieldType.textarea
   message: string

   @FieldType.select
   messagesel: number

   @FieldType.freeformtext
   linkedtrackingnumbers: string

   @FieldType.select
   opportunity: number

   @FieldType.select
   partner: number

   @FieldType.select
   promocode: number

   @FieldType.checkbox
   recurringbill: boolean

   @FieldType.date
   saleseffectivedate: Date

   @FieldType.select
   salesgroup: number

   @FieldType.subrecord(AddressBase)
   shippingaddress: AddressBase

   @FieldType.date
   shipdate: Date

   @FieldType.select
   shipmethod: number

   @FieldType.freeformtext
   shipoverride: string

   @FieldType.select
   taxitem: number

   @FieldType.float
   taxrate: number | string

   @FieldType.checkbox
   taxregoverride: boolean

   @FieldType.checkbox
   tobeemailed: boolean

   @FieldType.checkbox
   tobeprinted: boolean

   @FieldType.checkbox
   tobefaxed: boolean

   @FieldType.currency
   total: number

   @FieldType.currency
   subtotal: number

   @FieldType.freeformtext
   trackingnumbers: string

   @FieldType.checkbox
   tranisvsoebundle: boolean

   @FieldType.checkbox
   vsoeautocalc: boolean

   @FieldType.sublist(ItemSublist)
   item: Sublist<ItemSublist>

   @FieldType.sublist(ExpCostSublist)
   expcost: Sublist<ExpCostSublist>

   @FieldType.sublist(ItemCostSublist)
   itemcost: Sublist<ItemCostSublist>
}



