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
        define(["require", "exports", "N/record", "./Record", "./Sublist", "./Item"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AssemblyItemBase = exports.MemberSublist = void 0;
    const record = require("N/record");
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    const Item_1 = require("./Item");
    /**
     * the Members (member) sublist on AssemblyItem (assemblyitem) records
     */
    class MemberSublist extends Sublist_1.SublistLine {
    }
    exports.MemberSublist = MemberSublist;
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
    /**
     * NetSuite Build/Assembly Item (assemblyitem) item type.
     */
    class AssemblyItemBase extends Item_1.Item {
        static recordType() { return record.Type.ASSEMBLY_ITEM; }
    }
    exports.AssemblyItemBase = AssemblyItemBase;
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
});
