/**
 * NS Base lead record - contains definitions for most of the built in fields
 */

import { FieldType } from './Record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import * as record from 'N/record'
import { AddressBase } from './AddressBase'
import { Entity } from './Entity'

/**
 * Address sublist
 */
export class AddressSublist extends SublistLine {
   @SublistFieldType.subrecord(AddressBase)
   addressbookaddress: AddressBase

   @SublistFieldType.freeformtext
   attention: string

   @SublistFieldType.freeformtext
   city: string

   @SublistFieldType.select
   country: number

   @SublistFieldType.checkbox
   defaultbilling: boolean

   @SublistFieldType.checkbox
   defaultshipping: boolean

   @SublistFieldType.freeformtext
   displaystate: string

   @SublistFieldType.select
   dropdownstate: number

   @SublistFieldType.integernumber
   id: number

   @SublistFieldType.integernumber
   internalid: number

   @SublistFieldType.checkbox
   isresidential: boolean

   @SublistFieldType.freeformtext
   label: string

   @SublistFieldType.checkbox
   override: boolean

   @SublistFieldType.freeformtext
   phone: string

   @SublistFieldType.freeformtext
   state: string

   @SublistFieldType.freeformtext
   zip: string
}

/**
 * Contacts sublist
 */
export class ContactsSublist extends SublistLine {
   @SublistFieldType.select
   contact: number

   @SublistFieldType.email
   email: string

   @SublistFieldType.checkbox
   giveaccess: boolean

   @SublistFieldType.checkbox
   passwordconfirm: boolean

   @SublistFieldType.select
   role: number

   @SublistFieldType.checkbox
   sendemail: boolean

   @SublistFieldType.freeformtext
   strength: string
}

export class CurrenciesSublist extends SublistLine {
   @SublistFieldType.currency
   balance: number

   @SublistFieldType.currency
   consolbalance: number

   @SublistFieldType.currency
   consoldepositbalance: number

   @SublistFieldType.currency
   consoloverduebalance: number

   @SublistFieldType.currency
   consolunbilledorders: number

   @SublistFieldType.select
   currency: number

   @SublistFieldType.freeformtext
   currencyformatsample: string

   @SublistFieldType.currency
   depositbalance: number

   @SublistFieldType.freeformtext
   displaysymbol: string

   @SublistFieldType.currency
   overduebalance: number

   @SublistFieldType.checkbox
   overridecurrencyformat: boolean

   @SublistFieldType.select
   symbolplacement: number

   @SublistFieldType.currency
   unbilledorders: number
}

export class DownloadsSublist extends SublistLine {
   @SublistFieldType.date
   expiration: Date

   @SublistFieldType.select
   file: number

   @SublistFieldType.textarea
   licensecode: string

   @SublistFieldType.integernumber
   remainingdownloads: number
}

export class GroupPricingSublist extends SublistLine {
   @SublistFieldType.select
   group: number

   @SublistFieldType.select
   level: number
}

export class ItemPricingSublist extends SublistLine {
   @SublistFieldType.select
   currency: number

   @SublistFieldType.select
   item: number

   @SublistFieldType.select
   level: number

   @SublistFieldType.currency
   price: number
}

export class PartnersSublist extends SublistLine {
   @SublistFieldType.percent
   contribution: number

   @SublistFieldType.freeformtext
   customer: string

   @SublistFieldType.freeformtext
   id: string

   @SublistFieldType.checkbox
   isprimary: boolean

   @SublistFieldType.select
   partner: number

   @SublistFieldType.select
   partnerrole: number
}

export class SalesTeamSublist extends SublistLine {
   @SublistFieldType.percent
   contribution: number

   @SublistFieldType.freeformtext
   customer: string

   @SublistFieldType.select
   employee: number

   @SublistFieldType.freeformtext
   id: string

   @SublistFieldType.checkbox
   isprimary: boolean

   @SublistFieldType.freeformtext
   issalesrep: string

   @SublistFieldType.select
   salesrole: number
}

/**
 * Lead record in NetSuite
 */
export class LeadBase extends Entity {
   @FieldType.select
   accessrole: number

   @FieldType.checkbox
   autoname: boolean

   @FieldType.select
   buyingreason: number

   @FieldType.select
   buyingtimeframe: boolean

   @FieldType.integernumber
   consoldaysoverdue: number

   @FieldType.select
   creditholdoverride: number

   @FieldType.freeformtext
   currencyprecision: string

   @FieldType.integernumber
   daysoverdue: number

   @FieldType.select
   defaultbankaccount: number

   @FieldType.select
   draccount: number

   @FieldType.checkbox
   emailtransactions: boolean

   @FieldType.currency
   estimatedbudget: number

   @FieldType.select
   fxaccount: number

   @FieldType.select
   globalsubscriptionstatus: number

   @FieldType.select
   image: number

   @FieldType.checkbox
   isbudgetapproved: boolean

   @FieldType.freeformtext
   keywords: string

   @FieldType.datetime
   lastvisit: string

   @FieldType.select
   leadsource: number

   @FieldType.freeformtext
   middlename: string

   @FieldType.select
   negativenumberformat: number

   @FieldType.select
   numberformat: number

   @FieldType.select
   partner: number

   @FieldType.select
   prefccprocessor: number

   @FieldType.select
   pricelevel: number

   @FieldType.freeformtext
   printoncheckas: string

   @FieldType.checkbox
   printtransactions: boolean

   @FieldType.select
   receivablesaccount: number

   @FieldType.freeformtext
   referrer: string

   @FieldType.freeformtext
   resalenumber: string

   @FieldType.select
   salesgroup: number

   @FieldType.select
   salesreadiness: number

   @FieldType.integernumber
   salesrep: number

   @FieldType.select
   sourcewebsite: number

   @FieldType.freeformtext
   stage: string

   @FieldType.checkbox
   syncpartnerteams: boolean

   @FieldType.checkbox
   syncsalesteams: boolean

   @FieldType.checkbox
   taxable: boolean

   @FieldType.checkbox
   taxexempt: boolean

   @FieldType.select
   taxfractionunit: number

   @FieldType.select
   taxrounding: number

   @FieldType.select
   territory: number

   @FieldType.freeformtext
   title: string

   @FieldType.select
   unsubscribe: number

   @FieldType.integernumber
   visits: number

   @FieldType.freeformtext
   weblead: string

   @FieldType.sublist(AddressSublist)
   addressbook: Sublist<AddressSublist>
   @FieldType.sublist(ContactsSublist)
   contactroles: Sublist<ContactsSublist>
   @FieldType.sublist(DownloadsSublist)
   download: Sublist<DownloadsSublist>
   @FieldType.sublist(GroupPricingSublist)
   grouppricing: Sublist<GroupPricingSublist>
   @FieldType.sublist(ItemPricingSublist)
   itempricing: Sublist<ItemPricingSublist>
   @FieldType.sublist(PartnersSublist)
   partners: Sublist<PartnersSublist>
   @FieldType.sublist(SalesTeamSublist)
   salesteam: Sublist<SalesTeamSublist>

   static recordType () { return record.Type.LEAD }
}
