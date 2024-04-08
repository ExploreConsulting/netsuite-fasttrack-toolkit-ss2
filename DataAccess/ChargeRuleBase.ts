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
 * Charge Rule 'filters' Sublist
 */
export class FilterSublist extends  SublistLine {

   @SublistFieldType.checkbox
   filterandor:boolean

   @SublistFieldType.checkbox
   filterattr:boolean

   @SublistFieldType.checkbox
   filternot:boolean

   @SublistFieldType.freeformtext
   filterdescr:string

   @SublistFieldType.freeformtext
   filterfilter:string

   @SublistFieldType.freeformtext
   filterleftparens:string

   @SublistFieldType.freeformtext
   filterrightparens:string

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

   @FieldType.decimalnumber
   capmoney: number

   @FieldType.select
   chargeruletype: number

   @FieldType.select
   customform: number

   @FieldType.textarea
   description: string

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
   project	: number

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

   @FieldType.sublist(FilterSublist)
   filters: Sublist<FilterSublist>

   @FieldType.sublist(ResourcesSublist)
   resourcerateoverride: Sublist<ResourcesSublist>

}
