import * as record from 'N/record'
import { FieldType } from './Record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import { Item } from './Item'

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
export class AssemblyItemBase extends Item {

   static recordType() { return record.Type.ASSEMBLY_ITEM }

   @FieldType.checkbox
   buildentireassembly: boolean

   @FieldType.float
   buildtime: number

   @FieldType.checkbox
   isphantom:boolean

   @FieldType.checkbox
   isspecialworkorderitem:boolean

   @FieldType.sublist(MemberSublist)
   member: Sublist<MemberSublist>
}
