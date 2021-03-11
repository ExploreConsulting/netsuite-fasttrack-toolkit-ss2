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
        define(["require", "exports", "./Record", "N/record", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InventoryNumberBase = exports.LocationsSublist = void 0;
    /**
     * NetSuite Serial Number (Inventory Number) Record Type
     */
    var Record_1 = require("./Record");
    var record = require("N/record");
    var Sublist_1 = require("./Sublist");
    /**
     * The 'locations' sublist on Inventory Number records
     */
    var LocationsSublist = /** @class */ (function (_super) {
        __extends(LocationsSublist, _super);
        function LocationsSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], LocationsSublist.prototype, "location", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], LocationsSublist.prototype, "quantityavailable", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], LocationsSublist.prototype, "quantityintransit", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], LocationsSublist.prototype, "quantityonhand", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], LocationsSublist.prototype, "quantityonorder", void 0);
        return LocationsSublist;
    }(Sublist_1.SublistLine));
    exports.LocationsSublist = LocationsSublist;
    /**
     * NetSuite Inventory Number Record Type (inventorynumber)
     */
    var InventoryNumberBase = /** @class */ (function (_super) {
        __extends(InventoryNumberBase, _super);
        function InventoryNumberBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InventoryNumberBase.recordType = record.Type.INVENTORY_NUMBER;
        __decorate([
            Record_1.FieldType.date
        ], InventoryNumberBase.prototype, "expirationdate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InventoryNumberBase.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InventoryNumberBase.prototype, "inventorynumber", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], InventoryNumberBase.prototype, "memo", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InventoryNumberBase.prototype, "status", void 0);
        __decorate([
            Record_1.FieldType.select
        ], InventoryNumberBase.prototype, "units", void 0);
        __decorate([
            Record_1.FieldType.sublist(LocationsSublist)
        ], InventoryNumberBase.prototype, "locations", void 0);
        return InventoryNumberBase;
    }(Record_1.NetsuiteRecord));
    exports.InventoryNumberBase = InventoryNumberBase;
});
