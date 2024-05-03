import * as query from 'N/query'
import {LazyQuery, nsSearchResult2obj} from "../query";


describe('nsSearchResult2obj', function () {

   function getFakeSearchResult(): query.Result {
      return {
         value: [
            '880',
         ],
         asMap: jest.fn().mockReturnValueOnce({foo: '880'})
      } as any
   }

   test('defaults to column name if label is undefined', () => {

      const noLabelResult = getFakeSearchResult()
      // default useLabels
      const x = nsSearchResult2obj(noLabelResult)
      expect(x).toHaveProperty('foo', '880')
   })
})

