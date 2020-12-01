/**
 * Represents a Bin Transfer (bintransfer) record type in NetSuite
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
        define(["require", "exports", "./Record", "N/record", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BinTransferBase = exports.AdjustmentsSublistLine = void 0;
    var Record_1 = require("./Record");
    var record = require("N/record");
    var Sublist_1 = require("./Sublist");
    /**
     * represents the Adjustments sublist on Bin Transfer records
     */
    var AdjustmentsSublistLine = /** @class */ (function (_super) {
        __extends(AdjustmentsSublistLine, _super);
        function AdjustmentsSublistLine() {
            return _super !== null && _super.apply(this, arguments) || this;
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
        return AdjustmentsSublistLine;
    }(Sublist_1.SublistLine));
    exports.AdjustmentsSublistLine = AdjustmentsSublistLine;
    /**
     * NetSuite Bin Transfer record
     */
    var BinTransferBase = /** @class */ (function (_super) {
        __extends(BinTransferBase, _super);
        function BinTransferBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BinTransferBase.recordType = record.Type.BIN_TRANSFER;
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
        return BinTransferBase;
    }(Record_1.NetsuiteRecord));
    exports.BinTransferBase = BinTransferBase;
});
