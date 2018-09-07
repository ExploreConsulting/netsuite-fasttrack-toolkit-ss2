"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VendorBillBase_1 = require("../DataAccess/VendorBillBase");
var Sublist_1 = require("../DataAccess/Sublist");
describe('vendor bill', function () {
    test('sublists exist', function () {
        var sut = new VendorBillBase_1.VendorBillBase();
        // should have an 'item' sublist and 'expense' sublist
        expect(sut.item).toBeInstanceOf(Sublist_1.Sublist);
        expect(sut.expense).toBeInstanceOf(Sublist_1.Sublist);
    });
});
