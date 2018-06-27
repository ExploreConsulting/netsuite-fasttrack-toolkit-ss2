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
define(["require", "exports", "./NFT-SS2-2.0.1/EC_Logger", "N/search", "./NFT-SS2-2.0.1/search", "immutable"], function (require, exports, LogManager, search, search_1, immutable_1) {
    "use strict";
    var IterableSearch = /** @class */ (function () {
        // //@ts-ignore
        // ["@@iterator"](): Iterator<search.Result | null> {
        //    return this as Iterator<search.Result | null>
        // }
        function IterableSearch(search, pageSize) {
            this.search = search;
            this.pageSize = pageSize;
            this.log = LogManager.getLogger(IterableSearch.LOGNAME);
            this.pagedData = this.search.runPaged({ pageSize: pageSize });
            this.currentPage = this.pagedData.fetch({ index: 0 });
            this.currentData = this.currentPage.data;
            this.index = 0;
            this.log.info("lazy search " + search.searchId, "using page size " + this.pagedData.pageSize);
        }
        IterableSearch.loadSearch = function (id, pageSize) {
            return new IterableSearch(search.load({ id: id }), pageSize);
        };
        IterableSearch.prototype.next = function () {
            // if we've reached the end of the current page, read the next page (overwriting current) and start from its beginning
            if (this.index === this.currentData.length - 1) {
                this.log.debug('loading next page');
                this.currentPage = this.currentPage.next();
                this.currentData = this.currentPage.data;
                this.index = 0;
            }
            if (this.currentPage.isLast && this.currentData.length <= this.index) {
                return {
                    done: true,
                    value: null
                };
            }
            else
                return {
                    done: false,
                    value: this.currentData[this.index++]
                };
        };
        IterableSearch.LOGNAME = 'lazy';
        return IterableSearch;
    }());
    var log = LogManager.DefaultLogger;
    LogManager.getLogger(IterableSearch.LOGNAME).setLevel(LogManager.logLevel.debug);
    var X;
    (function (X) {
        function onRequest(ctx) {
            switch (ctx.request.method) {
                case "GET":
                    log.debug('GET request');
                    var s = IterableSearch.loadSearch('730');
                    immutable_1.Seq(s)
                        .take(1)
                        .map(search_1.nsSearchResult2obj)
                        .forEach(function (i) { return log.debug('result', i); });
                    log.debug('first result', search_1.nsSearchResult2obj(s.next().value));
                    log.debug('second result', search_1.nsSearchResult2obj(s.next().value));
                    log.debug('third result', search_1.nsSearchResult2obj(s.next().value));
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
