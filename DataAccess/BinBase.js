/**
 * Represents an Bin record in NetSuite
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
        define(["require", "exports", "./Record", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BinBase = void 0;
    const Record_1 = require("./Record");
    const record = require("N/record");
    /**
     * Bin Base Type (bin)
     */
    class BinBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.BIN; }
    }
    exports.BinBase = BinBase;
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
});
