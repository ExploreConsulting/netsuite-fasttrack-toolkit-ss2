/**
 * NetSuite Customer Payment (customerpayment) record
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
        define(["require", "exports", "./Sublist", "N/record", "./Transaction", "./Record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerPaymentBase = exports.ApplySublist = void 0;
    const Sublist_1 = require("./Sublist");
    const record = require("N/record");
    const Transaction_1 = require("./Transaction");
    const Record_1 = require("./Record");
    class ApplySublist extends Sublist_1.SublistLine {
    }
    exports.ApplySublist = ApplySublist;
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ApplySublist.prototype, "amount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ApplySublist.prototype, "apply", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ApplySublist.prototype, "applydate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ApplySublist.prototype, "createdfrom", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ApplySublist.prototype, "disc", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ApplySublist.prototype, "doc", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ApplySublist.prototype, "discamt", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ApplySublist.prototype, "internalid", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ApplySublist.prototype, "job", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ApplySublist.prototype, "line", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ApplySublist.prototype, "refnum", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ApplySublist.prototype, "total", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ApplySublist.prototype, "url", void 0);
    /**
     * Customer Payment Record
     */
    class CustomerPaymentBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.CUSTOMER_PAYMENT; }
    }
    exports.CustomerPaymentBase = CustomerPaymentBase;
    __decorate([
        Record_1.FieldType.select
    ], CustomerPaymentBase.prototype, "customer", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CustomerPaymentBase.prototype, "checknum", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CustomerPaymentBase.prototype, "payment", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CustomerPaymentBase.prototype, "paymentmethod", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], CustomerPaymentBase.prototype, "autoapply", void 0);
    __decorate([
        Record_1.FieldType.sublist(ApplySublist)
    ], CustomerPaymentBase.prototype, "apply", void 0);
});
