import {AdvancedIntercompanyJournalEntryBase,LineSublist} from "../DataAccess/AdvancedIntercompanyJournalEntryBase";
import {Sublist} from "../DataAccess/Sublist"


describe('advanced intercompany journal entry', () => {

   test('sublists exist', () =>{
   let sut = new AdvancedIntercompanyJournalEntryBase()

   // should have an 'line' sublist
   expect(sut.line).toBeInstanceOf(Sublist)
   })
})
