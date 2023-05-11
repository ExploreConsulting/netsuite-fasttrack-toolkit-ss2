/**
 * NS Account record - contains definitions for most of the built in fields
 */

import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
/**
 * Localization sublist (localizations)
 */
export class LocalizationSublist extends SublistLine {

   @SublistFieldType.select
   accountingcontext: number

   @SublistFieldType.freeformtext
   acctname: string

   @SublistFieldType.freeformtext
   acctnumber: string

   @SublistFieldType.freeformtext
   legalname: string

   @SublistFieldType.select
   locale: number
}

/**
 * NetSuite Account (account)
 */
export class AccountBase extends NetsuiteRecord {
   static recordType() {
      return record.Type.ACCOUNT
   }

   @FieldType.freeformtext
   acctname: string

   @FieldType.freeformtext
   accountnumber: string

   @FieldType.select
   accttype: number

   @FieldType.freeformtext
   accttype2: string

   @FieldType.select
   billableexpensesacct: number

   @FieldType.select
   cashflowrate: number

   @FieldType.select
   category1099misc: number

   @FieldType.select
   class: number

   @FieldType.select
   currency: number

   @FieldType.select
   deferralacct: number

   @FieldType.select
   department: number

   @FieldType.freeformtext
   description: string

   @FieldType.checkbox
   eliminate: boolean

   @FieldType.freeformtext
   externalid: string

   @FieldType.select
   generalrate: number

   @FieldType.checkbox
   includechildren: boolean

   @FieldType.checkbox
   inventory: boolean

   @FieldType.checkbox
   isinactive: boolean

   @FieldType.textarea
   legalname: string

   @FieldType.select
   location: number

   @FieldType.freeformtext
   openingbalance: string

   @FieldType.select
   parent: number

   @FieldType.select
   restricttoaccountingbook: number

   @FieldType.checkbox
   revalue: boolean

   @FieldType.multiselect
   subsidiary: number[]

   @FieldType.date
   trandate: Date

   @FieldType.select
   unit: number

   @FieldType.select
   unitstype: number

   @FieldType.sublist(LocalizationSublist)
   localizations: Sublist<LocalizationSublist>
}
