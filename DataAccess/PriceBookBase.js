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
    exports.PriceBookBase = exports.PriceIntervalBase = void 0;
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    const record = require("N/record");
    /**
     * Price Book Lines sublist (priceinterval)
     */
    class PriceIntervalBase extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PriceIntervalBase.prototype, "chargetype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], PriceIntervalBase.prototype, "discount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PriceIntervalBase.prototype, "frequency", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], PriceIntervalBase.prototype, "isrequired", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PriceIntervalBase.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], PriceIntervalBase.prototype, "linenumber", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PriceIntervalBase.prototype, "multiplierline", void 0);
    __decorate([
        Sublist_1.SublistFieldType.textarea
    ], PriceIntervalBase.prototype, "price", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PriceIntervalBase.prototype, "priceplan", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PriceIntervalBase.prototype, "repeatevery", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PriceIntervalBase.prototype, "startoffsetunit", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], PriceIntervalBase.prototype, "startoffsetvalue", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], PriceIntervalBase.prototype, "subscriptionplanline", void 0);
    exports.PriceIntervalBase = PriceIntervalBase;
    /**
     * NetSuite Price Book (pricebook) record type
     */
    class PriceBookBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.PRICE_BOOK; }
    }
    __decorate([
        Record_1.FieldType.select
    ], PriceBookBase.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], PriceBookBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], PriceBookBase.prototype, "internalid", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], PriceBookBase.prototype, "name", void 0);
    __decorate([
        Record_1.FieldType.select
    ], PriceBookBase.prototype, "subscriptionplan", void 0);
    __decorate([
        Record_1.FieldType.sublist(PriceIntervalBase)
    ], PriceBookBase.prototype, "priceinterval", void 0);
    exports.PriceBookBase = PriceBookBase;
});
