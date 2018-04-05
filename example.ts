/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NAmdConfig ./myconfig.json
 *
 * note that myconfig.json needs to be deployed alongside example.js, and the NFT ZIP file should be extracted to the same folder
 */


import * as LogManager from 'NFT/EC_Logger'
import {Base as JournalEntry} from "NFT/DataAccess/JournalEntryBase"

let log = LogManager.DefaultLogger

export = {
   onRequest: (req, resp) => {
      log.info('entering onRequest')
      log.debug('hello world')

      let a = new JournalEntry()
      let b = new JournalEntry()

      a.line.addLine().account = 4
      b.line.addLine().account = 10
      b.line.addLine()
      b.line.addLine()
      log.info('JE a', a)
      log.info('JE b', b)
   }
}
