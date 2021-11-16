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
        define(["require", "exports", "./Record", "./Sublist", "N/record", "./Item"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceItemBase = exports.ItemTranslationSublist = exports.WebSiteListSublist = exports.HierarchyVersionsSublist = exports.AccountingBooksSublist = void 0;
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    var Item_1 = require("./Item");
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
    /**
     * NetSuite Service Item
     */
    var ServiceItemBase = /** @class */ (function (_super) {
        __extends(ServiceItemBase, _super);
        function ServiceItemBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ServiceItemBase.recordType = function () { return record.Type.SERVICE_ITEM; };
        __decorate([
            Record_1.FieldType.integernumber
        ], ServiceItemBase.prototype, "amortizationperiod", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], ServiceItemBase.prototype, "auctionquantity", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceItemBase.prototype, "auctiontype", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], ServiceItemBase.prototype, "costestimate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceItemBase.prototype, "costestimatetype", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ServiceItemBase.prototype, "costunits", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ServiceItemBase.prototype, "createjob", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ServiceItemBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ServiceItemBase.prototype, "dontshowprice", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceItemBase.prototype, "expenseaccount", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], ServiceItemBase.prototype, "featureddescription", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ServiceItemBase.prototype, "gallery", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], ServiceItemBase.prototype, "internalid", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceItemBase.prototype, "issueproduct", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceItemBase.prototype, "matrixtype", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], ServiceItemBase.prototype, "maximumquantity", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], ServiceItemBase.prototype, "minimumquantity", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ServiceItemBase.prototype, "mossapplies", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ServiceItemBase.prototype, "nopricemessage", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ServiceItemBase.prototype, "offersupport", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceItemBase.prototype, "outofstockbehvaior", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceItemBase.prototype, "overheadtype", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], ServiceItemBase.prototype, "pagetitle", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceItemBase.prototype, "pricinggroup", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], ServiceItemBase.prototype, "primarycategory", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceItemBase.prototype, "purchaseunit", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], ServiceItemBase.prototype, "reserveprice", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceItemBase.prototype, "revrecforecastrule", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ServiceItemBase.prototype, "salesunit", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], ServiceItemBase.prototype, "urlcomponent", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], ServiceItemBase.prototype, "vendorname", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ServiceItemBase.prototype, "willship", void 0);
        __decorate([
            Record_1.FieldType.sublist(AccountingBooksSublist)
        ], ServiceItemBase.prototype, "accountingbookdetail", void 0);
        __decorate([
            Record_1.FieldType.sublist(HierarchyVersionsSublist)
        ], ServiceItemBase.prototype, "hierarchyversions", void 0);
        __decorate([
            Record_1.FieldType.sublist(WebSiteListSublist)
        ], ServiceItemBase.prototype, "sitecategory", void 0);
        __decorate([
            Record_1.FieldType.sublist(ItemTranslationSublist)
        ], ServiceItemBase.prototype, "translations", void 0);
        return ServiceItemBase;
    }(Item_1.Item));
    exports.ServiceItemBase = ServiceItemBase;
});
