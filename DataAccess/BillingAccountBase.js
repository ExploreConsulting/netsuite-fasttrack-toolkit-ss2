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
    exports.BillingAccountBase = void 0;
    var Record_1 = require("./Record");
    var record = require("N/record");
    /**
     * NetSuite Billing Account record type
     */
    var BillingAccountBase = /** @class */ (function (_super) {
        __extends(BillingAccountBase, _super);
        function BillingAccountBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BillingAccountBase.recordType = function () { return record.Type.BILLING_ACCOUNT; };
        __decorate([
            Record_1.FieldType.select
        ], BillingAccountBase.prototype, "billingschedule", void 0);
        __decorate([
            Record_1.FieldType.select
        ], BillingAccountBase.prototype, "cashsaleform", void 0);
        __decorate([
            Record_1.FieldType.select
        ], BillingAccountBase.prototype, "class", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], BillingAccountBase.prototype, "createdby", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], BillingAccountBase.prototype, "createddate", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], BillingAccountBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.select
        ], BillingAccountBase.prototype, "customer", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], BillingAccountBase.prototype, "customerdefault", void 0);
        __decorate([
            Record_1.FieldType.select
        ], BillingAccountBase.prototype, "customform", void 0);
        __decorate([
            Record_1.FieldType.select
        ], BillingAccountBase.prototype, "department", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], BillingAccountBase.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.select
        ], BillingAccountBase.prototype, "frequency", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], BillingAccountBase.prototype, "idnumber", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], BillingAccountBase.prototype, "idnumberexternal", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], BillingAccountBase.prototype, "inactive", void 0);
        __decorate([
            Record_1.FieldType.select
        ], BillingAccountBase.prototype, "invoiceform", void 0);
        __decorate([
            Record_1.FieldType.date
        ], BillingAccountBase.prototype, "lastbillcycledate", void 0);
        __decorate([
            Record_1.FieldType.date
        ], BillingAccountBase.prototype, "lastbilldate", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], BillingAccountBase.prototype, "memo", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], BillingAccountBase.prototype, "name", void 0);
        __decorate([
            Record_1.FieldType.date
        ], BillingAccountBase.prototype, "nextbillcycledate", void 0);
        __decorate([
            Record_1.FieldType.date
        ], BillingAccountBase.prototype, "startdate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], BillingAccountBase.prototype, "subsidiary", void 0);
        return BillingAccountBase;
    }(Record_1.NetsuiteRecord));
    exports.BillingAccountBase = BillingAccountBase;
});
