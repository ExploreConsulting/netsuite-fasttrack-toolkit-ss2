/**
 * Represents an Deposit record (deposit) in NetSuite
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
        define(["require", "exports", "./Record", "./Sublist", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DepositBase = exports.PaymentsSublist = void 0;
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    const record = require("N/record");
    /**
     * Deposit payments sublist
     */
    class PaymentsSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PaymentsSublist.prototype, "class", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], PaymentsSublist.prototype, "currency", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PaymentsSublist.prototype, "department", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], PaymentsSublist.prototype, "deposit", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], PaymentsSublist.prototype, "docdate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], PaymentsSublist.prototype, "docnumber", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PaymentsSublist.prototype, "entity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PaymentsSublist.prototype, "id", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], PaymentsSublist.prototype, "lineid", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PaymentsSublist.prototype, "location", void 0);
    __decorate([
        Sublist_1.SublistFieldType.longtext
    ], PaymentsSublist.prototype, "memo", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], PaymentsSublist.prototype, "paymentamount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PaymentsSublist.prototype, "paymentmethod", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], PaymentsSublist.prototype, "pmtcurrencyprecision", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], PaymentsSublist.prototype, "refnum", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], PaymentsSublist.prototype, "transactionamount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PaymentsSublist.prototype, "type", void 0);
    exports.PaymentsSublist = PaymentsSublist;
    /**
     * Deposit Record Header
     */
    class DepositBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.DEPOSIT; }
    }
    __decorate([
        Record_1.FieldType.select
    ], DepositBase.prototype, "account", void 0);
    __decorate([
        Record_1.FieldType.select
    ], DepositBase.prototype, "class", void 0);
    __decorate([
        Record_1.FieldType.date
    ], DepositBase.prototype, "createddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], DepositBase.prototype, "creditcardprocessor", void 0);
    __decorate([
        Record_1.FieldType.select
    ], DepositBase.prototype, "department", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], DepositBase.prototype, "exchangerate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], DepositBase.prototype, "location", void 0);
    __decorate([
        Record_1.FieldType.longtext
    ], DepositBase.prototype, "memo", void 0);
    __decorate([
        Record_1.FieldType.select
    ], DepositBase.prototype, "postingperiod", void 0);
    __decorate([
        Record_1.FieldType.select
    ], DepositBase.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], DepositBase.prototype, "tobeprinted", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], DepositBase.prototype, "total", void 0);
    __decorate([
        Record_1.FieldType.date
    ], DepositBase.prototype, "trandate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], DepositBase.prototype, "tranid", void 0);
    __decorate([
        Record_1.FieldType.sublist(PaymentsSublist)
    ], DepositBase.prototype, "payment", void 0);
    exports.DepositBase = DepositBase;
});
