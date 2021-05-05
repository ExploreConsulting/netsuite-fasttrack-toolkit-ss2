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
        define(["require", "exports", "./Record", "N/record", "./Item"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InventoryItem = void 0;
    // the inventory item record in NetSuite
    var Record_1 = require("./Record");
    var record = require("N/record");
    var Item_1 = require("./Item");
    /**
     * Netsuite Inventory Item record type
     */
    var InventoryItem = /** @class */ (function (_super) {
        __extends(InventoryItem, _super);
        function InventoryItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InventoryItem.recordType = function () { return record.Type.INVENTORY_ITEM; };
        __decorate([
            Record_1.FieldType.checkbox
        ], InventoryItem.prototype, "contingentrevenuehandling", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InventoryItem.prototype, "vendorname", void 0);
        return InventoryItem;
    }(Item_1.Item));
    exports.InventoryItem = InventoryItem;
});
