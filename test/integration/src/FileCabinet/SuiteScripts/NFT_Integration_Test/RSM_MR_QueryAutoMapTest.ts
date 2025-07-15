/**
 * Copyright         RSM US LLP
 * Description       Example map reduce script template
 * Collaborative Link:  [doc link]
 * Local Repo Link:     [azure documentation link of final technical doc]
 *
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 */

import { type EntryPoints } from 'N/types'
import * as LogManager from './NFT-SS2-7.4.0/EC_Logger'
import * as _ from './NFT-SS2-7.4.0/lodash'
import { getColumns, mapQueryMRResults } from './NFT-SS2-7.4.0/query'

// consider using the pkg-auditlog package to audit/log progress to prebuilt custom record
// https://dev.azure.com/rsm-appdev/IP-NetSuite/_git/pkg-ns-auditlog
// import { IntegrationStatus } from './EC_AuditLog'


// logger for use throughout
const log = LogManager.DefaultLogger

interface Input {
   id: number,
   trandate: string
}

namespace X {

   const qstr = `SELECT id, trandate FROM transaction WHERE id = ?`
   const qcols = getColumns(qstr)
  /**
   * entrypoint for MR script - gets input data based on a saved search
   */
  export function getInputData () {
    // you could instead use SuiteQL for your search by returning an object like so:
    return {
      type: 'suiteql',
      query: qstr,
      params: [1000]
    }
  }

  /**
   * entrypoint for MR script _MAP_ stage
   */
  export function map (context: EntryPoints.MapReduce.mapContext) {
    const input: Input = mapQueryMRResults(JSON.parse(context.value), qcols)
     log.debug('input', input)
    return 'map complete'
  }

  /**
   * REDUCE entrypoint for MR script.
   * This step receives all the (exploded) items that should go on
   */
  export function reduce (context: EntryPoints.MapReduce.reduceContext) {
    log.debug('key', context.key)
    _.each(context.values, _.partial(log.debug, 'values'))
  }

  /**
   * entrypoint for MR script
   */
  export function summarize (summary: EntryPoints.MapReduce.summarizeContext) {
    // summarize totals
    log.info('summary', summary)
    log.info('input stage summary', summary.inputSummary)
    log.info('map stage summary', summary.mapSummary)
    log.info('reduce stage summary', summary.reduceSummary)
  }

}

export = {
  map: X.map,
  getInputData: X.getInputData,
  summarize: X.summarize
}

LogManager.autoLogMethodEntryExit({ target: X, method: /\w+/ }, {
  withProfiling: true,
  logLevel: LogManager.logLevel.info
})


