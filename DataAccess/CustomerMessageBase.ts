/**
 * Represents an Customer Message (customermessage) record type in NetSuite
 */

import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'

/**
 * Customer Message (customermessage) Base Type
 */
export class CustomerMessageBase extends NetsuiteRecord {

   static recordType() { return record.Type.CUSTOMER_MESSAGE }

   @FieldType.textarea
   description: string

   @FieldType.freeformtext
   externalid: string

   @FieldType.checkbox
   isinactive: boolean

   @FieldType.freeformtext
   name: string

   @FieldType.checkbox
   preferred: boolean
}
