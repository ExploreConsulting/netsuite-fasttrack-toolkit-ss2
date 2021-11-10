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
        define(["require", "exports", "./Transaction", "./Sublist", "./Record", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VendorCreditBase = exports.ApplySublist = exports.ItemSublist = exports.ExpenseSublist = void 0;
    var Transaction_1 = require("./Transaction");
    var Sublist_1 = require("./Sublist");
    var Record_1 = require("./Record");
    var record = require("N/record");
    /**
     * Vendor Credit Expense Sublist
     */
    var ExpenseSublist = /** @class */ (function (_super) {
        __extends(ExpenseSublist, _super);
        function ExpenseSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ExpenseSublist.prototype, "account", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ExpenseSublist.prototype, "amount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ExpenseSublist.prototype, "memo", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ExpenseSublist.prototype, "department", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ExpenseSublist.prototype, "location", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ExpenseSublist.prototype, "expense", void 0);
        return ExpenseSublist;
    }(Sublist_1.SublistLine));
    exports.ExpenseSublist = ExpenseSublist;
    /**
     * Vendor Credit Item Sublist
     */
    var ItemSublist = /** @class */ (function (_super) {
        __extends(ItemSublist, _super);
        function ItemSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "account", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ItemSublist.prototype, "amount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "memo", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "item", void 0);
        return ItemSublist;
    }(Sublist_1.SublistLine));
    exports.ItemSublist = ItemSublist;
    /**
     * Vendor Credit Apply Sublist
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
            Sublist_1.SublistFieldType.currency
        ], ApplySublist.prototype, "amount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ApplySublist.prototype, "applydate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "doc", void 0);
        return ApplySublist;
    }(Sublist_1.SublistLine));
    exports.ApplySublist = ApplySublist;
    /**
     * Vendor Credit record Type
     */
    var VendorCreditBase = /** @class */ (function (_super) {
        __extends(VendorCreditBase, _super);
        function VendorCreditBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VendorCreditBase.recordType = function () { return record.Type.VENDOR_CREDIT; };
        __decorate([
            Record_1.FieldType.checkbox
        ], VendorCreditBase.prototype, "autoapply", void 0);
        __decorate([
            Record_1.FieldType.select
        ], VendorCreditBase.prototype, "account", void 0);
        __decorate([
            Record_1.FieldType.sublist(ItemSublist)
        ], VendorCreditBase.prototype, "item", void 0);
        __decorate([
            Record_1.FieldType.sublist(ExpenseSublist)
        ], VendorCreditBase.prototype, "expense", void 0);
        __decorate([
            Record_1.FieldType.sublist(ApplySublist)
        ], VendorCreditBase.prototype, "apply", void 0);
        return VendorCreditBase;
    }(Transaction_1.TransactionBase));
    exports.VendorCreditBase = VendorCreditBase;
});
