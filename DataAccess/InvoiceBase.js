/**
 * NetSuite generic Transaction record
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
    exports.InvoiceBase = exports.ItemCostSublist = exports.ExpCostSublist = exports.ItemSublist = void 0;
    const Sublist_1 = require("./Sublist");
    const record = require("N/record");
    const Transaction_1 = require("./Transaction");
    const Record_1 = require("./Record");
    const AddressBase_1 = require("./AddressBase");
    /**
     * The 'item' sublist on invoices
     */
    class ItemSublist extends Sublist_1.SublistLine {
    }
    exports.ItemSublist = ItemSublist;
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
    /**
     * The Billable Expenses (expcost) sublist fields
     */
    class ExpCostSublist extends Sublist_1.SublistLine {
    }
    exports.ExpCostSublist = ExpCostSublist;
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ExpCostSublist.prototype, "amortizationperiod", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ExpCostSublist.prototype, "amortizationtype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ExpCostSublist.prototype, "amount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ExpCostSublist.prototype, "apply", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ExpCostSublist.prototype, "billeddate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ExpCostSublist.prototype, "category", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExpCostSublist.prototype, "doc", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ExpCostSublist.prototype, "employee", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ExpCostSublist.prototype, "job", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ExpCostSublist.prototype, "line", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExpCostSublist.prototype, "location", void 0);
    __decorate([
        Sublist_1.SublistFieldType.textarea
    ], ExpCostSublist.prototype, "memo", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ExpCostSublist.prototype, "originalamount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ExpCostSublist.prototype, "revrecenddate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExpCostSublist.prototype, "revrecschedule", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ExpCostSublist.prototype, "revrecstartdate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ExpCostSublist.prototype, "taxable", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExpCostSublist.prototype, "taxcode", void 0);
    __decorate([
        Sublist_1.SublistFieldType.percent
    ], ExpCostSublist.prototype, "taxrate1", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ExpCostSublist.prototype, "isbillable", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ExpCostSublist.prototype, "url", void 0);
    /**
     * The Billable Items (itemcost) sublist fields
     */
    class ItemCostSublist extends Sublist_1.SublistLine {
    }
    exports.ItemCostSublist = ItemCostSublist;
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemCostSublist.prototype, "amortizationperiod", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemCostSublist.prototype, "amortizationtype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemCostSublist.prototype, "amount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemCostSublist.prototype, "apply", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ItemCostSublist.prototype, "billeddate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.textarea
    ], ItemCostSublist.prototype, "binnumbers", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemCostSublist.prototype, "cost", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemCostSublist.prototype, "doc", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemCostSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemCostSublist.prototype, "itemcostcount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemCostSublist.prototype, "job", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ItemCostSublist.prototype, "line", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemCostSublist.prototype, "location", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemCostSublist.prototype, "memo", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemCostSublist.prototype, "options", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemCostSublist.prototype, "rateschedule", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ItemCostSublist.prototype, "revrecenddate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemCostSublist.prototype, "revrecschedule", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ItemCostSublist.prototype, "revrecstartdate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.textarea
    ], ItemCostSublist.prototype, "serialnumbers", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemCostSublist.prototype, "taxable", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemCostSublist.prototype, "taxcode", void 0);
    __decorate([
        Sublist_1.SublistFieldType.percent
    ], ItemCostSublist.prototype, "taxrate1", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemCostSublist.prototype, "unit", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemCostSublist.prototype, "isbillable", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemCostSublist.prototype, "url", void 0);
    /**
     * NetSuite Invoice Record
     */
    class InvoiceBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.INVOICE; }
    }
    exports.InvoiceBase = InvoiceBase;
    __decorate([
        Record_1.FieldType.select
    ], InvoiceBase.prototype, "account", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], InvoiceBase.prototype, "althandlingcost", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], InvoiceBase.prototype, "altshippingcost", void 0);
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
        Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
    ], InvoiceBase.prototype, "billingaddress", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], InvoiceBase.prototype, "billaddress", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InvoiceBase.prototype, "billaddresslist", void 0);
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
        Record_1.FieldType.select
    ], InvoiceBase.prototype, "billingaccount", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], InvoiceBase.prototype, "canhavestackable", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InvoiceBase.prototype, "class", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InvoiceBase.prototype, "couponcode", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InvoiceBase.prototype, "createdfrom", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InvoiceBase.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], InvoiceBase.prototype, "currencyname", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], InvoiceBase.prototype, "currencysymbol", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], InvoiceBase.prototype, "discountamount", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InvoiceBase.prototype, "discountitem", void 0);
    __decorate([
        Record_1.FieldType.date
    ], InvoiceBase.prototype, "discountdate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], InvoiceBase.prototype, "discountrate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], InvoiceBase.prototype, "discounttotal", void 0);
    __decorate([
        Record_1.FieldType.date
    ], InvoiceBase.prototype, "duedate", void 0);
    __decorate([
        Record_1.FieldType.date
    ], InvoiceBase.prototype, "enddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InvoiceBase.prototype, "entitynexus", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], InvoiceBase.prototype, "excludecommission", void 0);
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
        Record_1.FieldType.select
    ], InvoiceBase.prototype, "leadsource", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], InvoiceBase.prototype, "message", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InvoiceBase.prototype, "messagesel", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], InvoiceBase.prototype, "linkedtrackingnumbers", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InvoiceBase.prototype, "opportunity", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InvoiceBase.prototype, "partner", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InvoiceBase.prototype, "promocode", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], InvoiceBase.prototype, "recurringbill", void 0);
    __decorate([
        Record_1.FieldType.date
    ], InvoiceBase.prototype, "saleseffectivedate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InvoiceBase.prototype, "salesgroup", void 0);
    __decorate([
        Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
    ], InvoiceBase.prototype, "shippingaddress", void 0);
    __decorate([
        Record_1.FieldType.date
    ], InvoiceBase.prototype, "shipdate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InvoiceBase.prototype, "shipmethod", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], InvoiceBase.prototype, "shipoverride", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InvoiceBase.prototype, "taxitem", void 0);
    __decorate([
        Record_1.FieldType.float
    ], InvoiceBase.prototype, "taxrate", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], InvoiceBase.prototype, "taxregoverride", void 0);
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
        Record_1.FieldType.freeformtext
    ], InvoiceBase.prototype, "trackingnumbers", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], InvoiceBase.prototype, "tranisvsoebundle", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], InvoiceBase.prototype, "vsoeautocalc", void 0);
    __decorate([
        Record_1.FieldType.sublist(ItemSublist)
    ], InvoiceBase.prototype, "item", void 0);
    __decorate([
        Record_1.FieldType.sublist(ExpCostSublist)
    ], InvoiceBase.prototype, "expcost", void 0);
    __decorate([
        Record_1.FieldType.sublist(ItemCostSublist)
    ], InvoiceBase.prototype, "itemcost", void 0);
});
