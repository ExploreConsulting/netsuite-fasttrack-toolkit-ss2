import * as query from 'N/query'
import {LazyQuery, nsQueryResult2obj, getColumns, mapQueryMRResults } from "../query";


describe('nsQueryResult2obj', function () {

   function getFakeSearchResult(): query.Result {
      return {
         value: [
            '880',
         ],
         asMap: jest.fn().mockReturnValueOnce({foo: '880'})
      } as any
   }
   function getFakeSearchResultMR() {
      return {
         value:
            {"types": ["INTEGER"], "values": [880]}
      } as any
   }

   test('defaults to column name if label is undefined', () => {

      const noLabelResult = getFakeSearchResult()
      // default useLabels
      const x = nsQueryResult2obj(noLabelResult)
      expect(x).toHaveProperty('foo', '880')
   })

   test ('Build array of column header names', () => {
      const queryStr = 'SELECT id as foo, trandate FROM transaction WHERE id = 1000'
      const x = getColumns(queryStr)
      expect(x).toEqual(['foo', 'trandate'])
   })

   test ('Build object for search Results with labels', () => {
      const noLabelResult = getFakeSearchResultMR()
      const queryStr = 'SELECT id as foo FROM transaction WHERE id = 1000'
      const col = getColumns(queryStr)
      const x = mapQueryMRResults(noLabelResult.value, col)
      expect(x).toHaveProperty('foo', 880)
   })

   test ('Build object for search Results with TOP x', () => {
      const noLabelResult = getFakeSearchResultMR()
      const queryStr = 'SELECT TOP 1 id FROM transaction WHERE id = 1000'
      const col = getColumns(queryStr)
      const x = mapQueryMRResults(noLabelResult.value, col)
      expect(x).toHaveProperty('foo', 880)
   })
})

