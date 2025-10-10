/**
 * Credit Card Refund Base Record
 */
import * as record from 'N/record'
import { TransactionBase } from './Transaction'
import { SublistFieldType, SublistLine } from './Sublist'
import { FieldType } from './Record'

/**
 * NetSuite Credit Card Refund Record
 */
export class CreditCardRefundBase extends TransactionBase {
   static override recordType() { return record.Type.CREDIT_CARD_REFUND as const }

   @FieldType.select
   account: number

   @FieldType.currency
   balance: number

   @FieldType.select
   class: number

   @FieldType.checkbox
   cleared: boolean

   @FieldType.date
   cleareddate: Date

   @FieldType.datetime
   createddate: Date

   @FieldType.select
   currency: number

   @FieldType.freeformtext
   currencyname: string

   @FieldType.freeformtext
   currencysymbol: string

   @FieldType.select
   customform: number

   @FieldType.select
   department: number

   @FieldType.select
   entity: number

   @FieldType.freeformtext
   entity_nexus_country: string

   @FieldType.select
   entitynexus: number

   @FieldType.currency
   exchangerate: number

   @FieldType.freeformtext
   externalid: string

   @FieldType.checkbox
   isbasecurrency: boolean

   @FieldType.datetime
   lastmodifieddate: Date

   @FieldType.select
   location: number

   @FieldType.freeformtext
   memo: string

   @FieldType.select
   nexus: number

   @FieldType.freeformtext
   nexus_country: string

   @FieldType.select
   postingperiod: number

   @FieldType.select
   subsidiary: number

   @FieldType.freeformtext
   taxperiod: string

   @FieldType.date
   taxpointdate: Date

   @FieldType.checkbox
   taxpointdateoverride: boolean

   @FieldType.currency
   total: number

   @FieldType.date
   trandate: Date

   @FieldType.freeformtext
   tranid: string

   @FieldType.freeformtext
   transactionnumber: string

   @FieldType.radio
   trantype: boolean

   @FieldType.freeformtext
   updatecurrency: string

   @FieldType.currency
   usertotal: number

}
/**
 * Sublist 'item' on Credit Card Refunds
 */
export class ItemSublist extends SublistLine {

   @SublistFieldType.currency
   amount: number

   @SublistFieldType.freeformtext
   billvariancestatus: string

   @SublistFieldType.select
   catchupperiod: number

   @SublistFieldType.select
   class: number

   @SublistFieldType.select
   customer: number

   @SublistFieldType.checkbox
   deferrevrec: boolean

   @SublistFieldType.select
   department: number

   @SublistFieldType.freeformtext
   description: string

   @SublistFieldType.freeformtext
   id: string

   @SublistFieldType.checkbox
   isbillable: boolean

   @SublistFieldType.freeformtext
   isvsoebundle: string

   @SublistFieldType.select
   item: number

   @SublistFieldType.freeformtext
   itemsubtype: string

   @SublistFieldType.freeformtext
   itemtype: string

   @SublistFieldType.freeformtext
   line: string

   @SublistFieldType.integernumber
   linenumber: number

   @SublistFieldType.freeformtext
   linked: string

   @SublistFieldType.select
   location: number

   @SublistFieldType.freeformtext
   matrixtype: string

   @SublistFieldType.namevaluelist
   options: string

   @SublistFieldType.freeformtext
   printitems: string

   @SublistFieldType.float
   quantity: number

   @SublistFieldType.rate
   rate: number

   @SublistFieldType.freeformtext
   rateschedule: string

   @SublistFieldType.freeformtext
   vendorname: string

}
/**
 * Sublist 'expense' on Credit Card Refunds
 */
export class ExpenseSublist extends SublistLine {

   @SublistFieldType.select
   account: number

   @SublistFieldType.currency
   amount: number

   @SublistFieldType.freeformtext
   category: string

   @SublistFieldType.select
   class: number

   @SublistFieldType.select
   customer: number

   @SublistFieldType.select
   department: number

   @SublistFieldType.integernumber
   expenseitem: number

   @SublistFieldType.checkbox
   isbillable: boolean

   @SublistFieldType.integernumber
   line: number

   @SublistFieldType.select
   location: number

   @SublistFieldType.freeformtext
   memo: string

   @SublistFieldType.integernumber
   numrules: number
}
/**
 * Sublist 'reimbursements' on Credit Card Refunds
 */
export class ReimbursementsSublist extends SublistLine {

   @SublistFieldType.freeformtext
   id: string
}
