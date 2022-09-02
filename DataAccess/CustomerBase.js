/**
 * NS Base customer record - contains definitions for most of the built in fields
 */
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
        define(["require", "exports", "./Record", "N/record", "./Sublist", "./AddressBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContactsSublist = exports.CustomerBase = exports.CurrencySublist = exports.CurrencySymbolPlacement = exports.AddressSublist = void 0;
    const Record_1 = require("./Record");
    const record = require("N/record");
    const Sublist_1 = require("./Sublist");
    const AddressBase_1 = require("./AddressBase");
    /**
     * The address _sublist_ on customer records, not to be confused with the Address _subrecord_.
     * Customer address info is split between this sublist and the subrecord pointed to by the _addressbook_ field.
     */
    class AddressSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.subrecord(AddressBase_1.AddressBase)
    ], AddressSublist.prototype, "addressbookaddress", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], AddressSublist.prototype, "attention", void 0);
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
    exports.AddressSublist = AddressSublist;
    var CurrencySymbolPlacement;
    (function (CurrencySymbolPlacement) {
        CurrencySymbolPlacement[CurrencySymbolPlacement["BeforeNumber"] = 1] = "BeforeNumber";
        CurrencySymbolPlacement[CurrencySymbolPlacement["AfterNumber"] = 2] = "AfterNumber";
    })(CurrencySymbolPlacement = exports.CurrencySymbolPlacement || (exports.CurrencySymbolPlacement = {}));
    class CurrencySublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], CurrencySublist.prototype, "balance", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], CurrencySublist.prototype, "consolbalance", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], CurrencySublist.prototype, "consoldepositbalance", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], CurrencySublist.prototype, "consoloverduebalance", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], CurrencySublist.prototype, "consolunbilledorders", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], CurrencySublist.prototype, "currency", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], CurrencySublist.prototype, "currencyformatsample", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], CurrencySublist.prototype, "depositbalance", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], CurrencySublist.prototype, "displaysymbol", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], CurrencySublist.prototype, "overduebalance", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], CurrencySublist.prototype, "overridecurrencyformat", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], CurrencySublist.prototype, "symbolplacement", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], CurrencySublist.prototype, "unbilledorders", void 0);
    exports.CurrencySublist = CurrencySublist;
    class CustomerBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.CUSTOMER; }
    }
    __decorate([
        Record_1.FieldType.freeformtext
    ], CustomerBase.prototype, "accountnumber", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CustomerBase.prototype, "category", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], CustomerBase.prototype, "comments", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CustomerBase.prototype, "companyname", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CustomerBase.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CustomerBase.prototype, "customform", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], CustomerBase.prototype, "datecreated", void 0);
    __decorate([
        Record_1.FieldType.email
    ], CustomerBase.prototype, "email", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CustomerBase.prototype, "entityid", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CustomerBase.prototype, "entitystatus", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CustomerBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CustomerBase.prototype, "fax", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CustomerBase.prototype, "firstname", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], CustomerBase.prototype, "isinactive", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CustomerBase.prototype, "isperson", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], CustomerBase.prototype, "lastmodifieddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CustomerBase.prototype, "language", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CustomerBase.prototype, "lastname", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CustomerBase.prototype, "parent", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CustomerBase.prototype, "phone", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CustomerBase.prototype, "pricelevel", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CustomerBase.prototype, "salesrep", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CustomerBase.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], CustomerBase.prototype, "taxable", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CustomerBase.prototype, "taxitem", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CustomerBase.prototype, "terms", void 0);
    __decorate([
        Record_1.FieldType.sublist(AddressSublist)
    ], CustomerBase.prototype, "addressbook", void 0);
    __decorate([
        Record_1.FieldType.sublist(CurrencySublist)
    ], CustomerBase.prototype, "currencySublist", void 0);
    exports.CustomerBase = CustomerBase;
    class ContactsSublist extends Sublist_1.SublistLine {
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
    exports.ContactsSublist = ContactsSublist;
});
