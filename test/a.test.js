(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "__mocks__/N/record", "lodash", "NFT/DataAccess/CustomerBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var mockrecord = require("__mocks__/N/record");
    var _ = require("lodash");
    var cust = require("NFT/DataAccess/CustomerBase");
    test('instantiate new object', function () {
        var c = new cust.Base;
        expect(c).toBeTruthy();
        expect(c).toHaveProperty('companyname');
        // should have called create (once)
        expect(mockrecord.create.mock.calls.length).toBe(1);
        // should not have called load
        expect(mockrecord.load.mock.calls.length).toBe(0);
        console.log(_.toPlainObject(c));
    });
    test('instantiate with STRING internal id', function () {
        var c = new cust.Base('123');
        expect(c).toBeTruthy();
        // should call load once
        expect(mockrecord.load.mock.calls.length).toBe(1);
        console.log(_.toPlainObject(c));
    });
    test('instantiate with NUMERIC internal id', function () {
        var c = new cust.Base(123);
        expect(c).toBeTruthy();
        // should call load once
        expect(mockrecord.load.mock.calls.length).toBe(1);
        console.log(_.toPlainObject(c));
    });
    test('instantiate with record object', function () {
        var c = new cust.Base(mockrecord.create({ type: 'foo' }));
        expect(c).toBeTruthy();
        // should not call load if we insantiate with an existing object
        expect(mockrecord.load.mock.calls.length).toBe(0);
    });
    test('instantiate invalid STRING internal id', function () {
        expect(function () { return new cust.Base('hello world'); })
            .toThrowError();
    });
    test('set a field', function () {
        var c = new cust.Base('123');
        expect(c).toBeTruthy();
        c.comments = 'random comments';
        expect(mockrecord.setValue).toHaveBeenCalledTimes(1);
        expect(mockrecord.getValue).not.toHaveBeenCalled();
    });
});
