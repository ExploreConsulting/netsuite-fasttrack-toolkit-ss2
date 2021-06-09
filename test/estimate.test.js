(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../DataAccess/EstimateBase", "../DataAccess/Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const EstimateBase_1 = require("../DataAccess/EstimateBase");
    const Sublist_1 = require("../DataAccess/Sublist");
    describe('extimate', () => {
        test('sublists exist', () => {
            const sut = new EstimateBase_1.EstimateBase();
            // should have an 'item' sublist and 'expense' sublist
            expect(sut.item).toBeInstanceOf(Sublist_1.Sublist);
        });
        test('spot check fields', () => {
            const sut = new EstimateBase_1.EstimateBase();
            expect(sut.balance).toBeUndefined();
        });
    });
});
