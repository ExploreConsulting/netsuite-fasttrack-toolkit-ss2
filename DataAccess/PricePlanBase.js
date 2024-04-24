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
        define(["require", "exports", "./Record", "./Sublist", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PricePlanBase = exports.PriceTiersBase = void 0;
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    const record = require("N/record");
    /**
     * NetSuite Price Plan Price Tiers sublist (pricetiers)
     */
    class PriceTiersBase extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], PriceTiersBase.prototype, "fromval", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], PriceTiersBase.prototype, "lineid", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PriceTiersBase.prototype, "priceplan", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], PriceTiersBase.prototype, "pricetier", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PriceTiersBase.prototype, "pricingoption", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], PriceTiersBase.prototype, "value", void 0);
    exports.PriceTiersBase = PriceTiersBase;
    /**
     * NetSuite Price Plan (priceplan)
     */
    class PricePlanBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.PRICE_PLAN; }
    }
    __decorate([
        Record_1.FieldType.select
    ], PricePlanBase.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], PricePlanBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], PricePlanBase.prototype, "internalid", void 0);
    __decorate([
        Record_1.FieldType.select
    ], PricePlanBase.prototype, "priceplantype", void 0);
    __decorate([
        Record_1.FieldType.sublist(PriceTiersBase)
    ], PricePlanBase.prototype, "pricetiers", void 0);
    exports.PricePlanBase = PricePlanBase;
});
