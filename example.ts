/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

/* these two lines bring lodash into scope for compile time, and add it as a silent dependency of this
 module (in the correct path of ./lodash assuming lodash is installed in the same folder as this script)
 */
/*
///<amd-dependency path="./NFT-SS2-0.1.0/lodash" name="_" />
///<amd-dependency path="./NFT-SS2-0.1.0/moment" name="moment" />
*/
import * as LogManager from 'NFT/EC_Logger'
// import * as customer from "NFT/DataAccess/CustomerBase"
// import * as nsdal from "NFT/DataAccess/EC_nsdal"
//import * as moment from "moment"
var log = LogManager.DefaultLogger




export = {

   onRequest: (req, resp) => {

      log.debug('hello world')

      // turn on debug logging for just the nsdal logger
      // nsdal.log.setLevel(LogManager.logLevel.debug)

   }
}
