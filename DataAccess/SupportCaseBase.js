/**
 * Defines new base record type for support cases. Currently outlining high level fields used for this client.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    var Record_1 = require("./Record");
    var record = require("N/record");
    /**
     * NetSuite Support Case record type
     */
    var SupportCaseBase = /** @class */ (function (_super) {
        __extends(SupportCaseBase, _super);
        function SupportCaseBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SupportCaseBase.recordType = function () { return record.Type.SUPPORT_CASE; };
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
        return SupportCaseBase;
    }(Record_1.NetsuiteRecord));
    exports.SupportCaseBase = SupportCaseBase;
});
