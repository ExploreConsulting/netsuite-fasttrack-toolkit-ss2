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
        define(["require", "exports", "./Record", "./Sublist", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UnitsType = exports.UOMSublist = void 0;
    /**
     * NetSuite Units Type record  (used for 'units of measure')
     */
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    /**
     * the "Units" sublist
     */
    var UOMSublist = /** @class */ (function (_super) {
        __extends(UOMSublist, _super);
        function UOMSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
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
        return UOMSublist;
    }(Sublist_1.SublistLine));
    exports.UOMSublist = UOMSublist;
    /**
     * NetSuite Units Type record {unitstype}
     */
    var UnitsType = /** @class */ (function (_super) {
        __extends(UnitsType, _super);
        function UnitsType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UnitsType.recordType = function () { return record.Type.UNITS_TYPE; };
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
        return UnitsType;
    }(Record_1.NetsuiteRecord));
    exports.UnitsType = UnitsType;
});
