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
import * as _ from "./NFT-SS2-2.0.1/lodash"
import {nsSearchResult2obj} from "./NFT-SS2-2.0.1/search"

import * as Ix from "ix"




const log = LogManager.DefaultLogger;


class IterableSearch<TResult> {

   static loadSearch<TSearchResult> (id:string, pageSize?:number) {
      return new IterableSearch<TSearchResult>(search.load({id: id }),pageSize)
   }

   pagedData : search.PagedData
   currentPage : search.Page
   currentData: search.Result[]
   currentIndex: number

   [Symbol.iterator](): Iterator<TResult> {
      return this
   }

   private constructor(private search: search.Search, private pageSize? :number) {
      this.pagedData = this.search.runPaged({pageSize: pageSize})
      this.currentPage = this.pagedData.fetch({index:0})
      this.currentData = this.currentPage.data
      this.currentIndex = 0
   }

   next() : IteratorResult<TResult> {
      // if we've reached the end of the current page, read the next page (overwriting current) and start from its beginning
      if (this.currentIndex === this.currentData.length-1) {
         this.currentPage = this.currentPage.next()
         this.currentData = this.currentPage.data
         this.currentIndex = 0
      }

      if (this.currentPage.isLast && this.currentData.length <= this.currentIndex) {
         return {
            done: true
         }
      } else return {
         done:false,
         value: this.currentData[this.currentIndex++]
      }
   }
}

namespace X {

   function observableSearch(id) {
         const pages = search.load({id: id}).runPaged()
         pages.pageRanges
            .forEach(pageRange => {
               pages.fetch({index: pageRange.index}).data.forEach(result => {
                  return nsSearchResult2obj(result)
               })
            })
      }

   export function onRequest(ctx) {
      switch (ctx.request.method) {
         case "GET":
            log.debug('GET request')
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
