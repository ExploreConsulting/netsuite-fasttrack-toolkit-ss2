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
         fetch:
      } as any
   }

   function getFakeQueryPage(): query.Page {
      return {
         data: getFakeQueryResultSet(),
         isFirst: true,
         isLast: false,
         pagedData: getFakeQueryPageData(),
         pageRange: jest.fn().mockReturnValue({index: 0, size: 2})
      } as any
   }

   function getFakeQueryResultSet(): query.ResultSet {
      return {
         results: getFakeSearchResultArray(),
         type: ['custome'],
         column: Column,
         iterator:,
         asMappedResult: jest.fn().mockReturnValueOnce({foo: '880'})
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
      const x = nsSearchResult2obj(noLabelResult)
      expect(x).toHaveProperty('foo', '880')
      query.runSuiteQL()
   })

})

