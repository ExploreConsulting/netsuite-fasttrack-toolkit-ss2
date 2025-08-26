import { NetsuiteRecord, FieldType } from './Record'
import { Sublist, SublistLine, SublistFieldType } from './Sublist'
import { InventoryDetailBase } from './InventoryDetailBase'
import * as record from 'N/record'

/**
 * Purchase Requisition Item Sublist
 */
export class ItemSublist extends SublistLine {

   @SublistFieldType.currency
   amount: number

   @SublistFieldType.select
   class: number

   @SublistFieldType.freeformtext
   createpo: string

   @SublistFieldType.select
   customer: number

   @SublistFieldType.select
   department: number

   @SublistFieldType.freeformtext
   description: string

   /**
    * Inventory Detail subrecord
    */
   @SublistFieldType.subrecord(InventoryDetailBase)
   inventorydetail: InventoryDetailBase

   @SublistFieldType.checkbox
   isbillable: boolean

   @SublistFieldType.checkbox
   isclosed: boolean

   @SublistFieldType.select
   item: number

   @SublistFieldType.freeformtext
   line: string

   @SublistFieldType.select
   linkedorder: number

   @SublistFieldType.freeformtext
   linkedorderstatus: string

   @SublistFieldType.select
   povendor: number

   @SublistFieldType.decimalnumber
   quantity: number

   @SublistFieldType.decimalnumber
   quantityreceived: number

   @SublistFieldType.decimalnumber
   rate: number

   @SublistFieldType.textarea
   serialnumbers: string

   @SublistFieldType.select
   units: number

   @SublistFieldType.freeformtext
   vendorname: string
}

/**
 * Purchase Requisition Expense Sublist
 */
export class ExpenseSublist extends SublistLine {

   @SublistFieldType.select
   account: number

   @SublistFieldType.currency
   amount: number

   @SublistFieldType.select
   category: number

   @SublistFieldType.select
   class: number

   @SublistFieldType.select
   customer: number

   @SublistFieldType.select
   department: number

   @SublistFieldType.checkbox
   isbillable: boolean

   @SublistFieldType.checkbox
   isclosed: boolean

   @SublistFieldType.freeformtext
   line: string

   @SublistFieldType.select
   linkedorder: number

   @SublistFieldType.freeformtext
   linkedorderstatus: string

   @SublistFieldType.select
   location: number

   @SublistFieldType.freeformtext
   memo: string

   @SublistFieldType.select
   povendor: number

}

/**
 * NetSuite Purchase Requisition record type
 * (known as "Requisition" in record browser)
 */
export class PurchaseRequisitionBase extends NetsuiteRecord {

   static override recordType() { return record.Type.PURCHASE_REQUISITION }

   @FieldType.select
   approvalstatus: number

   @FieldType.select
   class: number

   @FieldType.datetime
   createddate: Date

   @FieldType.select
   createdfrom: number

   @FieldType.select
   currency: number

   @FieldType.select
   customform: number

   @FieldType.select
   department: number

   @FieldType.date
   duedate: Date

   @FieldType.select
   entity: number | string

   @FieldType.select
   entitynexus: number

   @FieldType.currency
   estimatedtotal: number

   @FieldType.freeformtext
   externalid: string

   @FieldType.freeformtext
   linkedtrackingnumber: string

   @FieldType.select
   location: number

   @FieldType.freeformtext
   memo: string

   @FieldType.textarea
   message: string

   @FieldType.select
   nextapprover: number

   @FieldType.select
   nexus: number

   @FieldType.freeformtext
   returntrackingnumbers: number

   @FieldType.date
   shipdate: Date

   @FieldType.freeformtext
   source: string

   @FieldType.select
   status: number

   @FieldType.freeformtext
   statusRef: string

   @FieldType.select
   subsidiary: number

   @FieldType.select
   terms: number

   @FieldType.currency
   total: number

   @FieldType.freeformtext
   trackingnumbers: string

   @FieldType.date
   trandate: Date

   @FieldType.freeformtext
   tranid: string

   @FieldType.sublist(ItemSublist)
   item: Sublist<ItemSublist>

   @FieldType.sublist(ExpenseSublist)
   expense: Sublist<ExpenseSublist>
}
