/**
 * Copyright Explore Consulting, LLC
 *
 * NSDAL is NetSuite Data Access Layer and provides an improved interface to netsuite records.
 * @NApiVersion 2.x
 */
define(["require", "exports", "../EC_Logger", "./Sublist", "./Record"], function (require, exports, EC_Logger_1, Sublist_1, Record_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    // these are exported for convenience, so an end user can `import * as nsdal from EC_nsdal` and have all the fieldtypes
    // decorators for both body fields and sublist fields on _nsdal_
    __export(Sublist_1);
    __export(Record_1);
    /**
     * the nsdal specific logger.
     * @type {Logger}
     */
    exports.log = EC_Logger_1.getLogger('nsdal');
});
