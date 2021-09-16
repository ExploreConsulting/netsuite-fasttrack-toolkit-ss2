/**
 * NS Account record - contains definitions for most of the built in fields
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
        define(["require", "exports", "./Record", "N/record", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AccountBase = exports.LocalizationSublist = void 0;
    var Record_1 = require("./Record");
    var record = require("N/record");
    var Sublist_1 = require("./Sublist");
    /**
     * Localization sublist {localizations}
     */
    var LocalizationSublist = /** @class */ (function (_super) {
        __extends(LocalizationSublist, _super);
        function LocalizationSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LocalizationSublist.prototype, "accountingcontext", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], LocalizationSublist.prototype, "acctname", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], LocalizationSublist.prototype, "acctnumber", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], LocalizationSublist.prototype, "legalname", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LocalizationSublist.prototype, "locale", void 0);
        return LocalizationSublist;
    }(Sublist_1.SublistLine));
    exports.LocalizationSublist = LocalizationSublist;
    /**
     * NetSuite Account {account}
     */
    var AccountBase = /** @class */ (function (_super) {
        __extends(AccountBase, _super);
        function AccountBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AccountBase.recordType = function () {
            return record.Type.ACCOUNT;
        };
        __decorate([
            Record_1.FieldType.freeformtext
        ], AccountBase.prototype, "acctname", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AccountBase.prototype, "accountnumber", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AccountBase.prototype, "accttype", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AccountBase.prototype, "accttype2", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AccountBase.prototype, "billableexpensesacct", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AccountBase.prototype, "cashflowrate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AccountBase.prototype, "category1099misc", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AccountBase.prototype, "class", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AccountBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AccountBase.prototype, "deferralacct", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AccountBase.prototype, "department", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AccountBase.prototype, "description", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AccountBase.prototype, "eliminate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AccountBase.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AccountBase.prototype, "generalrate", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AccountBase.prototype, "includechildren", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AccountBase.prototype, "inventory", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AccountBase.prototype, "isinactive", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], AccountBase.prototype, "legalname", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AccountBase.prototype, "location", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AccountBase.prototype, "openingbalance", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AccountBase.prototype, "parent", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AccountBase.prototype, "restricttoaccountingbook", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AccountBase.prototype, "revalue", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AccountBase.prototype, "subsidiary", void 0);
        __decorate([
            Record_1.FieldType.date
        ], AccountBase.prototype, "trandate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AccountBase.prototype, "unit", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AccountBase.prototype, "unitstype", void 0);
        __decorate([
            Record_1.FieldType.sublist(LocalizationSublist)
        ], AccountBase.prototype, "localizations", void 0);
        return AccountBase;
    }(Record_1.NetsuiteRecord));
    exports.AccountBase = AccountBase;
});
