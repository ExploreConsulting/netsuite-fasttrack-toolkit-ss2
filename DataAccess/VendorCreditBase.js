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
    const Transaction_1 = require("./Transaction");
    const Sublist_1 = require("./Sublist");
    const Record_1 = require("./Record");
    const record = require("N/record");
    /**
     * Vendor Credit Expense Sublist
     */
    class ExpenseSublist extends Sublist_1.SublistLine {
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
    exports.ExpenseSublist = ExpenseSublist;
    /**
     * Vendor Credit Item Sublist
     */
    class ItemSublist extends Sublist_1.SublistLine {
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
    exports.ItemSublist = ItemSublist;
    /**
     * Vendor Credit Apply Sublist
     */
    class ApplySublist extends Sublist_1.SublistLine {
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
    exports.ApplySublist = ApplySublist;
    /**
     * Vendor Credit record Type
     */
    class VendorCreditBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.VENDOR_CREDIT; }
    }
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
    exports.VendorCreditBase = VendorCreditBase;
});
