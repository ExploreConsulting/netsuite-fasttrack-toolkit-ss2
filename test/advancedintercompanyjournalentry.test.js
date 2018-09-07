"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AdvancedIntercompanyJournalEntryBase_1 = require("../DataAccess/AdvancedIntercompanyJournalEntryBase");
var Sublist_1 = require("../DataAccess/Sublist");
describe('advanced intercompany journal entry', function () {
    test('sublists exist', function () {
        var sut = new AdvancedIntercompanyJournalEntryBase_1.AdvancedIntercompanyJournalEntryBase();
        // should have an 'line' sublist
        expect(sut.line).toBeInstanceOf(Sublist_1.Sublist);
    });
});
