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
        define(["require", "exports", "./Record", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InventoryStatusChangeBase = void 0;
    /**
     * NetSuite Inventory Status Change Record Type
     */
    const Record_1 = require("./Record");
    const record = require("N/record");
    /**
     *
     * Inventory Status Change NetSuite record
     */
    class InventoryStatusChangeBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.INVENTORY_STATUS_CHANGE; }
    }
    exports.InventoryStatusChangeBase = InventoryStatusChangeBase;
    __decorate([
        Record_1.FieldType.freeformtext
    ], InventoryStatusChangeBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InventoryStatusChangeBase.prototype, "location", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], InventoryStatusChangeBase.prototype, "memo", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InventoryStatusChangeBase.prototype, "previousstatus", void 0);
    __decorate([
        Record_1.FieldType.select
    ], InventoryStatusChangeBase.prototype, "revisedstatus", void 0);
});
