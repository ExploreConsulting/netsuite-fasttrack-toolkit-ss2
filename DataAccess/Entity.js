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
        define(["require", "exports", "./Record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Entity = void 0;
    /**
     dummy comment for TypeDoc
     */
    const Record_1 = require("./Record");
    /**
     * NetSuite generic Entity used as a common base class for 'entity-like' records,
     * This is meant to be inherited by concrete record types to avoid duplicating effort on fields.
     * Note that this inheritance hierarchy emerged empirically - it's not documented by NetSuite.
     *
     * It contains fields common to all 'entity' records in NS
     */
    class Entity extends Record_1.NetsuiteRecord {
    }
    __decorate([
        Record_1.FieldType.freeformtext
    ], Entity.prototype, "accountnumber", void 0);
    __decorate([
        Record_1.FieldType.email
    ], Entity.prototype, "altemail", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Entity.prototype, "altphone", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], Entity.prototype, "balance", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Entity.prototype, "billpay", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Entity.prototype, "category", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], Entity.prototype, "comments", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Entity.prototype, "companyname", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Entity.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Entity.prototype, "customform", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], Entity.prototype, "datecreated", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Entity.prototype, "email", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Entity.prototype, "entityid", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Entity.prototype, "entitystatus", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Entity.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Entity.prototype, "fax", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Entity.prototype, "firstname", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Entity.prototype, "isinactive", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Entity.prototype, "isperson", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], Entity.prototype, "lastmodifieddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Entity.prototype, "language", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Entity.prototype, "lastname", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Entity.prototype, "parent", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Entity.prototype, "phone", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Entity.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Entity.prototype, "taxitem", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Entity.prototype, "terms", void 0);
    exports.Entity = Entity;
});
