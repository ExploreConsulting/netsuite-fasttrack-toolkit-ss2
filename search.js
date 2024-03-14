/**
 * This module provides a lazy, functional processing approach to working with NetSuite saved searches.
 * It automatically handles paging behind the scenes allowing the developer to focus on 'per result' business logic.
 *
 * Use `LazySearch.from()` and `LazySearch.load()` to get started.
 * Turn search results into plain objects using `nsSearchResult2obj()` and leverage
 * the methods of [ImmutableJS](https://facebook.github.io/immutable-js/) to process search results.
 * @module
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "N/search", "./EC_Logger"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LazySearch = exports.nsSearchResult2obj = void 0;
    const search = require("N/search");
    const LogManager = require("./EC_Logger");
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
     * @typeparam T declares the shape of the plain objects returned. e.g. `nsSearchResult2obj<{ companyname, memo }>` for a search result
     * that has columns _companyname_ and _memo_. Including an optional type here ensures strong typing on followup chained
     * method calls.
     *
     * @example  (using Immutable JS Sequence)
     *
     * ```typescript
     *  // default (uses column labels if present)
     *  Seq(LazySearch.load(1234)).map(nsSearchResult2obj()).forEach(...)
     *
     *  // force ignoring search column labels
     *  Seq(LazySearch.load(1234)).map(nsSearchResult2obj(false)).forEach(...)
     *
     *  ```
     */
    function nsSearchResult2obj(useLabels = true, addGetTextProps = true) {
        return function (result) {
            let output = { id: result.id, recordType: result.recordType };
            // assigns each column VALUE from the search result to the output object
            if (result.columns && result.columns.length > 0)
                result.columns.forEach((col) => {
                    const propName = (useLabels && col.label) ? col.label : col.name;
                    output[propName] = result.getValue(col);
                    // if the column has a truthy text value, include that as a 'propnameText' field similar to how nsdal behaves
                    if (addGetTextProps) {
                        const text = result.getText(col);
                        if (text)
                            output[`${propName}Text`] = text;
                    }
                });
            return output;
        };
    }
    exports.nsSearchResult2obj = nsSearchResult2obj;
    /**
     * Makes a NetSuite search an ES2015 style Iterator. That is, it follows the Iterator Protocol for iterating
     * over search results in a forward-only fashion. The result can be passed to any library
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
     * const oneResult = Seq(LazySearch.load('1234')).map(nsSearchResult2obj()).take(1)
     * ```
     */
    class LazySearch {
        /**
         * LazySearch is both an iterable and an iterator for search results.
         */
        [Symbol.iterator]() {
            return this;
        }
        // /**
        //  * A LazySearch is iterable per the iterable protocol, which also plays nicely with immutablejs
        //  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
        //  */
        /**
         * Loads an existing NS search by id and prepares it for lazy evaluation
         * @param id internal id of the search to load
         * @param pageSize how many records to retrieve per page (paging is automatic) Maximum value: 1000
         * @returns {LazySearch}
         *
         * @example do something for each search result, automatically exiting if out of governance.
         *
         * ```typescript
         *
         * import {Seq} from './NFT-X.Y.Z/immutable'
         * import {governanceRemains, LazySearch, nsSearchResult2obj} from './NFT-X.Y.Z/search'
         *
         * Seq(LazySearch.load('1234'))
         *   .takeWhile(governanceRemains()) // process until we drop below default governance threshold
         *   .map(nsSearchResult2obj()) // convert search results to plain objects with properties
         *   .forEach( r => log.debug(r))
         * ```
         */
        static load(id, pageSize) {
            return new LazySearch(search.load({ id: id }), pageSize);
        }
        /**
         * Creates a lazy search from an existing NS search.
         * @param search
         * @param pageSize
         * @returns {LazySearch}
         *
         * @example create a search and begin lazy processing of results
         *
         * ```
         * import {Seq} from './NFT-X.Y.Z/immutable'
         * import * as search from 'N/search
         * import {governanceRemains, LazySearch, nsSearchResult2obj} from './NFT-X.Y.Z/search'
         *
         * Seq(LazySearch.from(search.create({
         *    filters: [['internalid', 'anyof', [1,2]),
         *    columns:['item', 'description'],
         *    type: search.Type.ITEM,
         *  })))
         *   .takeWhile(governanceRemains()) // process until we drop below default governance threshold
         *   .map(nsSearchResult2obj()) // convert search results to plain objects with properties
         *   .forEach( r => log.debug(r))
         * ```
         */
        static from(search, pageSize) {
            return new LazySearch(search, pageSize);
        }
        /**
         * Not meant to be used directly, use factory methods such as `load` or `from`
         * @param search the netsuite search object to wrap
         * @param pageSize optional pagesize, can be up to 1000
         */
        constructor(search, pageSize = 500) {
            this.search = search;
            this.pageSize = pageSize;
            // Total length of the search result set
            this.totalSearchResultLength = 0;
            // Current search result count, used to know if we have hit the end of the current "page"
            this.currentSearchResultRange = 0;
            if (pageSize > 1000)
                throw new Error('page size must be <= 1000');
            this.log = LogManager.getLogger(LazySearch.LOGNAME);
            this.currentData = [];
            this.executedSearch = search.run();
            this.currentRange = this.executedSearch.getRange({
                start: 0,
                end: pageSize
            });
            this.log.info(`this.currentSearchResultRange = ${this.currentSearchResultRange} | this.currentRange.length = ${this.currentRange.length}`, this.executedSearch);
            while (this.currentSearchResultRange < this.currentRange.length) {
                this.log.info(`in while`, this.currentRange);
                this.currentData.push(this.currentRange[this.currentSearchResultRange]);
                this.currentSearchResultRange++;
                this.totalSearchResultLength++;
                if (this.currentSearchResultRange === this.pageSize) {
                    this.currentSearchResultRange = 0;
                    this.currentRange = this.executedSearch.getRange({
                        start: this.totalSearchResultLength,
                        end: this.totalSearchResultLength + this.pageSize
                    });
                }
            }
            // this.pagedData = this.search.runPaged({pageSize: pageSize})
            // // only load a page if we have records
            // if (this.pagedData.count > 0) {
            //    this.currentPage = this.pagedData.fetch({index: 0})
            //    this.currentData = this.currentPage.data
            // } else {
            //    this.currentData = []
            //    this.log.debug('runPaged() search return zero results')
            // }
            this.log.info(`this.currentData`, this.currentData);
            this.index = 0;
            this.log.info(`lazy search id ${search.searchId || "ad-hoc"}`, `using "page" size ${this.pageSize}, record count ${this.totalSearchResultLength}`);
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
                this.currentPage = this.currentPage.next();
                this.currentData = this.currentPage.data;
                this.log.debug('loaded next page', `is last page: ${this.currentPage.isLast}`);
                this.index = 0;
            }
            // return the next result from existing page (which may have been loaded immediately prior above)
            return {
                done: false,
                value: this.currentData[this.index++]
            };
        }
    }
    exports.LazySearch = LazySearch;
    /**
     * the name of the custom logger for this component for independent logging control
     */
    LazySearch.LOGNAME = 'lazy';
});
