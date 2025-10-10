/**
 * Represents a Vendor-Subsidiary Relationship record in NetSuite
 */

import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'

/**
 * Vendor-Subsidiary Relationship Record Type
 */
export class VendorSubsidiaryRelationshipBase extends NetsuiteRecord {

   static override recordType() { return record.Type.VENDOR_SUBSIDIARY_RELATIONSHIP }
   @FieldType.currency
   balance: string

   @FieldType.currency
   balancebase: string

   @FieldType.freeformtext
   basecurrency: string

   @FieldType.currency
   creditlimit: string

   @FieldType.select
   entity: number

   @FieldType.freeformtext
   externalid: string

   @FieldType.checkbox
   isprimarysub: boolean

   @FieldType.freeformtext
   primarycurrency: string

   @FieldType.select
   subsidiary: number

   @FieldType.select
   taxitem: number

   @FieldType.currency
   unbilledorders: string

   @FieldType.currency
   unbilledordersbase: string
}
