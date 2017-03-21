/**
 *  Represents an Intercompany Transfer Order (intercompanytransferorder) transaction type in NetSuite
 */

import {SublistLine, SublistFieldType} from './Sublist'
import * as record from 'N/record'
import * as TransferOrder from "./TransferOrderBase";
import {FieldType} from "./Record";

/**
 * NetSuite Intercompany Transfer Order Record
 * Primary difference between this an a regular Transfer order is a TO destination subsidiary.
 */
export class Base extends TransferOrder.Base {
   static recordType = record.Type.INTER_COMPANY_TRANSFER_ORDER

   @FieldType.select
   tosubsidiary:number
}

/**
 * Sublist 'item' on the Intercompany Tranfer Order record (same as on regular Transfer Order)
 */
export class ItemSublist extends TransferOrder.ItemSublist {

}

