/**
 * Represents a Customer Refund (customerrefund) transaction type in NetSuite
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
        define(["require", "exports", "./Record", "N/record", "./Transaction", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerRefundBase = exports.ApplySublist = void 0;
    var Record_1 = require("./Record");
    var record = require("N/record");
    var Transaction_1 = require("./Transaction");
    var Sublist_1 = require("./Sublist");
    /**
     * The Credits (apply) sublist on Customer Refund transaction
     */
    var ApplySublist = /** @class */ (function (_super) {
        __extends(ApplySublist, _super);
        function ApplySublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.currency
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
            Sublist_1.SublistFieldType.currency
        ], ApplySublist.prototype, "due", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ApplySublist.prototype, "duedate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "internalid", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
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
     * The Customer Refund (customerrefund) transaction in NetSuite
     */
    var CustomerRefundBase = /** @class */ (function (_super) {
        __extends(CustomerRefundBase, _super);
        function CustomerRefundBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Locates first matching line on the 'apply' sublist that corresponds to the passed related recordid.
         * Returns an object that can be used to manipulate the found line in 'current' (dynamic) mode. The returned
         * value is a subset of the full apply sublist for brevity (exposing the most commonly used properties)
         * Note the customer refund instance must be constructed in dynamic mode and include the { entity: <customer>} default
         * values initializer at construction.
         * @param  docId the internal id of the related document that makes a line appear on the apply sublist
         * e.g. a credit memo on the customer refund
         * calls to nsrecord.setCurrentSublistValue()
         */
        CustomerRefundBase.prototype.findApplyLine = function (docId) { return _super.prototype.findApplyLine.call(this, docId); };
        CustomerRefundBase.recordType = record.Type.CUSTOMER_REFUND;
        __decorate([
            Record_1.FieldType.select
        ], CustomerRefundBase.prototype, "account", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CustomerRefundBase.prototype, "aracct", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], CustomerRefundBase.prototype, "ccname", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], CustomerRefundBase.prototype, "ccnumber", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], CustomerRefundBase.prototype, "chargeit", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CustomerRefundBase.prototype, "creditcard", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CustomerRefundBase.prototype, "customer", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CustomerRefundBase.prototype, "paymentmethod", void 0);
        __decorate([
            Record_1.FieldType.sublist(ApplySublist)
        ], CustomerRefundBase.prototype, "apply", void 0);
        return CustomerRefundBase;
    }(Transaction_1.TransactionBase));
    exports.CustomerRefundBase = CustomerRefundBase;
});
