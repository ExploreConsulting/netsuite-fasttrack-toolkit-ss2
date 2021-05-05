import * as record from 'N/record'
import { FieldType, NetsuiteRecord } from './Record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'

/**
 * the Members (member) sublist on AssemblyItem (assemblyitem) records
 */
export class MemberSublist extends SublistLine {

   @SublistFieldType.date
   effectivedate: Date

   @SublistFieldType.select
   effectiverevision:number

   @SublistFieldType.textarea
   memberdescr: string

   @SublistFieldType.select
   item: number

   @SublistFieldType.integernumber
   linenumber: number

   @SublistFieldType.freeformtext
   memberunit: string

   @SublistFieldType.float
   quantity: number

   @SublistFieldType.select
   taxschedule: number

   @SublistFieldType.freeformtext
   weight: string
}

/**
 * NetSuite Build/Assembly Item (assemblyitem) item type.
 */
export class AssemblyItemBase extends NetsuiteRecord {

   static recordType() { return record.Type.ASSEMBLY_ITEM }

   @FieldType.select
   assetaccount: number

   @FieldType.currency
   averagecost: number

   @FieldType.select
   billingschedule: number

   @FieldType.select
   billpricevariantacct: number

   @FieldType.checkbox
   buildentireassembly: boolean

   @FieldType.float
   buildtime: number

   @FieldType.select
   class: number

   @FieldType.select
   cogsaccount: number

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
   isphantom:boolean

   @FieldType.checkbox
   isspecialorderitem:boolean

   @FieldType.checkbox
   isspecialworkorderitem:boolean

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


   @FieldType.select
   revrecschedule: number

   @FieldType.select
   subsidiary: number

   @FieldType.freeformtext
   upccode: string

   @FieldType.freeformtext
   tranid: string

   @FieldType.select
   units: number

   @FieldType.checkbox
   usebins:boolean

   @FieldType.float
   weight:number

   @FieldType.select
   weightunit:number

   @FieldType.sublist(MemberSublist)
   member: Sublist<MemberSublist>
}
