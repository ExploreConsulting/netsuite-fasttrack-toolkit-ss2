/**
 * NetSuite Vendor Bill record
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
        define(["require", "exports", "./Sublist", "N/record", "./Transaction", "./Record", "./AddressBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VendorBillBase = exports.ExpenseSublist = exports.ItemSublist = void 0;
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    var Transaction_1 = require("./Transaction");
    var Record_1 = require("./Record");
    var AddressBase_1 = require("./AddressBase");
    /**
     * Sublist 'item' on the Vendor Bill record
     */
    var ItemSublist = /** @class */ (function (_super) {
        __extends(ItemSublist, _super);
        function ItemSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
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
        return ItemSublist;
    }(Sublist_1.SublistLine));
    exports.ItemSublist = ItemSublist;
    /**
     * Sublist 'expense' on the Vendor Bill record
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
            Sublist_1.SublistFieldType.select
        ], ExpenseSublist.prototype, "categoryexpaccount", void 0);
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
        return ExpenseSublist;
    }(Sublist_1.SublistLine));
    exports.ExpenseSublist = ExpenseSublist;
    /**
     * NetSuite Vendor Bill Record
     */
    var VendorBillBase = /** @class */ (function (_super) {
        __extends(VendorBillBase, _super);
        function VendorBillBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VendorBillBase.recordType = record.Type.VENDOR_BILL;
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
        return VendorBillBase;
    }(Transaction_1.TransactionBase));
    exports.VendorBillBase = VendorBillBase;
});
