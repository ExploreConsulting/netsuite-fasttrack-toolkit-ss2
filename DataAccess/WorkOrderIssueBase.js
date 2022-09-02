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
    exports.WorkOrderIssueBase = exports.ComponentSublist = void 0;
    const Transaction_1 = require("./Transaction");
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    const InventoryDetailBase_1 = require("./InventoryDetailBase");
    const record = require("N/record");
    /**
     * Work Order Issue Components sublist.
     */
    class ComponentSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ComponentSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ComponentSublist.prototype, "compitemname", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ComponentSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ComponentSublist.prototype, "units", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ComponentSublist.prototype, "unitsText", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ComponentSublist.prototype, "isserial", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ComponentSublist.prototype, "isnumbered", void 0);
    __decorate([
        Sublist_1.SublistFieldType.subrecord(InventoryDetailBase_1.InventoryDetailBase)
    ], ComponentSublist.prototype, "componentinventorydetail", void 0);
    exports.ComponentSublist = ComponentSublist;
    /**
     * NetSuite Work Order Issue record type.
     */
    class WorkOrderIssueBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.WORK_ORDER_ISSUE; }
    }
    __decorate([
        Record_1.FieldType.select
    ], WorkOrderIssueBase.prototype, "endoperation", void 0);
    __decorate([
        Record_1.FieldType.select
    ], WorkOrderIssueBase.prototype, "item", void 0);
    __decorate([
        Record_1.FieldType.select
    ], WorkOrderIssueBase.prototype, "manufacturingrouting", void 0);
    __decorate([
        Record_1.FieldType.select
    ], WorkOrderIssueBase.prototype, "revision", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], WorkOrderIssueBase.prototype, "revisionmemo", void 0);
    __decorate([
        Record_1.FieldType.select
    ], WorkOrderIssueBase.prototype, "startoperation", void 0);
    __decorate([
        Record_1.FieldType.sublist(ComponentSublist)
    ], WorkOrderIssueBase.prototype, "component", void 0);
    exports.WorkOrderIssueBase = WorkOrderIssueBase;
});
