import {Sublist, SublistFieldType, SublistLine} from '../DataAccess/Sublist'

import * as record from '../__mocks__/N/record'

describe('Sublists', function () {

   class FakeSublistLine extends SublistLine {}

   class SublistWithTextField extends SublistLine {
      @SublistFieldType.freeformtext
      fooText: string

      @SublistFieldType.checkbox
      anotherfield: boolean
   }

   test('remove all lines results in zero length sublist', () => {

      const fakeRec = record.create({type: 'fake'})
      let lineCount = 10
      record.getLineCount.mockImplementation(() => lineCount)
      record.removeLine.mockImplementation(() => lineCount--)

      const sut = new Sublist(FakeSublistLine, fakeRec, 'fakesublist')

      // initial linecount should be  10 from test setup
      expect(sut.length).toBe(10)

      sut.removeAllLines()

      expect(sut.length).toBe(0)
      expect(record.removeLine.mock.calls.length).toBe(10)
      expect(record.removeLine).lastCalledWith({sublistId: 'fakesublist', ignoreRecalc: true, line: 0})
      // uncomment to view calls to removeLine() console.log(record.removeLine.mock.calls)
   })

   test('remove all lines on an already empty sublist', () => {
      const fakeRec = record.create({type: 'fake'})

      let lineCount = 0 // start with an empty sublist
      record.getLineCount.mockImplementation(() => lineCount)
      record.removeLine.mockImplementation(() => lineCount--)

      const sut = new Sublist(FakeSublistLine, fakeRec, 'fakesublist')

      sut.removeAllLines()

      expect(sut.length).toBe(0)
      expect(record.removeLine).not.toBeCalled()
      // uncomment to view calls to removeLine() console.log(record.removeLine.mock.calls)
   }),

      test('getText() on field', () => {
         const fakeRec = record.create({type: 'fake'})
         record.getSublistText.mockReturnValue('some text')
         record.getSublistValue.mockImplementation(() => { throw new Error() })

         const sut = new SublistWithTextField('fakesublist', fakeRec, 0)
         sut.fooText

         expect(record.getSublistText).toBeCalledTimes(1)
         expect(record.getValue).not.toHaveBeenCalled()

      }),

      test('setText() on field', () => {
         const fakeRec = record.create({type: 'fake'})
         record.getSublistText.mockReturnValue('some text')
         record.getSublistValue.mockImplementation(() => { throw new Error() })

         const sut = new SublistWithTextField('fakesublist', fakeRec, 0)
         sut.fooText = 'hello world'

         expect(record.setSublistText).toBeCalledWith({
               "fieldId": "foo",
               "line": 0,
               "sublistId": "fakesublist",
               "text": "hello world"
            }
         )
         expect(record.getValue).not.toHaveBeenCalled()

      })
});
