/**
 * Copyright Explore Consulting, LLC
 *
 * NSDAL is NetSuite Data Access Layer and provides an improved interface to netsuite records.
 * @NApiVersion 2.x
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../EC_Logger", "./Sublist", "./Record"], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    var EC_Logger_1 = require("../EC_Logger");
    // these are exported for convenience, so an end user can `import * as nsdal from EC_nsdal` and have all the fieldtypes
    // decorators for both body fields and sublist fields on _nsdal_
    __export(require("./Sublist"));
    __export(require("./Record"));
    /**
     * the nsdal specific logger.
     * @type {Logger}
     */
    exports.log = EC_Logger_1.getLogger('nsdal');
});
