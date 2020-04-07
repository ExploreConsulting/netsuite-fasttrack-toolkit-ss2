/**
 * NFT Quote/Estimate (estimate) Netsuite record type
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
        define(["require", "exports", "./Record", "./Transaction", "N/record", "./Sublist", "./AddressBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Record_1 = require("./Record");
    var Transaction_1 = require("./Transaction");
    var record = require("N/record");
    var Sublist_1 = require("./Sublist");
    var AddressBase_1 = require("./AddressBase");
    /**
     * Sublist 'item' on the Estimate record
     */
    var ItemSublist = /** @class */ (function (_super) {
        __extends(ItemSublist, _super);
        function ItemSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ItemSublist.prototype, "quantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ItemSublist.prototype, "amount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ItemSublist.prototype, "rate", void 0);
        return ItemSublist;
    }(Sublist_1.SublistLine));
    exports.ItemSublist = ItemSublist;
    /**
     * Estimate (Quote)
     */
    var EstimateBase = /** @class */ (function (_super) {
        __extends(EstimateBase, _super);
        function EstimateBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EstimateBase.recordType = record.Type.ESTIMATE;
        __decorate([
            Record_1.FieldType.currency
        ], EstimateBase.prototype, "althandlingcost", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], EstimateBase.prototype, "altsalestotal", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], EstimateBase.prototype, "altshippingcost", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], EstimateBase.prototype, "balance", void 0);
        __decorate([
            Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
        ], EstimateBase.prototype, "billingaddress", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "billaddresslist", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "class", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "couponcode", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "createdfrom", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], EstimateBase.prototype, "currencyname", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], EstimateBase.prototype, "currencysymbol", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "discountitem", void 0);
        __decorate([
            Record_1.FieldType.decimalnumber
        ], EstimateBase.prototype, "discountrate", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], EstimateBase.prototype, "discounttotal", void 0);
        __decorate([
            Record_1.FieldType.date
        ], EstimateBase.prototype, "duedate", void 0);
        __decorate([
            Record_1.FieldType.date
        ], EstimateBase.prototype, "enddate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "entitynexus", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "entitystatus", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "forecasttype", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "job", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "leadsource", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], EstimateBase.prototype, "message", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "messagesel", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "opportunity", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "partner", void 0);
        __decorate([
            Record_1.FieldType.percent
        ], EstimateBase.prototype, "probability", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "promocode", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "salesgroup", void 0);
        __decorate([
            Record_1.FieldType.date
        ], EstimateBase.prototype, "shipdate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "shipmethod", void 0);
        __decorate([
            Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
        ], EstimateBase.prototype, "shippingaddress", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EstimateBase.prototype, "shippingtaxcode", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], EstimateBase.prototype, "title", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], EstimateBase.prototype, "tobeemailed", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], EstimateBase.prototype, "tobefaxed", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], EstimateBase.prototype, "tobeprinted", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], EstimateBase.prototype, "total", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], EstimateBase.prototype, "totalcostestimate", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], EstimateBase.prototype, "visibletocustomer", void 0);
        __decorate([
            Record_1.FieldType.sublist(ItemSublist)
        ], EstimateBase.prototype, "item", void 0);
        return EstimateBase;
    }(Transaction_1.TransactionBase));
    exports.EstimateBase = EstimateBase;
});
