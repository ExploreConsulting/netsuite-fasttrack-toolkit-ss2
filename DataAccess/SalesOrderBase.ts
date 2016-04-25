/**
 * NetSuite generic Transaction record
 */

import {SublistLine} from './EC_nsdal'
import * as record from 'N/record'
import {TransactionBase} from "./Transaction";


/**
 * NetSuite Sales Order Record
 */
export class SalesOrderBase extends TransactionBase {
   
   static recordType = record.Type.SALES_ORDER
   
   
}


export class SalesOrderBaseLineItem extends SublistLine{
   
}

