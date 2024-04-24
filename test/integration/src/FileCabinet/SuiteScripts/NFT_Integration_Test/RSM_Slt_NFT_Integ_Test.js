/**
 * Company           RSM US LLP
 * Description       A script for smoke-testing NFT.
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 **/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./NFT-SS2-7.2.1/EC_Logger", "./NFT-SS2-7.2.1/DataAccess/ItemFulfillmentBase", "./NFT-SS2-7.2.1/DataAccess/Record", "./NFT-SS2-7.2.1/DataAccess/AddressBase", "./RecordTypes/Customer", "./NFT-SS2-7.2.1/search", "./NFT-SS2-7.2.1/query", "N/search", "./NFT-SS2-7.2.1/immutable", "./RecordTypes/VendorPayment", "./NFT-SS2-7.2.1/lodash", "./NFT-SS2-7.2.1/DataAccess/InventoryItemBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    const LogManager = require("./NFT-SS2-7.2.1/EC_Logger");
    const ItemFulfillmentBase_1 = require("./NFT-SS2-7.2.1/DataAccess/ItemFulfillmentBase");
    const Record_1 = require("./NFT-SS2-7.2.1/DataAccess/Record");
    const AddressBase_1 = require("./NFT-SS2-7.2.1/DataAccess/AddressBase");
    const Customer_1 = require("./RecordTypes/Customer");
    const search_1 = require("./NFT-SS2-7.2.1/search");
    const query_1 = require("./NFT-SS2-7.2.1/query");
    const search = require("N/search");
    const immutable_1 = require("./NFT-SS2-7.2.1/immutable");
    const VendorPayment_1 = require("./RecordTypes/VendorPayment");
    const _ = require("./NFT-SS2-7.2.1/lodash");
    const InventoryItemBase_1 = require("./NFT-SS2-7.2.1/DataAccess/InventoryItemBase");
    const log = LogManager.DefaultLogger;
    class ItemFulfillment extends ItemFulfillmentBase_1.ItemFulfillmentBase {
    }
    __decorate([
        Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
    ], ItemFulfillment.prototype, "shippingaddress", void 0);
    var X;
    (function (X) {
        /**
         * main script entrypoint
         */
        function onRequest(ctx) {
            LogManager.getLogger(search_1.LazySearch.LOGNAME).setLevel(LogManager.logLevel.debug);
            switch (ctx.request.method) {
                case 'GET':
                    ctx.response.writeLine({ output: `<H1>NFT Integration Tests</H1>` });
                    for (const test in testMap) {
                        ctx.response.writeLine({ output: `<H2>${test}</H2>` });
                        ctx.response.write(`<pre>${JSON.stringify(testMap[test](), null, 2)}</pre>`);
                    }
                    break;
                case 'POST':
                    log.debug('POST request parms', ctx.request.parameters);
                    break;
            }
        }
        X.onRequest = onRequest;
        /**
         * ensure we can load an assembly item  now that it uses the shared `Item` base class
         */
        function loadAssemblyItem() {
            return new InventoryItemBase_1.InventoryItemBase(111);
        }
        X.loadAssemblyItem = loadAssemblyItem;
        /**
         * Tests that NFT can load a specific transaction
         */
        function loadTransaction() {
            return new ItemFulfillment(7955);
        }
        X.loadTransaction = loadTransaction;
        function loadEntity() {
            return new Customer_1.Customer(283);
        }
        X.loadEntity = loadEntity;
        function doSearch() {
            return (0, immutable_1.Seq)(search_1.LazySearch.from(search.create({
                type: search.Type.CUSTOMER,
                filters: [
                    ['companyname', search.Operator.CONTAINS, 'e']
                ],
                columns: ['companyname', 'phone', 'firstname', 'lastname']
                // as any below because two physically separate declarations of N/search (one referenced by LazySearch.from() expected parameters,
                // the other being the argument value created by search.create() here in this script.
                // are viewed as incompatible by TS
            })))
                .map((0, search_1.nsSearchResult2obj)())
                .toArray();
        }
        X.doSearch = doSearch;
        function doQuery() {
            return (0, immutable_1.Seq)(query_1.LazyQuery.from(`SELECT ID FROM TRANSACTION`, null, 10)).map(query_1.nsSearchResult2obj);
        }
        X.doQuery = doQuery;
        function sublists() {
            const v = new VendorPayment_1.VendorPayment(7985);
            v.apply.useDynamicModeAPI = false;
            const applySublist = _.toPlainObject(v.apply);
            v.apply.useDynamicModeAPI = true;
            // should be the same becaue the record was in standard mode all along
            const applySublist2 = _.toPlainObject(v.apply);
            const customerAddress = new Customer_1.Customer(283).addressbook;
            return { standardModeResult: applySublist, standardModeResult2: applySublist2, customerAddress };
        }
        X.sublists = sublists;
        function autoLogging() {
            log.info('autologging');
            // this should log an object for entry/exit
            X.foo({ x: 'hello' });
            // should log a primitive number for entry/exit
            X.bar(200);
            return 'see execution log for details';
        }
        X.autoLogging = autoLogging;
        function basicLodash() {
            return [
                {
                    msg: '_.filter() greater than 3', result: _.filter([2, 3, 4, 6], x => x > 3)
                },
                {
                    msg: '_.map 1,2,3 add 1', result: _.map([1, 2, 3], x => x + 1)
                }
            ];
        }
        X.basicLodash = basicLodash;
        function foo(obj) {
            obj.x += 'world';
            return obj;
        }
        X.foo = foo;
        function bar(i) { return i + 5; }
        X.bar = bar;
        const testMap = {
            'NSDAL load Transaction': X.loadTransaction,
            'NSDAL load Inventory Item': X.loadAssemblyItem,
            'NSDAL load Customer': X.loadEntity,
            'NSDAL sublists': X.sublists,
            'LazySearch': X.doSearch,
            'LazyQuery': X.doQuery,
            'AutoLogging': X.autoLogging,
            'BasicLodash': X.basicLodash
        };
    })(X || (X = {}));
    LogManager.autoLogMethodEntryExit({ target: X, method: /\w+/ }, {
        withGovernance: true,
        withProfiling: true
    });
    return { onRequest: X.onRequest };
});
