/**
 * Represents an Item Fulfillment (itemfulfillment) transaction type in NetSuite
 */


import {FieldType, NetsuiteRecord} from '../NFT-SS2-2.1.1/DataAccess/Record'
import * as record from 'N/record'
import {SublistLine, SublistFieldType, Sublist} from '../NFT-SS2-2.1.1/DataAccess/Sublist'
import * as moment from "../NFT-SS2-2.1.1/moment"


/**
 * Project resource sublist
 */
export class JobResourcesSublist extends SublistLine {

  @SublistFieldType.currency
  defaultcost: number

  @FieldType.freeformtext
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
  calculatedenddate: moment.Moment

  @FieldType.date
  calculatedenddatebaseline: moment.Moment

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
  datecreated: moment.Moment

  @FieldType.date
  enddate: moment.Moment

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
  lastbaselinedate: moment.Moment

  @FieldType.datetime
  lastmodifieddate: moment.Moment

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
  projectedenddate: moment.Moment

  @FieldType.date
  projectedenddatebaseline: moment.Moment

  @FieldType.select
  projectexpensetype: number

  @FieldType.freeformtext
  stage: string

  @FieldType.date
  startdate: moment.Moment

  @FieldType.date
  startdatebaseline: moment.Moment

  @FieldType.select
  subsidiary: number

  @FieldType.select
  timeapproval: number

  @FieldType.decimalnumber
  timeremaining: number

  @FieldType.sublist(JobResourcesSublist)
  jobresources: Sublist<JobResourcesSublist>
}
