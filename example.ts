/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

/*
this line adds lodash it as a silent dependency of this
module (in the correct path of ./lodash assuming lodash is installed in the same folder as this script)
*/

import * as moment from "./moment"
import * as LogManager from './EC_Logger'
import * as customer from "./DataAccess/CustomerBase"
import * as _ from "./lodash"
import {FieldType} from "./NFT-SS2-0.4.0/DataAccess/EC_nsdal"


let log = LogManager.DefaultLogger

class Customer extends customer.Base {

   @FieldType.select(true)
   subsidiary:string

}

export = {

   onRequest: (req, resp) => {
      log.debug('are some true', _.some([true,true]))
      log.debug('hello world')
      let now = moment()

      now.add(1, 'day')
      // turn on debug logging for just the nsdal logger
      // nsdal.log.setLevel(LogManager.logLevel.debug)
      log.debug('tomorrow is', now.format())

      let c = new Customer(227)

      c.comments = c.comments + _.random(1,100).toString()
      log.warn('warning', 'this is a warning')
      log.info('customer', c)
      let id = c.save()


   }
}
