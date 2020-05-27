/**
 * NetSuite generic Transaction record
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
        define(["require", "exports", "./Sublist", "N/record", "./Transaction", "./Record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InventorySublist = exports.InventoryAdjustmentBase = void 0;
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    var Transaction_1 = require("./Transaction");
    var Record_1 = require("./Record");
    /**
     * NetSuite Inventory Adjustment Record
     */
    var InventoryAdjustmentBase = /** @class */ (function (_super) {
        __extends(InventoryAdjustmentBase, _super);
        function InventoryAdjustmentBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InventoryAdjustmentBase.recordType = record.Type.INVENTORY_ADJUSTMENT;
        __decorate([
            Record_1.FieldType.select
        ], InventoryAdjustmentBase.prototype, "account", void 0);
        __decorate([
            Record_1.FieldType.select
        ], InventoryAdjustmentBase.prototype, "adjlocation", void 0);
        __decorate([
            Record_1.FieldType.select
        ], InventoryAdjustmentBase.prototype, "class", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], InventoryAdjustmentBase.prototype, "createddate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], InventoryAdjustmentBase.prototype, "customer", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], InventoryAdjustmentBase.prototype, "estimatedtotalvalue", void 0);
        return InventoryAdjustmentBase;
    }(Transaction_1.TransactionBase));
    exports.InventoryAdjustmentBase = InventoryAdjustmentBase;
    /**
     * Sublist 'inventory' on the Inventory Adjustment record.
     */
    var InventorySublist = /** @class */ (function (_super) {
        __extends(InventorySublist, _super);
        function InventorySublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.float
        ], InventorySublist.prototype, "adjustqtyby", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], InventorySublist.prototype, "class", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], InventorySublist.prototype, "costingmethod", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], InventorySublist.prototype, "currency", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], InventorySublist.prototype, "currentvalue", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], InventorySublist.prototype, "department", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], InventorySublist.prototype, "description", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], InventorySublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], InventorySublist.prototype, "location", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], InventorySublist.prototype, "newquantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], InventorySublist.prototype, "quantityonhand", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], InventorySublist.prototype, "unitcost", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], InventorySublist.prototype, "units", void 0);
        return InventorySublist;
    }(Sublist_1.SublistLine));
    exports.InventorySublist = InventorySublist;
});
