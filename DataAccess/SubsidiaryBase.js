/**
 * NS Base subsidiary record - contains definitions built in fields
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
        define(["require", "exports", "./Record", "N/record", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AccountBookDetail = exports.SubsidiaryBase = void 0;
    const Record_1 = require("./Record");
    const record = require("N/record");
    const Sublist_1 = require("./Sublist");
    class SubsidiaryBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.SUBSIDIARY; }
    }
    __decorate([
        Record_1.FieldType.freeformtext
    ], SubsidiaryBase.prototype, "addr1", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SubsidiaryBase.prototype, "addr2", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SubsidiaryBase.prototype, "addr3", void 0);
    __decorate([
        Record_1.FieldType.freeformtext,
        Record_1.FieldType.select
    ], SubsidiaryBase.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.email
    ], SubsidiaryBase.prototype, "email", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SubsidiaryBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SubsidiaryBase.prototype, "fax", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SubsidiaryBase.prototype, "iselimination", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SubsidiaryBase.prototype, "isinactive", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SubsidiaryBase.prototype, "legalname", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubsidiaryBase.prototype, "logo", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SubsidiaryBase.prototype, "name", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SubsidiaryBase.prototype, "override", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubsidiaryBase.prototype, "parent", void 0);
    exports.SubsidiaryBase = SubsidiaryBase;
    class AccountBookDetail extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.select
    ], AccountBookDetail.prototype, "accountingbook", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], AccountBookDetail.prototype, "currency", void 0);
    exports.AccountBookDetail = AccountBookDetail;
});
