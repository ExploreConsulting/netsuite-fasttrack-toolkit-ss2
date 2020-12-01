/**
 * Vendor Payment base record
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
        define(["require", "exports", "./Sublist", "N/record", "./Transaction", "./Record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VendorPaymentBase = exports.ApplySublist = void 0;
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    var Transaction_1 = require("./Transaction");
    var Record_1 = require("./Record");
    /**
     * Sublist 'apply' on the Vendor Payment record
     */
    var ApplySublist = /** @class */ (function (_super) {
        __extends(ApplySublist, _super);
        function ApplySublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ApplySublist.prototype, "apply", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ApplySublist.prototype, "applydate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ApplySublist.prototype, "amount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "createdfrom", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ApplySublist.prototype, "disc", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ApplySublist.prototype, "discamt", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ApplySublist.prototype, "discdate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "doc", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ApplySublist.prototype, "due", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ApplySublist.prototype, "duedate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "internalid", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ApplySublist.prototype, "line", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "refnum", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ApplySublist.prototype, "total", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "url", void 0);
        return ApplySublist;
    }(Sublist_1.SublistLine));
    exports.ApplySublist = ApplySublist;
    /**
     * NetSuite Vendor Payment Record
     */
    var VendorPaymentBase = /** @class */ (function (_super) {
        __extends(VendorPaymentBase, _super);
        function VendorPaymentBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VendorPaymentBase.recordType = record.Type.VENDOR_PAYMENT;
        __decorate([
            Record_1.FieldType.select
        ], VendorPaymentBase.prototype, "account", void 0);
        __decorate([
            Record_1.FieldType.select
        ], VendorPaymentBase.prototype, "apacct", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], VendorPaymentBase.prototype, "balance", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], VendorPaymentBase.prototype, "billpay", void 0);
        __decorate([
            Record_1.FieldType.select
        ], VendorPaymentBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], VendorPaymentBase.prototype, "currencyname", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], VendorPaymentBase.prototype, "currencysymbol", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], VendorPaymentBase.prototype, "exchangerate", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], VendorPaymentBase.prototype, "isbasecurrency", void 0);
        __decorate([
            Record_1.FieldType.select
        ], VendorPaymentBase.prototype, "nexus", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], VendorPaymentBase.prototype, "printvoucher", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], VendorPaymentBase.prototype, "toach", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], VendorPaymentBase.prototype, "tobeemailed", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], VendorPaymentBase.prototype, "tobeprinted", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], VendorPaymentBase.prototype, "total", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], VendorPaymentBase.prototype, "transactionnumber", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], VendorPaymentBase.prototype, "unapplied", void 0);
        __decorate([
            Record_1.FieldType.sublist(ApplySublist)
        ], VendorPaymentBase.prototype, "apply", void 0);
        return VendorPaymentBase;
    }(Transaction_1.TransactionBase));
    exports.VendorPaymentBase = VendorPaymentBase;
});
