/**
 * NS Base jounral entry record - contains definitions for fields and sublists
 */

import {FieldType, NetsuiteRecord} from './Record'
import * as record from 'N/record'
import {SublistLine, SublistFieldType} from './Sublist'


export class Base extends NetsuiteRecord {
   static recordType = record.Type.JOURNAL_ENTRY

   @FieldType.select
   accountingbook:number

   @FieldType.checkbox
   approved:boolean

   @FieldType.select
   department:number

   @FieldType.select
   subsidiary:number
}

export class LineSublist extends SublistLine {

   @SublistFieldType.select
   location:number
   
}
