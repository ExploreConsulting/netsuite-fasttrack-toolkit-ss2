/**
 * NetSuite Units Type record  (used for 'units of measure')
 */
import { FieldType, NetsuiteRecord } from './Record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import * as record from 'N/record'
/**
 * the "Units" sublist
 */
export class UOMSublist extends SublistLine {
   @SublistFieldType.freeformtext
   internalid: string

   @SublistFieldType.freeformtext
   abbreviation: string

   @SublistFieldType.checkbox
   baseunit: boolean

   @SublistFieldType.decimalnumber
   conversionrate: number

   @SublistFieldType.freeformtext
   pluralabbreviation: string

   @SublistFieldType.freeformtext
   pluralname: string

   @SublistFieldType.freeformtext
   unitname: string
}

/**
 * NetSuite Units Type record {unitstype}
 */
export class UnitsType extends NetsuiteRecord {
   @FieldType.freeformtext
   name: string
   @FieldType.freeformtext
   externalid: string
   @FieldType.checkbox
   isinactive: boolean
   @FieldType.sublist(UOMSublist)
   uom: Sublist<UOMSublist>

   static recordType = function () { return record.Type.UNITS_TYPE }
}
