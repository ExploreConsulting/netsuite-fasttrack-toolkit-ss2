/**
 * NetSuite generic Transaction record
 */

import {FieldType, Sublist, SublistLine, SublistFieldType} from './EC_nsdal'
import * as record from 'N/record'
import {TransactionBase} from "./Transaction";

export namespace Invoice {
   /**
    * NetSuite Invoice Record
    */
   export class Base extends TransactionBase {

      static recordType = record.Type.INVOICE

      item:Sublist<ItemSublist>
   }

   class ItemSublist extends SublistLine {

      /**
       * Internalid of the item
       */
      @SublistFieldType.select
      item:number
   }
   
}
