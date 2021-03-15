/**
 * Represents an Project Task record in NetSuite
 */

import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'

/**
 * Project task resource assignment ( ) sublist
 */
export class AssigneeSublist extends SublistLine {

  @SublistFieldType.select
  billingclass: number

  @SublistFieldType.currency
  cost: number

  @SublistFieldType.float
  estimatedwork: number
  @SublistFieldType.currency
  price: number
  @SublistFieldType.select
  resource: number
  @SublistFieldType.select
  serviceitem: number
  @SublistFieldType.currency
  unitcost: number
  @SublistFieldType.currency
  unitprice: number
  @SublistFieldType.percent
  units: string
}

/**
 * Project Task Base class
 */
export class ProjectTaskBase extends NetsuiteRecord {

  static recordType() { return record.Type.PROJECT_TASK }

  @FieldType.float
  actualwork: number

  @FieldType.checkbox
  bbudgetshowcalculatedlines: boolean

  @FieldType.checkbox
  bbudgetusecalculatedvalues: boolean

  @FieldType.checkbox
  cbudgetshowcalculatedlines: boolean

  @FieldType.checkbox
  cbudgetusecalculatedvalues: boolean

  @FieldType.select
  company: number

  @FieldType.select
  constrainttype: number

  @FieldType.select
  contact: number

  @FieldType.select
  customform: number

  @FieldType.date
  enddate: Date

  @FieldType.datetime
  enddatebaseline: Date

  @FieldType.float
  estimatedwork: number

  @FieldType.float
  estimatedworkbaseline: number

  @FieldType.integernumber
  eventid: number

  @FieldType.freeformtext
  externalid: string

  @FieldType.date
  finishbydate: Date

  @FieldType.currency
  fxrate: string

  @FieldType.checkbox
  ismilestone: boolean

  @FieldType.checkbox
  isoncriticalpath: boolean

  @FieldType.date
  lateend: Date

  @FieldType.date
  latestart: Date

  @FieldType.textarea
  message: string

  @FieldType.checkbox
  nonbillabletask: boolean

  @FieldType.select
  order: number
  @FieldType.select
  owner: number
  @FieldType.select
  parent: number

  @FieldType.freeformtext
  percenttimecomplete: string

  @FieldType.select
  priority: number

  @FieldType.float
  remainingwork: number | string

  @FieldType.float
  slackminutes: number | string

  @FieldType.date
  startdate: Date

  @FieldType.datetime
  startdatebaseline: Date
  // we don't have a type for timeofday so leaving as string for now

  @FieldType.freeformtext
  starttime: string

  @FieldType.select
  status: number

  @FieldType.freeformtext
  title: string

  @FieldType.sublist(AssigneeSublist)
  assignee: Sublist<AssigneeSublist>
}
