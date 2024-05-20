/**
 * Created by asariego on 4/8/24.
 */
import { FieldType } from './Record'
import * as record from 'N/record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import { TransactionBase } from './Transaction'


/**
 * Charge Rule 'resourcerateoverride' Sublist
 */
export class ResourcesSublist extends  SublistLine {

   @SublistFieldType.select
   name:number

   @SublistFieldType.currency
   rate:number
}


/**
 * NetSuite Charge Rule
 */
export class ChargeRuleBase extends TransactionBase {

   static recordType () { return record.Type.CHARGE_RULE }

   @FieldType.decimalnumber
   amount: number

   @FieldType.select
   billingitem: number

   @FieldType.datetime
   caphours: number

   @FieldType.decimalnumber
   capmoney: number

   @FieldType.select
   captype: number

   @FieldType.select
   chargeruletype: number

   @FieldType.select
   customform: number

   @FieldType.textarea
   description: string

   @FieldType.date
   endbydate: number

   @FieldType.float
   expamtmultiplier: number

   @FieldType.freeformtext
   externalid: string

   @FieldType.freeformtext
   frequency: string

   @FieldType.checkbox
   isinactive: boolean

   @FieldType.freeformtext
   name: string

   @FieldType.checkbox
   noenddate: boolean

   @FieldType.select
   project: number

   @FieldType.select
   projecttask: number

   @FieldType.float
   ratemultiplier: number

   @FieldType.select
   rateroundingtype: number

   @FieldType.select
   ratesourcetype: number

   @FieldType.integernumber
   ruleorder: number

   @FieldType.select
   saleunit: number

   @FieldType.integernumber
   savedsearch: number

   @FieldType.date
   scheduledate: Date

   @FieldType.date
   seriesstartdate: Date

   @FieldType.select
   stage: number

   @FieldType.checkbox
   stopifcapped: boolean

   @FieldType.select
   unitstype:number

   @FieldType.sublist(ResourcesSublist)
   resourcerateoverride: Sublist<ResourcesSublist>

}
