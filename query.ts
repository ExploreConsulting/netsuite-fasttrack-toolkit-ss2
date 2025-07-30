/**
 * This module provides a lazy, functional processing approach to working with NetSuite SuiteQL queries.
 * It automatically handles paging behind the scenes allowing the developer to focus on 'per result' business logic.
 *
 * Use `LazyQuery.from()` to get started.
 * Turn query results into plain objects using `nsQueryResult2obj()` and enables you to leverage
 * the methods of [ImmutableJS](https://immutable-js.com) to process query results.
 * @module
 */

import * as query from 'N/query'
import * as LogManager from './EC_Logger'

/**
 * Rudimentary conversion of a NS query result to a simple flat plain javascript object. Suitable as an argument to `map()`
 * @param r the query result to process
 * @returns a simple javascript object representation of the query result as type `T`.
 *
 *
 * @typeparam T declares the shape of the plain objects returned. e.g. `nsQueryResult2obj<{ companyname, memo }>` for a query
 * that has columns _companyname_ and _memo_. Including an optional type here ensures strong typing on followup chained
 * method calls.
 *
 * @example  (using Immutable JS Sequence)
 *
 * ```typescript
 *
 *  Seq(LazyQuery.from({query:'string'}).map(nsQueryResult2obj()).forEach(...)
 *
 *  ```
 */
export function nsQueryResult2obj<T = {}> (r: query.Result) {
   return r.asMap() as T
}

/**
 *
 * Makes a NetSuite query an ES2015 style Iterator. That is, it follows the Iterator Protocol for iterating
 * over query results in a forward-only fashion. The result can be passed to any library
 * that accepts Iterators (such as ImmutableJS)
 * to provide easy chainable logic for arbitrary length result sets.
 *
 * @see LazySearch
 *
 * @example take the first result of a query as a plain object (ImmutableJS)
 * ```typescript
 * import {Seq} from './NFT-X.Y.Z/immutable'
 * const oneResult = Seq(LazyQuery.from()).map(nsQueryResult2obj()).take(1)
 * ```
 */
export class LazyQuery implements IterableIterator<query.Result> {

   /**
    * the name of the custom logger for this component for independent logging control
    */
   static LOGNAME = 'lazy' as const
   // logger for this module
   protected log: LogManager.Logger

   // /**
   //  * A LazyQuery is iterable per the iterable protocol, which also plays nicely with immutablejs
   //  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
   //  */
   // outer paged data object from NS query. This is only set once when query is initially runPaged()
   protected pagedData: query.PagedData
   // the current page of data. This is replaced as we cross from one page to the next
   protected currentPage: query.Page
   // the current set of query results. This is replaced as we cross from one page to the next to keep a constant memory footprint
   protected currentData: query.Result[]
   // index into currentData[] pointing to the 'current' query result
   protected index: number

   protected mappedData: query.QueryResultMap[]

   protected iterator: query.PageIterator

   /**
    * Not meant to be used directly, use factory methods such as `load` or `from`
    * @param q object of query and parameters
    * @param pageSize optional pagesize, can be up to 1000
    */
   private constructor (q: { query: string, params?: Array<string | number | boolean> }, pageSize = 500) {
      if (pageSize > 1000) throw new Error('page size must be <= 1000')
      this.log = LogManager.getLogger(LazyQuery.LOGNAME)
      if(!q.params) this.pagedData = query.runSuiteQLPaged({ query: q.query, pageSize: pageSize})
      else this.pagedData = query.runSuiteQLPaged({ query: q.query, params: q.params, pageSize: pageSize})
      this.iterator = this.pagedData.iterator()
      // only load a page if we have record
      if (this.pagedData.count > 0) {
         this.currentPage = this.pagedData.fetch(0)
         this.currentData = this.currentPage.data.results
      } else {
         this.currentData = []
      }
      this.index = 0
      this.log.info(`lazy query `,
         `using page size ${this.pagedData.pageSize}, record count ${this.pagedData.count}`)
   }

   /**
    * Creates a lazy query from an existing NS .
    * @param q the SQL query and optional query parameters
    * @param pageSize optional pagesize, can be up to 1000. Default is 500
    * @returns Lazy Seq ready for processing
    *
    * @example create a query and begin lazy processing of results
    *
    * ```
    * import {Seq} from './NFT-X.Y.Z/immutable'
    * import * as query from 'N/query
    * import {governanceRemains, LazyQuery, nsQueryResult2obj} from './NFT-X.Y.Z/query'
    *
    * Seq(LazyQuery.from({
    *    query: 'SELECT id FROM FOO WHERE name = ?',
    *    params: ['Farnsworth']
    * }))
    *   .takeWhile(governanceRemains()) // process until we drop below default governance threshold
    *   .map(nsQueryResult2obj()) // convert query results to plain objects with properties
    *   .forEach( r => log.debug(r))
    * ```
    */

   static from (q: {query: string, params?: Array<string | number | boolean>}, pageSize?: number) {
      return new LazyQuery(q, pageSize)
   }

   /**
    * LazyQuery is both an iterable and an iterator for query results.
    */
   [Symbol.iterator] (): IterableIterator<query.Result> {
      return this
   }

   /**
    * per the iterator protocol, retrieves the next element. Also returns `null` if done as the specification for
    * the protocol says the value property is optional when 'done'
    *
    * You don't typically call this function yourself - libraries like ImmutableJS do.
    */
   next (): IteratorResult<query.Result> {
      const atEndOfPage = this.index === this.currentData.length
      const done = !this.currentPage || (this.currentPage.isLast && atEndOfPage)

      if (done) return {
         done: true,
         value: null
      }

      // we've reached the end of the current page, read the next page (overwriting current) and start from its beginning
      if (atEndOfPage) {
         this.currentPage = this.pagedData.fetch(this.currentPage.pageRange.index + 1)
         this.currentData = this.currentPage.data.results
         this.mappedData = this.currentPage.data.asMappedResults()
         this.index = 0
      }
      // return the next result from existing page (which may have been loaded immediately prior above)
      return {
         done: false,
         value: this.currentData[this.index++]
      }
   }
}
