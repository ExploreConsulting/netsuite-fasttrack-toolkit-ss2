(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../DataAccess/VendorBillBase", "../DataAccess/Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const VendorBillBase_1 = require("../DataAccess/VendorBillBase");
    const Sublist_1 = require("../DataAccess/Sublist");
    describe('vendor bill', () => {
        test('sublists exist', () => {
            let sut = new VendorBillBase_1.VendorBillBase();
            // should have an 'item' sublist and 'expense' sublist
            expect(sut.item).toBeInstanceOf(Sublist_1.Sublist);
            expect(sut.expense).toBeInstanceOf(Sublist_1.Sublist);
        });
    });
});
