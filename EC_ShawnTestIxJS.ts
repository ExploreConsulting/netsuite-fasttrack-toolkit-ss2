/**
 * Company           Explore Consulting
 * Copyright         2017 Explore Consulting, LLC
 * Description       Intercompany Eliminations Journal Entries
 * Functional Spec   https://docs.google.com/document/d/1f69K8uzQ4TQvltA3yrI_aDTSqB-0K8LV6K3_p0Xeq68/edit#
 **/
/**
 * @NApiVersion 2.0
 * @NScriptType Suitelet
 */

import * as LogManager from "./NFT-SS2-2.1.0/EC_Logger"
import * as search from "N/search"
import {nsSearchResult2obj, LazySearch} from "./NFT-SS2-2.1.0/search"
import {Seq} from "./NFT-SS2-2.1.0/immutable"


const log = LogManager.DefaultLogger;

LogManager.getLogger(LazySearch.LOGNAME).setLevel(LogManager.logLevel.debug)


namespace X {

   export function onRequest(ctx) {
      switch (ctx.request.method) {
         case "GET":
            log.debug('GET request')

            Seq(LazySearch.load('730'))
               .skip(123)
               .take(1)
               .map(nsSearchResult2obj)
               .forEach(i=> log.debug('result',i))

            break
         case "POST":
            log.debug('POST request parms', ctx.request.parameters)
            break;
      }
   }

}

export = X

LogManager.autoLogMethodEntryExit({target: X, method: /\w+/}, {
   withGovernance: true,
   withProfiling: true
});
