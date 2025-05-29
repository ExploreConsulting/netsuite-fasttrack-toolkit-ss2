import * as query from 'N/query'
import {LazyQuery, nsQueryResult2obj, getColumns, mapQueryMRResults } from "../query";
import * as console from "node:console";


describe('nsQueryResult2obj', function () {

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
      const x = nsQueryResult2obj(noLabelResult)
      expect(x).toHaveProperty('foo', '880')
   })
})

describe('autoMap', function () {

   function getFakeSearchResultMRLong() {
      return {
         value:
            {"types": ["INTEGER", "STRING", "DATE"], "values": [880, 'jim', '5/5/35', 'date', 'otherdate', 20]}
      } as any
   }

   test ('Build array of column header names', () => {
      const queryStr = 'SELECT id as foo, trandate FROM transaction WHERE id = ?'
      const x = getColumns(queryStr)
      expect(x).toEqual(['foo', 'trandate'])
   })

   test ('Build array of column header names Exclude comments', () => {
      const queryStr = `SELECT TOP 1 
                                t.id, 
                                t.trandate as foo,
                               (SELECT TOP 1 c.id FROM customer as c WHERE c.id = t.entity) as bar,
                               TO_CHAR(t.trandate, 'MM/DD/YYYY'),
                               TO_CHAR(t.trandate, 'MM/DD/YYYY')                            as test,
                               COUNT(t.runtest) as lastcheck
                                --test
                        FROM transaction as t
                        WHERE id = 1000 AND (SELECT TOP 1 c.id FROM customer as c WHERE c.id = t.entity ) IS NOT NULL`
      const x = getColumns(queryStr)
      expect(x).toEqual(['id', 'foo', 'bar', 'trandate', 'test', 'lastcheck'])
   })

   test ('Build object for search Results group operations, alias, multiple elements', () => {
      const noLabelResult = getFakeSearchResultMRLong()
      const queryStr = `SELECT TOP 1 t.id, t.trandate as foo,
                               (SELECT TOP 1 c.id FROM customer as c WHERE c.id = t.entity) as bar,
                               TO_CHAR(t.trandate, 'MM/DD/YYYY'),
                               TO_CHAR(t.trandate, 'MM/DD/YYYY')                            as test,
                               COUNT(t.runtest) as lastcheck
                        FROM transaction as t
                        WHERE id = 1000 AND (SELECT TOP 1 c.id FROM customer as c WHERE c.id = t.entity ) IS NOT NULL`
      const col  = getColumns(queryStr)
      const x = mapQueryMRResults(noLabelResult.value, col)
      expect(col).toEqual(['id', 'foo', 'bar', 'trandate', 'test', 'lastcheck'])
      expect(x).toHaveProperty('id', 880)
      expect(x).toHaveProperty('foo', 'jim')
      expect(x).toHaveProperty('bar', '5/5/35')
      expect(x).toHaveProperty('trandate', 'date')
      expect(x).toHaveProperty('test', 'otherdate')
      expect(x).toHaveProperty('lastcheck', 20)
   })
})



