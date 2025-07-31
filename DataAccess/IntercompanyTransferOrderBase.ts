/**
 *  Represents an Intercompany Transfer Order (intercompanytransferorder) transaction type in NetSuite
 */

import {SublistLine, SublistFieldType} from './Sublist'
import * as record from 'N/record'
import * as to from "./TransferOrderBase";
import {FieldType} from "./Record";

/**
 * NetSuite Intercompany Transfer Order Record
 * Primary difference between this an a regular Transfer order is a TO destination subsidiary.
 */
export class IntercompanyTransferOrderBase extends to.TransferOrderBase {
   static override recordType() { return record.Type.INTER_COMPANY_TRANSFER_ORDER }

   @FieldType.select
   tosubsidiary:number
}

/**
 * Sublist 'item' on the Intercompany Tranfer Order record (same as on regular Transfer Order)
 */
export class ItemSublist extends to.ItemSublist {

}

