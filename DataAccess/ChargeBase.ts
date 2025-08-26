/**
 * NetSuite Charge Record
 */
import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'

/**
 * NetSuite Charge {charge} record type
 */
export class ChargeBase extends NetsuiteRecord {

   static override recordType() { return record.Type.CHARGE as const }

   @FieldType.decimalnumber
   amount: number

   @FieldType.select
   billingaccount: number

   @FieldType.select
   billingitem: number

   @FieldType.select
   billto: number

   @FieldType.date
   chargedate: Date

   @FieldType.select
   chargetype: number

   @FieldType.select
   class: number

   @FieldType.datetime
   createddate: Date

   @FieldType.select
   currency: number

   @FieldType.select
   department: number

   @FieldType.freeformtext
   description: string

   @FieldType.select
   invoice: number

   @FieldType.freeformtext
   invoiceline: string

   @FieldType.select
   location: number

   @FieldType.select
   projecttask: number

   @FieldType.float
   quantity: number

   @FieldType.decimalnumber
   rate: number

   @FieldType.select
   rule: number

   @FieldType.freeformtext
   runid: string

   @FieldType.select
   salesorder: number

   @FieldType.select
   salesorderline: number

   @FieldType.select
   stage: number

   @FieldType.select
   subscriptionline: number

   @FieldType.select
   timerecord: number

   @FieldType.select
   transaction: number

   @FieldType.select
   transactionline: number

   @FieldType.select
   use: number
}
