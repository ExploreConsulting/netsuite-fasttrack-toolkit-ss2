/**
 * NS Base customer record - contains definitions for most of the built in fields
 */

import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import { AddressBase } from './AddressBase'

/**
 * The address _sublist_ on customer records, not to be confused with the Address _subrecord_.
 * Customer address info is split between this sublist and the subrecord pointed to by the _addressbook_ field.
 */
export class AddressSublist extends SublistLine {

   /**
    * The Address subrecord associated to this line
    *
    * Extend this class and override this property
    * if you want to replace AddressBase with a custom Address subclass.
    *
    * @example
    export class MyCustomAddressClass extends AddressBase {
         // ... custom fields here
    }

    export class MyAddressSublist extends AddressSublist {
      @SublistFieldType.subrecord(MyCustomAddressClass)
      addressbookaddress: MyCustomAddressClass
   }
    */
   @SublistFieldType.subrecord(AddressBase)
   addressbookaddress: AddressBase

   @SublistFieldType.freeformtext
   attention: string

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

export enum CurrencySymbolPlacement {
   BeforeNumber = 1,
   AfterNumber = 2,
}

export class CurrencySublist extends SublistLine {

   @SublistFieldType.currency
   readonly balance: number

   @SublistFieldType.currency
   readonly consolbalance: number

   @SublistFieldType.currency
   readonly consoldepositbalance: number

   @SublistFieldType.currency
   readonly consoloverduebalance: number

   @SublistFieldType.currency
   readonly consolunbilledorders: number

   @SublistFieldType.select
   currency: number

   @SublistFieldType.freeformtext
   readonly currencyformatsample: string

   @SublistFieldType.currency
   readonly depositbalance: number

   @SublistFieldType.freeformtext
   displaysymbol: string

   @SublistFieldType.currency
   readonly overduebalance: number

   @SublistFieldType.checkbox
   overridecurrencyformat: boolean

   @SublistFieldType.select
   symbolplacement: CurrencySymbolPlacement

   @SublistFieldType.currency
   readonly unbilledorders: number
}

export class CustomerBase extends NetsuiteRecord {
   static recordType = record.Type.CUSTOMER

   @FieldType.freeformtext
   accountnumber: string

   @FieldType.select
   category: number

   @FieldType.textarea
   comments: string

   @FieldType.freeformtext
   companyname: string

   @FieldType.select
   currency: number

   @FieldType.select
   customform: number

   @FieldType.datetime
   datecreated: Date

   @FieldType.email
   email: string

   @FieldType.freeformtext
   entityid: string

   @FieldType.select
   entitystatus: number

   @FieldType.freeformtext
   externalid: string

   @FieldType.freeformtext
   fax: string

   @FieldType.freeformtext
   firstname: string

   @FieldType.checkbox
   isinactive: boolean

   @FieldType.freeformtext
   isperson: 'T' | 'F'

   @FieldType.datetime
   lastmodifieddate: Date

   @FieldType.select
   language: number

   @FieldType.freeformtext
   lastname: string

   @FieldType.select
   parent: number

   @FieldType.freeformtext
   phone: string

   @FieldType.select
   pricelevel: number
   
   @FieldType.select
   salesrep: number

   @FieldType.select
   subsidiary: number

   @FieldType.checkbox
   taxable: boolean

   @FieldType.select
   taxitem: number

   @FieldType.select
   terms: number

   @FieldType.sublist(AddressSublist)
   addressbook: Sublist<AddressSublist>

   @FieldType.sublist(CurrencySublist)
   currencySublist: Sublist<CurrencySublist>
}

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

   /**
    * Password strength
    */
   @SublistFieldType.freeformtext
   strength: string
}
