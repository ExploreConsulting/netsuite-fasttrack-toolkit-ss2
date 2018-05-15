import * as record from 'N/record'
import {FieldType, NetsuiteRecord} from "./Record"
import * as moment from "../moment"
import {SublistLine, Sublist, SublistFieldType} from './Sublist'

/**
 * the Members (member) sublist on AssemblyItem (assemblyitem) records
 */
export class MemberSublist extends SublistLine {

   @SublistFieldType.date
   effectivedate: moment.Moment

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

   static recordType: record.Type = record.Type.ASSEMBLY_ITEM

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

   @FieldType.select
   countryofmanufacture:number


   @FieldType.datetime
   createddate: moment.Moment

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
   lastmodifieddate: moment.Moment

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
