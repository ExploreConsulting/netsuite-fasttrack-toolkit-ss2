/**
 * NS Base Advanced Intercompany Journal Entry record - contains definitions for fields and sublists
 */

import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'

/**
 * 'line' sublist on the Advanced Intercompany Journal Entry Record
 */
export class LineSublist extends SublistLine {

   @SublistFieldType.select
   account: number

   @SublistFieldType.freeformtext
   amortizationtype:string

   @SublistFieldType.select
   class:number

   @SublistFieldType.currency
   credit: number

   @SublistFieldType.currency
   debit: number

   @SublistFieldType.select
   department: number

   @SublistFieldType.select
   duetofromsubsidiary:number

   @SublistFieldType.checkbox
   eliminate: boolean

   @SublistFieldType.date
   enddate: Date

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
   linebasecurrency:number

   @SublistFieldType.currency
   linefxrate: number | string

   @SublistFieldType.select
   linesubsidiary:number

   @SublistFieldType.currency
   linetotalamt:string | number

   @SublistFieldType.select
   location: number

   @SublistFieldType.freeformtext
   memo: string

   @SublistFieldType.freeformtext
   residual:string | number

   /** this field is not in the 2018.1 records browser but does appear in the &xml=t view of the record */
   @SublistFieldType.select
   revenuerecognitionrule:number

   @SublistFieldType.select
   schedule:number

   @SublistFieldType.select
   schedulenum:number

   @SublistFieldType.date
   startdate: Date

   @SublistFieldType.select
   tax1acct:number

   @SublistFieldType.currency
   tax1amt:number | string

   @SublistFieldType.select
   taxcode:number

   @SublistFieldType.percent
   taxrate1:number | string

}


/**
 * Base class for Advanced Intercompany Journal Entry Record
 */
export class AdvancedIntercompanyJournalEntryBase extends NetsuiteRecord {
   static recordType = record.Type.ADV_INTER_COMPANY_JOURNAL_ENTRY

   @FieldType.checkbox
   approved: boolean

   @FieldType.datetime
   createddate: Date

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
   entitynexus: number

   @FieldType.freeformtext
   expenseallocjournalcount:string

   @FieldType.freeformtext
   externalid: string

   @FieldType.checkbox
   isbasecurrecy: boolean

   @FieldType.checkbox
   iscustomapproval: boolean

   @FieldType.datetime
   lastmodifieddate: Date

   @FieldType.freeformtext
   memo: string

   @FieldType.select
   nexus: number

   @FieldType.select
   parentexpensealloc: number

   @FieldType.select
   postingperiod: number

   @FieldType.date
   reversaldate: Date

   @FieldType.checkbox
   reversaldefer: boolean

   @FieldType.freeformtext
   status:string

   @FieldType.select
   subsidiary: number

   @FieldType.multiselect
   tosubsidiaries: number

   @FieldType.date
   trandate: Date

   @FieldType.freeformtext
   tranid: string

   @FieldType.freeformtext
   transactionnumber:string

   @FieldType.sublist(LineSublist)
   line: Sublist<LineSublist>
}

