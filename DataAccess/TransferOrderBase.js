/**
 *  Represents a Transfer Order (transferorder) transaction type in NetSuite
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
        define(["require", "exports", "./Sublist", "N/record", "./Transaction", "./Record", "./AddressBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    var Transaction_1 = require("./Transaction");
    var Record_1 = require("./Record");
    var AddressBase_1 = require("./AddressBase");
    /**
     * NetSuite Transfer Order Record
     */
    var TransferOrderBase = /** @class */ (function (_super) {
        __extends(TransferOrderBase, _super);
        function TransferOrderBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TransferOrderBase.recordType = record.Type.TRANSFER_ORDER;
        __decorate([
            Record_1.FieldType.select
        ], TransferOrderBase.prototype, "class", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TransferOrderBase.prototype, "createdfrom", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TransferOrderBase.prototype, "employee", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], TransferOrderBase.prototype, "firmed", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TransferOrderBase.prototype, "nexus", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TransferOrderBase.prototype, "orderstatus", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], TransferOrderBase.prototype, "shipcomplete", void 0);
        __decorate([
            Record_1.FieldType.date
        ], TransferOrderBase.prototype, "shipdate", void 0);
        __decorate([
            Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
        ], TransferOrderBase.prototype, "shippingaddress", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], TransferOrderBase.prototype, "subtotal", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], TransferOrderBase.prototype, "total", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TransferOrderBase.prototype, "transferlocation", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], TransferOrderBase.prototype, "useitemcostastransfercost", void 0);
        return TransferOrderBase;
    }(Transaction_1.TransactionBase));
    exports.TransferOrderBase = TransferOrderBase;
    /**
     * Sublist 'item' on the Tranfer Order record
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
        ], ItemSublist.prototype, "commitinventory", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "deferrevrec", void 0);
        __decorate([
            Sublist_1.SublistFieldType.textarea
        ], ItemSublist.prototype, "description", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ItemSublist.prototype, "expectedreceiptdate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ItemSublist.prototype, "expectedshipdate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "isclosed", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ItemSublist.prototype, "linenumber", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ItemSublist.prototype, "quantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ItemSublist.prototype, "quantityavailable", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ItemSublist.prototype, "quantitybackordered", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ItemSublist.prototype, "quantitycommitted", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ItemSublist.prototype, "quantityfulfilled", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ItemSublist.prototype, "quantityreceived", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ItemSublist.prototype, "rate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "units", void 0);
        return ItemSublist;
    }(Sublist_1.SublistLine));
    exports.ItemSublist = ItemSublist;
});
