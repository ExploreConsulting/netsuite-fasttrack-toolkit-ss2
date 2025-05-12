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

   function getFakeSearchResultMR() {
      return {
         value:
            {"types": ["INTEGER"], "values": [880]}
      } as any
   }

   function getFakeSearchResultMRLong() {
      return {
         value:
            {"types": ["INTEGER", "STRING", "DATE"], "values": [880, 'jim', '5/5/35', 'date', 'otherdate', 20]}
      } as any
   }

   test ('Build array of column header names', () => {
      const queryStr = 'SELECT id as foo, trandate FROM transaction WHERE id = 1000'
      const x = getColumns(queryStr)
      expect(x).toEqual(['foo', 'trandate'])
   })

   test ('Build array of column header names with function', () => {
      const queryStr = `SELECT id as foo, TO_CHAR( t.TranDate, 'YYYY-MM-DD HH:MI:SS' ), TO_CHAR( test, 'YYYY-MM-DD HH:MI:SS' ) as bar FROM transaction WHERE id = 1000`
      const x = getColumns(queryStr)
      expect(x).toEqual(['foo', 'trandate', 'bar'])
   })

   test ('Build array of column header names with select in select', () => {
      const queryStr = `SELECT id as foo, (SELECT id from client where 1 = 1) as bar FROM transaction WHERE id = 1000`
      const x = getColumns(queryStr)
      expect(x).toEqual(['foo', 'bar'])
   })

   test ('Build array of column header names with select *', () => {
      const queryStr = `SELECT * FROM transaction WHERE id = 1000`
      const x = getColumns(queryStr)
      expect(x).toEqual(['foo', 'bar'])
   })

   test ('Build array of column header names Exclude comments', () => {
      const queryStr = `SELECT id as foo, 
                        trandate
                        -- test
                        /*other test*/
                        FROM transaction
                        WHERE id = 1000`
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
      expect(x).toHaveProperty('id', 880)
   })

   test ('Build object for search Results with TOP x and t', () => {
      const noLabelResult = getFakeSearchResultMR()
      const queryStr = 'SELECT t.id FROM transaction WHERE id = 1000'
      const col = getColumns(queryStr)
      const x = mapQueryMRResults(noLabelResult.value, col)
      expect(x).toHaveProperty('id', 880)
   })

   test ('Build object for search Results group operations', () => {
      const noLabelResult = getFakeSearchResultMR()
      const queryStr = 'SELECT COUNT(t.id) FROM transaction WHERE id = 1000'
      const col  = getColumns(queryStr)
      const x = mapQueryMRResults(noLabelResult.value, col)
      expect(x).toHaveProperty('id', 880)
   })

   test ('Build object for search Results group operations, alias, multiple elements', () => {
      const noLabelResult = getFakeSearchResultMRLong()
      const queryStr = `SELECT COUNT(t.id), MAX(t.name) as foo, t.bar, TO_CHAR(trandate, 'MM/YYYY'), TO_CHAR(trandate, 'MM/YYYY') as test, (SELECT id from cleint where id = 1) as lastcheck FROM transaction WHERE id = 1000 AND (SELECT  id from cleint where id = 1) is not null`
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



