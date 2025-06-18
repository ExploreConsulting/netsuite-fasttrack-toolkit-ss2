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
        define(["require", "exports", "./Record", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ItemPricingBase = exports.DiscountSublist = void 0;
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    class DiscountSublist extends Sublist_1.SublistLine {
    }
    exports.DiscountSublist = DiscountSublist;
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], DiscountSublist.prototype, "memo", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], DiscountSublist.prototype, "fromquantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.percent
    ], DiscountSublist.prototype, "percent", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], DiscountSublist.prototype, "quantityordered", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], DiscountSublist.prototype, "rate", void 0);
    class ItemPricingBase extends Record_1.NetsuiteRecord {
        static recordType() { return 'itempricing'; }
    }
    exports.ItemPricingBase = ItemPricingBase;
    __decorate([
        Record_1.FieldType.select
    ], ItemPricingBase.prototype, "calculatequantitydiscounts", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ItemPricingBase.prototype, "priceusing", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ItemPricingBase.prototype, "inputusing", void 0);
    __decorate([
        Record_1.FieldType.sublist(DiscountSublist)
    ], ItemPricingBase.prototype, "discount", void 0);
});
