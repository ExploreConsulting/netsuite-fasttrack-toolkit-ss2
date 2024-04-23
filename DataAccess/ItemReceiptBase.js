/**
 * Represents an Item Receipt (itemreceipt) transaction type in NetSuite
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
        define(["require", "exports", "./Record", "N/record", "./Transaction", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ItemReceiptBase = exports.ItemSublist = void 0;
    const Record_1 = require("./Record");
    const record = require("N/record");
    const Transaction_1 = require("./Transaction");
    const Sublist_1 = require("./Sublist");
    /**
     * Item Receipt Items (item) sublist
     */
    class ItemSublist extends Sublist_1.SublistLine {
    }
    exports.ItemSublist = ItemSublist;
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "class", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "countryofmanufacture", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "itemreceive", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ItemSublist.prototype, "line", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "lineuniquekey", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "location", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ItemSublist.prototype, "onhand", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "rate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ItemSublist.prototype, "revrecenddate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "restock", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "units", void 0);
    /**
     * NetSuite ItemReceipt record class
     */
    class ItemReceiptBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.ITEM_RECEIPT; }
    }
    exports.ItemReceiptBase = ItemReceiptBase;
    __decorate([
        Record_1.FieldType.select
    ], ItemReceiptBase.prototype, "class", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ItemReceiptBase.prototype, "createdfrom", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ItemReceiptBase.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ItemReceiptBase.prototype, "currencyname", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ItemReceiptBase.prototype, "currencysymbol", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], ItemReceiptBase.prototype, "exchangerate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ItemReceiptBase.prototype, "inboundshipment", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ItemReceiptBase.prototype, "isbasecurrency", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ItemReceiptBase.prototype, "itemfulfillment", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ItemReceiptBase.prototype, "landedcostperline", void 0);
    __decorate([
        Record_1.FieldType.sublist(ItemSublist)
    ], ItemReceiptBase.prototype, "item", void 0);
});
