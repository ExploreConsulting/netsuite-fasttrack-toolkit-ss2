/**
 * NS Account record - contains definitions for most of the built in fields
 */

import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'


/**
 * NetSuite Account (account)
 */
export class ClassBase extends NetsuiteRecord {
   static recordType() {
      return record.Type.CLASSIFICATION
   }

   @FieldType.freeformtext
   externalid: string

   @FieldType.checkbox
   includechildren: boolean

   @FieldType.checkbox
   isinactive: boolean

   @FieldType.freeformtext
   name: string

   @FieldType.select
   parent: number

   @FieldType.select
   subsidiary: number
}
