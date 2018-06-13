/**
 * NS Base jounral entry record - contains definitions for fields and sublists
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
define(["require", "exports", "./Record", "N/record", "./Sublist"], function (require, exports, Record_1, record, Sublist_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 'line' sublist on the standard Journal Entry Record
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
            Sublist_1.SublistFieldType.currency
        ], LineSublist.prototype, "credit", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], LineSublist.prototype, "credittax", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], LineSublist.prototype, "debit", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], LineSublist.prototype, "debittax", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LineSublist.prototype, "department", void 0);
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
            Sublist_1.SublistFieldType.select
        ], LineSublist.prototype, "location", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], LineSublist.prototype, "memo", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LineSublist.prototype, "subsidiary", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], LineSublist.prototype, "totalamount", void 0);
        return LineSublist;
    }(Sublist_1.SublistLine));
    exports.LineSublist = LineSublist;
    /**
     * Base class for Journal Entry Record
     */
    var JournalEntryBase = /** @class */ (function (_super) {
        __extends(JournalEntryBase, _super);
        function JournalEntryBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JournalEntryBase.recordType = record.Type.JOURNAL_ENTRY;
        __decorate([
            Record_1.FieldType.select
        ], JournalEntryBase.prototype, "accountingbook", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], JournalEntryBase.prototype, "approved", void 0);
        __decorate([
            Record_1.FieldType.select
        ], JournalEntryBase.prototype, "class", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], JournalEntryBase.prototype, "createddate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], JournalEntryBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.select
        ], JournalEntryBase.prototype, "department", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], JournalEntryBase.prototype, "exchangerate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], JournalEntryBase.prototype, "memo", void 0);
        __decorate([
            Record_1.FieldType.date
        ], JournalEntryBase.prototype, "reversaldate", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], JournalEntryBase.prototype, "reversaldefer", void 0);
        __decorate([
            Record_1.FieldType.select
        ], JournalEntryBase.prototype, "subsidiary", void 0);
        __decorate([
            Record_1.FieldType.date
        ], JournalEntryBase.prototype, "trandate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], JournalEntryBase.prototype, "tranid", void 0);
        __decorate([
            Record_1.FieldType.sublist(LineSublist)
        ], JournalEntryBase.prototype, "line", void 0);
        return JournalEntryBase;
    }(Record_1.NetsuiteRecord));
    exports.JournalEntryBase = JournalEntryBase;
});
