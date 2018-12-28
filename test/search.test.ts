import { nsSearchResult2obj } from '../search'
import * as search from 'N/search'
import { Seq } from 'immutable'

describe('nsSearchResult2obj', function () {

   /**
    *
    * @param colname column internal id
    * @param label optional label for column
    * @param value what value (getValue()) should the result have?
    * @param text what text (getText()) value should the result have?
    */
   function getFakeSearchResult(colname, label?, value?, text?): search.Result {
      return {
         id: '1',
         getValue: jest.fn().mockReturnValueOnce(value),
         getText: jest.fn().mockReturnValueOnce(text),
         recordType: 'recordType',
         columns: [{
            name: colname,
            label: label
         }]
      }

   }

   test('defaults to column name if label is undefined', () => {

      const noLabelResult = getFakeSearchResult('foo', undefined)
      // default useLabels
      const x = nsSearchResult2obj()(noLabelResult)
      expect(x).toHaveProperty('foo')
   })

   test('uses column label by default', () => {

      const labeledResult = getFakeSearchResult('foo', 'fooLabel')
      // default useLabels
      const x = nsSearchResult2obj()(labeledResult)
      expect(x).toHaveProperty('fooLabel')
   })

   test('uses column label if useLabels is true', () => {

      const labeledResult = getFakeSearchResult('foo', 'fooLabel')
      // explicitly set useLabels = true
      const x = nsSearchResult2obj(true)(labeledResult)
      expect(x).toHaveProperty('fooLabel')
   })

   test('uses column name if useLabels is false', () => {

      const labeledResult = getFakeSearchResult('foo', 'fooLabel')
      // default useLabels
      const x = nsSearchResult2obj(false)(labeledResult)
      expect(x).toHaveProperty('foo')
      expect(x).not.toHaveProperty('fooLabel')
   })

   test('does not generate xxxText field if text value is falsey', () => {

      const labeledResult = getFakeSearchResult('foo', 'fooLabel', 'value', undefined)
      // default useLabels
      const x = nsSearchResult2obj()(labeledResult)
      expect(x).toHaveProperty('fooLabel')
      expect(x).not.toHaveProperty('fooLabelText')
   })

   test('generates xxxText field if text value truthy', () => {

      const labeledResult = getFakeSearchResult('foo', 'fooLabel', 'value', 'value text')
      // default useLabels
      const x = nsSearchResult2obj()(labeledResult)
      expect(x).toHaveProperty('fooLabel', 'value')
      expect(x).toHaveProperty('fooLabelText', 'value text')
   })

   test('two column result generates xxxText field only if text value truthy', () => {

      const labeledResult = getFakeSearchResult('foo', 'fooLabel', 'value', 'value text')
      labeledResult.columns.push({ name:'bar', label:undefined})

      // mock the second call to getValue() to return 5 (for the 'bar' property)
      const mockGetValue = labeledResult.getValue as jest.Mock
      mockGetValue.mockReturnValueOnce(5)

      // default useLabels = true
      const x = nsSearchResult2obj()(labeledResult)
      expect(x).toHaveProperty('fooLabel', 'value')
      expect(x).toHaveProperty('fooLabelText', 'value text')
      expect(x).toEqual({
         id:'1',
         fooLabel: 'value',
         fooLabelText: 'value text',
         bar: 5
         // note no 'barText' here
      })
   })

   describe('ImuutableJS behavior', () => {

      test('indirect toString() of Seq causes eager eval', function () {

         const alwaysTrue = jest.fn((val) => {
            console.log(`alwaysTrue called with value ${val}`)
            return true
         })

         Seq.of(1, 2, 3, 4, 5)
            .takeWhile(alwaysTrue)
            // subtle issue - this causes repeated eager evaluation due to serializing the 3rd argument passed
            .forEach(console.log)

         // above forEach() passes value, key, and the *entire iterable* to console.log. console.log then proceeds to
         // convert its given arguments to strings. When toString() is called on the third param (the iterable sequence)
         // it forces eager evaluation of the whole sequence because a Seq() has toString() defined to do just that.
         //
         // So each value of the sequence is first passed through takeWhile() predicate (alwaysTrue()) then the
         // entire sequence is passed through alwaysTrue() again as it's being serialized to [1,2,3,4,5]. This results
         // in 6 invocations of alwaysTrue() for each element - once as expected by the forEach() and 5 more as we
         // reserialize the entire sequence (1..5)
         // see next test for workaround
         expect(alwaysTrue).toBeCalledTimes(5 * 6)
      })

      test('how to avoid eager eval of Seq', function () {

         const alwaysTrue = jest.fn((val) => {
            console.log(`alwaysTrue called with value ${val}`)
            return true
         })

         Seq.of(1, 2, 3, 4, 5)
            .takeWhile(alwaysTrue)
            // arity-1 function will NOT cause repeated eager evaluation of the sequence 1..5
            // because console.log only proceses the value, not also receiving the key and iterable
            .forEach(x => console.log(x))

         // above forEach() passes just value to console.log
         expect(alwaysTrue).toBeCalledTimes(5)
      })
   })
});
