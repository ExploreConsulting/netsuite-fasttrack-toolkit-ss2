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
        define(["require", "exports", "./Sublist", "./Record", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InventoryCountBase = exports.ItemSublist = void 0;
    /**
     * NetSuite Inventory Count Record Type
     */
    const Sublist_1 = require("./Sublist");
    const Record_1 = require("./Record");
    const record = require("N/record");
    /**
     * Items sublist
     */
    class ItemSublist extends Sublist_1.SublistLine {
    }
    exports.ItemSublist = ItemSublist;
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "item", void 0);
    /**
     * NetSuite Inventory Transfer Record type
     */
    class InventoryCountBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.INVENTORY_COUNT; }
    }
    exports.InventoryCountBase = InventoryCountBase;
    __decorate([
        Record_1.FieldType.sublist(ItemSublist)
    ], InventoryCountBase.prototype, "item", void 0);
});
