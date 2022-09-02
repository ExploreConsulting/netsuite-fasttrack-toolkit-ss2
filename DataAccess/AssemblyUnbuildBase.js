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
        define(["require", "exports", "N/record", "./Record", "./Sublist", "./InventoryDetailBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AssemblyUnbuildBase = exports.ComponentSublist = void 0;
    const record = require("N/record");
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    const InventoryDetailBase_1 = require("./InventoryDetailBase");
    /**
     * Components sublist
     */
    class ComponentSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ComponentSublist.prototype, "binitem", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ComponentSublist.prototype, "compitemname", void 0);
    __decorate([
        Sublist_1.SublistFieldType.subrecord(InventoryDetailBase_1.InventoryDetailBase)
    ], ComponentSublist.prototype, "componentinventorydetail", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ComponentSublist.prototype, "componentinventorydetailavail", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ComponentSublist.prototype, "componentinventorydetailreq", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ComponentSublist.prototype, "isnoninventory", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ComponentSublist.prototype, "isnumbered", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ComponentSublist.prototype, "isserial", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ComponentSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ComponentSublist.prototype, "itemcost", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ComponentSublist.prototype, "linenumber", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ComponentSublist.prototype, "locationusesbins", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ComponentSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ComponentSublist.prototype, "quantityonhand", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ComponentSublist.prototype, "unitcost", void 0);
    exports.ComponentSublist = ComponentSublist;
    /**
     * Assembly Unbuild record
     */
    class AssemblyUnbuildBase extends Record_1.NetsuiteRecord {
        /**
         * Record type
         */
        static recordType() {
            return record.Type.ASSEMBLY_UNBUILD;
        }
    }
    __decorate([
        Record_1.FieldType.select
    ], AssemblyUnbuildBase.prototype, "billofmaterials", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyUnbuildBase.prototype, "billofmaterialsrevision", void 0);
    __decorate([
        Record_1.FieldType.float
    ], AssemblyUnbuildBase.prototype, "built", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyUnbuildBase.prototype, "class", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], AssemblyUnbuildBase.prototype, "createddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyUnbuildBase.prototype, "customform", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyUnbuildBase.prototype, "department", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], AssemblyUnbuildBase.prototype, "haslines", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], AssemblyUnbuildBase.prototype, "inventorydetailavail", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], AssemblyUnbuildBase.prototype, "inventorydetailreq", void 0);
    __decorate([
        Record_1.FieldType.subrecord(InventoryDetailBase_1.InventoryDetailBase)
    ], AssemblyUnbuildBase.prototype, "inventorydetail", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyUnbuildBase.prototype, "item", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], AssemblyUnbuildBase.prototype, "lastmodifieddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyUnbuildBase.prototype, "location", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], AssemblyUnbuildBase.prototype, "locationusesbins", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], AssemblyUnbuildBase.prototype, "memo", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyUnbuildBase.prototype, "postingperiod", void 0);
    __decorate([
        Record_1.FieldType.float
    ], AssemblyUnbuildBase.prototype, "quantity", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyUnbuildBase.prototype, "revision", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], AssemblyUnbuildBase.prototype, "revisionmemo", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyUnbuildBase.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], AssemblyUnbuildBase.prototype, "total", void 0);
    __decorate([
        Record_1.FieldType.date
    ], AssemblyUnbuildBase.prototype, "trandate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], AssemblyUnbuildBase.prototype, "tranid", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyUnbuildBase.prototype, "units", void 0);
    __decorate([
        Record_1.FieldType.sublist(ComponentSublist)
    ], AssemblyUnbuildBase.prototype, "component", void 0);
    exports.AssemblyUnbuildBase = AssemblyUnbuildBase;
});
