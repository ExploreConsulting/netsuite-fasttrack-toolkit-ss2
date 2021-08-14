/**
 * NetSuite Inbound Shipment record
 */
import { TransactionBase } from './Transaction'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import { FieldType } from './Record'
import * as record from 'N/record'

/**
 * The 'item' sublist
 */
export class ItemSublist extends SublistLine {
   @SublistFieldType.integernumber
   id: number

   @SublistFieldType.integernumber
   currencyprecision: number

   @SublistFieldType.currency
   expectedrate: number

   @SublistFieldType.checkbox
   fulfillable: boolean

   @SublistFieldType.decimalnumber
   fxrate: number

   @SublistFieldType.checkbox
   inventorydetailavail: boolean

   @SublistFieldType.select
   inventorydetailid: number

   @SublistFieldType.checkbox
   isnumbereditem: boolean

   @SublistFieldType.select
   itemid: number

   @SublistFieldType.freeformtext
   itemtype: string

   @SublistFieldType.decimalnumber
   lineid: number

   @SublistFieldType.decimalnumber
   ownershiptransferscount: number

   @SublistFieldType.select
   pocurrency: number

   @SublistFieldType.currency
   porate: number

   @SublistFieldType.select
   povendor: string | number

   @SublistFieldType.freeformtext
   povendorkey: string | number

   @SublistFieldType.freeformtext
   povendorurl: string

   @SublistFieldType.select
   purchaseorder: string | number

   @SublistFieldType.freeformtext
   purchaseorderkey: string

   @SublistFieldType.freeformtext
   purchaseorderurl: string

   @SublistFieldType.freeformtext
   quantitybilled: number

   @SublistFieldType.decimalnumber
   quantityexpected: number

   @SublistFieldType.decimalnumber
   quantityexpectedorig: number

   @SublistFieldType.decimalnumber
   quantityreceived: number

   @SublistFieldType.decimalnumber
   quantityremaining: number

   @SublistFieldType.select
   receivinglocation: string | number

   @SublistFieldType.select
   relatedtransactions: string | number

   @SublistFieldType.freeformtext
   relatedtransactionsurl: string

   @SublistFieldType.decimalnumber
   sequencenumber: number

   @SublistFieldType.select
   shipmentitem: string | number

   @SublistFieldType.currency
   shipmentitemamount: number

   @SublistFieldType.freeformtext
   shipmentitemdescription: string | number

   @SublistFieldType.date
   shipmentitemeffectivedate: Date

   @SublistFieldType.currency
   shipmentitemexchangerate: number

   @SublistFieldType.checkbox
   shipmentitemfxrateoverriden: boolean

   @SublistFieldType.freeformtext
   shipmentitemkey: string

   @SublistFieldType.freeformtext
   shipmentitemtext: string

   @SublistFieldType.freeformtext
   shipmentitemurl: string

   @SublistFieldType.decimalnumber
   totalunitcost: number

   @SublistFieldType.freeformtext
   tracklandedcost: string | number

   @SublistFieldType.select
   unit: string

   @SublistFieldType.freeformtext
   unitlandedcost: string

   @SublistFieldType.decimalnumber
   unitrate: number

   @SublistFieldType.select
   vendorid: number

   @SublistFieldType.freeformtext
   weightlbs: string | number
}

/**
 * The 'landedcost' sublist
 */
export class LandedCostSublist extends SublistLine {
   @SublistFieldType.select
   landedcostallocationmethod: string | number

   @SublistFieldType.currency
   landedcostamount: number

   @SublistFieldType.select
   landedcostcostcategory: string | number

   @SublistFieldType.select
   landedcostcurrency: number

   @SublistFieldType.float
   landedcostcurrencyprecision: number

   @SublistFieldType.date
   landedcosteffectivedate: Date

   @SublistFieldType.decimalnumber
   landedcostexchangerate: number

   @SublistFieldType.checkbox
   landedcostexchangerateoverriden: boolean

   @SublistFieldType.select
   landedcostid: number

   @SublistFieldType.multiselect
   landedcostshipmentitems: string[] | number[]
}

/**
 * NetSuite Inbound Shipment Record Type
 */
export class InboundShipmentBase extends TransactionBase {
   @FieldType.date
   actualdeliverydate: Date

   @FieldType.date
   actualshippingdate: Date

   @FieldType.freeformtext
   billoflading: string

   @FieldType.date
   expecteddeliverydate: Date

   @FieldType.date
   expectedshippingdate: Date

   @FieldType.freeformtext
   externaldocumentnumber: string

   @FieldType.freeformtext
   inventorydetailuitype: string

   @FieldType.select
   shipmentbasecurrency: number

   @FieldType.select
   shipmentbillingstatus: string

   @FieldType.date
   shipmentcreateddate: Date

   @FieldType.freeformtext
   shipmentmemo: string

   @FieldType.freeformtext
   shipmentnumber: string

   @FieldType.select
   shipmentstatus: string

   @FieldType.freeformtext
   templatestored: string

   @FieldType.freeformtext
   vesselnumber: string

   @FieldType.sublist(ItemSublist)
   items: Sublist<ItemSublist>

   @FieldType.sublist(LandedCostSublist)
   landedcost: Sublist<LandedCostSublist>

   static recordType () {
      return record.Type.INBOUND_SHIPMENT
   }
}
