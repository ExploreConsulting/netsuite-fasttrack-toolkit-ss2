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
        define(["require", "exports", "./Transaction", "./Record", "./Sublist", "./InventoryDetailBase", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WorkOrderBase = exports.ItemSublist = void 0;
    var Transaction_1 = require("./Transaction");
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var InventoryDetailBase_1 = require("./InventoryDetailBase");
    var record = require("N/record");
    /**
     * Work Order Item Sublist
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
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "item_display", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "price", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ItemSublist.prototype, "quantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ItemSublist.prototype, "bomquantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "rate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "units", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "amount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "description", void 0);
        __decorate([
            Sublist_1.SublistFieldType.subrecord(InventoryDetailBase_1.InventoryDetailBase)
        ], ItemSublist.prototype, "inventorydetail", void 0);
        return ItemSublist;
    }(Sublist_1.SublistLine));
    exports.ItemSublist = ItemSublist;
    /**
     * NetSuite Work Order record type
     */
    var WorkOrderBase = /** @class */ (function (_super) {
        __extends(WorkOrderBase, _super);
        function WorkOrderBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WorkOrderBase.recordType = function () { return record.Type.WORK_ORDER; };
        __decorate([
            Record_1.FieldType.select
        ], WorkOrderBase.prototype, "assemblyitem", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], WorkOrderBase.prototype, "assemblyitemText", void 0);
        __decorate([
            Record_1.FieldType.select
        ], WorkOrderBase.prototype, "billofmaterialsrevision", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], WorkOrderBase.prototype, "billofmaterialsrevisionText", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], WorkOrderBase.prototype, "quantity", void 0);
        __decorate([
            Record_1.FieldType.select
        ], WorkOrderBase.prototype, "units", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], WorkOrderBase.prototype, "unitsText", void 0);
        __decorate([
            Record_1.FieldType.sublist(ItemSublist)
        ], WorkOrderBase.prototype, "item", void 0);
        return WorkOrderBase;
    }(Transaction_1.TransactionBase));
    exports.WorkOrderBase = WorkOrderBase;
});
