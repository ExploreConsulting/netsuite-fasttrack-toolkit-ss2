/**
 * NetSuite generic Transaction record
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    var Transaction_1 = require("./Transaction");
    var Record_1 = require("./Record");
    /**
     * The 'item' sublist on invoices
     */
    var ItemSublist = /** @class */ (function (_super) {
        __extends(ItemSublist, _super);
        function ItemSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "account", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ItemSublist.prototype, "amount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.textarea
        ], ItemSublist.prototype, "description", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "istaxable", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ItemSublist.prototype, "linenumber", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "price", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ItemSublist.prototype, "quantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ItemSublist.prototype, "rate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ItemSublist.prototype, "revrecstartdate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ItemSublist.prototype, "revrecenddate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "taxcode", void 0);
        __decorate([
            Sublist_1.SublistFieldType.percent
        ], ItemSublist.prototype, "taxrate1", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "units", void 0);
        return ItemSublist;
    }(Sublist_1.SublistLine));
    exports.ItemSublist = ItemSublist;
    /**
     * NetSuite Invoice Record
     */
    var InvoiceBase = /** @class */ (function (_super) {
        __extends(InvoiceBase, _super);
        function InvoiceBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InvoiceBase.recordType = record.Type.INVOICE;
        __decorate([
            Record_1.FieldType.select
        ], InvoiceBase.prototype, "account", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], InvoiceBase.prototype, "amountpaid", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], InvoiceBase.prototype, "amountremaining", void 0);
        __decorate([
            Record_1.FieldType.select
        ], InvoiceBase.prototype, "approvalstatus", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], InvoiceBase.prototype, "balance", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InvoiceBase.prototype, "billaddr1", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InvoiceBase.prototype, "billaddr2", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InvoiceBase.prototype, "billaddr3", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InvoiceBase.prototype, "billphone", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InvoiceBase.prototype, "billstate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InvoiceBase.prototype, "billzip", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InvoiceBase.prototype, "billaddress", void 0);
        __decorate([
            Record_1.FieldType.select
        ], InvoiceBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.select
        ], InvoiceBase.prototype, "customform", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], InvoiceBase.prototype, "discountamount", void 0);
        __decorate([
            Record_1.FieldType.date
        ], InvoiceBase.prototype, "discountdate", void 0);
        __decorate([
            Record_1.FieldType.date
        ], InvoiceBase.prototype, "duedate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InvoiceBase.prototype, "fob", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], InvoiceBase.prototype, "giftcertapplied", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], InvoiceBase.prototype, "handlingcost", void 0);
        __decorate([
            Record_1.FieldType.select
        ], InvoiceBase.prototype, "handlingtaxcode", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], InvoiceBase.prototype, "istaxable", void 0);
        __decorate([
            Record_1.FieldType.select
        ], InvoiceBase.prototype, "leadsource", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InvoiceBase.prototype, "linkedtrackingnumbers", void 0);
        __decorate([
            Record_1.FieldType.select
        ], InvoiceBase.prototype, "promocode", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], InvoiceBase.prototype, "tobeemailed", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], InvoiceBase.prototype, "tobeprinted", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], InvoiceBase.prototype, "tobefaxed", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], InvoiceBase.prototype, "total", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], InvoiceBase.prototype, "subtotal", void 0);
        __decorate([
            Record_1.FieldType.select
        ], InvoiceBase.prototype, "taxitem", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InvoiceBase.prototype, "trackingnumbers", void 0);
        __decorate([
            Record_1.FieldType.sublist(ItemSublist)
        ], InvoiceBase.prototype, "item", void 0);
        return InvoiceBase;
    }(Transaction_1.TransactionBase));
    exports.InvoiceBase = InvoiceBase;
});
