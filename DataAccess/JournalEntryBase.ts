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
   account: number

   @SublistFieldType.freeformtext
   amortizationtype:string

   @SublistFieldType.currency
   credit: number

   @SublistFieldType.currency
   credittax: number

   @SublistFieldType.currency
   debit: number

   @SublistFieldType.currency
   debittax: number

   @SublistFieldType.select
   department: number

   @SublistFieldType.checkbox
   eliminate: boolean

   @SublistFieldType.date
   enddate: moment.Moment

   @SublistFieldType.select
   entity: number

   @SublistFieldType.freeformtext
   entitytype:string

   @SublistFieldType.currency
   grossamt:number | string

   @SublistFieldType.integernumber
   item:number

   @SublistFieldType.integernumber
   line:number

   @SublistFieldType.select
   linetaxcode:number

   @SublistFieldType.percent
   linetaxrate:string | number

   @SublistFieldType.select
   location: number

   @SublistFieldType.freeformtext
   memo: string

   @SublistFieldType.select
   revenuerecognitionrule:number

   @SublistFieldType.select
   schedule:number

   @SublistFieldType.select
   schedulenum:number

   @SublistFieldType.date
   startdate: moment.Moment

   @SublistFieldType.select
   tax1acct:number

   @SublistFieldType.currency
   tax1amt:number | string

   @SublistFieldType.select
   taxaccount:number

   @SublistFieldType.currency
   taxbasis: string | number

   @SublistFieldType.select
   taxcode:number

   @SublistFieldType.percent
   taxrate1:number | string

   @SublistFieldType.currency
   totalamount: number
}


/**
 * Base class for Journal Entry Record
 */
export class JournalEntryBase extends NetsuiteRecord {
   static recordType = record.Type.JOURNAL_ENTRY

   @FieldType.select
   accountingbook: number

   @FieldType.select
   approvalstatus: number

   @FieldType.checkbox
   approved: boolean

   @FieldType.select
   class: number

   @FieldType.datetime
   createddate: moment.Moment

   @FieldType.select
   createdfrom: number

   @FieldType.currency
   credittotal: string | number

   @FieldType.select
   currency: number

   @FieldType.select
   customform: number

   @FieldType.currency
   debittotal: string | number

   @FieldType.select
   department: number

   @FieldType.select
   entitynexus: number

   @FieldType.currency
   exchangerate: number

   @FieldType.freeformtext
   externalid: string

   @FieldType.checkbox
   isbasecurrecy: boolean

   @FieldType.datetime
   lastmodifieddate: moment.Moment

   @FieldType.freeformtext
   memo: string

   @FieldType.select
   nextapprover: number

   @FieldType.select
   nexus: number

   @FieldType.select
   parentexpensealloc: number

   @FieldType.select
   postingperiod: number

   @FieldType.date
   reversaldate: moment.Moment

   @FieldType.checkbox
   reversaldefer: boolean

   @FieldType.select
   subsidiarytaxregnum: number

   @FieldType.select
   subsidiary: number

   @FieldType.select
   tosubsidiary: number

   @FieldType.date
   trandate: moment.Moment

   @FieldType.freeformtext
   tranid: string

   @FieldType.sublist(LineSublist)
   line: Sublist<LineSublist>
}

