import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import * as record from 'N/record'
import { TransactionBase } from './Transaction'
import { FieldType } from './Record'
import { AddressBase } from './AddressBase'

/**
 * Sublist 'item' on the Sales Order record
 */
export class ItemSublist extends SublistLine {

   @SublistFieldType.currency
   altsalesamt: number

   @SublistFieldType.freeformtext
   amortizationperiod: string

   @SublistFieldType.freeformtext
   amortizationtype: string

   @SublistFieldType.decimalnumber
   amount: number

   @SublistFieldType.freeformtext
   billvariancestatus: string

   @SublistFieldType.select
   catchupperiod: number

   @SublistFieldType.freeformtext
   chargetype: string

   @SublistFieldType.select
   commitinventory: number

   @SublistFieldType.currency
   costestimate: number

   @SublistFieldType.currency
   costestimaterate: number

   @SublistFieldType.select
   costestimatetype: number

   @SublistFieldType.select
   createdpo: number

   @SublistFieldType.select
   createpo: number

   @SublistFieldType.checkbox
   createwo: boolean

   @SublistFieldType.freeformtext
   daysbeforeexpiration: string

   @SublistFieldType.textarea
   description: string

   @SublistFieldType.checkbox
   deferrevrec: boolean

   @SublistFieldType.checkbox
   excludefromraterequest: boolean

   @SublistFieldType.date
   expectedshipdate: Date

   @SublistFieldType.checkbox
   fromjob: boolean

   @SublistFieldType.freeformtext
   giftcertfrom: string

   @SublistFieldType.textarea
   giftcertmessage: string

   @SublistFieldType.email
   giftcertrecipientemail: string

   @SublistFieldType.freeformtext
   giftcertrecipientname: string

   @SublistFieldType.freeformtext
   id: string

   @SublistFieldType.checkbox
   isclosed: boolean

   @SublistFieldType.checkbox
   isestimate: boolean

   @SublistFieldType.checkbox
   istaxable: boolean

   @SublistFieldType.freeformtext
   isvsoebundle: string

   @SublistFieldType.select
   item: number

   @SublistFieldType.freeformtext
   itemfulfillmentchoice: string

   @SublistFieldType.freeformtext
   itemsubtype: string

   @SublistFieldType.freeformtext
   itemtype: string

   @SublistFieldType.textarea
   licensecode: string

   @SublistFieldType.freeformtext
   line: string

   @SublistFieldType.freeformtext
   lineuniquekey: string

   @SublistFieldType.integernumber
   linenumber: number

   @SublistFieldType.select
   location: number

   @SublistFieldType.checkbox
   locationautoassigned: boolean

   @SublistFieldType.freeformtext
   matrixtype: string

   @SublistFieldType.checkbox
   noautoassignlocation: boolean

   @SublistFieldType.freeformtext
   options: string

   @SublistFieldType.decimalnumber
   orderpriority: number

   @SublistFieldType.currency
   porate: number

   @SublistFieldType.freeformtext
   povendor: string

   @SublistFieldType.select
   price: number

   @SublistFieldType.freeformtext
   printitems: string

   @SublistFieldType.decimalnumber
   quantity: number

   @SublistFieldType.decimalnumber
   quantityavailable: number

   @SublistFieldType.decimalnumber
   quantitybackordered: number

   @SublistFieldType.decimalnumber
   quantitybilled: number

   @SublistFieldType.decimalnumber
   quantitycommitted: number

   @SublistFieldType.decimalnumber
   quantityfulfilled: number

   @SublistFieldType.decimalnumber
   quantityrevcommitted: number

   @SublistFieldType.decimalnumber
   rate: number

   @SublistFieldType.freeformtext
   rateschedule: string

   @SublistFieldType.select
   revrecschedule: number

   @SublistFieldType.date
   revrecstartdate: Date

   @SublistFieldType.date
   revrecenddate: Date

   @SublistFieldType.select
   shipaddress: number

   @SublistFieldType.select
   shipcarrier: number

   @SublistFieldType.select
   shipmethod: number

   @SublistFieldType.select
   subscription: number

   @SublistFieldType.select
   taxcode: number

   @SublistFieldType.decimalnumber
   taxrate1: number

   @SublistFieldType.select
   units: number

   @SublistFieldType.currency
   vsoeallocation: number

