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
define(["require", "exports", "N/record", "./Record", "./Sublist"], function (require, exports, record, Record_1, Sublist_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        AssemblyItemBase.recordType = record.Type.ASSEMBLY_ITEM;
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "assetaccount", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], AssemblyItemBase.prototype, "averagecost", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "billingschedule", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "billpricevariantacct", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AssemblyItemBase.prototype, "buildentireassembly", void 0);
        __decorate([
            Record_1.FieldType.float
        ], AssemblyItemBase.prototype, "buildtime", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "class", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "cogsaccount", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AssemblyItemBase.prototype, "copydescription", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], AssemblyItemBase.prototype, "cost", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "costcategory", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "costingmethod", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "countryofmanufacture", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], AssemblyItemBase.prototype, "createddate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "customform", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "deferredrevenueaccount", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AssemblyItemBase.prototype, "deferrevrec", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "department", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], AssemblyItemBase.prototype, "description", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AssemblyItemBase.prototype, "displayname", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AssemblyItemBase.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AssemblyItemBase.prototype, "includechildren", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "incomeaccount", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AssemblyItemBase.prototype, "isdonationitem", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AssemblyItemBase.prototype, "isdropshipitem", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AssemblyItemBase.prototype, "isgcocompliant", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AssemblyItemBase.prototype, "isinactive", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AssemblyItemBase.prototype, "isonline", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AssemblyItemBase.prototype, "isphantom", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AssemblyItemBase.prototype, "isspecialorderitem", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AssemblyItemBase.prototype, "isspecialworkorderitem", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AssemblyItemBase.prototype, "isstorepickupallowed", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "itemcondition", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AssemblyItemBase.prototype, "itemid", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "itemoptions", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AssemblyItemBase.prototype, "itemtype", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], AssemblyItemBase.prototype, "lastmodifieddate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "location", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "parent", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "revrecschedule", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "subsidiary", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AssemblyItemBase.prototype, "upccode", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AssemblyItemBase.prototype, "tranid", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "units", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AssemblyItemBase.prototype, "usebins", void 0);
        __decorate([
            Record_1.FieldType.float
        ], AssemblyItemBase.prototype, "weight", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AssemblyItemBase.prototype, "weightunit", void 0);
        __decorate([
            Record_1.FieldType.sublist(MemberSublist)
        ], AssemblyItemBase.prototype, "member", void 0);
        return AssemblyItemBase;
    }(Record_1.NetsuiteRecord));
    exports.AssemblyItemBase = AssemblyItemBase;
});
