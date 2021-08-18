/**
 * NetSuite Employee Base Record
 */

import { FieldType } from './Record'
import { Entity } from './Entity'
import * as record from 'N/record'
import { SublistFieldType, SublistLine } from './Sublist'

export class RolesSublist extends SublistLine {
   @SublistFieldType.select
   selectedrole: number
}

export class EmployeeBase extends Entity {
   @FieldType.select
   approver: number

   @FieldType.date
   birthdate: Date

   @FieldType.select
   class: number

   @FieldType.select
   department: number

   @FieldType.checkbox
   directdeposit: boolean

   @FieldType.select
   employeestatus: number

   @FieldType.select
   employeetype: number

   @FieldType.select
   gender: string

   @FieldType.checkbox
   giveaccess: boolean

   @FieldType.date
   hiredate: Date

   @FieldType.freeformtext
   homephone: string

   @FieldType.select
   image: number

   @FieldType.checkbox
   isjobresource: boolean

   @FieldType.checkbox
   isjobmanager: boolean

   @FieldType.textarea
   jobdescription: string

   @FieldType.date
   lastreviewdate: Date

   @FieldType.select
   location: number

   @FieldType.select
   maritalstatus: number

   @FieldType.freeformtext
   mobilephone: string

   @FieldType.freeformtext
   officephone: string

   @FieldType.date
   releasedate: Date

   @FieldType.checkbox
   sendemail: boolean

   @FieldType.select
   supervisor: number

   @FieldType.select
   timeapprover: number

   @FieldType.freeformtext
   title: string

   @FieldType.select
   workcalendar: number

   static recordType () {
      return record.Type.EMPLOYEE
   }
}
