/**
 * NetSuite generic Transaction record
 */

import {SublistLine, SublistFieldType} from './Sublist'
import * as record from 'N/record'
import {TransactionBase} from "./Transaction";

export namespace Invoice {
   /**
    * NetSuite Invoice Record
    */
   export class Base extends TransactionBase {

      static recordType = record.Type.INVOICE

   }

   export class ItemSublist extends SublistLine {

      /**
       * Internalid of the item
       */
      @SublistFieldType.select
      item:number
      
   }
   
}
