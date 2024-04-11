import * as query from 'N/query'
import {Seq} from 'immutable'
import {LazyQuery} from "../query";

describe('nsSearchResult2obj', function () {

   /**
    *
    * @param colname column internal id
    * @param label optional label for column
    * @param value what value (getValue()) should the result have?
    * @param text what text (getText()) value should the result have?
    */
   function getFakeSearchResult(): query.Result {
      return {
         "columns": null,
         "types": ["INTEGER"],
         "results": [{"values": [880]}],
         "metadataProvider": "SUITE_QL"
      } as any

   }

   test('defaults to column name if label is undefined', () => {

      const noLabelResult = getFakeSearchResult()
      // default useLabels
      const x = Seq(LazyQuery.from(
         `SELECT * from Transaction WHERE id = ?`,
         [880],
         50
      ))
      expect(x).toHaveProperty('foo')
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
})

