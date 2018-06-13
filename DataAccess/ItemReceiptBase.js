/**
 * Represents an Item Receipt (itemreceipt) transaction type in NetSuite
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
define(["require", "exports", "./Record", "N/record", "./Transaction", "./Sublist"], function (require, exports, Record_1, record, Transaction_1, Sublist_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ItemReceiptBase = /** @class */ (function (_super) {
        __extends(ItemReceiptBase, _super);
        function ItemReceiptBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ItemReceiptBase.recordType = record.Type.ITEM_RECEIPT;
        __decorate([
            Record_1.FieldType.select
        ], ItemReceiptBase.prototype, "class", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemReceiptBase.prototype, "createdfrom", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemReceiptBase.prototype, "itemfulfillment", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ItemReceiptBase.prototype, "landedcostperline", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemReceiptBase.prototype, "location", void 0);
        return ItemReceiptBase;
    }(Transaction_1.TransactionBase));
    exports.ItemReceiptBase = ItemReceiptBase;
    /**
     * Item Receipt Items (item) sublist
     */
    var ItemSublist = /** @class */ (function (_super) {
        __extends(ItemSublist, _super);
        function ItemSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "class", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "countryofmanufacture", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "itemreceive", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "location", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ItemSublist.prototype, "onhand", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ItemSublist.prototype, "revrecenddate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "quantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "restock", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "units", void 0);
        return ItemSublist;
    }(Sublist_1.SublistLine));
    exports.ItemSublist = ItemSublist;
});
