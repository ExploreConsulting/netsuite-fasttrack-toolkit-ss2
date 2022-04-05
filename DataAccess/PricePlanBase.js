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
        define(["require", "exports", "./Record", "./Sublist", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PricePlanBase = exports.PriceTiersBase = void 0;
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    /**
     * NetSuite Price Plan Price Tiers sublist (pricetiers)
     */
    var PriceTiersBase = /** @class */ (function (_super) {
        __extends(PriceTiersBase, _super);
        function PriceTiersBase() {
            return _super !== null && _super.apply(this, arguments) || this;
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
        return PriceTiersBase;
    }(Sublist_1.SublistLine));
    exports.PriceTiersBase = PriceTiersBase;
    /**
     * NetSuite Price Plan (priceplan)
     */
    var PricePlanBase = /** @class */ (function (_super) {
        __extends(PricePlanBase, _super);
        function PricePlanBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PricePlanBase.recordType = function () { return record.Type.PRICE_PLAN; };
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
        return PricePlanBase;
    }(Record_1.NetsuiteRecord));
    exports.PricePlanBase = PricePlanBase;
});
