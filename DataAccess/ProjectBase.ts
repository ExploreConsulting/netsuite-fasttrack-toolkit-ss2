/**
 * Represents an Project (job) record type in NetSuite
 */

import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'

/**
 * Rev Rec Percent Complete Override sublist
 */
export class PercentCompleteOverrideSublist extends SublistLine {

   @SublistFieldType.freeformtext
   comments: string

   @SublistFieldType.percent
   percent: string

   @SublistFieldType.select
   period: number
}

/**
 * Project resource sublist
 */
export class JobResourcesSublist extends SublistLine {

   @SublistFieldType.currency
   defaultcost: number

   @SublistFieldType.freeformtext
   email: string

   @SublistFieldType.select
   jobresource: number

   @SublistFieldType.currency
   overridencost: number

   @SublistFieldType.select
   role: number

}

/**
 * Project (job) base type
 */
export class ProjectBase extends NetsuiteRecord {

   static recordType = record.Type.JOB

   @FieldType.checkbox
   allowtime: boolean

   @FieldType.checkbox
   allowexpenses: boolean

   @FieldType.freeformtext
   accountnumber: string

   @FieldType.freeformtext
   actualtime: string

   @FieldType.checkbox
   allowallresourcesfortasks: boolean

   @FieldType.checkbox
   applyprojectexpensetypetoall: boolean

   @FieldType.checkbox
   autoname: boolean

   @FieldType.checkbox
   bbudgetshowcalculatedlines: boolean

   @FieldType.checkbox
   bbudgetusecalculatedvalues: boolean

   @FieldType.select
   billingschedule: number

   @FieldType.date
   calculatedenddate: Date

   @FieldType.date
   calculatedenddatebaseline: Date

   @FieldType.select
   category: number

   @FieldType.checkbox
   cbudgetshowcalculatedlines: boolean

   @FieldType.checkbox
   cbudgetusecalculatedvalues: boolean

   @FieldType.textarea
   comments: string

   @FieldType.freeformtext
   companyname: string

   @FieldType.select
   contact: number

   @FieldType.select
   currency: number

   @FieldType.select
   customform: number

   @FieldType.datetime
   datecreated: Date

   @FieldType.date
   enddate: Date

   @FieldType.freeformtext
   entityid: string

   @FieldType.select
   entitystatus: number

   @FieldType.currency
   estimatedcost: number

   @FieldType.currency
   estimatedgrossprofit: number

   @FieldType.freeformtext
   estimatedgrossprofitpercent: string

   @FieldType.currency
   estimatedlaborcost: number

   @FieldType.currency
   estimatedlaborcostbaseline: number

   @FieldType.currency
   estimatedlaborrevenue: number

   @FieldType.currency
   estimatedrevenue: number

   @FieldType.freeformtext
   estimatedtime: string

   @FieldType.freeformtext
   estimatedtimeoverride: string

   @FieldType.freeformtext
   estimatedtimeoverridebaseline: string

   @FieldType.select
   estimaterevrectemplate: number

   @FieldType.freeformtext
   externalid: string

   @FieldType.currency
   fxrate: string

   @FieldType.checkbox
   includecrmtasksintotals: boolean

   @FieldType.checkbox
   isbasecurrency: boolean

   @FieldType.checkbox
   isexempttime: boolean

   @FieldType.checkbox
   isinactive: boolean

   @FieldType.checkbox
   isjob: boolean

   @FieldType.checkbox
   isproductivetime: boolean

   @FieldType.checkbox
   isutilizedtime: boolean

   @FieldType.select
   jobbillingtype: number

   @FieldType.select
   jobitem: number

   @FieldType.currency
   jobprice: number

   @FieldType.select
   jobtype: number

   @FieldType.select
   language: number

   @FieldType.date
   lastbaselinedate: Date

   @FieldType.datetime
   lastmodifieddate: Date

   @FieldType.checkbox
   limittimetoassignees: boolean

   @FieldType.checkbox
   materializetime: boolean

   @FieldType.select
   otherrelationships: number

   @FieldType.select
   parent: number

   @FieldType.freeformtext
   percentcomplete: string

   @FieldType.freeformtext
   percenttimecomplete: string

   @FieldType.date
   projectedenddate: Date

   @FieldType.date
   projectedenddatebaseline: Date

   @FieldType.select
   projectexpensetype: number

   @FieldType.freeformtext
   stage: string

   @FieldType.date
   startdate: Date

   @FieldType.date
   startdatebaseline: Date

   @FieldType.select
   subsidiary: number

   @FieldType.select
   timeapproval: number

   @FieldType.decimalnumber
   timeremaining: number

   @FieldType.sublist(JobResourcesSublist)
   jobresources: Sublist<JobResourcesSublist>

   @FieldType.sublist(PercentCompleteOverrideSublist)
   percentcompleteoverride: Sublist<PercentCompleteOverrideSublist>
}
