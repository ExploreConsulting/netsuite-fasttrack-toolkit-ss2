/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

/*
this line adds lodash it as a silent dependency of this
module (in the correct path of ./lodash assuming lodash is installed in the same folder as this script)
*/

import * as moment from "./NFT-SS2-0.4.0/moment"
import * as LogManager from './NFT-SS2-0.4.0/EC_Logger'
import * as customer from "./NFT-SS2-0.4.0/DataAccess/CustomerBase"
import * as _ from "./NFT-SS2-0.4.0/lodash"
import * as nsdal from "./NFT-SS2-0.4.0/DataAccess/EC_nsdal"


let log = LogManager.DefaultLogger

class Customer extends customer.Base {

   @nsdal.FieldType.select
   subsidiaryText: string

}

export = {

   onRequest: (req, resp) => {
      log.debug('are some true', _.some([true,true]))
      log.debug('hello world')
      let now = moment()

      now.add(1, 'day')
      // turn on debug logging for just the nsdal logger
      nsdal.log.setLevel(LogManager.logLevel.info)
      //log.debug('tomorrow is', now.format())

      let c = new Customer(227)

      log.info('subsidiary value', c.subsidiary)
      log.info('subsidiary text', c.subsidiaryText)

      c.comments = c.comments + _.random(1,100).toString()
      log.warn('warning', 'this is a warning')
      log.info('customer', c)
      let id = c.save()


   }
}
