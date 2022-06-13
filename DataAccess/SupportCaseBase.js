/**
 * Defines new base record type for support cases. Currently outlining high level fields used for this client.
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
        define(["require", "exports", "./Record", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SupportCaseBase = void 0;
    const Record_1 = require("./Record");
    const record = require("N/record");
    /**
     * NetSuite Support Case record type
     */
    class SupportCaseBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.SUPPORT_CASE; }
    }
    __decorate([
        Record_1.FieldType.select
    ], SupportCaseBase.prototype, "assigned", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SupportCaseBase.prototype, "category", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SupportCaseBase.prototype, "customform", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SupportCaseBase.prototype, "status", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SupportCaseBase.prototype, "title", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SupportCaseBase.prototype, "company", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SupportCaseBase.prototype, "emailform", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SupportCaseBase.prototype, "messagenew", void 0);
    __decorate([
        Record_1.FieldType.longtext
    ], SupportCaseBase.prototype, "incomingmessage", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SupportCaseBase.prototype, "email", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SupportCaseBase.prototype, "quicknote", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SupportCaseBase.prototype, "phone", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SupportCaseBase.prototype, "origin", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], SupportCaseBase.prototype, "startdate", void 0);
    exports.SupportCaseBase = SupportCaseBase;
});
