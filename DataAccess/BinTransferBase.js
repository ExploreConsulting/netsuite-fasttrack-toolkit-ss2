/**
 * Represents a Bin Transfer (bintransfer) record type in NetSuite
 */
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
    exports.BinTransferBase = exports.AdjustmentsSublistLine = void 0;
    const Record_1 = require("./Record");
    const record = require("N/record");
    const Sublist_1 = require("./Sublist");
    /**
     * represents the Adjustments sublist on Bin Transfer records
     */
    class AdjustmentsSublistLine extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], AdjustmentsSublistLine.prototype, "description", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], AdjustmentsSublistLine.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], AdjustmentsSublistLine.prototype, "itemunitslabel", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], AdjustmentsSublistLine.prototype, "line", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], AdjustmentsSublistLine.prototype, "preferredbin", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], AdjustmentsSublistLine.prototype, "quantity", void 0);
    exports.AdjustmentsSublistLine = AdjustmentsSublistLine;
    /**
     * NetSuite Bin Transfer record
     */
    class BinTransferBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.BIN_TRANSFER; }
    }
    __decorate([
        Record_1.FieldType.datetime
    ], BinTransferBase.prototype, "createddate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], BinTransferBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], BinTransferBase.prototype, "lastmodifieddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], BinTransferBase.prototype, "location", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], BinTransferBase.prototype, "memo", void 0);
    __decorate([
        Record_1.FieldType.select
    ], BinTransferBase.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], BinTransferBase.prototype, "total", void 0);
    __decorate([
        Record_1.FieldType.date
    ], BinTransferBase.prototype, "trandate", void 0);
    __decorate([
        Record_1.FieldType.sublist(AdjustmentsSublistLine)
    ], BinTransferBase.prototype, "inventory", void 0);
    exports.BinTransferBase = BinTransferBase;
});
