/**
 * Represents an Check (check) transaction type in NetSuite
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
        define(["require", "exports", "./Record", "./Sublist", "./Transaction", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CheckBase = exports.ItemSublist = exports.ExpenseSublist = void 0;
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var Transaction_1 = require("./Transaction");
    var record = require("N/record");
    /**
     * Check (expense) sublist definition
     */
    var ExpenseSublist = /** @class */ (function (_super) {
        __extends(ExpenseSublist, _super);
        function ExpenseSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ExpenseSublist.prototype, "account", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ExpenseSublist.prototype, "class", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ExpenseSublist.prototype, "cseg_product_class", void 0);
        return ExpenseSublist;
    }(Sublist_1.SublistLine));
    exports.ExpenseSublist = ExpenseSublist;
    /**
     * Check (item) sublist definition
     */
    var ItemSublist = /** @class */ (function (_super) {
        __extends(ItemSublist, _super);
        function ItemSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ItemSublist.prototype, "amount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "catchupperiod", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "class", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "customer", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "deferrevrec", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "department", void 0);
        __decorate([
            Sublist_1.SublistFieldType.textarea
        ], ItemSublist.prototype, "description", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "isbillable", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "itemsubtype", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "itemtype", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "line", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ItemSublist.prototype, "linenumber", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "location", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "matrixtype", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "options", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ItemSublist.prototype, "quantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ItemSublist.prototype, "rate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "taxcode", void 0);
        __decorate([
            Sublist_1.SublistFieldType.percent
        ], ItemSublist.prototype, "taxrate1", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "units", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "vendorname", void 0);
        return ItemSublist;
    }(Sublist_1.SublistLine));
    exports.ItemSublist = ItemSublist;
    /**
     *  NetSuite Check Record definition
     */
    var CheckBase = /** @class */ (function (_super) {
        __extends(CheckBase, _super);
        function CheckBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CheckBase.recordType = record.Type.CHECK;
        __decorate([
            Record_1.FieldType.select
        ], CheckBase.prototype, "account", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], CheckBase.prototype, "balance", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], CheckBase.prototype, "billpay", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CheckBase.prototype, "class", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CheckBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], CheckBase.prototype, "currencyname", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CheckBase.prototype, "entitynexus", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], CheckBase.prototype, "exchangerate", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], CheckBase.prototype, "isbasecurrency", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], CheckBase.prototype, "landedcostperline", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CheckBase.prototype, "nexus", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CheckBase.prototype, "payeeaddresslist", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], CheckBase.prototype, "tobeprinted", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], CheckBase.prototype, "total", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], CheckBase.prototype, "usertotal", void 0);
        __decorate([
            Record_1.FieldType.sublist(ExpenseSublist)
        ], CheckBase.prototype, "expense", void 0);
        return CheckBase;
    }(Transaction_1.TransactionBase));
    exports.CheckBase = CheckBase;
});
