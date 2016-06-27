/**
 * NS Base intercompany journal entry record - contains definitions for fields and sublists
 */

import * as record from 'N/record'
import {Base as JournalEntry} from "../declarations/DataAccess/JournalEntryBase";

/**
 * defines an Inter-company journal entry (basically identical to a normal journal entry?)
 */
export class Base extends JournalEntry {
   static recordType = record.Type.INTER_COMPANY_JOURNAL_ENTRY
}

