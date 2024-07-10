/**
 * This module provides a lazy, functional processing approach to working with NetSuite saved searches.
 * It automatically handles paging behind the scenes allowing the developer to focus on 'per result' business logic.
 *
 * Use `LazyQuery.from()` to get started.
 * Turn search results into plain objects using `nsQueryResult2obj()` and leverage
 * the methods of [ImmutableJS](https://facebook.github.io/immutable-js/) to process search results.
 * @module
 */

import * as query from 'N/query'
import * as LogManager from './EC_Logger'
/**
 *  Any object that includes an 'id' property, which NS search results always have
 */
export type ObjectWithId<T> = T & { id: string }

/**
 * NetSuite search results always have an `id` property and `recordType` property.
 * These two should flow through to the output of `nsQueryResult2obj()`. Note that custom column labels will take
 * precedence over these values, so don't use `id` or `recordType` as your custom column label if you want the
 * native SearchResult property values to be used.
 */
export type BaseSearchResult<T> = ObjectWithId<T> & { }

/**
 * Rudimentary conversion of a NS search result to a simple flat plain javascript object. Suitable as an argument to `map()`
 * @param useLabels set to false to ignore search column labels, using the column name (internalid) instead.
 * Defaults to true which means the property names on the returned object will match the column label names if set.
 * If useLabels = true and no label exists, falls back to using column name. Note that label strings should be valid
 * characters for property names (e.g. contain no ':', '-', '>' etc.)
 * @param addGetTextProps if true, for each column which has a _truthy_ getText() value, include that as a 'propnameText' field similar to how nsdal behaves
 * @returns a mapping function taking a NetSuite search result and returns a POJO representation of that search result.
 * The return type will always have an 'id' property merged with type T if provided.
 *
 * @typeparam T declares the shape of the plain objects returned. e.g. `nsQueryResult2obj<{ companyname, memo }>` for a search result
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
 * to provide easy chainable logic on arbitrary length search result sets.
 *
 * Started with this as a class due to other library requirements and left it as a class just as an easy
 * way to contain state about currentpage and index into that page.
 *
 * This is exposed as an iterator so that it could be used with other libraries. For example
 * I've heard Ramda may support iterators so if we choose to go a more pure FP route down the
 * road this class would be useful - i.e. it remains untied to any particular library.
 *
 * @example take the first result of a search as a plain object (ImmutableJS)
 * ```typescript
 * import {Seq} from './NFT-X.Y.Z/immutable'
 * const oneResult = Seq(LazyQuery.from()).map(nsQueryResult2obj()).take(1)
 * ```
 */
export class LazyQuery implements IterableIterator<query.Result> {

   /**
    * the name of the custom logger for this component for independent logging control
    */
   static LOGNAME = 'lazy'
   // logger for this module
   protected log: LogManager.Logger

   // /**
   //  * A LazySearch is iterable per the iterable protocol, which also plays nicely with immutablejs
   //  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
   //  */
   // outer paged data object from NS search. This is only set once when search is initially runPaged()
   protected pagedData: query.PagedData
   // the current page of data. This is replaced as we cross from one page to the next
   protected currentPage: query.Page
   // the current set of search results. This is replaced as we cross from one page to the next to keep a constant memory footprint
   protected currentData: query.Result[]
   // index into currentData[] pointing to the 'current' search result
   protected index: number

   protected mappedData: query.QueryResultMap[]

   protected iterator: query.PageIterator

   /**
    * Not meant to be used directly, use factory methods such as `load` or `from`
    * @param q object of query and parameters
    * @param pageSize optional pagesize, can be up to 1000
    */
   private constructor (private q: { query: string, params?: Array<string | number | boolean> }, private pageSize = 500) {
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
    * Creates a lazy search from an existing NS search.
    * @param q
    * @param pageSize
    * @returns {LazySearch}
    *
    * @example create a query and begin lazy processing of results
    *
    * ```
    * import {Seq} from './NFT-X.Y.Z/immutable'
    * import * as query from 'N/query
    * import {governanceRemains, LazySearch, nsQueryResult2obj} from './NFT-X.Y.Z/search'
    *
    * Seq(LazySearch.from({
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
    * LazySearch is both an iterable and an iterator for search results.
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
