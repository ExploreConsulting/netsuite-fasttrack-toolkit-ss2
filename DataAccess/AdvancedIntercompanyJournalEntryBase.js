/**
 * NS Base Advanced Intercompany Journal Entry record - contains definitions for fields and sublists
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
        define(["require", "exports", "./Record", "N/record", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AdvancedIntercompanyJournalEntryBase = exports.LineSublist = void 0;
    var Record_1 = require("./Record");
    var record = require("N/record");
    var Sublist_1 = require("./Sublist");
    /**
     * 'line' sublist on the Advanced Intercompany Journal Entry Record
     */
    var LineSublist = /** @class */ (function (_super) {
        __extends(LineSublist, _super);
        function LineSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LineSublist.prototype, "account", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], LineSublist.prototype, "amortizationtype", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LineSublist.prototype, "class", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], LineSublist.prototype, "credit", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], LineSublist.prototype, "debit", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LineSublist.prototype, "department", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LineSublist.prototype, "duetofromsubsidiary", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], LineSublist.prototype, "eliminate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], LineSublist.prototype, "enddate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LineSublist.prototype, "entity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], LineSublist.prototype, "entitytype", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], LineSublist.prototype, "grossamt", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], LineSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], LineSublist.prototype, "line", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LineSublist.prototype, "linebasecurrency", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], LineSublist.prototype, "linefxrate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LineSublist.prototype, "linesubsidiary", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], LineSublist.prototype, "linetotalamt", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LineSublist.prototype, "location", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], LineSublist.prototype, "memo", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], LineSublist.prototype, "residual", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LineSublist.prototype, "revenuerecognitionrule", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LineSublist.prototype, "schedule", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LineSublist.prototype, "schedulenum", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], LineSublist.prototype, "startdate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LineSublist.prototype, "tax1acct", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], LineSublist.prototype, "tax1amt", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LineSublist.prototype, "taxcode", void 0);
        __decorate([
            Sublist_1.SublistFieldType.percent
        ], LineSublist.prototype, "taxrate1", void 0);
        return LineSublist;
    }(Sublist_1.SublistLine));
    exports.LineSublist = LineSublist;
    /**
     * Base class for Advanced Intercompany Journal Entry Record
     */
    var AdvancedIntercompanyJournalEntryBase = /** @class */ (function (_super) {
        __extends(AdvancedIntercompanyJournalEntryBase, _super);
        function AdvancedIntercompanyJournalEntryBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AdvancedIntercompanyJournalEntryBase.recordType = record.Type.ADV_INTER_COMPANY_JOURNAL_ENTRY;
        __decorate([
            Record_1.FieldType.checkbox
        ], AdvancedIntercompanyJournalEntryBase.prototype, "approved", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AdvancedIntercompanyJournalEntryBase.prototype, "approvalstatus", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], AdvancedIntercompanyJournalEntryBase.prototype, "createddate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AdvancedIntercompanyJournalEntryBase.prototype, "createdfrom", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], AdvancedIntercompanyJournalEntryBase.prototype, "credittotal", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AdvancedIntercompanyJournalEntryBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AdvancedIntercompanyJournalEntryBase.prototype, "customform", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], AdvancedIntercompanyJournalEntryBase.prototype, "debittotal", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AdvancedIntercompanyJournalEntryBase.prototype, "entitynexus", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AdvancedIntercompanyJournalEntryBase.prototype, "expenseallocjournalcount", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AdvancedIntercompanyJournalEntryBase.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AdvancedIntercompanyJournalEntryBase.prototype, "isbasecurrecy", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AdvancedIntercompanyJournalEntryBase.prototype, "iscustomapproval", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], AdvancedIntercompanyJournalEntryBase.prototype, "lastmodifieddate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AdvancedIntercompanyJournalEntryBase.prototype, "memo", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AdvancedIntercompanyJournalEntryBase.prototype, "nexus", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AdvancedIntercompanyJournalEntryBase.prototype, "parentexpensealloc", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AdvancedIntercompanyJournalEntryBase.prototype, "postingperiod", void 0);
        __decorate([
            Record_1.FieldType.date
        ], AdvancedIntercompanyJournalEntryBase.prototype, "reversaldate", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], AdvancedIntercompanyJournalEntryBase.prototype, "reversaldefer", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AdvancedIntercompanyJournalEntryBase.prototype, "status", void 0);
        __decorate([
            Record_1.FieldType.select
        ], AdvancedIntercompanyJournalEntryBase.prototype, "subsidiary", void 0);
        __decorate([
            Record_1.FieldType.multiselect
        ], AdvancedIntercompanyJournalEntryBase.prototype, "tosubsidiaries", void 0);
        __decorate([
            Record_1.FieldType.date
        ], AdvancedIntercompanyJournalEntryBase.prototype, "trandate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AdvancedIntercompanyJournalEntryBase.prototype, "tranid", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], AdvancedIntercompanyJournalEntryBase.prototype, "transactionnumber", void 0);
        __decorate([
            Record_1.FieldType.sublist(LineSublist)
        ], AdvancedIntercompanyJournalEntryBase.prototype, "line", void 0);
        return AdvancedIntercompanyJournalEntryBase;
    }(Record_1.NetsuiteRecord));
    exports.AdvancedIntercompanyJournalEntryBase = AdvancedIntercompanyJournalEntryBase;
});
