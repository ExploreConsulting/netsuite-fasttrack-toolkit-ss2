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
    exports.PriceBookBase = exports.PriceIntervalBase = void 0;
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    /**
     * Price Book Lines sublist (priceinterval)
     */
    var PriceIntervalBase = /** @class */ (function (_super) {
        __extends(PriceIntervalBase, _super);
        function PriceIntervalBase() {
            return _super !== null && _super.apply(this, arguments) || this;
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
        return PriceIntervalBase;
    }(Sublist_1.SublistLine));
    exports.PriceIntervalBase = PriceIntervalBase;
    /**
     * NetSuite Price Book (pricebook) record type
     */
    var PriceBookBase = /** @class */ (function (_super) {
        __extends(PriceBookBase, _super);
        function PriceBookBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PriceBookBase.recordType = function () { return record.Type.PRICE_BOOK; };
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
        return PriceBookBase;
    }(Record_1.NetsuiteRecord));
    exports.PriceBookBase = PriceBookBase;
});
