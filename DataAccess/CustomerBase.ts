/**
 * NS Base customer record - contains definitions for most of the built in fields
 */

import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'

/**
 * The addressbook 'subrecord'. In SS2.0 this is mostly treated as a normal record object.
 * However I caution against trying to create new instances of it, only passing an existing record
 * to the constructor. For example, on the customer record you can get an address sublist record
 * with Record.getSublistSubrecord() then pass the returned record to the Address constructor.
 * Currently this has only been tested for read access to aqddress properties defined below.
 */
export class AddressBase extends NetsuiteRecord {

   @FieldType.freeformtext
   addr1:string

   @FieldType.freeformtext
   addr2:string

   @FieldType.freeformtext
   addr3:string

   @FieldType.freeformtext
   addressee:string

   /**
    * note this field name differs from the 'records browser' documentation
    */
   @FieldType.freeformtext
   addrphone:string

   @FieldType.freeformtext
   addrtext:string

   @FieldType.freeformtext
   attention:string

   @FieldType.freeformtext
   city:string

   @FieldType.select
   country:number

   @FieldType.freeformtext
   state:string

   @FieldType.freeformtext
   zip:string

   @FieldType.checkbox
   override:boolean
}


/**
 * The address _sublist_ on customer records, not to be confused with the Address _subrecord_.
 * Customer address info is split between this sublist and the subrecord pointed to by the _addressbook_ field.
 */
class AddressSublist extends SublistLine {

   /**
    * Address subrecord
    */
   get addressbookaddress() : AddressBase {
      return new AddressBase(this.nsrecord.getSublistSubrecord({
         sublistId:'addressbook',
         fieldId:'addressbookaddress',
         line: this._line
      }))
   }

   @SublistFieldType.freeformtext
   attention:string

   @SublistFieldType.checkbox
   defaultbilling:boolean

   @SublistFieldType.checkbox
   defaultshipping:boolean

   @SublistFieldType.freeformtext
   displaystate:string

   @SublistFieldType.select
   dropdownstate:number

   @SublistFieldType.integernumber
   id: number

   @SublistFieldType.integernumber
   internalid:number

   @SublistFieldType.checkbox
   isresidential: boolean

   @SublistFieldType.freeformtext
   label: string

   @SublistFieldType.checkbox
   override:boolean

   @SublistFieldType.freeformtext
   phone:string

   @SublistFieldType.freeformtext
   state:string

   @SublistFieldType.freeformtext
   zip:string
}


export class CustomerBase extends NetsuiteRecord {
   static recordType = record.Type.CUSTOMER

   @FieldType.freeformtext
   accountnumber:string

   @FieldType.select
   category:number

   @FieldType.textarea
   comments:string

   @FieldType.freeformtext
   companyname:string

   @FieldType.select
   currency:number

   @FieldType.select
   customform:number

   @FieldType.datetime
   datecreated:Date

   @FieldType.email
   email:string

   @FieldType.freeformtext
   entityid:string

   @FieldType.select
   entitystatus:number

   @FieldType.freeformtext
   externalid:string

   @FieldType.freeformtext
   fax:string

   @FieldType.freeformtext
   firstname:string

   @FieldType.checkbox
   isinactive:boolean

   @FieldType.checkbox
   isperson:boolean

   @FieldType.datetime
   lastmodifieddate:Date

   @FieldType.select
   language:number

   @FieldType.freeformtext
   lastname:string

   @FieldType.select
   parent:number

   @FieldType.freeformtext
   phone:string

   @FieldType.select
   salesrep:number

   @FieldType.select
   subsidiary:number

   @FieldType.checkbox
   taxable:boolean

   @FieldType.select
   taxitem:number

   @FieldType.select
   terms:number

   @FieldType.sublist(AddressSublist)
   addressbook: Sublist<AddressSublist>
}


export class ContactsSublist extends SublistLine {

   @SublistFieldType.select
   contact:number

   @SublistFieldType.email
   email:string

   @SublistFieldType.checkbox
   giveaccess:boolean

   @SublistFieldType.checkbox
   passwordconfirm:boolean

   @SublistFieldType.select
   role:number

   @SublistFieldType.checkbox
   sendemail:boolean

    /**
     * Password strength
     */
   @SublistFieldType.freeformtext
   strength:string
}
