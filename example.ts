/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

/*
this line adds lodash it as a silent dependency of this
module (in the correct path of ./lodash assuming lodash is installed in the same folder as this script)
*/

import * as moment from "./NFT-SS2-0.6.1/moment"
import * as LogManager from './NFT-SS2-0.6.1/EC_Logger'
import * as customer from "./NFT-SS2-0.6.1/DataAccess/CustomerBase"
import * as invoice from "./NFT-SS2-0.6.1/DataAccess/InvoiceBase"
import * as _ from "./NFT-SS2-0.6.1/lodash"
import * as nsdal from "./NFT-SS2-0.6.1/DataAccess/EC_nsdal"
import {ItemSublist} from './NFT-SS2-0.6.1/DataAccess/InvoiceBase'
import {Sublist} from './NFT-SS2-0.6.1/DataAccess/Sublist'


let log = LogManager.DefaultLogger


class Customer extends customer.Base {

   @nsdal.FieldType.select
   subsidiaryText: string

}



export = {


   onRequest: (req, resp) => {
      log.info('entering onRequest')
      nsdal.log.setLevel(LogManager.logLevel.debug)

      // don't add anything special to our inventory class - to see if we can access the default item sublist definition
      class Invoice extends invoice.Base {
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
