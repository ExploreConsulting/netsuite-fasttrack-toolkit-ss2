/**
 * NS Base intercompany journal entry record (intercompanyjournalentry) - contains definitions for fields and sublists
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
        define(["require", "exports", "N/record", "./JournalEntryBase", "./Sublist", "./Record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IntercompanyJournalEntryBase = exports.LineSublist = void 0;
    const record = require("N/record");
    const JournalEntryBase_1 = require("./JournalEntryBase");
    const Sublist_1 = require("./Sublist");
    const Record_1 = require("./Record");
    /**
     * Intercompany Journal Entry Line (line) sublist
     */
    class LineSublist extends JournalEntryBase_1.LineSublist {
    }
    exports.LineSublist = LineSublist;
    __decorate([
        Sublist_1.SublistFieldType.select
    ], LineSublist.prototype, "linesubsidiary", void 0);
    /**
     * defines an Inter-company journal entry (basically identical to a normal journal entry?)
     */
    class IntercompanyJournalEntryBase extends JournalEntryBase_1.JournalEntryBase {
        static recordType() { return record.Type.INTER_COMPANY_JOURNAL_ENTRY; }
    }
    exports.IntercompanyJournalEntryBase = IntercompanyJournalEntryBase;
    __decorate([
        Record_1.FieldType.sublist(LineSublist)
    ], IntercompanyJournalEntryBase.prototype, "line", void 0);
});
