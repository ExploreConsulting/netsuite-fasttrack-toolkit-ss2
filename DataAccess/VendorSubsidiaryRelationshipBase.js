/**
 * Represents a Vendor-Subsidiary Relationship record in NetSuite
 */
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
        define(["require", "exports", "./Record", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VendorSubsidiaryRelationshipBase = void 0;
    var Record_1 = require("./Record");
    var record = require("N/record");
    /**
     * Vendor-Subsidiary Relationship Record Type
     */
    var VendorSubsidiaryRelationshipBase = /** @class */ (function (_super) {
        __extends(VendorSubsidiaryRelationshipBase, _super);
        function VendorSubsidiaryRelationshipBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VendorSubsidiaryRelationshipBase.recordType = function () { return record.Type.VENDOR_SUBSIDIARY_RELATIONSHIP; };
        __decorate([
            Record_1.FieldType.currency
        ], VendorSubsidiaryRelationshipBase.prototype, "balance", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], VendorSubsidiaryRelationshipBase.prototype, "balancebase", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], VendorSubsidiaryRelationshipBase.prototype, "basecurrency", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], VendorSubsidiaryRelationshipBase.prototype, "creditlimit", void 0);
        __decorate([
            Record_1.FieldType.select
        ], VendorSubsidiaryRelationshipBase.prototype, "entity", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], VendorSubsidiaryRelationshipBase.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], VendorSubsidiaryRelationshipBase.prototype, "isprimarysub", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], VendorSubsidiaryRelationshipBase.prototype, "primarycurrency", void 0);
        __decorate([
            Record_1.FieldType.select
        ], VendorSubsidiaryRelationshipBase.prototype, "subsidiary", void 0);
        __decorate([
            Record_1.FieldType.select
        ], VendorSubsidiaryRelationshipBase.prototype, "taxitem", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], VendorSubsidiaryRelationshipBase.prototype, "unbilledorders", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], VendorSubsidiaryRelationshipBase.prototype, "unbilledordersbase", void 0);
        return VendorSubsidiaryRelationshipBase;
    }(Record_1.NetsuiteRecord));
    exports.VendorSubsidiaryRelationshipBase = VendorSubsidiaryRelationshipBase;
});
