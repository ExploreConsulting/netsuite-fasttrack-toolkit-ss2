import * as query from 'N/query'
import {Seq} from 'immutable'
import {LazyQuery, nsSearchResult2obj} from "../query";
import {values} from "lodash";

describe('nsSearchResult2obj', function () {

   /**
    *
    * @param colname column internal id
    * @param label optional label for column
    * @param value what value (getValue()) should the result have?
    * @param text what text (getText()) value should the result have?
    */

   const Column = {
      prototype: null,
      component: null,
      fieldId: 'foo',
      formula: null,
      type: 'bar',
      aggregate: null,
      groupBy: null,
      label: null,
      alias: null,
      context: null
   }

   function getFakeSearchResult(): query.Result {
      return {
         value: [
            '880',
         ],
         asMap: jest.fn().mockReturnValueOnce({foo: '880'})
      } as any
   }

   function getFakeQueryPageData(): query.PagedData {
      return {
         count: 3,
         pageRange: 1,
         pageSize: 1,
         iterator:,
         fetch: jest.fn().mockReturnValue(getFakeQueryPage())
      } as any
   }

   function getFakeQueryPage(): query.Page {
      return {
         data: jest.fn().mockReturnValue(),
         isFirst: true,
         isLast: false,
         pagedData:,
         pageRange:
      } as any
   }

   function getFakeQueryResultSet(): query.ResultSet {
      return {
         results: getFakeSearchResultArray(),
         type: ['customer'],
         column: Column,
         iterator:,
         asMappedResult()
      }
   }

   function getFakeSearchResultArray(): query.Result[] {
      return [{
         value: [
            '880',
         ],
         asMap: jest.fn().mockReturnValueOnce({foo: '880'})
      },
         {
            value: [
               '990',
            ],
            asMap: jest.fn().mockReturnValueOnce({foo: '990'})
         }
      ] as any[]
   }

   test('defaults to column name if label is undefined', () => {

      const noLabelResult = getFakeSearchResult()
      // default useLabels
      const x = nsSearchResult2obj(noLabelResult)
      expect(x).toHaveProperty('foo', '880')
   })
   test('defaults to column name if label is undefined', () => {

      const noLabelResult = getFakeQueryPageData()
      // default useLabels
      const temp = noLabelResult.fetch(1)
      // const x = nsSearchResult2obj(noLabelResult)
      expect(x).toHaveProperty('foo', '880')
   })

})
describe('ImmutableJS behavior', () => {


   test('indirect toString() of Seq causes eager eval', function () {
      if (process.version > 'v10') {
         // this behavior seems to be fixed in newer versions of node because they
         // changed the default depth for object serialization on console
         // e.g. https://github.com/nodejs/node/pull/24326
         return
      }
      const alwaysTrue = jest.fn((val) => {
         console.log(`alwaysTrue called with value ${val}`)
         return true
      })

      Seq([1, 2, 3, 4, 5])
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
   test('behavior of groupBy', function () {

      const taker = jest.fn((val) => {
         console.log(`taker called with value ${val}, length ${val.size}`)
         return val.size === 1
      })

      const sideEffect = jest.fn((val) => {
         console.log(`side effect called with value ${val}`)
      })


      Seq([1, 2, 3, 4, 4, 5, 5])
         // groupBy returns a keyed sequence (<key, value>) that for some reason I don't understand
         // invokes the .map() *eagerly* (though we do know groupBy() itself must be eager)
         .groupBy(x => x)
         .takeWhile(taker)
         .forEach(x => sideEffect(x))

      // see the console log here - all calls to take() happen before any calls to sideEffect()

      expect(taker).toBeCalledTimes(4)
      // expect our side effect to only be called 3 times due to .takeWhile()
      expect(sideEffect).toBeCalledTimes(3)

      console.log('---- BETTER/EXPECTED BEHAVIOR ---')
      Seq([1, 2, 3, 4, 4, 5, 5])
         // groupBy returns a keyed sequence (<key, value>) that for some reason I don't understand
         // invokes the .map() *eagerly* (though we do know groupBy() itself must be eager)
         .groupBy(x => x)
         .valueSeq() // converting to a valueSeq Here gets us back into lazy eval
         .takeWhile(taker)
         .forEach(x => sideEffect(x))

      // see console output from above - now take is called then sideEffect as expected,
      // once per each passing value.

   })
})

