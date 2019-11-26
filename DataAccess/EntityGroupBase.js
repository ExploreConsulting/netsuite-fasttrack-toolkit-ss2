/**
 * Represents an (Entity) Group record type in NetSuite
 */
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
        define(["require", "exports", "./Record", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    /**
     * EntityGroup Group Members sublist
     */
    var GroupMembersSublist = /** @class */ (function (_super) {
        __extends(GroupMembersSublist, _super);
        function GroupMembersSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], GroupMembersSublist.prototype, "accesslevel", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], GroupMembersSublist.prototype, "bouncedaddress", void 0);
        __decorate([
            Sublist_1.SublistFieldType.percent
        ], GroupMembersSublist.prototype, "contribution", void 0);
        __decorate([
            Sublist_1.SublistFieldType.email
        ], GroupMembersSublist.prototype, "email", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], GroupMembersSublist.prototype, "employeemember", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], GroupMembersSublist.prototype, "isprimary", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], GroupMembersSublist.prototype, "memberemail", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], GroupMembersSublist.prototype, "membername", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], GroupMembersSublist.prototype, "memberphone", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], GroupMembersSublist.prototype, "phone", void 0);
        return GroupMembersSublist;
    }(Sublist_1.SublistLine));
    exports.GroupMembersSublist = GroupMembersSublist;
    /**
     * EntityGroup (entitygroup) netsuite type
     */
    var Base = /** @class */ (function (_super) {
        __extends(Base, _super);
        function Base() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Base.recordType = 'entitygroup';
        __decorate([
            Record_1.FieldType.textarea
        ], Base.prototype, "comments", void 0);
        __decorate([
            Record_1.FieldType.email
        ], Base.prototype, "email", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], Base.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], Base.prototype, "groupname", void 0);
        __decorate([
            Record_1.FieldType.select
        ], Base.prototype, "groupowner", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], Base.prototype, "grouptypename", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], Base.prototype, "isfunctionalteam", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], Base.prototype, "isinactive", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], Base.prototype, "ismanufacturingworkcenter", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], Base.prototype, "isprivate", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], Base.prototype, "isproductteam", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], Base.prototype, "issalesrep", void 0);
        __decorate([
            Record_1.FieldType.select
        ], Base.prototype, "issuerole", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], Base.prototype, "issupportrep", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], Base.prototype, "laborresources", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], Base.prototype, "machineresources", void 0);
        __decorate([
            Record_1.FieldType.select
        ], Base.prototype, "restrictiongroup", void 0);
        __decorate([
            Record_1.FieldType.select
        ], Base.prototype, "savedsearch", void 0);
        __decorate([
            Record_1.FieldType.select
        ], Base.prototype, "subsidiary", void 0);
        __decorate([
            Record_1.FieldType.select
        ], Base.prototype, "workcalendar", void 0);
        __decorate([
            Record_1.FieldType.sublist(GroupMembersSublist)
        ], Base.prototype, "groupmembers", void 0);
        return Base;
    }(Record_1.NetsuiteRecord));
    exports.Base = Base;
});
