/**
 * Created by shawn on 4/15/16.
 */

import {FieldType} from './EC_nsdal'
import * as record from 'N/record'
import {TransactionBase} from "./Transaction";

export class CreditMemoBase extends TransactionBase {

   static recordType = record.Type.CREDIT_MEMO

   @FieldType.select
   customer:number

}


class CreditMemoItemSublist {

   @FieldType.date
   revrecstartdate:moment.Moment
   @FieldType.date
   revrecenddate:moment.Moment
   @FieldType.select
   item:number

   @FieldType.currency
   amount:number

   @FieldType.decimalnumber
   quantity:number

   @FieldType.decimalnumber
   rate:number

   @FieldType.select
   taxcode:number
}
