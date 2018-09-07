"use strict";
/**
 * Represents an Bin record in NetSuite
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
Object.defineProperty(exports, "__esModule", { value: true });
var Record_1 = require("./Record");
var record = require("N/record");
/**
 * Bin Base Type (bin)
 */
var BinBase = /** @class */ (function (_super) {
    __extends(BinBase, _super);
    function BinBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BinBase.recordType = record.Type.BIN;
    __decorate([
        Record_1.FieldType.freeformtext
    ], BinBase.prototype, "binnumber", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], BinBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], BinBase.prototype, "isinactive", void 0);
    __decorate([
        Record_1.FieldType.select
    ], BinBase.prototype, "location", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], BinBase.prototype, "memo", void 0);
    return BinBase;
}(Record_1.NetsuiteRecord));
exports.BinBase = BinBase;
