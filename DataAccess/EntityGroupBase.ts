/**
 * Represents an (Entity) Group record type in NetSuite
 */

import { FieldType, NetsuiteRecord } from './Record'
import { SublistLine, SublistFieldType, Sublist } from './Sublist'

/**
 * EntityGroup Group Members sublist
 */
export class GroupMembersSublist extends SublistLine {

  @SublistFieldType.select
  accesslevel: number

  @SublistFieldType.freeformtext
  bouncedaddress: string

  @SublistFieldType.percent
  contribution: string

  @SublistFieldType.email
  email: string

  @SublistFieldType.select
  employeemember: number

  @SublistFieldType.checkbox
  isprimary: boolean

  @SublistFieldType.freeformtext
  memberemail: string

  @SublistFieldType.freeformtext
  membername: string

  @SublistFieldType.freeformtext
  memberphone: string

  @SublistFieldType.freeformtext
  phone: string
}

/**
 * EntityGroup (entitygroup) netsuite type
 */
export class Base extends NetsuiteRecord {

  static recordType() { return 'entitygroup' }

  @FieldType.textarea
  comments: string

  @FieldType.email
  email: string

  @FieldType.freeformtext
  externalid: string

  @FieldType.freeformtext
  groupname: string

  @FieldType.select
  groupowner: number

  @FieldType.freeformtext
  grouptypename: string

  @FieldType.checkbox
  isfunctionalteam: boolean

  @FieldType.checkbox
  isinactive: boolean

  @FieldType.checkbox
  ismanufacturingworkcenter: boolean

  @FieldType.checkbox
  isprivate: boolean

  @FieldType.checkbox
  isproductteam: boolean

  @FieldType.checkbox
  issalesrep: boolean

  @FieldType.select
  issuerole: number

  @FieldType.checkbox
  issupportrep: boolean

  @FieldType.integernumber
  laborresources: number

  @FieldType.integernumber
  machineresources: number

  @FieldType.select
  restrictiongroup: number

  @FieldType.select
  savedsearch: number

  @FieldType.select
  subsidiary: number

  @FieldType.select
  workcalendar: number

  @FieldType.sublist(GroupMembersSublist)
  groupmembers: Sublist<GroupMembersSublist>
}
