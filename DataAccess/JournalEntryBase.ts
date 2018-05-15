/**
 * NS Base jounral entry record - contains definitions for fields and sublists
 */

import {FieldType, NetsuiteRecord} from './Record'
import * as record from 'N/record'
import {SublistLine, SublistFieldType, Sublist} from './Sublist'
import * as moment from '../moment'

/**
 * 'line' sublist on the standard Journal Entry Record
 */
export class LineSublist extends SublistLine {

   @SublistFieldType.select
   account:number

   @SublistFieldType.currency
   credit:number

   @SublistFieldType.currency
   credittax:number

   @SublistFieldType.currency
   debit:number

   @SublistFieldType.currency
   debittax:number

   @SublistFieldType.select
   department:number

   @SublistFieldType.checkbox
   eliminate:boolean

   @SublistFieldType.date
   enddate:moment.Moment

   @SublistFieldType.select
   entity:number

   @SublistFieldType.select
   location:number

   @SublistFieldType.freeformtext
   memo:string

   @SublistFieldType.select
   subsidiary:number

   @SublistFieldType.currency
   totalamount:number
}


/**
 * Base class for Journal Entry Record
 */
export class JournalEntryBase extends NetsuiteRecord {
   static recordType = record.Type.JOURNAL_ENTRY

   @FieldType.select
   accountingbook:number

   @FieldType.checkbox
   approved:boolean

   @FieldType.select
   class:number

   @FieldType.datetime
   createddate:moment.Moment

   @FieldType.select
   currency:number

   @FieldType.select
   department:number

   @FieldType.currency
   exchangerate:number

   @FieldType.freeformtext
   memo:string

   @FieldType.date
   reversaldate:moment.Moment

   @FieldType.checkbox
   reversaldefer:boolean

   @FieldType.select
   subsidiary:number

   @FieldType.date
   trandate:moment.Moment

   @FieldType.freeformtext
   tranid:string

   @FieldType.sublist(LineSublist)
   line: Sublist<LineSublist>
}

