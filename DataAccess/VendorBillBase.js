/**
 * NetSuite Vendor Bill record
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
        define(["require", "exports", "./Sublist", "N/record", "./Transaction", "./Record", "./AddressBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VendorBillBase = exports.ExpenseSublist = exports.ItemSublist = void 0;
    const Sublist_1 = require("./Sublist");
    const record = require("N/record");
    const Transaction_1 = require("./Transaction");
    const Record_1 = require("./Record");
    const AddressBase_1 = require("./AddressBase");
    /**
     * Sublist 'item' on the Vendor Bill record
     */
    class ItemSublist extends Sublist_1.SublistLine {
    }
    exports.ItemSublist = ItemSublist;
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ItemSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "amount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "rate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "location", void 0);
    /**
     * Sublist 'expense' on the Vendor Bill record
     */
    class ExpenseSublist extends Sublist_1.SublistLine {
    }
    exports.ExpenseSublist = ExpenseSublist;
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExpenseSublist.prototype, "account", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ExpenseSublist.prototype, "amount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExpenseSublist.prototype, "categoryexpaccount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExpenseSublist.prototype, "class", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExpenseSublist.prototype, "department", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ExpenseSublist.prototype, "line", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ExpenseSublist.prototype, "lineuniquekey", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExpenseSublist.prototype, "location", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ExpenseSublist.prototype, "memo", void 0);
    /**
     * NetSuite Vendor Bill Record
     */
    class VendorBillBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.VENDOR_BILL; }
    }
    exports.VendorBillBase = VendorBillBase;
    __decorate([
        Record_1.FieldType.select
    ], VendorBillBase.prototype, "account", void 0);
    __decorate([
        Record_1.FieldType.select
    ], VendorBillBase.prototype, "approvalstatus", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], VendorBillBase.prototype, "availablevendorcredit", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], VendorBillBase.prototype, "balance", void 0);
    __decorate([
        Record_1.FieldType.select
    ], VendorBillBase.prototype, "class", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], VendorBillBase.prototype, "creditlimit", void 0);
    __decorate([
        Record_1.FieldType.select
    ], VendorBillBase.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], VendorBillBase.prototype, "currencyname", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], VendorBillBase.prototype, "currencysymbol", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], VendorBillBase.prototype, "discountamount", void 0);
    __decorate([
        Record_1.FieldType.date
    ], VendorBillBase.prototype, "discountdate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], VendorBillBase.prototype, "documentstatus", void 0);
    __decorate([
        Record_1.FieldType.date
    ], VendorBillBase.prototype, "duedate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], VendorBillBase.prototype, "entitynexus", void 0);
    __decorate([
        Record_1.FieldType.select
    ], VendorBillBase.prototype, "entitytaxregnum", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], VendorBillBase.prototype, "exchangerate", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], VendorBillBase.prototype, "landedcostperline", void 0);
    __decorate([
        Record_1.FieldType.select
    ], VendorBillBase.prototype, "nextapprover", void 0);
    __decorate([
        Record_1.FieldType.select
    ], VendorBillBase.prototype, "nexus", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], VendorBillBase.prototype, "overrideinstallments", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], VendorBillBase.prototype, "paymenthold", void 0);
    __decorate([
        Record_1.FieldType.date
    ], VendorBillBase.prototype, "taxpointdate", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], VendorBillBase.prototype, "taxpointdateoverride", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], VendorBillBase.prototype, "taxregoverride", void 0);
    __decorate([
        Record_1.FieldType.select
    ], VendorBillBase.prototype, "terms", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], VendorBillBase.prototype, "usertotal", void 0);
    __decorate([
        Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
    ], VendorBillBase.prototype, "billingaddress", void 0);
    __decorate([
        Record_1.FieldType.sublist(ItemSublist)
    ], VendorBillBase.prototype, "item", void 0);
    __decorate([
        Record_1.FieldType.sublist(ExpenseSublist)
    ], VendorBillBase.prototype, "expense", void 0);
});
