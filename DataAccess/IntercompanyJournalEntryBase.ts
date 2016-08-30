/**
 * NS Base intercompany journal entry record - contains definitions for fields and sublists
 */

import * as record from 'N/record'
import {Base as JournalEntry} from "./JournalEntryBase";
import {SublistLine,SublistFieldType} from "./Sublist";

/**
 * defines an Inter-company journal entry (basically identical to a normal journal entry?)
 */
export class Base extends JournalEntry {
   static recordType = record.Type.INTER_COMPANY_JOURNAL_ENTRY
}

export class LineSublist extends SublistLine {

   @SublistFieldType.select
   location:number

    /**
     * the line-level subsidiary - this is a difference between normal journal entry and intercompany JE
     */
   @SublistFieldType.select
   linesubsidiary:number
}
