/**
 * NS Account record - contains definitions for most of the built in fields
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
    exports.ClassBase = void 0;
    const Record_1 = require("./Record");
    const record = require("N/record");
    /**
     * NetSuite Account (account)
     */
    class ClassBase extends Record_1.NetsuiteRecord {
        static recordType() {
            return record.Type.CLASSIFICATION;
        }
    }
    exports.ClassBase = ClassBase;
    __decorate([
        Record_1.FieldType.freeformtext
    ], ClassBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ClassBase.prototype, "includechildren", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ClassBase.prototype, "isinactive", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ClassBase.prototype, "name", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ClassBase.prototype, "parent", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ClassBase.prototype, "subsidiary", void 0);
});
