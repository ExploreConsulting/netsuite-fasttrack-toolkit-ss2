/**
 * NS Base service item record - contains definitions for most of the built in fields
 */

import { FieldType, NetsuiteRecord } from './Record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import * as record from "N/record";

/**
 * NetSuite generic Service used as a common base class for 'service-item-like' records,
 * This is meant to be inherited by concrete record types to avoid duplicating effort on fields.
 * Note that this inheritance hierarchy emerged empirically - it's not documented by NetSuite.
 *
 * It contains fields common to all 'service item' records in NS
 */

export class AccountingBooksSublist extends SublistLine{
   @SublistFieldType.select
   acocuntingbook: number

   @SublistFieldType.select
   amoritizationtemplate: number

   @SublistFieldType.select
   createrevenueplanson: number

   @SublistFieldType.select
   revenuerecognitionrule: number

   @SublistFieldType.select
   revrecforecastrule: number

   @SublistFieldType.select
   revrecschedule: number

   @SublistFieldType.checkbox
   sameasprimaryamoritization: boolean

   @SublistFieldType.checkbox
   sameasprimaryrevrec: boolean
}

export class HierarchyVersionsSublist extends SublistLine{
   @SublistFieldType.select
   hierarchynode: number

   @SublistFieldType.checkbox
   isincluded: boolean
}

export class WebSiteListSublist extends SublistLine{
   @SublistFieldType.select
   category: number

   @SublistFieldType.freeformtext
   categorydescription: string

   @SublistFieldType.checkbox
   isdefault: boolean

   @SublistFieldType.select
   website: number
}

export class ItemTranslationSublist extends SublistLine{
   @SublistFieldType.freeformtext
   displayname: string

   @SublistFieldType.textarea
   featureddescription: string

   @SublistFieldType.freeformtext
   language: string

   @SublistFieldType.textarea
   nopricemessage: string

   @SublistFieldType.textarea
   outofstockmessage: string

   @SublistFieldType.freeformtext
   storedisplayname: string
}

export class ServiceBase extends NetsuiteRecord{
   static recordType() { return record.Type.SERVICE_ITEM }

   @FieldType.integernumber
   amortizationperiod: number

   @FieldType.integernumber
   auctionquantity: number

   @FieldType.select
   auctiontype: number

   @FieldType.select
   billingschedule: number

   @FieldType.select
   class: number

   @FieldType.currency
   cost: number

   @FieldType.select
   costcategory: number

   @FieldType.currency
   costestimate: number

   @FieldType.select
   costestimatetype: number

   @FieldType.freeformtext
   costunits: string

   @FieldType.datetime
   createddate: string

   @FieldType.checkbox
   createjob: boolean

   @FieldType.freeformtext
   currency: string

   @FieldType.select
   customform: number

   @FieldType.select
   department: number

   @FieldType.freeformtext
   displayname: string

   @FieldType.checkbox
   dontshowprice: boolean

   @FieldType.select
   expenseaccount: number

   @FieldType.freeformtext
   externalid: string

   @FieldType.textarea
   featureddescription: string

   @FieldType.checkbox
   gallery: boolean

   @FieldType.checkbox
   includechildren: boolean

   @FieldType.select
   incomeaccount: boolean

   @FieldType.integernumber
   internalid: number

   @FieldType.checkbox
   isinactive: boolean

   @FieldType.checkbox
   isonline: boolean

   @FieldType.select
   issueproduct: number

   @FieldType.select
   itemcondition: number

   @FieldType.freeformtext
   itemid: string

   @FieldType.select
   itemoptions: number

   @FieldType.freeformtext
   itemtype: string

   @FieldType.select
   location: number

   @FieldType.select
   matrixtype: number

   @FieldType.integernumber
   maximumquantity: number

   @FieldType.integernumber
   minimumquantity: number

   @FieldType.checkbox
   mossapplies: boolean

   @FieldType.freeformtext
   nopricemessage: string

   @FieldType.checkbox
   offersupport: boolean

   @FieldType.select
   outofstockbehvaior: number

   @FieldType.select
   overheadtype: number

   @FieldType.textarea
   pagetitle: string

   @FieldType.select
   parent: number

   @FieldType.select
   pricinggroup: number

   @FieldType.integernumber
   primarycategory: number

   @FieldType.select
   purchaseunit: number

   @FieldType.currency
   reserveprice: number

   @FieldType.select
   revrecforecastrule: number

   @FieldType.select
   salesunit: number

   @FieldType.select
   subsidiary: number

   @FieldType.select
   taxschedule: number

   @FieldType.freeformtext
   upccode: string

   @FieldType.textarea
   urlcomponent: string

   @FieldType.textarea
   vendorname: string

   @FieldType.freeformtext
   willship: 'T' | 'F'

   @FieldType.sublist(AccountingBooksSublist)
   accountingbookdetail: Sublist<AccountingBooksSublist>

   @FieldType.sublist(HierarchyVersionsSublist)
   hierarchyversions: Sublist<HierarchyVersionsSublist>

   @FieldType.sublist(WebSiteListSublist)
   sitecategory: Sublist<WebSiteListSublist>

   @FieldType.sublist(ItemTranslationSublist)
   translations: Sublist<ItemTranslationSublist>
}
