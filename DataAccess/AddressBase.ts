import { FieldType, NetsuiteRecord } from './Record'

/**
 * The addressbook 'subrecord'. In SS2.0 this is mostly treated as a normal record object.
 * However I caution against trying to create new instances of it, only passing an existing record
 * to the constructor. For example, on the customer record you can get an address sublist record
 * with Record.getSublistSubrecord() then pass the returned record to the Address constructor.
 * Currently this has only been tested for read access to aqddress properties defined below.
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
