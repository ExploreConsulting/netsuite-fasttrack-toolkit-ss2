import { FieldType, NetsuiteRecord } from './Record'

/**
 * The addressbook 'subrecord'. In SS2.x this is mostly treated as a normal record object but you can't
 * create or load one from scratch. Typically just reference this type on the appropriate address subrecord
 * property. For example,
 *
 * @example - an NSDAL Customer instance can refer to the first address's subrecord simply as:
 *
 * customer.addressbook[0].addressbookaddress.addr1
 *
 *
 * @example - defining custom addressbook subrecord fields.

 ```typescript

 // define custom fields on address subrecord (optional)
  export class MyCustomAddressClass extends AddressBase {
         // ... define custom address subrecord fields here
    }

  // tell the customer address sublist to use our custom subrecord class
  export class MyAddressSublist extends CustomerAddressSublist {
       @SublistFieldType.subrecord(MyCustomAddressClass)
      addressbookaddress: MyCustomAddressClass
   }
 ```
 */
export class AddressBase extends NetsuiteRecord {

   @FieldType.freeformtext
   addr1: string

   @FieldType.freeformtext
   addr2: string

   @FieldType.freeformtext
   addr3: string

   @FieldType.freeformtext
   addressee: string

   /**
    * note this field name differs from the 'records browser' documentation
    */
   @FieldType.freeformtext
   addrphone: string

   @FieldType.freeformtext
   addrtext: string

   @FieldType.freeformtext
   attention: string

   @FieldType.freeformtext
   city: string

   @FieldType.select
   country: number

   @FieldType.freeformtext
   state: string

   @FieldType.freeformtext
   zip: string

   @FieldType.checkbox
   override: boolean
}
