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
        define(["require", "exports", "./Transaction", "./Record", "N/record", "./InventoryDetailBase", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WorkOrderCompletionBase = exports.ComponentSublist = void 0;
    const Transaction_1 = require("./Transaction");
    const Record_1 = require("./Record");
    const record = require("N/record");
    const InventoryDetailBase_1 = require("./InventoryDetailBase");
    const Sublist_1 = require("./Sublist");
    /**
     * Work Order Completion Components sublist.
     */
    class ComponentSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ComponentSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ComponentSublist.prototype, "linenumber", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ComponentSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ComponentSublist.prototype, "quantityper", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ComponentSublist.prototype, "unitcost", void 0);
    __decorate([
        Sublist_1.SublistFieldType.subrecord(InventoryDetailBase_1.InventoryDetailBase)
    ], ComponentSublist.prototype, "componentinventorydetail", void 0);
    exports.ComponentSublist = ComponentSublist;
    /**
     * NetSuite Work Order Completion record type
     */
    class WorkOrderCompletionBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.WORK_ORDER_COMPLETION; }
    }
    __decorate([
        Record_1.FieldType.float
    ], WorkOrderCompletionBase.prototype, "completedquantity", void 0);
    __decorate([
        Record_1.FieldType.select
    ], WorkOrderCompletionBase.prototype, "endoperation", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], WorkOrderCompletionBase.prototype, "isbackflush", void 0);
    __decorate([
        Record_1.FieldType.select
    ], WorkOrderCompletionBase.prototype, "manufacturingrouting", void 0);
    __decorate([
        Record_1.FieldType.float
    ], WorkOrderCompletionBase.prototype, "orderquantity", void 0);
    __decorate([
        Record_1.FieldType.select
    ], WorkOrderCompletionBase.prototype, "revision", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], WorkOrderCompletionBase.prototype, "revisionmemo", void 0);
    __decorate([
        Record_1.FieldType.float
    ], WorkOrderCompletionBase.prototype, "scrapquantity", void 0);
    __decorate([
        Record_1.FieldType.select
    ], WorkOrderCompletionBase.prototype, "startoperation", void 0);
    __decorate([
        Record_1.FieldType.select
    ], WorkOrderCompletionBase.prototype, "item", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], WorkOrderCompletionBase.prototype, "quantity", void 0);
    __decorate([
        Record_1.FieldType.float
    ], WorkOrderCompletionBase.prototype, "unitcost", void 0);
    __decorate([
        Record_1.FieldType.select
    ], WorkOrderCompletionBase.prototype, "units", void 0);
    __decorate([
        Record_1.FieldType.subrecord(InventoryDetailBase_1.InventoryDetailBase)
    ], WorkOrderCompletionBase.prototype, "inventorydetail", void 0);
    exports.WorkOrderCompletionBase = WorkOrderCompletionBase;
});
