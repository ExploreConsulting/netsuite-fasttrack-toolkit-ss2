/**
 *  Represents a Transfer Order (transferorder) transaction type in NetSuite
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
    exports.ItemSublist = exports.TransferOrderBase = void 0;
    const Sublist_1 = require("./Sublist");
    const record = require("N/record");
    const Transaction_1 = require("./Transaction");
    const Record_1 = require("./Record");
    const AddressBase_1 = require("./AddressBase");
    /**
     * NetSuite Transfer Order Record
     */
    class TransferOrderBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.TRANSFER_ORDER; }
    }
    exports.TransferOrderBase = TransferOrderBase;
    __decorate([
        Record_1.FieldType.select
    ], TransferOrderBase.prototype, "class", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TransferOrderBase.prototype, "createdfrom", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TransferOrderBase.prototype, "employee", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], TransferOrderBase.prototype, "firmed", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TransferOrderBase.prototype, "nexus", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TransferOrderBase.prototype, "orderstatus", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], TransferOrderBase.prototype, "shipcomplete", void 0);
    __decorate([
        Record_1.FieldType.date
    ], TransferOrderBase.prototype, "shipdate", void 0);
    __decorate([
        Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
    ], TransferOrderBase.prototype, "shippingaddress", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], TransferOrderBase.prototype, "subtotal", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], TransferOrderBase.prototype, "total", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TransferOrderBase.prototype, "transferlocation", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], TransferOrderBase.prototype, "useitemcostastransfercost", void 0);
    /**
     * Sublist 'item' on the Transfer Order record
     */
    class ItemSublist extends Sublist_1.SublistLine {
    }
    exports.ItemSublist = ItemSublist;
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "amount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "catchupperiod", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "commitinventory", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "deferrevrec", void 0);
    __decorate([
        Sublist_1.SublistFieldType.textarea
    ], ItemSublist.prototype, "description", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ItemSublist.prototype, "expectedreceiptdate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ItemSublist.prototype, "expectedshipdate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "isclosed", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ItemSublist.prototype, "linenumber", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ItemSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ItemSublist.prototype, "quantityavailable", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ItemSublist.prototype, "quantitybackordered", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ItemSublist.prototype, "quantitycommitted", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ItemSublist.prototype, "quantityfulfilled", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ItemSublist.prototype, "quantityreceived", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "rate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "units", void 0);
});
