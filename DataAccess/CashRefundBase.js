/**
 * Represents a Cash Refund (cashrefund) transaction type in NetSuite
 */
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
        define(["require", "exports", "./Record", "N/record", "./Transaction", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ItemSublist = exports.CashRefundBase = void 0;
    const Record_1 = require("./Record");
    const record = require("N/record");
    const Transaction_1 = require("./Transaction");
    const Sublist_1 = require("./Sublist");
    class CashRefundBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.CASH_REFUND; }
    }
    __decorate([
        Record_1.FieldType.select
    ], CashRefundBase.prototype, "account", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], CashRefundBase.prototype, "ccapproved", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CashRefundBase.prototype, "ccexpiredate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CashRefundBase.prototype, "ccname", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CashRefundBase.prototype, "ccnumber", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CashRefundBase.prototype, "paymentmethod", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CashRefundBase.prototype, "pnrefnum", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CashRefundBase.prototype, "total", void 0);
    exports.CashRefundBase = CashRefundBase;
    class ItemSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "amount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ItemSublist.prototype, "revrecstartdate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ItemSublist.prototype, "revrecenddate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "rate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "taxcode", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "taxrate1", void 0);
    exports.ItemSublist = ItemSublist;
});
