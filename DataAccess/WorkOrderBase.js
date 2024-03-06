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
    const Transaction_1 = require("./Transaction");
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    const InventoryDetailBase_1 = require("./InventoryDetailBase");
    const record = require("N/record");
    /**
     * Work Order Item Sublist
     */
    class ItemSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "item", void 0);
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
    exports.ItemSublist = ItemSublist;
    /**
     * NetSuite Work Order record type
     */
    class WorkOrderBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.WORK_ORDER; }
    }
    __decorate([
        Record_1.FieldType.date
    ], WorkOrderBase.prototype, "actualproductionenddate", void 0);
    __decorate([
        Record_1.FieldType.date
    ], WorkOrderBase.prototype, "actualproductionstartdate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], WorkOrderBase.prototype, "assemblyitem", void 0);
    __decorate([
        Record_1.FieldType.select
    ], WorkOrderBase.prototype, "billofmaterials", void 0);
    __decorate([
        Record_1.FieldType.select
    ], WorkOrderBase.prototype, "billofmaterialsrevision", void 0);
    __decorate([
        Record_1.FieldType.select
    ], WorkOrderBase.prototype, "createdfrom", void 0);
    __decorate([
        Record_1.FieldType.date
    ], WorkOrderBase.prototype, "enddate", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], WorkOrderBase.prototype, "firmed", void 0);
    __decorate([
        Record_1.FieldType.select
    ], WorkOrderBase.prototype, "job", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], WorkOrderBase.prototype, "quantity", void 0);
    __decorate([
        Record_1.FieldType.date
    ], WorkOrderBase.prototype, "startdate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], WorkOrderBase.prototype, "units", void 0);
    __decorate([
        Record_1.FieldType.sublist(ItemSublist)
    ], WorkOrderBase.prototype, "item", void 0);
    exports.WorkOrderBase = WorkOrderBase;
});