   @SublistFieldType.currency
   vsoeamount: number

   @SublistFieldType.select
   vsoedeferral: number

   @SublistFieldType.checkbox
   vsoedelivered: boolean

   @SublistFieldType.checkbox
   vsoeisestimate: boolean

   @SublistFieldType.select
   vsoepermitdiscount: number

   @SublistFieldType.currency
   vsoeprice: number

   @SublistFieldType.select
   vsoesopgroup: number

}

/**
 * 'salesteam' sublist
 */
export class SalesTeamSublist extends SublistLine {

   @SublistFieldType.decimalnumber
   contribution: number

   @SublistFieldType.select
   employee: number

   @SublistFieldType.checkbox
   isprimary: boolean

   @SublistFieldType.select
   salesrole: number
}

/**
 * NetSuite Sales Order Record
 */
export class SalesOrderBase extends TransactionBase {

   @FieldType.checkbox
   allowemptycards: boolean

   @FieldType.currency
   althandlingcost: number

   @FieldType.currency
   altsalestotal: number

   @FieldType.currency
   altshippingcost: number

   @FieldType.freeformtext
   authcode: string

   @FieldType.currency
   balance: number

   @FieldType.select
   billaddresslist: number

   @FieldType.subrecord(AddressBase)
   billingaddress: AddressBase

   @FieldType.select
   billingschedule: number

   @FieldType.freeformtext
   billisresidential: string

   @FieldType.checkbox
   canhavestackable: boolean

   @FieldType.checkbox
   ccapproved: boolean

   @FieldType.select
   ccavsstreetmatch: number

   @FieldType.select
   ccavszipmatch: number

   @FieldType.freeformtext
   ccexpiredate: string

   @FieldType.freeformtext
   cchold: string

   @FieldType.textarea
   ccholdetails: string

   @FieldType.select
   cciavsmatch: number

   @FieldType.freeformtext
   ccname: string

   @FieldType.freeformtext
   ccnumber: string

   @FieldType.freeformtext
   ccprocessoraccount: string

   @FieldType.freeformtext
   ccsecuritycode: string

   @FieldType.select
   ccsecuritycodematch: number

   @FieldType.freeformtext
   ccstreet: string

   @FieldType.freeformtext
   cczipcode: string

   @FieldType.select
   class: number

   @FieldType.currency
   consolidatebalance: number

   @FieldType.select
   couponcode: number

   @FieldType.select
   createdfrom: number

   @FieldType.select
   creditcard: number

   @FieldType.select
   creditcardprocessor: number

   @FieldType.select
   currency: number

   @FieldType.freeformtext
   currencyname: string

   @FieldType.freeformtext
   currencysymbol: string

   @FieldType.freeformtext
   customercode: string

   @FieldType.freeformtext
   debitcardissueno: string

   @FieldType.currency
   deferredrevenue: number

   @FieldType.select
   discountitem: number

   @FieldType.decimalnumber
   discountrate: number

   @FieldType.currency
   discounttotal: number

   @FieldType.select
   draccount: number

   @FieldType.date
   enddate: Date | null

   @FieldType.select
   entitynexus: number

   @FieldType.select
   entitytaxregnum: number

   @FieldType.currency
   estgrossprofit: number

   @FieldType.percent
   estgrossprofitpercent: string

   @FieldType.currency
   exchangerate: number

   @FieldType.checkbox
   excludecommission: boolean

   @FieldType.freeformtext
   fob: string

   @FieldType.select
   fxaccount: number

   @FieldType.checkbox
   getauth: boolean

   @FieldType.currency
   giftcertapplied: number

   @FieldType.currency
   handlingcost: number

   @FieldType.freeformtext
   handlingtax1rate: string

   @FieldType.select
   handlingtaxcode: number

   @FieldType.checkbox
   ignoreavs: boolean

   @FieldType.checkbox
   ignorecsc: boolean

   @FieldType.freeformtext
   inputpnrefnum: string

   @FieldType.select
   intercostatus: number

   @FieldType.select
   intercotransaction: number

   @FieldType.checkbox
   isbasecurrency: boolean

   @FieldType.freeformtext
   isdefaultshippingrequest: string

   @FieldType.checkbox
   ismultishipto: boolean

   @FieldType.freeformtext
   ispurchasecard: string

