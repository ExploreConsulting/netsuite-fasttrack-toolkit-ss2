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
        define(["require", "exports", "N/record", "./Record", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var record = require("N/record");
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    /**
     * the Components (component) sublist on AssemblyBuild records
     */
    var ComponentSublist = /** @class */ (function (_super) {
        __extends(ComponentSublist, _super);
        function ComponentSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ComponentSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ComponentSublist.prototype, "linenumber", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ComponentSublist.prototype, "quantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ComponentSublist.prototype, "quantityonhand", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ComponentSublist.prototype, "unitcost", void 0);
        return ComponentSublist;
    }(Sublist_1.SublistLine));
    exports.ComponentSublist = ComponentSublist;
    /**
     * NetSuite Assembly Build (assemblybuild) transaction type.
     * Note it does not inherit from our transaction base because it has a differing subset of fields documented in the
     * records browser
     */
    var AssemblyBuildBase = /** @class */ (function (_super) {
        __extends(AssemblyBuildBase, _super);
        function AssemblyBuildBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AssemblyBuildBase.recordType = record.Type.ASSEMBLY_BUILD;
        __decorate([
            Record_1.FieldType.select
        ], AssemblyBuildBase.prototype, "billofmaterials", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyBuildBase.prototype, "billofmaterialsrevision", void 0);
        __decorate([
            Record_1.FieldType.float
        ], AssemblyBuildBase.prototype, "buildable", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyBuildBase.prototype, "class", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], AssemblyBuildBase.prototype, "createddate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyBuildBase.prototype, "customform", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyBuildBase.prototype, "department", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AssemblyBuildBase.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyBuildBase.prototype, "item", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], AssemblyBuildBase.prototype, "lastmodifieddate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyBuildBase.prototype, "location", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AssemblyBuildBase.prototype, "memo", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyBuildBase.prototype, "postingperiod", void 0);
        __decorate([
            Record_1.FieldType.float
        ], AssemblyBuildBase.prototype, "quantity", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyBuildBase.prototype, "revision", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], AssemblyBuildBase.prototype, "revisionmemo", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyBuildBase.prototype, "subsidiary", void 0);
        __decorate([
            Record_1.FieldType.date
        ], AssemblyBuildBase.prototype, "trandate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AssemblyBuildBase.prototype, "tranid", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyBuildBase.prototype, "units", void 0);
        __decorate([
            Record_1.FieldType.sublist(ComponentSublist)
        ], AssemblyBuildBase.prototype, "component", void 0);
        return AssemblyBuildBase;
    }(Record_1.NetsuiteRecord));
    exports.AssemblyBuildBase = AssemblyBuildBase;
});
