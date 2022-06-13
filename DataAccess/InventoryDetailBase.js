/**
 * NS Base Inventory Detail subrecord contains definitions for the built in fields
 */
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
        define(["require", "exports", "./Record", "N/record", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InventoryDetailBase = exports.InventoryAssignmentSublist = void 0;
    const Record_1 = require("./Record");
    const record = require("N/record");
    const Sublist_1 = require("./Sublist");
    class InventoryAssignmentSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.select
    ], InventoryAssignmentSublist.prototype, "binnumber", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], InventoryAssignmentSublist.prototype, "expirationdate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], InventoryAssignmentSublist.prototype, "internalid", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], InventoryAssignmentSublist.prototype, "issueinventorynumber", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], InventoryAssignmentSublist.prototype, "receiptinventorynumber", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], InventoryAssignmentSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], InventoryAssignmentSublist.prototype, "quantityavailable", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], InventoryAssignmentSublist.prototype, "tobinnumber", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], InventoryAssignmentSublist.prototype, "toinventorystatus", void 0);
    exports.InventoryAssignmentSublist = InventoryAssignmentSublist;
    /**
     * The inventory detail 'subrecord'. In SS2.0 this is mostly treated as a normal record object.
     * However I caution against trying to create new instances of it, only passing an existing record
     * to the constructor.
     */
    class InventoryDetailBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.INVENTORY_DETAIL; }
    }
    __decorate([
        Record_1.FieldType.select
    ], InventoryDetailBase.prototype, "item", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], InventoryDetailBase.prototype, "itemdescription", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InventoryDetailBase.prototype, "location", void 0);
    __decorate([
        Record_1.FieldType.float
    ], InventoryDetailBase.prototype, "quantity", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InventoryDetailBase.prototype, "tolocation", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InventoryDetailBase.prototype, "unit", void 0);
    __decorate([
        Record_1.FieldType.sublist(InventoryAssignmentSublist)
    ], InventoryDetailBase.prototype, "inventoryassignment", void 0);
    exports.InventoryDetailBase = InventoryDetailBase;
});
