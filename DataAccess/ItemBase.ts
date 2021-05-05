import { FieldType, NetsuiteRecord } from './Record'

/**
 * Base class with fields common to all item types
 */
export class ItemBase extends NetsuiteRecord {

   @FieldType.checkbox
   autoleadtime: boolean

   @FieldType.checkbox
   autopreferredstocklevel: boolean

   @FieldType.checkbox
   availabletopartners: boolean

   @FieldType.select
   assetaccount: number

   @FieldType.select
   atpmethod: number

   @FieldType.currency
   averagecost: number

   @FieldType.select
   billingschedule: number

   @FieldType.select
   billpricevariantacct: number

   @FieldType.select
   class: number

   @FieldType.select
   cogsaccount: number

   @FieldType.select
   consumptionunit: number

   @FieldType.checkbox
   copydescription:boolean

   @FieldType.currency
   cost:number

   @FieldType.select
   costcategory:number

   @FieldType.select
   costingmethod:number

   /**
    * This is a 'select' field according to records browser but actually requires the two character country code
    * for values.
    */
   @FieldType.select
   countryofmanufacture: string

   @FieldType.datetime
   createddate: Date

   @FieldType.select
   customform: number

   @FieldType.select
   deferredrevenueaccount:number

   @FieldType.checkbox
   deferrevrec:boolean

   @FieldType.select
   department: number

   @FieldType.textarea
   description:string

   @FieldType.freeformtext
   displayname:string

   @FieldType.freeformtext
   externalid: string

   @FieldType.checkbox
   includechildren:boolean

   @FieldType.select
   incomeaccount:number

   @FieldType.checkbox
   isdonationitem:boolean

   @FieldType.checkbox
   isdropshipitem:boolean

   @FieldType.checkbox
   isgcocompliant:boolean

   @FieldType.checkbox
   isinactive:boolean

   @FieldType.checkbox
   isonline:boolean

   @FieldType.checkbox
   isspecialorderitem:boolean

   @FieldType.checkbox
   isstorepickupallowed:boolean

   @FieldType.select
   itemcondition:number

   @FieldType.freeformtext
   itemid:string

   @FieldType.select
   itemoptions:number

   @FieldType.freeformtext
   itemtype:string

   @FieldType.datetime
   lastmodifieddate: Date

   @FieldType.select
   location: number

   @FieldType.select
   parent:number

   @FieldType.freeformtext
   purchasedescription: string

   @FieldType.select
   revrecschedule: number

   @FieldType.select
   subsidiary: number

   @FieldType.freeformtext
   upccode: string

   @FieldType.select
   taxschedule: number

   @FieldType.checkbox
   tracklandedcost: boolean

   @FieldType.freeformtext
   tranid: string

   @FieldType.select
   units: number

   @FieldType.select
   unitstype: number

   @FieldType.checkbox
   usebins:boolean

   @FieldType.float
   weight:number

   @FieldType.select
   weightunit:number
}
