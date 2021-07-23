/**
 * NetSuite Employee Base Record
 */

import { FieldType } from "./Record";
import { Entity } from "./Entity";
import * as record from "N/record";
import { SublistFieldType, SublistLine } from "./Sublist";

export class RolesSublist extends SublistLine {
   @SublistFieldType.select
   selectedrole: number;
}

export class EmployeeBase extends Entity {
   static recordType() {
      return record.Type.EMPLOYEE;
   }

   @FieldType.select
   class: number;

   @FieldType.select
   department: number;

   @FieldType.select
   employeestatus: number;

   @FieldType.select
   employeetype: number;

   @FieldType.checkbox
   giveaccess: boolean;

   @FieldType.date
   hiredate: Date;

   @FieldType.textarea
   jobdescription: string;

   @FieldType.freeformtext
   officephone: string;

   @FieldType.checkbox
   sendemail: boolean;

   @FieldType.select
   supervisor: number;

   @FieldType.select
   timeapprover: number;
}
