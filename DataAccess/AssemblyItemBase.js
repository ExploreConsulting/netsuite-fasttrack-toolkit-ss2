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
        define(["require", "exports", "N/record", "./Record", "./Sublist", "./ItemBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AssemblyItemBase = exports.MemberSublist = void 0;
    var record = require("N/record");
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var ItemBase_1 = require("./ItemBase");
    /**
     * the Members (member) sublist on AssemblyItem (assemblyitem) records
     */
    var MemberSublist = /** @class */ (function (_super) {
        __extends(MemberSublist, _super);
        function MemberSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.date
        ], MemberSublist.prototype, "effectivedate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], MemberSublist.prototype, "effectiverevision", void 0);
        __decorate([
            Sublist_1.SublistFieldType.textarea
        ], MemberSublist.prototype, "memberdescr", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], MemberSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], MemberSublist.prototype, "linenumber", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], MemberSublist.prototype, "memberunit", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], MemberSublist.prototype, "quantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], MemberSublist.prototype, "taxschedule", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], MemberSublist.prototype, "weight", void 0);
        return MemberSublist;
    }(Sublist_1.SublistLine));
    exports.MemberSublist = MemberSublist;
    /**
     * NetSuite Build/Assembly Item (assemblyitem) item type.
     */
    var AssemblyItemBase = /** @class */ (function (_super) {
        __extends(AssemblyItemBase, _super);
        function AssemblyItemBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AssemblyItemBase.recordType = function () { return record.Type.ASSEMBLY_ITEM; };
        __decorate([
            Record_1.FieldType.checkbox
        ], AssemblyItemBase.prototype, "buildentireassembly", void 0);
        __decorate([
            Record_1.FieldType.float
        ], AssemblyItemBase.prototype, "buildtime", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AssemblyItemBase.prototype, "isphantom", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AssemblyItemBase.prototype, "isspecialworkorderitem", void 0);
        __decorate([
            Record_1.FieldType.sublist(MemberSublist)
        ], AssemblyItemBase.prototype, "member", void 0);
        return AssemblyItemBase;
    }(ItemBase_1.ItemBase));
    exports.AssemblyItemBase = AssemblyItemBase;
});
