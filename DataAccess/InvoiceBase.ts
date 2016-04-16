/**
 * NetSuite generic Transaction record
 */

import {FieldType} from './EC_nsdal'
import * as record from 'N/record'
import {TransactionBase} from "./Transaction";

/**
 * NetSuite Invoice Record
 */
export class InvoiceBase extends TransactionBase {
   
   static recordType = record.Type.INVOICE
   
   
}


