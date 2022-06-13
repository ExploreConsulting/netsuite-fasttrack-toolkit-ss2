/**
 * Represents a Contact (contact) record type in NetSuite
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
    exports.ContactBase = exports.AddressSublist = void 0;
    const Record_1 = require("./Record");
    const record = require("N/record");
    const Sublist_1 = require("./Sublist");
    const AddressBase_1 = require("./AddressBase");
    /**
     * The address _sublist_ (addressbook) on Contact records, not to be confused with the Address _subrecord_.
     * Contact address info is split between this sublist and the subrecord pointed to by the _addressbookaddress_ field.
     */
    class AddressSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.subrecord(AddressBase_1.AddressBase)
    ], AddressSublist.prototype, "addressbookaddress", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], AddressSublist.prototype, "addressid", void 0);
    __decorate([
        Sublist_1.SublistFieldType.longtext
    ], AddressSublist.prototype, "addrtext", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], AddressSublist.prototype, "attention", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], AddressSublist.prototype, "city", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
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
        Sublist_1.SublistFieldType.integernumber
    ], AddressSublist.prototype, "id", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], AddressSublist.prototype, "internalid", void 0);
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
    /**
     * Contact Base Type
     */
    class ContactBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.CONTACT; }
    }
    __decorate([
        Record_1.FieldType.email
    ], ContactBase.prototype, "altemail", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ContactBase.prototype, "assistant", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ContactBase.prototype, "assistantphone", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ContactBase.prototype, "category", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], ContactBase.prototype, "comments", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ContactBase.prototype, "company", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], ContactBase.prototype, "contactrole", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ContactBase.prototype, "contactsource", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ContactBase.prototype, "customform", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], ContactBase.prototype, "datecreated", void 0);
    __decorate([
        Record_1.FieldType.address
    ], ContactBase.prototype, "defaultaddress", void 0);
    __decorate([
        Record_1.FieldType.email
    ], ContactBase.prototype, "email", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ContactBase.prototype, "entityid", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ContactBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ContactBase.prototype, "fax", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ContactBase.prototype, "firstname", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ContactBase.prototype, "globalsubscriptionstatus", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ContactBase.prototype, "homephone", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ContactBase.prototype, "image", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ContactBase.prototype, "isinactive", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ContactBase.prototype, "isprivate", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], ContactBase.prototype, "lastmodifieddate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ContactBase.prototype, "lastname", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ContactBase.prototype, "middlename", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ContactBase.prototype, "mobilephone", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ContactBase.prototype, "officephone", void 0);
    __decorate([
        Record_1.FieldType.multiselect
    ], ContactBase.prototype, "otherrelationships", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], ContactBase.prototype, "owner", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ContactBase.prototype, "phone", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ContactBase.prototype, "phoneticname", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ContactBase.prototype, "salutation", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ContactBase.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ContactBase.prototype, "supervisor", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ContactBase.prototype, "supervisorphone", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ContactBase.prototype, "title", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ContactBase.prototype, "unsubscribe", void 0);
    __decorate([
        Record_1.FieldType.sublist(AddressSublist)
    ], ContactBase.prototype, "addressbook", void 0);
    exports.ContactBase = ContactBase;
});
