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
        define(["require", "exports", "./Record", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LandedCostBase = exports.LandedCostDataSublist = void 0;
    /**
     * NS Base Landed Cost subrecord contains definitions for the built in fields
     */
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    class LandedCostDataSublist extends Sublist_1.SublistLine {
    }
    exports.LandedCostDataSublist = LandedCostDataSublist;
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], LandedCostDataSublist.prototype, "amount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], LandedCostDataSublist.prototype, "landedcostcategory", void 0);
    /**
     * The inventory detail 'subrecord'. In SS2.0 this is mostly treated as a normal record object.
     * However I caution against trying to create new instances of it, only passing an existing record
     * to the constructor.
     */
    class LandedCostBase extends Record_1.NetsuiteRecord {
        static recordType() { return 'landedcost'; }
    }
    exports.LandedCostBase = LandedCostBase;
});
