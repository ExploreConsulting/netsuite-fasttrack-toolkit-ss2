/**
 * NetSuite opportunity transaction record
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
     * The 'item' sublist on opportunity records
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
            Sublist_1.SublistFieldType.textarea
        ], ItemSublist.prototype, "description", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "istaxable", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ItemSublist.prototype, "linenumber", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "price", void 0);
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
        return ItemSublist;
    }(Sublist_1.SublistLine));
    exports.ItemSublist = ItemSublist;
    /**
     * NetSuite Opportunity Record
     */
    var OpportunityBase = /** @class */ (function (_super) {
        __extends(OpportunityBase, _super);
        function OpportunityBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OpportunityBase.recordType = record.Type.OPPORTUNITY;
        __decorate([
            Record_1.FieldType.currency
        ], OpportunityBase.prototype, "balance", void 0);
        __decorate([
            Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
        ], OpportunityBase.prototype, "billingaddress", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], OpportunityBase.prototype, "billaddr1", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], OpportunityBase.prototype, "billaddr2", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], OpportunityBase.prototype, "billaddr3", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], OpportunityBase.prototype, "billphone", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], OpportunityBase.prototype, "billstate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], OpportunityBase.prototype, "billzip", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], OpportunityBase.prototype, "billaddress", void 0);
        __decorate([
            Record_1.FieldType.select
        ], OpportunityBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.select
        ], OpportunityBase.prototype, "entitystatus", void 0);
        __decorate([
            Record_1.FieldType.select
        ], OpportunityBase.prototype, "leadsource", void 0);
        __decorate([
            Record_1.FieldType.select
        ], OpportunityBase.prototype, "partner", void 0);
        __decorate([
            Record_1.FieldType.subrecord(AddressBase_1.AddressBase)
        ], OpportunityBase.prototype, "shippingaddress", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], OpportunityBase.prototype, "total", void 0);
        __decorate([
            Record_1.FieldType.sublist(ItemSublist)
        ], OpportunityBase.prototype, "item", void 0);
        return OpportunityBase;
    }(Transaction_1.TransactionBase));
    exports.OpportunityBase = OpportunityBase;
});
