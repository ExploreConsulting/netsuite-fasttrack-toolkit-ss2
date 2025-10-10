/**
 * NS Base intercompany journal entry record (intercompanyjournalentry) - contains definitions for fields and sublists
 */

import * as record from 'N/record'
import {JournalEntryBase, LineSublist as JeLineSublist} from "./JournalEntryBase";
import {SublistFieldType, Sublist} from "./Sublist";
import {FieldType} from "./Record"

/**
 * Intercompany Journal Entry Line (line) sublist
 */
export class LineSublist extends JeLineSublist {

    /**
     * the line-level subsidiary - this is a difference between normal journal entry and intercompany JE
     */
   @SublistFieldType.select
   linesubsidiary?:number
}

/**
 * defines an Inter-company journal entry (basically identical to a normal journal entry?)
 */
export class IntercompanyJournalEntryBase extends JournalEntryBase {
   static override recordType() { return record.Type.INTER_COMPANY_JOURNAL_ENTRY }


   @FieldType.sublist(LineSublist)
   line: Sublist<LineSublist>
}

