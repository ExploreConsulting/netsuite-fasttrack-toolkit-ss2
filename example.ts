/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NAmdConfig ./myconfig.json
 */

/*
this line adds lodash it as a silent dependency of this
module (in the correct path of ./lodash assuming lodash is installed in the same folder as this script)
*/

import * as LogManager from './NFT-SS2-0.6.1/EC_Logger'

let log = LogManager.DefaultLogger


export = {
   onRequest: (req, resp) => {
      log.info('entering onRequest')
      log.debug('hello world')
   }
}
