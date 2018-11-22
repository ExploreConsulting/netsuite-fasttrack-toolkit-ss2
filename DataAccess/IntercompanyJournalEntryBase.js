/**
 * NS Base intercompany journal entry record (intercompanyjournalentry) - contains definitions for fields and sublists
 */
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
    var record = require("N/record");
    var JournalEntryBase_1 = require("./JournalEntryBase");
    var Sublist_1 = require("./Sublist");
    var Record_1 = require("./Record");
    /**
     * Intercompany Journal Entry Line (line) sublist
     */
    var LineSublist = /** @class */ (function (_super) {
        __extends(LineSublist, _super);
        function LineSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LineSublist.prototype, "linesubsidiary", void 0);
        return LineSublist;
    }(JournalEntryBase_1.LineSublist));
    exports.LineSublist = LineSublist;
    /**
     * defines an Inter-company journal entry (basically identical to a normal journal entry?)
     */
    var IntercompanyJournalEntryBase = /** @class */ (function (_super) {
        __extends(IntercompanyJournalEntryBase, _super);
        function IntercompanyJournalEntryBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IntercompanyJournalEntryBase.recordType = record.Type.INTER_COMPANY_JOURNAL_ENTRY;
        __decorate([
            Record_1.FieldType.sublist(LineSublist)
        ], IntercompanyJournalEntryBase.prototype, "line", void 0);
        return IntercompanyJournalEntryBase;
    }(JournalEntryBase_1.JournalEntryBase));
    exports.IntercompanyJournalEntryBase = IntercompanyJournalEntryBase;
});
