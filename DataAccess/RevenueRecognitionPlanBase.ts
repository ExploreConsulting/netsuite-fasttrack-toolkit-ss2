/**
 * NetSuite Revenue Recognition Plan record. (revenueplan)
 */

/**
 * dummy comment for tsdoc
 */
import { FieldType, NetsuiteRecord } from './Record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import * as record from 'N/record'

export class PlannedRevenueSublist extends SublistLine {
   @SublistFieldType.currency
   amount: number

   @SublistFieldType.date
   dateexecuted: Date

   @SublistFieldType.select
   deferredrevenueaccount: number

   @SublistFieldType.checkbox
   isrecognized: boolean

   @SublistFieldType.freeformtext
   journal: string

   @SublistFieldType.percent
   percentrecognizedinperiod: string

   @SublistFieldType.percent
   percenttotalrecognized: string

   @SublistFieldType.select
   plannedperiod: number

   @SublistFieldType.select
   recognitionaccount: number
}

/**
 * NetSuite Revenue Recognition Plan record. (revenueplan)
 */
export class RevenueRecognitionPlanBase extends NetsuiteRecord {

   static recordType() { return record.Type.REVENUE_PLAN }

   @FieldType.currency
   amount: number

   @FieldType.select
   catchupperiod: number

   @FieldType.freeformtext
   comments: string

   @FieldType.select
   createdfrom: number

   @FieldType.currency
   exchangerate: number

   @FieldType.checkbox
   holdrevenuerecognition: boolean

   @FieldType.currency
   initialamount: number

   @FieldType.select
   item: number

   @FieldType.integernumber
   recognitionperiod: number

   @FieldType.freeformtext
   recordnumber: string

   @FieldType.currency
   remainingdeferredbalance: number

   @FieldType.select
   revenueplantype: number

   @FieldType.select
   revenuerecognitionrule: number

   @FieldType.date
   revrecenddate: Date

   @FieldType.date
   revrecstartdate: Date

   @FieldType.select
   status: number

   @FieldType.integernumber
   terminmonths: number

   @FieldType.currency
   totalrecognized: number

   @FieldType.sublist(PlannedRevenueSublist)
   plannedrevenue: Sublist<PlannedRevenueSublist>
}
