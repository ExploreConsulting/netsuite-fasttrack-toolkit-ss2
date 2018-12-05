import { Sublist, SublistLine } from '../DataAccess/Sublist'

import * as record from '../__mocks__/N/record'

describe('Sublists', function () {

   class FakeSublistLine extends SublistLine {}

   const fakeRec = record.create({type:'fake'})
   let lineCount = 10
   record.getLineCount.mockImplementation(()=> lineCount)
   record.removeLine.mockImplementation( () => lineCount--)


   test('remove all lines results in zero length sublist', () => {
      const sut = new Sublist(FakeSublistLine, fakeRec, 'fakesublist')

      // initial linecount should be  10 from test setup
      expect(sut.length).toBe(10)

      sut.removeAllLines()

      expect(sut.length).toBe(0)
      expect(record.removeLine.mock.calls.length).toBe(10)
      expect(record.removeLine).lastCalledWith({ sublistId: 'fakesublist', ignoreRecalc:true, line:0})
      // uncomment to view calls to removeLine() console.log(record.removeLine.mock.calls)
   })


});
