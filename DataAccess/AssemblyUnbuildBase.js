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
        define(["require", "exports", "N/record", "./Record", "./Sublist", "./InventoryDetailBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AssemblyUnbuildBase = exports.ComponentSublist = void 0;
    var record = require("N/record");
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var InventoryDetailBase_1 = require("./InventoryDetailBase");
    /**
     * Components sublist
     */
    var ComponentSublist = /** @class */ (function (_super) {
        __extends(ComponentSublist, _super);
        function ComponentSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
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
        return ComponentSublist;
    }(Sublist_1.SublistLine));
    exports.ComponentSublist = ComponentSublist;
    /**
     * Assembly Unbuild record
     */
    var AssemblyUnbuildBase = /** @class */ (function (_super) {
        __extends(AssemblyUnbuildBase, _super);
        function AssemblyUnbuildBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Record type
         */
        AssemblyUnbuildBase.recordType = function () {
            return record.Type.ASSEMBLY_UNBUILD;
        };
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
        return AssemblyUnbuildBase;
    }(Record_1.NetsuiteRecord));
    exports.AssemblyUnbuildBase = AssemblyUnbuildBase;
});
