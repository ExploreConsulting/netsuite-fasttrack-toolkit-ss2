/**
 * NetSuite generic Transaction record
 */

import {FieldType} from './EC_nsdal'
import * as record from 'N/record'
import {TransactionBase} from "./Transaction";
import {Sublist, SublistLine} from "./Sublist";


/**
 * NetSuite Sales Order Record
 */
export class SalesOrderBase extends TransactionBase {
   
   static recordType = record.Type.SALES_ORDER
   
   item: Sublist<SalesOrderBaseLineItem> = new Sublist(this.nsrecord,'item')
   
}


export class SalesOrderBaseLineItem extends SublistLine{
   
}

