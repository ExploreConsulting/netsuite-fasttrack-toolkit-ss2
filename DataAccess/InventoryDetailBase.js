/**
 * NS Base Inventory Detail subrecord contains definitions for the built in fields
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
        define(["require", "exports", "./Record", "N/record", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InventoryDetailBase = exports.InventoryAssignmentSublist = void 0;
    var Record_1 = require("./Record");
    var record = require("N/record");
    var Sublist_1 = require("./Sublist");
    var InventoryAssignmentSublist = /** @class */ (function (_super) {
        __extends(InventoryAssignmentSublist, _super);
        function InventoryAssignmentSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
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
        return InventoryAssignmentSublist;
    }(Sublist_1.SublistLine));
    exports.InventoryAssignmentSublist = InventoryAssignmentSublist;
    /**
     * The inventory detail 'subrecord'. In SS2.0 this is mostly treated as a normal record object.
     * However I caution against trying to create new instances of it, only passing an existing record
     * to the constructor.
     */
    var InventoryDetailBase = /** @class */ (function (_super) {
        __extends(InventoryDetailBase, _super);
        function InventoryDetailBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InventoryDetailBase.recordType = record.Type.INVENTORY_DETAIL;
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
        return InventoryDetailBase;
    }(Record_1.NetsuiteRecord));
    exports.InventoryDetailBase = InventoryDetailBase;
});
