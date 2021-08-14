(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../DataAccess/AdvancedIntercompanyJournalEntryBase", "../DataAccess/Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const AdvancedIntercompanyJournalEntryBase_1 = require("../DataAccess/AdvancedIntercompanyJournalEntryBase");
    const Sublist_1 = require("../DataAccess/Sublist");
    describe('advanced intercompany journal entry', () => {
        test('sublists exist', () => {
            let sut = new AdvancedIntercompanyJournalEntryBase_1.AdvancedIntercompanyJournalEntryBase();
            // should have an 'line' sublist
            expect(sut.line).toBeInstanceOf(Sublist_1.Sublist);
        });
    });
});
