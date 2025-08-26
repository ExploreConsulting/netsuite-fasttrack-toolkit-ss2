/**
 * Defines new base record type for support cases. Currently outlining high level fields used for this client.
 */

import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'

/**
 * NetSuite Support Case record type
 */
export class SupportCaseBase extends NetsuiteRecord {
   @FieldType.select
   assigned: number
   @FieldType.select
   category: number
   @FieldType.select
   customform: number
   @FieldType.select
   status: number
   @FieldType.freeformtext
   title: string
   @FieldType.select
   company: number
   @FieldType.checkbox
   emailform: boolean
   @FieldType.checkbox
   messagenew: boolean
   @FieldType.longtext
   incomingmessage: string
   @FieldType.freeformtext
   email: string
   @FieldType.freeformtext
   quicknote: string
   @FieldType.freeformtext
   phone: string
   @FieldType.select
   origin: number
   @FieldType.datetime
   startdate: Date

   static override recordType() { return record.Type.SUPPORT_CASE }
}


