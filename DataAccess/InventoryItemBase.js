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
        define(["require", "exports", "./Record", "N/record", "./Item"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InventoryItemBase = void 0;
    // the inventory item record in NetSuite
    const Record_1 = require("./Record");
    const record = require("N/record");
    const Item_1 = require("./Item");
    /**
     * Netsuite Inventory Item record type
     */
    class InventoryItemBase extends Item_1.Item {
        static recordType() { return record.Type.INVENTORY_ITEM; }
    }
    exports.InventoryItemBase = InventoryItemBase;
    __decorate([
        Record_1.FieldType.checkbox
    ], InventoryItemBase.prototype, "contingentrevenuehandling", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], InventoryItemBase.prototype, "vendorname", void 0);
});
