import { FieldType } from './Record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import { TransactionBase } from './Transaction'
import * as record from 'N/record'

export class ApplySublist extends SublistLine {
   @SublistFieldType.freeformtext
   amount: string

   @SublistFieldType.checkbox
   apply: boolean

   @SublistFieldType.date
   applydate: Date

   @SublistFieldType.freeformtext
   createdfrom: string

   @SublistFieldType.freeformtext
   doc: string

   @SublistFieldType.freeformtext
   due: string

   @SublistFieldType.date
   duedate: Date

   @SublistFieldType.integernumber
   job: number

   @SublistFieldType.integernumber
   line: number

   @SublistFieldType.freeformtext
   refnum: string

   @SublistFieldType.freeformtext
   total: string

   @SublistFieldType.freeformtext
   url: string
}

/**
 *
 */
export class DepositApplicationBase extends TransactionBase {
   static override recordType() { return record.Type.DEPOSIT_APPLICATION }

   @FieldType.select
   aracct: number

   @FieldType.select
   currency: number

   @FieldType.select
   customer: number

   @FieldType.select
   deposit: number

   @FieldType.date
   depositdate: Date

   @FieldType.sublist(ApplySublist)
   apply: Sublist<ApplySublist>
}
