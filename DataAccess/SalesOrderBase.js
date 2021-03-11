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
        define(["require", "exports", "./Sublist", "N/record", "./Transaction", "./Record", "./AddressBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SalesOrderBase = exports.SalesTeamSublist = exports.ItemSublist = void 0;
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    var Transaction_1 = require("./Transaction");
    var Record_1 = require("./Record");
    var AddressBase_1 = require("./AddressBase");
    /**
     * Sublist 'item' on the Sales Order record
     */
    var ItemSublist = /** @class */ (function (_super) {
        __extends(ItemSublist, _super);
        function ItemSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "amount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "commitinventory", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ItemSublist.prototype, "costestimate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ItemSublist.prototype, "costestimaterate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "deferrevrec", void 0);
        __decorate([
            Sublist_1.SublistFieldType.textarea
        ], ItemSublist.prototype, "description", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ItemSublist.prototype, "expectedshipdate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "isclosed", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "isestimate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "istaxable", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "itemtype", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "lineuniquekey", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ItemSublist.prototype, "linenumber", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "location", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ItemSublist.prototype, "porate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "price", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ItemSublist.prototype, "quantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "rate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "taxcode", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "department", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ItemSublist.prototype, "revrecstartdate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ItemSublist.prototype, "revrecenddate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "taxrate1", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "units", void 0);
        return ItemSublist;
    }(Sublist_1.SublistLine));
    exports.ItemSublist = ItemSublist;
    /**
     * 'salesteam' sublist
     */
    var SalesTeamSublist = /** @class */ (function (_super) {
        __extends(SalesTeamSublist, _super);
        function SalesTeamSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], SalesTeamSublist.prototype, "contribution", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], SalesTeamSublist.prototype, "employee", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], SalesTeamSublist.prototype, "isprimary", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], SalesTeamSublist.prototype, "salesrole", void 0);
        return SalesTeamSublist;
    }(Sublist_1.SublistLine));
    exports.SalesTeamSublist = SalesTeamSublist;
    /**
     * NetSuite Sales Order Record
     */
    var SalesOrderBase = /** @class */ (function (_super) {
        __extends(SalesOrderBase, _super);
        function SalesOrderBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SalesOrderBase.recordType = record.Type.SALES_ORDER;
        __decorate([
            Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
        ], SalesOrderBase.prototype, "billingaddress", void 0);
        __decorate([
            Record_1.FieldType.sublist(ItemSublist)
        ], SalesOrderBase.prototype, "item", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SalesOrderBase.prototype, "paymentmethod", void 0);
        __decorate([
            Record_1.FieldType.sublist(SalesTeamSublist)
        ], SalesOrderBase.prototype, "salesteam", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SalesOrderBase.prototype, "shipmethod", void 0);
        __decorate([
            Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
        ], SalesOrderBase.prototype, "shippingaddress", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], SalesOrderBase.prototype, "shippingcost", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SalesOrderBase.prototype, "terms", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], SalesOrderBase.prototype, "total", void 0);
        return SalesOrderBase;
    }(Transaction_1.TransactionBase));
    exports.SalesOrderBase = SalesOrderBase;
});
