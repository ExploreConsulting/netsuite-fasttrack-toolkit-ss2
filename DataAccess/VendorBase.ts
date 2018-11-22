/**
 * Netsuite Vendor base Record
 */
import { FieldType } from './Record'
import { Entity } from './Entity'
import * as record from 'N/record'

/**
 * VendorBase
 */
export class VendorBase extends Entity {

   static recordType = record.Type.VENDOR

   @FieldType.freeformtext
   bcn: string

   @FieldType.currency
   creditlimit: number

   @FieldType.checkbox
   emailtransactions: boolean

   @FieldType.select
   expenseaccount: number

   @FieldType.checkbox
   faxtransactions: boolean

   @FieldType.checkbox
   giveaccess: boolean

   @FieldType.select
   incoterm: number

   @FieldType.checkbox
   is1099eligible: boolean

   @FieldType.checkbox
   isjobresourcevend: boolean

   @FieldType.currency
   laborcost: number

   @FieldType.currency
   openingbalance: number

   @FieldType.select
   openingbalanceaccount: number

   @FieldType.date
   openingbalancedate: Date

   @FieldType.select
   payablesaccount: number

   @FieldType.float
   purchaseorderamount: number

   @FieldType.float
   purchaseorderquantity: number

   @FieldType.float
   purchaseorderquantitydiff: number

   @FieldType.float
   receiptamount: number

   @FieldType.float
   receiptquantity: number

   @FieldType.float
   receiptquantitydiff: number

   @FieldType.select
   representingsubsidiary: number

   @FieldType.checkbox
   sendemail: boolean

   @FieldType.select
   taxfractionunit: number

   @FieldType.freeformtext
   taxidnum: string

   @FieldType.freeformtext
   vatregnumber: string

   @FieldType.select
   workcalendar:number
}



