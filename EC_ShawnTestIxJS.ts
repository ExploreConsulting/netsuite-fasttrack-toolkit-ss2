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

import * as LogManager from "./NFT-SS2-2.0.1/EC_Logger"
import * as search from "N/search"
import {nsSearchResult2obj} from "./NFT-SS2-2.0.1/search"
import {Seq} from "immutable"


class IterableSearch {

   static LOGNAME = 'lazy'

   static loadSearch(id: string, pageSize?: number) {
      return new IterableSearch(search.load({id: id}), pageSize)
   }
   log:LogManager.Logger
   pagedData: search.PagedData
   currentPage: search.Page
   currentData: search.Result[]
   index: number

   // //@ts-ignore
   // ["@@iterator"](): Iterator<search.Result | null> {
   //    return this as Iterator<search.Result | null>
   // }

   private constructor(private search: search.Search, private pageSize?: number) {
      this.log = LogManager.getLogger(IterableSearch.LOGNAME)
      this.pagedData = this.search.runPaged({pageSize: pageSize})
      this.currentPage = this.pagedData.fetch({index: 0})
      this.currentData = this.currentPage.data
      this.index = 0
      this.log.info(`lazy search ${search.searchId}`, `using page size ${this.pagedData.pageSize}`)
   }

   next(): IteratorResult<search.Result | null> {
      // if we've reached the end of the current page, read the next page (overwriting current) and start from its beginning
      if (this.index === this.currentData.length - 1) {
         this.log.debug('loading next page')
         this.currentPage = this.currentPage.next()
         this.currentData = this.currentPage.data
         this.index = 0
      }

      if (this.currentPage.isLast && this.currentData.length <= this.index) {
         return {
            done: true,
            value: null
         }
      } else return {
         done: false,
         value: this.currentData[this.index++]
      }
   }


}


const log = LogManager.DefaultLogger;

LogManager.getLogger(IterableSearch.LOGNAME).setLevel(LogManager.logLevel.debug)


namespace X {

   export function onRequest(ctx) {
      switch (ctx.request.method) {
         case "GET":
            log.debug('GET request')
            const s = IterableSearch.loadSearch('730')

            Seq(s)
               .take(1)
               .map(nsSearchResult2obj)
               .forEach(i=> log.debug('result',i))

            log.debug('first result', nsSearchResult2obj(s.next().value!))
            log.debug('second result', nsSearchResult2obj(s.next().value!))
            log.debug('third result', nsSearchResult2obj(s.next().value!))
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
