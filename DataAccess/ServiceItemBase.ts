/**
 * NS Base service item record - contains definitions for most of the built in fields
 */

import { FieldType } from './Record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import * as record from 'N/record'
import { Item } from './Item'

export class AccountingBooksSublist extends SublistLine {
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

export class HierarchyVersionsSublist extends SublistLine {
   @SublistFieldType.select
   hierarchynode: number

   @SublistFieldType.checkbox
   isincluded: boolean
}

export class WebSiteListSublist extends SublistLine {
   @SublistFieldType.select
   category: number

   @SublistFieldType.freeformtext
   categorydescription: string

   @SublistFieldType.checkbox
   isdefault: boolean

   @SublistFieldType.select
   website: number
}

export class ItemTranslationSublist extends SublistLine {
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

/**
 * NetSuite Service Item
 */
export class ServiceItemBase extends Item {
   @FieldType.integernumber
   amortizationperiod: number

   @FieldType.integernumber
   auctionquantity: number

   @FieldType.select
   auctiontype: number

   @FieldType.currency
   costestimate: number

   @FieldType.select
   costestimatetype: number

   @FieldType.freeformtext
   costunits: string

   @FieldType.checkbox
   createjob: boolean

   @FieldType.freeformtext
   currency: string

   @FieldType.checkbox
   dontshowprice: boolean

   @FieldType.select
   expenseaccount: number

   @FieldType.textarea
   featureddescription: string

   @FieldType.checkbox
   gallery: boolean

   @FieldType.integernumber
   internalid: number

   @FieldType.select
   issueproduct: number

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

   static recordType () { return record.Type.SERVICE_ITEM }
}
