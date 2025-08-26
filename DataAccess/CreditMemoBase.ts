/**
 * Created by shawn on 4/15/16.
 */

import { FieldType } from './Record'
import * as record from 'N/record'
import { TransactionBase } from './Transaction'
import { SublistFieldType, SublistLine } from './Sublist'
import { AddressBase } from './AddressBase'

export class CreditMemoBase extends TransactionBase {

   static override recordType() { return record.Type.CREDIT_MEMO }

   @FieldType.select
   account:number

   @FieldType.currency
   amountpaid:number

   @FieldType.currency
   amountremaining:number

   @FieldType.currency
   applied:number

   @FieldType.checkbox
   autoapply:boolean

   @FieldType.currency
   balance:number

   @FieldType.subrecord(AddressBase)
   billingaddress: AddressBase

   @FieldType.select
   class:number

   @FieldType.select
   currency:number

   @FieldType.subrecord(AddressBase)
   shippingaddress: AddressBase

   @FieldType.currency
   subtotal:number

   @FieldType.currency
   total:number

   @FieldType.currency
   unapplied:number
}


export class ItemSublist extends SublistLine {

   @SublistFieldType.date
   revrecstartdate:Date
   
   @SublistFieldType.date
   revrecenddate:Date
   
   @SublistFieldType.select
   item:number

   @SublistFieldType.currency
   amount:number

   @SublistFieldType.decimalnumber
   quantity:number

   @SublistFieldType.decimalnumber
   rate:number

   @SublistFieldType.select
   taxcode:number

   @SublistFieldType.decimalnumber
   taxrate1:number

   @SublistFieldType.checkbox
   autoapply:boolean
}

export class ApplySublist extends SublistLine {
   @SublistFieldType.currency
   amount:number

   @SublistFieldType.checkbox
   apply:boolean

   @SublistFieldType.select
   createdfrom:number

   @SublistFieldType.freeformtext
   refnum:string
}
