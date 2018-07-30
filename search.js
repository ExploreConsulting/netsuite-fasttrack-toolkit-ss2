define(["require", "exports", "./lodash", "N/search", "./EC_Logger", "./governance"], function (require, exports, _, search, LogManager, governance_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.governanceRemains = governance_1.governanceRemains;
    /**
     * Rudimentary conversion of a NS search result to a simple flat plain javascript object. Suitable as an argument to _.map()
     * @param {Result} result a single netsuite search result to transform into a POJO
     */
    function nsSearchResult2obj(result) {
        var output = { id: result.id };
        // assigns each column VALUE from the search result to the output object, and if the column
        // has a truthy text value includes that as a propnameText field similar to how nsdal does
        _.reduce(result.columns, function (acc, x) {
            acc[x.name] = result.getValue(x);
            var text = result.getText(x);
            if (text)
                acc[x.name + "Text"] = text;
            return acc;
        }, output);
        return output;
    }
    exports.nsSearchResult2obj = nsSearchResult2obj;
    /**
     * makes a NetSuite search an ES2015 style Iterator. That is, it follows the Iterator Protocol for iterating
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
     * @example using immutablejs Sequence
     * import {Seq} from 'immutable'
     * const oneResult = Seq(LazySearch.load('1234')).map(nsSearchResult2obj).take(1)
     */
    var LazySearch = /** @class */ (function () {
        /**
         * Not meant to be used directly, use factory methods such as `load` or `from`
         * @param {Search} search
         * @param {number} pageSize optional pagesize, can be up to 1000
         */
        function LazySearch(search, pageSize) {
            if (pageSize === void 0) { pageSize = 500; }
            this.search = search;
            this.pageSize = pageSize;
            if (pageSize > 1000)
                throw new Error('page size must be <= 1000');
            this.log = LogManager.getLogger(LazySearch.LOGNAME);
            this.pagedData = this.search.runPaged({ pageSize: pageSize });
            // only load a page if we have records
            if (this.pagedData.count > 0) {
                this.currentPage = this.pagedData.fetch({ index: 0 });
                this.currentData = this.currentPage.data;
            }
            else {
                this.currentData = [];
                this.log.debug('runPaged() search return zero results');
            }
            this.index = 0;
            this.log.info("lazy search id " + (search.searchId || "ad-hoc"), "using page size " + this.pagedData.pageSize + ", record count " + this.pagedData.count);
        }
        /**
         * Loads an existing NS search by id and prepares it for lazy evaluation
         * @param {string} id
         * @param {number} pageSize
         * @returns {LazySearch}
         */
        LazySearch.load = function (id, pageSize) {
            return new LazySearch(search.load({ id: id }), pageSize);
        };
        /**
         * creates a lazy search from an existing NS search
         * @param {Search} search
         * @param {number} pageSize
         * @returns {LazySearch}
         */
        LazySearch.from = function (search, pageSize) {
            return new LazySearch(search, pageSize);
        };
        /**
         * per the iterator protocol, retrieves the next element. Also returns `null` if done as the specification for
         * the protocol says the value property is optional when 'done'
         * @returns {IteratorResult<Result | null>}
         */
        LazySearch.prototype.next = function () {
            var atEndOfPage = this.index === this.currentData.length;
            var done = !this.currentPage || (this.currentPage.isLast && atEndOfPage);
            if (done)
                return {
                    done: true,
                    value: null
                };
            // we've reached the end of the current page, read the next page (overwriting current) and start from its beginning
            if (atEndOfPage) {
                this.currentPage = this.currentPage.next();
                this.currentData = this.currentPage.data;
                this.log.debug('loaded next page', "is last page: " + this.currentPage.isLast);
                this.index = 0;
            }
            // return the next result from existing page (which may have been loaded immediately prior above)
            return {
                done: false,
                value: this.currentData[this.index++]
            };
        };
        // the name of the custom logger for this component for independent logging control
        LazySearch.LOGNAME = 'lazy';
        return LazySearch;
    }());
    exports.LazySearch = LazySearch;
});
