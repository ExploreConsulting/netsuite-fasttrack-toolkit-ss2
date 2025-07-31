import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'

/**
 * Project Task Base class
 */
export class TaskBase extends NetsuiteRecord {
   /**
    * Private task
    */
   @FieldType.checkbox
   accesslevel: boolean

   /**
    * Actual Time
    */
   @FieldType.freeformtext
   actualtime: string

   /**
    * Assigned To
    */
   @FieldType.select
   assigned: number | string

   /**
    * Company
    */
   @FieldType.select
   company: number | string

   /**
    * Contact
    */
   @FieldType.select
   contact: number | string

   /**
    * Due Date
    */
   @FieldType.date
   duedate: Date

   /**
    * Due Date
    */
   @FieldType.freeformtext
   enddate: string

   /**
    * End Time
    */
   @FieldType.freeformtext
   endtime: string

   /**
    * End Time Picker
    */
   @FieldType.select
   endtimepicker: string

   /**
    * Initial Time Budget
    */
   @FieldType.freeformtext
   estimatedtime: string

   /**
    * Current Time Budget
    */
   @FieldType.freeformtext
   estimatedtimeoverride: string

   /**
    * Group
    */
   @FieldType.freeformtext
   group: string

   /**
    * Message
    */
   @FieldType.textarea
   message: string

   /**
    * Milestone
    */
   @FieldType.select
   milestone: number | string

   /**
    * Created By
    */
   @FieldType.freeformtext
   owner: string

   /**
    * Parent Task
    */
   @FieldType.select
   parent: number | string

   /**
    * Percent Complete
    */
   @FieldType.percent
   percentcomplete: string

   /**
    * Percent Time Complete
    */
   @FieldType.percent
   percenttimecomplete: string

   /**
    * Priority
    */
   @FieldType.select
   priority: number | string

   /**
    * Reminder
    */
   @FieldType.select
   reminderminutes: number | string

   /**
    * Reminder Type
    */
   @FieldType.select
   remindertype: number | string

   /**
    * Notify Assignee by Email
    */
   @FieldType.checkbox
   sendemail: boolean

   /**
    * Start Date
    */
   @FieldType.date
   startdate: Date

   /**
    * Start Time
    */
   @FieldType.freeformtext
   starttime: string

   /**
    * Start Time Picker
    */
   @FieldType.select
   starttimepicker: number | string

   /**
    * Status
    */
   @FieldType.select
   status: number | string

   /**
    * Support Case
    */
   @FieldType.select
   supportcase: number | string

   /**
    * Reserve Time
    */
   @FieldType.checkbox
   timedevent: boolean

   /**
    * Time Remaining
    */
   @FieldType.freeformtext
   timeremaining: string

   /**
    * Timezone
    */
   @FieldType.freeformtext
   timezone: string

   /**
    * Title
    */
   @FieldType.freeformtext
   title: string

   /**
    * Transaction
    */
   @FieldType.select
   transaction: number | string

   /**
    * Record type
    */
   static override recordType(): record.Type {
      return record.Type.TASK
   }

}
