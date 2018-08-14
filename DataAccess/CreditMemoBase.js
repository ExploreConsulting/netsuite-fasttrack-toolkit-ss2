/**
 * Created by shawn on 4/15/16.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
    var CreditMemoBase = /** @class */ (function (_super) {
        __extends(CreditMemoBase, _super);
        function CreditMemoBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CreditMemoBase.recordType = record.Type.CREDIT_MEMO;
        __decorate([
            Record_1.FieldType.select
        ], CreditMemoBase.prototype, "account", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], CreditMemoBase.prototype, "amountpaid", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], CreditMemoBase.prototype, "amountremaining", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], CreditMemoBase.prototype, "applied", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], CreditMemoBase.prototype, "autoapply", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], CreditMemoBase.prototype, "balance", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CreditMemoBase.prototype, "class", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CreditMemoBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], CreditMemoBase.prototype, "subtotal", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], CreditMemoBase.prototype, "total", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], CreditMemoBase.prototype, "unapplied", void 0);
        return CreditMemoBase;
    }(Transaction_1.TransactionBase));
    exports.CreditMemoBase = CreditMemoBase;
    var ItemSublist = /** @class */ (function (_super) {
        __extends(ItemSublist, _super);
        function ItemSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ItemSublist.prototype, "revrecstartdate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ItemSublist.prototype, "revrecenddate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ItemSublist.prototype, "amount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "quantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "rate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "taxcode", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "taxrate1", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "autoapply", void 0);
        return ItemSublist;
    }(Sublist_1.SublistLine));
    exports.ItemSublist = ItemSublist;
    var ApplySublist = /** @class */ (function (_super) {
        __extends(ApplySublist, _super);
        function ApplySublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ApplySublist.prototype, "amount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ApplySublist.prototype, "apply", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ApplySublist.prototype, "createdfrom", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "refnum", void 0);
        return ApplySublist;
    }(Sublist_1.SublistLine));
    exports.ApplySublist = ApplySublist;
});
