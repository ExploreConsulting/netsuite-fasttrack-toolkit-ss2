/**
 * Represents a Contact (contact) record type in NetSuite
 */

import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'
import { SublistLine, SublistFieldType, Sublist } from './Sublist'
import { AddressBase } from './AddressBase'

/**
 * The address _sublist_ (addressbook) on Contact records, not to be confused with the Address _subrecord_.
 * Contact address info is split between this sublist and the subrecord pointed to by the _addressbookaddress_ field.
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
   addressid: string

   @SublistFieldType.longtext
   addrtext: string

   @SublistFieldType.freeformtext
   attention: string

   @SublistFieldType.freeformtext
   city: string

   @SublistFieldType.freeformtext
   country: string

   @SublistFieldType.checkbox
   defaultbilling: boolean

   @SublistFieldType.checkbox
   defaultshipping: boolean

   @SublistFieldType.freeformtext
   displaystate: string

   @SublistFieldType.integernumber
   id: number

   @SublistFieldType.integernumber
   internalid: number

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
 * Contact Base Type
 */
export class ContactBase extends NetsuiteRecord {

   static override recordType() { return record.Type.CONTACT }

   @FieldType.email
   altemail: string

   @FieldType.select
   assistant: number

   @FieldType.freeformtext
   assistantphone: string

   @FieldType.select
   category: number

   @FieldType.textarea
   comments: string

   @FieldType.select
   company: number

   @FieldType.integernumber
   contactrole: number

   @FieldType.select
   contactsource: number

   @FieldType.select
   customform: number

   @FieldType.datetime
   datecreated: Date

   @FieldType.address
   defaultaddress: string

   @FieldType.email
   email: string

   @FieldType.freeformtext
   entityid: string

   @FieldType.freeformtext
   externalid: string

   @FieldType.freeformtext
   fax: string

   @FieldType.freeformtext
   firstname: string

   @FieldType.select
   globalsubscriptionstatus: number

   @FieldType.freeformtext
   homephone: string

   @FieldType.select
   image: number

   @FieldType.checkbox
   isinactive: boolean

   @FieldType.checkbox
   isprivate: boolean

   @FieldType.datetime
   lastmodifieddate: Date

   @FieldType.freeformtext
   lastname: string

   @FieldType.freeformtext
   middlename: string

   @FieldType.freeformtext
   mobilephone: string

   @FieldType.freeformtext
   officephone: string

   @FieldType.multiselect
   otherrelationships: number[]

   @FieldType.integernumber
   owner: number

   @FieldType.freeformtext
   phone: string

   @FieldType.freeformtext
   phoneticname: string

   @FieldType.freeformtext
   salutation: string

   @FieldType.select
   subsidiary: number

   @FieldType.select
   supervisor: number

   @FieldType.freeformtext
   supervisorphone: string

   @FieldType.freeformtext
   title: string

   @FieldType.select
   unsubscribe: number

   @FieldType.sublist(AddressSublist)
   addressbook: Sublist<AddressSublist>
}
