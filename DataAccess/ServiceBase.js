/**
 * NS Base service item record - contains definitions for most of the built in fields
 */
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
    exports.ServiceBase = exports.ItemTranslationSublist = exports.WebSiteListSublist = exports.HierarchyVersionsSublist = exports.AccountingBooksSublist = void 0;
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    /**
     * NetSuite generic Service used as a common base class for 'service-item-like' records,
     * This is meant to be inherited by concrete record types to avoid duplicating effort on fields.
     * Note that this inheritance hierarchy emerged empirically - it's not documented by NetSuite.
     *
     * It contains fields common to all 'service item' records in NS
     */
    var AccountingBooksSublist = /** @class */ (function (_super) {
        __extends(AccountingBooksSublist, _super);
        function AccountingBooksSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], AccountingBooksSublist.prototype, "acocuntingbook", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], AccountingBooksSublist.prototype, "amoritizationtemplate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], AccountingBooksSublist.prototype, "createrevenueplanson", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], AccountingBooksSublist.prototype, "revenuerecognitionrule", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], AccountingBooksSublist.prototype, "revrecforecastrule", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], AccountingBooksSublist.prototype, "revrecschedule", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], AccountingBooksSublist.prototype, "sameasprimaryamoritization", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], AccountingBooksSublist.prototype, "sameasprimaryrevrec", void 0);
        return AccountingBooksSublist;
    }(Sublist_1.SublistLine));
    exports.AccountingBooksSublist = AccountingBooksSublist;
    var HierarchyVersionsSublist = /** @class */ (function (_super) {
        __extends(HierarchyVersionsSublist, _super);
        function HierarchyVersionsSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], HierarchyVersionsSublist.prototype, "hierarchynode", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], HierarchyVersionsSublist.prototype, "isincluded", void 0);
        return HierarchyVersionsSublist;
    }(Sublist_1.SublistLine));
    exports.HierarchyVersionsSublist = HierarchyVersionsSublist;
    var WebSiteListSublist = /** @class */ (function (_super) {
        __extends(WebSiteListSublist, _super);
        function WebSiteListSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], WebSiteListSublist.prototype, "category", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], WebSiteListSublist.prototype, "categorydescription", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], WebSiteListSublist.prototype, "isdefault", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], WebSiteListSublist.prototype, "website", void 0);
        return WebSiteListSublist;
    }(Sublist_1.SublistLine));
    exports.WebSiteListSublist = WebSiteListSublist;
    var ItemTranslationSublist = /** @class */ (function (_super) {
        __extends(ItemTranslationSublist, _super);
        function ItemTranslationSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemTranslationSublist.prototype, "displayname", void 0);
        __decorate([
            Sublist_1.SublistFieldType.textarea
        ], ItemTranslationSublist.prototype, "featureddescription", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemTranslationSublist.prototype, "language", void 0);
        __decorate([
            Sublist_1.SublistFieldType.textarea
        ], ItemTranslationSublist.prototype, "nopricemessage", void 0);
        __decorate([
            Sublist_1.SublistFieldType.textarea
        ], ItemTranslationSublist.prototype, "outofstockmessage", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemTranslationSublist.prototype, "storedisplayname", void 0);
        return ItemTranslationSublist;
    }(Sublist_1.SublistLine));
    exports.ItemTranslationSublist = ItemTranslationSublist;
    var ServiceBase = /** @class */ (function (_super) {
        __extends(ServiceBase, _super);
        function ServiceBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ServiceBase.recordType = function () { return record.Type.SERVICE_ITEM; };
        __decorate([
            Record_1.FieldType.integernumber
        ], ServiceBase.prototype, "amortizationperiod", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], ServiceBase.prototype, "auctionquantity", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "auctiontype", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "billingschedule", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "class", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], ServiceBase.prototype, "cost", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "costcategory", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], ServiceBase.prototype, "costestimate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "costestimatetype", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ServiceBase.prototype, "costunits", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], ServiceBase.prototype, "createddate", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ServiceBase.prototype, "createjob", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ServiceBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "customform", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "department", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ServiceBase.prototype, "displayname", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ServiceBase.prototype, "dontshowprice", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "expenseaccount", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ServiceBase.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], ServiceBase.prototype, "featureddescription", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ServiceBase.prototype, "gallery", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ServiceBase.prototype, "includechildren", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "incomeaccount", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], ServiceBase.prototype, "internalid", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ServiceBase.prototype, "isinactive", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ServiceBase.prototype, "isonline", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "issueproduct", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "itemcondition", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ServiceBase.prototype, "itemid", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "itemoptions", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ServiceBase.prototype, "itemtype", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "location", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "matrixtype", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], ServiceBase.prototype, "maximumquantity", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], ServiceBase.prototype, "minimumquantity", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ServiceBase.prototype, "mossapplies", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ServiceBase.prototype, "nopricemessage", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ServiceBase.prototype, "offersupport", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "outofstockbehvaior", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "overheadtype", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], ServiceBase.prototype, "pagetitle", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "parent", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "pricinggroup", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], ServiceBase.prototype, "primarycategory", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "purchaseunit", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], ServiceBase.prototype, "reserveprice", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "revrecforecastrule", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "salesunit", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "subsidiary", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceBase.prototype, "taxschedule", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ServiceBase.prototype, "upccode", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], ServiceBase.prototype, "urlcomponent", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], ServiceBase.prototype, "vendorname", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ServiceBase.prototype, "willship", void 0);
        __decorate([
            Record_1.FieldType.sublist(AccountingBooksSublist)
        ], ServiceBase.prototype, "accountingbookdetail", void 0);
        __decorate([
            Record_1.FieldType.sublist(HierarchyVersionsSublist)
        ], ServiceBase.prototype, "hierarchyversions", void 0);
        __decorate([
            Record_1.FieldType.sublist(WebSiteListSublist)
        ], ServiceBase.prototype, "sitecategory", void 0);
        __decorate([
            Record_1.FieldType.sublist(ItemTranslationSublist)
        ], ServiceBase.prototype, "translations", void 0);
        return ServiceBase;
    }(Record_1.NetsuiteRecord));
    exports.ServiceBase = ServiceBase;
});
