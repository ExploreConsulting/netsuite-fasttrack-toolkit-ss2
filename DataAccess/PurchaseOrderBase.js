/**
 * NetSuite Purchase Order Record
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "N/record", "./Transaction", "./Sublist", "./Record"], function (require, exports, record, Transaction_1, Sublist_1, Record_1) {
    "use strict";
    /**
     * NetSuite Purchase Order Record
     */
    var Base = (function (_super) {
        __extends(Base, _super);
        function Base() {
            return _super.apply(this, arguments) || this;
        }
        return Base;
    }(Transaction_1.TransactionBase));
    Base.recordType = record.Type.PURCHASE_ORDER;
    __decorate([
        Record_1.FieldType.select
    ], Base.prototype, "approvalstatus", void 0);
    exports.Base = Base;
    /**
     * Sublist 'item' on purchase orders
     */
    var ItemSublist = (function (_super) {
        __extends(ItemSublist, _super);
        function ItemSublist() {
            return _super.apply(this, arguments) || this;
        }
        return ItemSublist;
    }(Sublist_1.SublistLine));
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "amount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], ItemSublist.prototype, "rate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "department", void 0);
    exports.ItemSublist = ItemSublist;
});
