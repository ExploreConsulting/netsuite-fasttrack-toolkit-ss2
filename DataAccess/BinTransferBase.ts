/**
 * Represents a Bin Transfer (bintransfer) record type in NetSuite
 */

import {FieldType, NetsuiteRecord} from './Record'
import * as record from 'N/record'
import {SublistLine, SublistFieldType, Sublist} from './Sublist'
import * as moment from "../moment"

/**
 * represents the Adjustments sublist on Bin Transfer records
 */
export class AdjustmentsSublistLine extends SublistLine {

   @SublistFieldType.freeformtext
   description:string

   @SublistFieldType.select
   item:number

   @SublistFieldType.freeformtext
   itemunitslabel:string

   @SublistFieldType.freeformtext
   line:string

   @SublistFieldType.freeformtext
   preferredbin:string

   @SublistFieldType.float
   quantity:number
}

/**
 * NetSuite Bin Transfer record
 */
export class Base extends NetsuiteRecord {

   static recordType = record.Type.BIN_TRANSFER

   @FieldType.datetime
   createddate:moment.Moment

   @FieldType.freeformtext
   externalid:string

   @FieldType.datetime
   lastmodifieddate:moment.Moment

   @FieldType.select
   location:number

   @FieldType.freeformtext
   memo:string

   @FieldType.select
   subsidiary:number

   @FieldType.currency
   total:number

   @FieldType.date
   trandate:moment.Moment

   @FieldType.sublist(AdjustmentsSublistLine)
   inventory: Sublist<AdjustmentsSublistLine>
}

