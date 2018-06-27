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
define(["require", "exports", "./NFT-SS2-2.1.0/EC_Logger", "./NFT-SS2-2.1.0/search", "./NFT-SS2-2.1.0/immutable"], function (require, exports, LogManager, search_1, immutable_1) {
    "use strict";
    var log = LogManager.DefaultLogger;
    LogManager.getLogger(search_1.LazySearch.LOGNAME).setLevel(LogManager.logLevel.debug);
    var X;
    (function (X) {
        function onRequest(ctx) {
            switch (ctx.request.method) {
                case "GET":
                    log.debug('GET request');
                    immutable_1.Seq(search_1.LazySearch.load('730'))
                        .skip(123)
                        .take(1)
                        .map(search_1.nsSearchResult2obj)
                        .forEach(function (i) { return log.debug('result', i); });
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
