/**
 * NetSuite Purchase Order Record
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
        define(["require", "exports", "N/record", "./Transaction", "./Sublist", "./Record", "./AddressBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PurchaseOrderBase = exports.ItemSublist = void 0;
    const record = require("N/record");
    const Transaction_1 = require("./Transaction");
    const Sublist_1 = require("./Sublist");
    const Record_1 = require("./Record");
    const AddressBase_1 = require("./AddressBase");
    /**
     * Sublist 'item' on purchase orders
     */
    class ItemSublist extends Sublist_1.SublistLine {
    }
    exports.ItemSublist = ItemSublist;
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "amount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "class", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "customer", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "deferrevrec", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "department", void 0);
    __decorate([
        Sublist_1.SublistFieldType.textarea
    ], ItemSublist.prototype, "description", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ItemSublist.prototype, "expectedreceiptdate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "isclosed", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "location", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ItemSublist.prototype, "leadtime", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ItemSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ItemSublist.prototype, "quantityreceived", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ItemSublist.prototype, "quantitybilled", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "rate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "units", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "vendorname", void 0);
    /**
     * NetSuite Purchase Order Record
     */
    class PurchaseOrderBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.PURCHASE_ORDER; }
    }
    exports.PurchaseOrderBase = PurchaseOrderBase;
    __decorate([
        Record_1.FieldType.select
    ], PurchaseOrderBase.prototype, "approvalstatus", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], PurchaseOrderBase.prototype, "balance", void 0);
    __decorate([
        Record_1.FieldType.select
    ], PurchaseOrderBase.prototype, "class", void 0);
    __decorate([
        Record_1.FieldType.select
    ], PurchaseOrderBase.prototype, "createdfrom", void 0);
    __decorate([
        Record_1.FieldType.select
    ], PurchaseOrderBase.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.select
    ], PurchaseOrderBase.prototype, "employee", void 0);
    __decorate([
        Record_1.FieldType.select
    ], PurchaseOrderBase.prototype, "incoterm", void 0);
    __decorate([
        Record_1.FieldType.select
    ], PurchaseOrderBase.prototype, "intercotransaction", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], PurchaseOrderBase.prototype, "isbasecurrency", void 0);
    __decorate([
        Record_1.FieldType.date
    ], PurchaseOrderBase.prototype, "shipdate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], PurchaseOrderBase.prototype, "shipmethod", void 0);
    __decorate([
        Record_1.FieldType.select
    ], PurchaseOrderBase.prototype, "shipto", void 0);
    __decorate([
        Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
    ], PurchaseOrderBase.prototype, "billingaddress", void 0);
    __decorate([
        Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
    ], PurchaseOrderBase.prototype, "shippingaddress", void 0);
    __decorate([
        Record_1.FieldType.select
    ], PurchaseOrderBase.prototype, "terms", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], PurchaseOrderBase.prototype, "tobeemailed", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], PurchaseOrderBase.prototype, "tobefaxed", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], PurchaseOrderBase.prototype, "tobeprinted", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], PurchaseOrderBase.prototype, "total", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], PurchaseOrderBase.prototype, "unbilledorders", void 0);
    __decorate([
        Record_1.FieldType.sublist(ItemSublist)
    ], PurchaseOrderBase.prototype, "item", void 0);
});
