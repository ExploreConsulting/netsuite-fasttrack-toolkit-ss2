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
        define(["require", "exports", "./Record", "./Sublist", "./ItemPricingBase", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PurchaseContractBase = exports.ItemSublist = void 0;
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    const ItemPricingBase_1 = require("./ItemPricingBase");
    const record = require("N/record");
    class ItemSublist extends Sublist_1.SublistLine {
    }
    exports.ItemSublist = ItemSublist;
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "itemText", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "rate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "origrate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.textarea
    ], ItemSublist.prototype, "description", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "itempricingset", void 0);
    __decorate([
        Sublist_1.SublistFieldType.subrecord(ItemPricingBase_1.ItemPricingBase)
    ], ItemSublist.prototype, "itempricing", void 0);
    /**
     * NetSuite Purchase Contract Record type with custom fields.
     */
    class PurchaseContractBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.PURCHASE_CONTRACT; }
    }
    exports.PurchaseContractBase = PurchaseContractBase;
    __decorate([
        Record_1.FieldType.date
    ], PurchaseContractBase.prototype, "trandate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], PurchaseContractBase.prototype, "entity", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], PurchaseContractBase.prototype, "memo", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], PurchaseContractBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.select
    ], PurchaseContractBase.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.select
    ], PurchaseContractBase.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], PurchaseContractBase.prototype, "effectivitybasedon", void 0);
    __decorate([
        Record_1.FieldType.date
    ], PurchaseContractBase.prototype, "startdate", void 0);
    __decorate([
        Record_1.FieldType.date
    ], PurchaseContractBase.prototype, "enddate", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], PurchaseContractBase.prototype, "minimumamount", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], PurchaseContractBase.prototype, "maximumamount", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], PurchaseContractBase.prototype, "updateitemvendor", void 0);
    __decorate([
        Record_1.FieldType.sublist(ItemSublist)
    ], PurchaseContractBase.prototype, "item", void 0);
});
