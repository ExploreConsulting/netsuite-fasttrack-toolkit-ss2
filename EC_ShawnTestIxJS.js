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
define(["require", "exports", "./NFT-SS2-2.0.1/EC_Logger", "N/search", "./NFT-SS2-2.0.1/search"], function (require, exports, LogManager, search, search_1) {
    "use strict";
    var log = LogManager.DefaultLogger;
    var IterableSearch = /** @class */ (function () {
        function IterableSearch(search, pageSize) {
            this.search = search;
            this.pageSize = pageSize;
            this.pagedData = this.search.runPaged({ pageSize: pageSize });
            this.currentPage = this.pagedData.fetch({ index: 0 });
            this.currentData = this.currentPage.data;
            this.currentIndex = 0;
        }
        IterableSearch.loadSearch = function (id, pageSize) {
            return new IterableSearch(search.load({ id: id }), pageSize);
        };
        IterableSearch.prototype[Symbol.iterator] = function () {
            return this;
        };
        IterableSearch.prototype.next = function () {
            // if we've reached the end of the current page, read the next page (overwriting current) and start from its beginning
            if (this.currentIndex === this.currentData.length - 1) {
                this.currentPage = this.currentPage.next();
                this.currentData = this.currentPage.data;
                this.currentIndex = 0;
            }
            if (this.currentPage.isLast && this.currentData.length <= this.currentIndex) {
                return {
                    done: true
                };
            }
            else
                return {
                    done: false,
                    value: this.currentData[this.currentIndex++]
                };
        };
        return IterableSearch;
    }());
    var X;
    (function (X) {
        function observableSearch(id) {
            var pages = search.load({ id: id }).runPaged();
            pages.pageRanges
                .forEach(function (pageRange) {
                pages.fetch({ index: pageRange.index }).data.forEach(function (result) {
                    return search_1.nsSearchResult2obj(result);
                });
            });
        }
        function onRequest(ctx) {
            switch (ctx.request.method) {
                case "GET":
                    log.debug('GET request');
                    break;
                case "POST":
                    log.debug('POST request parms', ctx.request.parameters);
                    break;
            }
        }
        X.onRequest = onRequest;
    })(X || (X = {}));
    LogManager.autoLogMethodEntryExit({ target: X, method: /\w+/ }, {
        withGovernance: true,
        withProfiling: true
    });
    return X;
});
