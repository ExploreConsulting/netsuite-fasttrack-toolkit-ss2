/**
 * Created by shawn on 4/15/16.
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
        define(["require", "exports", "./Record", "N/record", "./Transaction", "./Sublist", "./AddressBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApplySublist = exports.ItemSublist = exports.CreditMemoBase = void 0;
    const Record_1 = require("./Record");
    const record = require("N/record");
    const Transaction_1 = require("./Transaction");
    const Sublist_1 = require("./Sublist");
    const AddressBase_1 = require("./AddressBase");
    class CreditMemoBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.CREDIT_MEMO; }
    }
    exports.CreditMemoBase = CreditMemoBase;
    __decorate([
        Record_1.FieldType.select
    ], CreditMemoBase.prototype, "account", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CreditMemoBase.prototype, "amountpaid", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CreditMemoBase.prototype, "amountremaining", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CreditMemoBase.prototype, "applied", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], CreditMemoBase.prototype, "autoapply", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CreditMemoBase.prototype, "balance", void 0);
    __decorate([
        Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
    ], CreditMemoBase.prototype, "billingaddress", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditMemoBase.prototype, "class", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditMemoBase.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
    ], CreditMemoBase.prototype, "shippingaddress", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CreditMemoBase.prototype, "subtotal", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CreditMemoBase.prototype, "total", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CreditMemoBase.prototype, "unapplied", void 0);
    class ItemSublist extends Sublist_1.SublistLine {
    }
    exports.ItemSublist = ItemSublist;
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ItemSublist.prototype, "revrecstartdate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ItemSublist.prototype, "revrecenddate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "amount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "rate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "taxcode", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "taxrate1", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "autoapply", void 0);
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
        Sublist_1.SublistFieldType.select
    ], ApplySublist.prototype, "createdfrom", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ApplySublist.prototype, "refnum", void 0);
});
