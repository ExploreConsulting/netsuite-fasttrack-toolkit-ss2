/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

/*
this line adds lodash it as a silent dependency of this
module (in the correct path of ./lodash assuming lodash is installed in the same folder as this script)
*/

import * as moment from "./NFT-SS2-0.6.0/moment"
import * as LogManager from './NFT-SS2-0.6.0/EC_Logger'
import * as customer from "./NFT-SS2-0.6.0/DataAccess/CustomerBase"
import * as invoice from "./NFT-SS2-0.6.0/DataAccess/InvoiceBase"
import * as _ from "./NFT-SS2-0.6.0/lodash"
import * as nsdal from "./NFT-SS2-0.6.0/DataAccess/EC_nsdal"
import {ItemSublist} from './NFT-SS2-0.6.0/DataAccess/InvoiceBase'
import {Sublist} from './NFT-SS2-0.6.0/DataAccess/Sublist'


let log = LogManager.DefaultLogger


class Customer extends customer.Base {

   @nsdal.FieldType.select
   subsidiaryText: string

}



export = {


   onRequest: (req, resp) => {
      log.info('entering onRequest')
      nsdal.log.setLevel(LogManager.logLevel.debug)

      // add a field to the base 'item sublist' on an invoice
      class MyItemSublist extends ItemSublist {
         @nsdal.SublistFieldType.select
         class :number
      }

      // indicate that we want the item sublist to appear on our Invoice record
      class Invoice extends invoice.Base {
         @nsdal.FieldType.sublist(MyItemSublist)
         item: Sublist<MyItemSublist>
      }

     try {
        let i = new Invoice(2661)

        log.debug('invoice', _.toPlainObject(i))
        _.map(i.item, i =>  log.debug('invoice lines', _.toPlainObject(i)))
     }
      catch (ex) {
         if (ex instanceof Error ) log.error('stack trace',ex.stack )
         throw ex
      }
   }
}
