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
        define(["require", "exports", "./Record", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InventoryNumber = void 0;
    /**
     * NetSuite Serial Number (Inventory Number) Record Type
     */
    var Record_1 = require("./Record");
    var record = require("N/record");
    /**
     * NetSuite Inventory Number Record Type (inventorynumber)
     */
    var InventoryNumber = /** @class */ (function (_super) {
        __extends(InventoryNumber, _super);
        function InventoryNumber() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InventoryNumber.recordType = record.Type.INVENTORY_NUMBER;
        __decorate([
            Record_1.FieldType.date
        ], InventoryNumber.prototype, "expirationdate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InventoryNumber.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InventoryNumber.prototype, "inventorynumber", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], InventoryNumber.prototype, "memo", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InventoryNumber.prototype, "status", void 0);
        __decorate([
            Record_1.FieldType.select
        ], InventoryNumber.prototype, "units", void 0);
        return InventoryNumber;
    }(Record_1.NetsuiteRecord));
    exports.InventoryNumber = InventoryNumber;
});
