/**
 * Represents an Bin record in NetSuite
 */


import {FieldType, NetsuiteRecord} from './Record'
import * as record from 'N/record'

/**
 * Bin Base Type (bin)
 */
export class BinBase extends NetsuiteRecord {

   static recordType() { return record.Type.BIN }

   @FieldType.freeformtext
   binnumber: string

   @FieldType.freeformtext
   externalid: string

   @FieldType.checkbox
   isinactive: boolean

   @FieldType.select
   location: number

   @FieldType.textarea
   memo: string
}
