/**
 * NetSuite Email Template Record Type
 */
import {FieldType, NetsuiteRecord} from './Record'

/**
 * NetSuite Email Template Record Type (emailtemplate)
 */
export class EmailTemplate extends NetsuiteRecord {
   static override recordType() { return 'emailtemplate' }

   @FieldType.checkbox
   addcompanyaddress: boolean

   @FieldType.checkbox
   addunsubscribelink: boolean

   @FieldType.select
   campaigndomain: number

   @FieldType.textarea
   content: string

   @FieldType.textarea
   description: string

   @FieldType.freeformtext
   externalid: string

   @FieldType.checkbox
   isinactive: boolean

   @FieldType.checkbox
   isprivate: boolean

   @FieldType.select
   mediaitem: number

   @FieldType.freeformtext
   name: string

   @FieldType.select
   restricttogroup: number

   @FieldType.freeformtext
   subject: string
}
