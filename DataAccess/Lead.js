/**
 * NS Base lead record - contains definitions for most of the built in fields
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
        define(["require", "exports", "./Record", "./Sublist", "N/record", "./AddressBase", "./Entity"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LeadBase = exports.SalesTeamSublist = exports.PartnersSublist = exports.ItemPricingSublist = exports.GroupPricingSublist = exports.DownloadsSublist = exports.CurrenciesSublist = exports.ContactsSublist = exports.AddressSublist = void 0;
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    var AddressBase_1 = require("./AddressBase");
    var Entity_1 = require("./Entity");
    /**
     * NetSuite generic Lead used as a common base class for 'lead-like' records,
     * This is meant to be inherited by concrete record types to avoid duplicating effort on fields.
     * Note that this inheritance hierarchy emerged empirically - it's not documented by NetSuite.
     *
     * It contains fields common to all 'lead' records in NS
     */
    var AddressSublist = /** @class */ (function (_super) {
        __extends(AddressSublist, _super);
        function AddressSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.subrecord(AddressBase_1.AddressBase)
        ], AddressSublist.prototype, "addressbookaddress", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], AddressSublist.prototype, "attention", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], AddressSublist.prototype, "city", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], AddressSublist.prototype, "country", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], AddressSublist.prototype, "defaultbilling", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], AddressSublist.prototype, "defaultshipping", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], AddressSublist.prototype, "displaystate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], AddressSublist.prototype, "dropdownstate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], AddressSublist.prototype, "id", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], AddressSublist.prototype, "internalid", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], AddressSublist.prototype, "isresidential", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], AddressSublist.prototype, "label", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], AddressSublist.prototype, "override", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], AddressSublist.prototype, "phone", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], AddressSublist.prototype, "state", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], AddressSublist.prototype, "zip", void 0);
        return AddressSublist;
    }(Sublist_1.SublistLine));
    exports.AddressSublist = AddressSublist;
    var ContactsSublist = /** @class */ (function (_super) {
        __extends(ContactsSublist, _super);
        function ContactsSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ContactsSublist.prototype, "contact", void 0);
        __decorate([
            Sublist_1.SublistFieldType.email
        ], ContactsSublist.prototype, "email", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ContactsSublist.prototype, "giveaccess", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ContactsSublist.prototype, "passwordconfirm", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ContactsSublist.prototype, "role", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ContactsSublist.prototype, "sendemail", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ContactsSublist.prototype, "strength", void 0);
        return ContactsSublist;
    }(Sublist_1.SublistLine));
    exports.ContactsSublist = ContactsSublist;
    var CurrenciesSublist = /** @class */ (function (_super) {
        __extends(CurrenciesSublist, _super);
        function CurrenciesSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], CurrenciesSublist.prototype, "balance", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], CurrenciesSublist.prototype, "consolbalance", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], CurrenciesSublist.prototype, "consoldepositbalance", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], CurrenciesSublist.prototype, "consoloverduebalance", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], CurrenciesSublist.prototype, "consolunbilledorders", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], CurrenciesSublist.prototype, "currency", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], CurrenciesSublist.prototype, "currencyformatsample", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], CurrenciesSublist.prototype, "depositbalance", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], CurrenciesSublist.prototype, "displaysymbol", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], CurrenciesSublist.prototype, "overduebalance", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], CurrenciesSublist.prototype, "overridecurrencyformat", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], CurrenciesSublist.prototype, "symbolplacement", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], CurrenciesSublist.prototype, "unbilledorders", void 0);
        return CurrenciesSublist;
    }(Sublist_1.SublistLine));
    exports.CurrenciesSublist = CurrenciesSublist;
    var DownloadsSublist = /** @class */ (function (_super) {
        __extends(DownloadsSublist, _super);
        function DownloadsSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.date
        ], DownloadsSublist.prototype, "expiration", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], DownloadsSublist.prototype, "file", void 0);
        __decorate([
            Sublist_1.SublistFieldType.textarea
        ], DownloadsSublist.prototype, "licensecode", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], DownloadsSublist.prototype, "remainingdownloads", void 0);
        return DownloadsSublist;
    }(Sublist_1.SublistLine));
    exports.DownloadsSublist = DownloadsSublist;
    var GroupPricingSublist = /** @class */ (function (_super) {
        __extends(GroupPricingSublist, _super);
        function GroupPricingSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], GroupPricingSublist.prototype, "group", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], GroupPricingSublist.prototype, "level", void 0);
        return GroupPricingSublist;
    }(Sublist_1.SublistLine));
    exports.GroupPricingSublist = GroupPricingSublist;
    var ItemPricingSublist = /** @class */ (function (_super) {
        __extends(ItemPricingSublist, _super);
        function ItemPricingSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemPricingSublist.prototype, "currency", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemPricingSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemPricingSublist.prototype, "level", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ItemPricingSublist.prototype, "price", void 0);
        return ItemPricingSublist;
    }(Sublist_1.SublistLine));
    exports.ItemPricingSublist = ItemPricingSublist;
    var PartnersSublist = /** @class */ (function (_super) {
        __extends(PartnersSublist, _super);
        function PartnersSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.percent
        ], PartnersSublist.prototype, "contribution", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], PartnersSublist.prototype, "customer", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], PartnersSublist.prototype, "id", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], PartnersSublist.prototype, "isprimary", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], PartnersSublist.prototype, "partner", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], PartnersSublist.prototype, "partnerrole", void 0);
        return PartnersSublist;
    }(Sublist_1.SublistLine));
    exports.PartnersSublist = PartnersSublist;
    var SalesTeamSublist = /** @class */ (function (_super) {
        __extends(SalesTeamSublist, _super);
        function SalesTeamSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.percent
        ], SalesTeamSublist.prototype, "contribution", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], SalesTeamSublist.prototype, "customer", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], SalesTeamSublist.prototype, "employee", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], SalesTeamSublist.prototype, "id", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], SalesTeamSublist.prototype, "isprimary", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], SalesTeamSublist.prototype, "issalesrep", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], SalesTeamSublist.prototype, "salesrole", void 0);
        return SalesTeamSublist;
    }(Sublist_1.SublistLine));
    exports.SalesTeamSublist = SalesTeamSublist;
    var LeadBase = /** @class */ (function (_super) {
        __extends(LeadBase, _super);
        function LeadBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LeadBase.recordType = function () { return record.Type.LEAD; };
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "accessrole", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], LeadBase.prototype, "autoname", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "buyingreason", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "buyingtimeframe", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], LeadBase.prototype, "consoldaysoverdue", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "creditholdoverride", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], LeadBase.prototype, "currencyprecision", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], LeadBase.prototype, "daysoverdue", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "defaultbankaccount", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "draccount", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], LeadBase.prototype, "emailtransactions", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], LeadBase.prototype, "estimatedbudget", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "fxaccount", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "globalsubscriptionstatus", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "image", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], LeadBase.prototype, "isbudgetapproved", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], LeadBase.prototype, "keywords", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], LeadBase.prototype, "lastvisit", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "leadsource", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], LeadBase.prototype, "middlename", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "negativenumberformat", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "numberformat", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "partner", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "prefccprocessor", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "pricelevel", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], LeadBase.prototype, "printoncheckas", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], LeadBase.prototype, "printtransactions", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "receivablesaccount", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], LeadBase.prototype, "referrer", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], LeadBase.prototype, "resalenumber", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "salesgroup", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "salesreadiness", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], LeadBase.prototype, "salesrep", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "sourcewebsite", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], LeadBase.prototype, "stage", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], LeadBase.prototype, "syncpartnerteams", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], LeadBase.prototype, "syncsalesteams", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], LeadBase.prototype, "taxable", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], LeadBase.prototype, "taxexempt", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "taxfractionunit", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "taxrounding", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "territory", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], LeadBase.prototype, "title", void 0);
        __decorate([
            Record_1.FieldType.select
        ], LeadBase.prototype, "unsubscribe", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], LeadBase.prototype, "visits", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], LeadBase.prototype, "weblead", void 0);
        __decorate([
            Record_1.FieldType.sublist(AddressSublist)
        ], LeadBase.prototype, "addressbook", void 0);
        __decorate([
            Record_1.FieldType.sublist(ContactsSublist)
        ], LeadBase.prototype, "contactroles", void 0);
        __decorate([
            Record_1.FieldType.sublist(DownloadsSublist)
        ], LeadBase.prototype, "download", void 0);
        __decorate([
            Record_1.FieldType.sublist(GroupPricingSublist)
        ], LeadBase.prototype, "grouppricing", void 0);
        __decorate([
            Record_1.FieldType.sublist(ItemPricingSublist)
        ], LeadBase.prototype, "itempricing", void 0);
        __decorate([
            Record_1.FieldType.sublist(PartnersSublist)
        ], LeadBase.prototype, "partners", void 0);
        __decorate([
            Record_1.FieldType.sublist(SalesTeamSublist)
        ], LeadBase.prototype, "salesteam", void 0);
        return LeadBase;
    }(Entity_1.Entity));
    exports.LeadBase = LeadBase;
});
