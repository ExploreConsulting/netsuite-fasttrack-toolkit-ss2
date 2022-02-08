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
    exports.TermBase = void 0;
    var Record_1 = require("./Record");
    var record = require("N/record");
    /**
     * NetSuite Project record type
     */
    var TermBase = /** @class */ (function (_super) {
        __extends(TermBase, _super);
        function TermBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TermBase.recordType = function () {
            return record.Type.TERM;
        };
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
        return TermBase;
    }(Record_1.NetsuiteRecord));
    exports.TermBase = TermBase;
});
