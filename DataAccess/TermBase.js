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
        define(["require", "exports", "./Record", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TermBase = void 0;
    const Record_1 = require("./Record");
    const record = require("N/record");
    /**
     * NetSuite Project record type
     */
    class TermBase extends Record_1.NetsuiteRecord {
        static recordType() {
            return record.Type.TERM;
        }
    }
    __decorate([
        Record_1.FieldType.select
    ], TermBase.prototype, "datedriven", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], TermBase.prototype, "daydiscountexpires", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], TermBase.prototype, "dayofmonthnetdue", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], TermBase.prototype, "daysuntilexpiry", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], TermBase.prototype, "daysuntilnetdue", void 0);
    __decorate([
        Record_1.FieldType.float
    ], TermBase.prototype, "discountpercent", void 0);
    __decorate([
        Record_1.FieldType.float
    ], TermBase.prototype, "discountpercentdatedriven", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], TermBase.prototype, "duenextmonthifwithindays", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], TermBase.prototype, "installment", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TermBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], TermBase.prototype, "isinactive", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TermBase.prototype, "name", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], TermBase.prototype, "preferred", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], TermBase.prototype, "recurrencecount", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TermBase.prototype, "recurrencefrequency", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], TermBase.prototype, "repeatevery", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], TermBase.prototype, "splitevenly", void 0);
    exports.TermBase = TermBase;
});
