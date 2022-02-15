import { NetsuiteRecord, FieldType } from './Record'
import * as record from 'N/record'

/**
 * NetSuite Department record type
 */
export class DepartmentBase extends NetsuiteRecord {
   /**
    * External ID
    */
   @FieldType.freeformtext
   externalid: string

   /**
    * Include Children
    */
   @FieldType.checkbox
   includechildren: boolean

   /**
    * Is Inactive
    */
   @FieldType.checkbox
   isinactive: boolean

   /**
    * Name
    */
   @FieldType.freeformtext
   name: string

   /**
    * Name No Hierarchy
    */
   @FieldType.freeformtext
   namenohierarchy: string

   /**
    * Parent
    */
   @FieldType.select
   parent: number

   /**
    * Subsidiary
    */
   @FieldType.multiselect
   subsidiary: number[]

   static recordType () {
      return record.Type.DEPARTMENT
   }
}