   @FieldType.checkbox
   isrecurringpayment: boolean

   @FieldType.sublist(ItemSublist)
   item: Sublist<ItemSublist>

   @FieldType.select
   leadsource: number

   @FieldType.freeformtext
   linkedtrackingnumbers: string

   @FieldType.textarea
   message: string

   @FieldType.select
   messagesel: number

   @FieldType.freeformtext
   muccpromocodeinstance: string

   @FieldType.date
   nextbill: Date | null

   @FieldType.select
   nexus: number

   @FieldType.currency
   onetime: number

   @FieldType.select
   opportunity: number

   @FieldType.checkbox
   overridehold: boolean

   @FieldType.checkbox
   overrideholdchecked: boolean

   @FieldType.decimalnumber
   overrideshippingcost: number

   @FieldType.select
   partner: number

   @FieldType.datetime
   paymenteventdate: Date | null

   @FieldType.select
   paymenteventholdreason: number

   @FieldType.freeformtext
   paymenteventpurchasedatasent: string

   @FieldType.select
   paymenteventresult: number

   @FieldType.freeformtext
   paymenteventtype: string

   @FieldType.freeformtext
   paymenteventupdatedby: string

   @FieldType.select
   paymentmethod: number

   @FieldType.freeformtext
   paypalauthid: string

   @FieldType.checkbox
   paypalprocess: boolean

   @FieldType.freeformtext
   paypalstatus: string

   @FieldType.freeformtext
   paypaltranid: string

   @FieldType.freeformtext
   pnrefnum: string

   @FieldType.select
   promocode: number

   @FieldType.freeformtext
   promocodepluginimpl: string

   @FieldType.currency
   recognizedrevenue: number

   @FieldType.currency
   recurannually: number

   @FieldType.currency
   recurmonthly: number

   @FieldType.currency
   recurquarterly: number

   @FieldType.currency
   recurweekly: number

   @FieldType.freeformtext
   returntrackingnumbers: string

   @FieldType.freeformtext
   revcommitstatus: string

   @FieldType.freeformtext
   revenuestatus: string

   @FieldType.checkbox
   revreconrevcommitment: boolean

   @FieldType.date
   saleseffectivedate: Date | null

   @FieldType.select
   salesgroup: number

   @FieldType.sublist(SalesTeamSublist)
   salesteam: Sublist<SalesTeamSublist>

   @FieldType.select
   shipaddresslist: number

   @FieldType.checkbox
   shipcomplete: boolean

   @FieldType.date
   shipdate: Date | null

   @FieldType.freeformtext
   shipisresidential: string

   @FieldType.select
   shipmethod: number

   @FieldType.freeformtext
   shipoverride: string

   @FieldType.subrecord(AddressBase)
   shippingaddress: AddressBase

   @FieldType.currency
   shippingcost: number

   @FieldType.freeformtext
   shippingcostoverridden: string

   @FieldType.freeformtext
   shippingtax1rate: string

   @FieldType.select
   shippingtaxcode: number

   @FieldType.freeformtext
   softdescriptor: string

   @FieldType.freeformtext
   source: string

   @FieldType.date
   startdate: Date | null

   @FieldType.select
   subsidiarytaxregnum: number

   @FieldType.currency
   subtotal: number

   @FieldType.checkbox
   syncpartnerteams: boolean

   @FieldType.checkbox
   syncsalesteams: boolean

   @FieldType.checkbox
   taxdetailsoverride: boolean

   @FieldType.select
   taxitem: number

   @FieldType.decimalnumber
   taxrate: number

   @FieldType.checkbox
   taxregoverride: boolean

   @FieldType.currency
   taxtotal: number

   @FieldType.select
   terms: number

   @FieldType.freeformtext
   threedstatuscode: string

   @FieldType.checkbox
   tobeemailed: boolean

   @FieldType.checkbox
   tobefaxed: boolean

   @FieldType.checkbox
   tobeprinted: boolean

   @FieldType.currency
   total: number

   @FieldType.currency
   totalcostestimate: number

   @FieldType.checkbox
   tranisvsoebundle: boolean

   @FieldType.currency
   unbilledorders: number

   @FieldType.freeformtext
   validfrom: string

   @FieldType.checkbox
   vsoeautocalc: boolean

   static override recordType() { return record.Type.SALES_ORDER }

}

