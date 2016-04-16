/**
 * Created by shawn on 4/15/16.
 */

import {FieldType, NetsuiteRecord} from './EC_nsdal'
import * as record from 'N/record'
import {TransactionBase} from "./Transaction";

export class CreditMemoBase extends TransactionBase {

   static recordType = record.Type.CREDIT_MEMO

   @FieldType.select
   customer:number

}


