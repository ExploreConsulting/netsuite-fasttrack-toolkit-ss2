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
        define(["require", "exports", "./Record", "./Sublist", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UnitsType = exports.UOMSublist = void 0;
    /**
     * NetSuite Units Type record  (used for 'units of measure')
     */
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    const record = require("N/record");
    /**
     * the "Units" sublist
     */
    class UOMSublist extends Sublist_1.SublistLine {
    }
    exports.UOMSublist = UOMSublist;
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], UOMSublist.prototype, "internalid", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], UOMSublist.prototype, "abbreviation", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], UOMSublist.prototype, "baseunit", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], UOMSublist.prototype, "conversionrate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], UOMSublist.prototype, "pluralabbreviation", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], UOMSublist.prototype, "pluralname", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], UOMSublist.prototype, "unitname", void 0);
    /**
     * NetSuite Units Type record (unitstype)
     */
    class UnitsType extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.UNITS_TYPE; }
    }
    exports.UnitsType = UnitsType;
    __decorate([
        Record_1.FieldType.freeformtext
    ], UnitsType.prototype, "name", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], UnitsType.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], UnitsType.prototype, "isinactive", void 0);
    __decorate([
        Record_1.FieldType.sublist(UOMSublist)
    ], UnitsType.prototype, "uom", void 0);
});
