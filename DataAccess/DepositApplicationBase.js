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
        define(["require", "exports", "./Record", "./Sublist", "./Transaction", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DepositApplicationBase = exports.ApplySublist = void 0;
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    const Transaction_1 = require("./Transaction");
    const record = require("N/record");
    class ApplySublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
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
        Sublist_1.SublistFieldType.freeformtext
    ], ApplySublist.prototype, "doc", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ApplySublist.prototype, "due", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ApplySublist.prototype, "duedate", void 0);
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
        Sublist_1.SublistFieldType.freeformtext
    ], ApplySublist.prototype, "total", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ApplySublist.prototype, "url", void 0);
    exports.ApplySublist = ApplySublist;
    /**
     *
     */
    class DepositApplicationBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.DEPOSIT_APPLICATION; }
    }
    __decorate([
        Record_1.FieldType.select
    ], DepositApplicationBase.prototype, "aracct", void 0);
    __decorate([
        Record_1.FieldType.select
    ], DepositApplicationBase.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.select
    ], DepositApplicationBase.prototype, "customer", void 0);
    __decorate([
        Record_1.FieldType.select
    ], DepositApplicationBase.prototype, "deposit", void 0);
    __decorate([
        Record_1.FieldType.date
    ], DepositApplicationBase.prototype, "depositdate", void 0);
    __decorate([
        Record_1.FieldType.sublist(ApplySublist)
    ], DepositApplicationBase.prototype, "apply", void 0);
    exports.DepositApplicationBase = DepositApplicationBase;
});
