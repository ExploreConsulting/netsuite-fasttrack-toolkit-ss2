/**
 * This module provides a lazy, functional processing approach to working with NetSuite SuiteQL queries.
 * It automatically handles paging behind the scenes allowing the developer to focus on 'per result' business logic.
 *
 * Use `LazyQuery.from()` to get started.
 * Turn query results into plain objects using `nsQueryResult2obj()` and enables you to leverage
 * the methods of [ImmutableJS](https://immutable-js.com) to process query results.
 * @module
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "N/query", "./EC_Logger"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LazyQuery = void 0;
    exports.nsQueryResult2obj = nsQueryResult2obj;
    exports.mapQueryMRResults = mapQueryMRResults;
    exports.getColumns = getColumns;
    const query = require("N/query");
    const LogManager = require("./EC_Logger");
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
     * ```TypeScript
     *
     *  Seq(LazyQuery.from({query:'string'}).map(nsQueryResult2obj()).forEach(...)
     *
     *  ```
     */
    function nsQueryResult2obj(r) {
        return r.asMap();
    }
    /**
     * Converts a query result to a plain object using the column names as keys.
     *
     * @param r
     * @param columns
     *
     * @example
     *
     * ```TypeScript
     *
     * export function map (context: EntryPoints.MapReduce.mapContext) {
     *     const input: ReduceResult = mapQueryMRResults(JSON.parse(context.value), columns)
     *     log.info('input', input)
     *     ...
     *     return 'map complete'
     *   }
     *
     * ```
     */
    function mapQueryMRResults(r, columns) {
        const results = {};
        columns.map((v, k) => {
            var _a;
            results[v] = (_a = r.values[k]) !== null && _a !== void 0 ? _a : null;
        });
        return results;
    }
    /**
     * Extracts the column names from a SuiteQL query string.
     *
     * @param queryStr
     *
     * @example
     *
     * ```TypeScript
     *
     * namespace X {
     *    const queryStr = 'SELECT id as foo, trandate FROM transaction WHERE id = ?'
     *    const columns = getColumns(queryStr)
     *
     *    export function getInputData () {
     *     }...
     * }
     *
     * ```
     */
    function getColumns(queryStr) {
        queryStr = queryStr.toLowerCase();
        return queryStr.substring(queryStr.indexOf('select') + 6, queryStr.indexOf('from')).split(',').map((col) => {
            if (col.indexOf(' as ') > -1) {
                return col.substring(col.indexOf(' as ') + 4, col.length).trim();
            }
            else {
                return col.trim();
            }
        });
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
    class LazyQuery {
        /**
         * Not meant to be used directly, use factory methods such as `load` or `from`
         * @param q object of query and parameters
         * @param pageSize optional pagesize, can be up to 1000
         */
        constructor(q, pageSize = 500) {
            if (pageSize > 1000)
                throw new Error('page size must be <= 1000');
            this.log = LogManager.getLogger(LazyQuery.LOGNAME);
            if (!q.params)
                this.pagedData = query.runSuiteQLPaged({ query: q.query, pageSize: pageSize });
            else
                this.pagedData = query.runSuiteQLPaged({ query: q.query, params: q.params, pageSize: pageSize });
            this.iterator = this.pagedData.iterator();
            // only load a page if we have record
            if (this.pagedData.count > 0) {
                this.currentPage = this.pagedData.fetch(0);
                this.currentData = this.currentPage.data.results;
            }
            else {
                this.currentData = [];
            }
            this.index = 0;
            this.log.info(`lazy query `, `using page size ${this.pagedData.pageSize}, record count ${this.pagedData.count}`);
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
        static from(q, pageSize) {
            return new LazyQuery(q, pageSize);
        }
        /**
         * LazyQuery is both an iterable and an iterator for query results.
         */
        [Symbol.iterator]() {
            return this;
        }
        /**
         * per the iterator protocol, retrieves the next element. Also returns `null` if done as the specification for
         * the protocol says the value property is optional when 'done'
         *
         * You don't typically call this function yourself - libraries like ImmutableJS do.
         */
        next() {
            const atEndOfPage = this.index === this.currentData.length;
            const done = !this.currentPage || (this.currentPage.isLast && atEndOfPage);
            if (done)
                return {
                    done: true,
                    value: null
                };
            // we've reached the end of the current page, read the next page (overwriting current) and start from its beginning
            if (atEndOfPage) {
                this.currentPage = this.pagedData.fetch(this.currentPage.pageRange.index + 1);
                this.currentData = this.currentPage.data.results;
                this.mappedData = this.currentPage.data.asMappedResults();
                this.index = 0;
            }
            // return the next result from existing page (which may have been loaded immediately prior above)
            return {
                done: false,
                value: this.currentData[this.index++]
            };
        }
    }
    exports.LazyQuery = LazyQuery;
    /**
     * the name of the custom logger for this component for independent logging control
     */
    LazyQuery.LOGNAME = 'lazy';
});
