/**
 * Copyright         RSM US LLP
 * Description       Example map reduce script template
 * Collaborative Link:  [doc link]
 * Local Repo Link:     [azure documentation link of final technical doc]
 *
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./NFT-SS2-7.4.0/EC_Logger", "./NFT-SS2-7.4.0/lodash", "./NFT-SS2-7.4.0/query"], factory);
    }
})(function (require, exports) {
    "use strict";
    const LogManager = require("./NFT-SS2-7.4.0/EC_Logger");
    const _ = require("./NFT-SS2-7.4.0/lodash");
    const query_1 = require("./NFT-SS2-7.4.0/query");
    // consider using the pkg-auditlog package to audit/log progress to prebuilt custom record
    // https://dev.azure.com/rsm-appdev/IP-NetSuite/_git/pkg-ns-auditlog
    // import { IntegrationStatus } from './EC_AuditLog'
    // logger for use throughout
    const log = LogManager.DefaultLogger;
    var X;
    (function (X) {
        const qstr = `SELECT id, trandate FROM transaction WHERE id = ?`;
        const qcols = (0, query_1.getColumns)(qstr);
        /**
         * entrypoint for MR script - gets input data based on a saved search
         */
        function getInputData() {
            // you could instead use SuiteQL for your search by returning an object like so:
            return {
                type: 'suiteql',
                query: qstr,
                params: [1000]
            };
        }
        X.getInputData = getInputData;
        /**
         * entrypoint for MR script _MAP_ stage
         */
        function map(context) {
            const input = (0, query_1.mapQueryMRResults)(JSON.parse(context.value), qcols);
            log.debug('input', input);
            return 'map complete';
        }
        X.map = map;
        /**
         * REDUCE entrypoint for MR script.
         * This step receives all the (exploded) items that should go on
         */
        function reduce(context) {
            log.debug('key', context.key);
            _.each(context.values, _.partial(log.debug, 'values'));
        }
        X.reduce = reduce;
        /**
         * entrypoint for MR script
         */
        function summarize(summary) {
            // summarize totals
            log.info('summary', summary);
            log.info('input stage summary', summary.inputSummary);
            log.info('map stage summary', summary.mapSummary);
            log.info('reduce stage summary', summary.reduceSummary);
        }
        X.summarize = summarize;
    })(X || (X = {}));
    LogManager.autoLogMethodEntryExit({ target: X, method: /\w+/ }, {
        withProfiling: true,
        logLevel: LogManager.logLevel.info
    });
    return {
        map: X.map,
        getInputData: X.getInputData,
        summarize: X.summarize
    };
});
