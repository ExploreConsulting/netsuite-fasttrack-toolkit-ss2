/**
 * Represents the Revenue Arrangement NetSuite record (used with ARM)
 * @module
 */

import {FieldType, NetsuiteRecord} from "./Record"
import {Sublist, SublistFieldType, SublistLine} from "./Sublist"
import * as record from "N/record"

/**
 * The 'revenueelement' sublist on Revenue Arrangement records
 */
export class RevenueElementSublist extends SublistLine {

   @SublistFieldType.select
   allocationtype: number

   @SublistFieldType.date
   amortizationenddate: Date

   @SublistFieldType.date
   amortizationstartdate: Date

   @SublistFieldType.decimalnumber
   fairvalue: number

   @SublistFieldType.decimalnumber
   calculatedamount: number

   @SublistFieldType.select
   contractexpenseacct: number

   @SublistFieldType.select
   contractexpenseoffsetacct: number

   @SublistFieldType.decimalnumber
   costamortizationamount: number

   @SublistFieldType.select
   deferralaccount: number

   @SublistFieldType.date
   revrecenddate: Date

   @SublistFieldType.checkbox
   fairvalueoverride: boolean

   /**
    * undocumented field but is there
    */
   @SublistFieldType.date
   forecaststartdate: Date

   /**
    * undocumented field but is there
    */
   @SublistFieldType.date
   forecastenddate: Date

   @SublistFieldType.checkbox
   isvsoeprice: boolean

   @SublistFieldType.checkbox
   permitdiscount: boolean

   @SublistFieldType.longtext
   referenceid: string

   @SublistFieldType.select
   recognitionaccount: number

   @SublistFieldType.select
   returnofelement: number

   @SublistFieldType.select
   revenueelement: number

   @SublistFieldType.select
   revenueallocationgroup: number

   @SublistFieldType.decimalnumber
   allocationamount: number

   @SublistFieldType.select
   revenuerecognitionrule: number

   @SublistFieldType.date
   revrecstartdate: Date
}

/**
 * The Revenue Arrangement record type in NetSuite.
 * The records browser (2018.1) does not mention the `revenueelement` sublist but the NS help does.
 */
export class RevenueArrangementBase extends NetsuiteRecord {

   static recordType() { return record.Type.REVENUE_ARRANGEMENT }

   @FieldType.select
   accountingbook: number

   @FieldType.select
   class: number

   @FieldType.checkbox
   compliant: boolean

   @FieldType.checkbox
   contrevhandlingtriggered: boolean

   @FieldType.select
   department: number

   @FieldType.select
   location: number

   @FieldType.longtext
   memo: string

   @FieldType.select
   subsidiary: number

   @FieldType.sublist(RevenueElementSublist)
   revenueelement: Sublist<RevenueElementSublist>
}
