/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

/*
this line adds lodash it as a silent dependency of this
module (in the correct path of ./lodash assuming lodash is installed in the same folder as this script)
*/
///<amd-dependency path="./lodash" name="_" />

import * as moment from "./moment"
import * as LogManager from './EC_Logger'
import * as customer from "./DataAccess/CustomerBase"
import * as nsdal from "./DataAccess/EC_nsdal"
var log = LogManager.DefaultLogger

export = {

   onRequest: (req, resp) => {
      log.debug('are some true', _.some([true,true]))
      log.debug('hello world')
      var now = moment()

      now.add(1, 'day')
      // turn on debug logging for just the nsdal logger
      // nsdal.log.setLevel(LogManager.logLevel.debug)
      log.debug('tomorrow is', now.format())
   }
}
