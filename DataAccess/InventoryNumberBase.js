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
    const Record_1 = require("./Record");
    const record = require("N/record");
    const Sublist_1 = require("./Sublist");
    /**
     * The 'locations' sublist on Inventory Number records
     */
    class LocationsSublist extends Sublist_1.SublistLine {
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
    exports.LocationsSublist = LocationsSublist;
    /**
     * NetSuite Inventory Number Record Type (inventorynumber)
     */
    class InventoryNumberBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.INVENTORY_NUMBER; }
    }
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
    exports.InventoryNumberBase = InventoryNumberBase;
});
