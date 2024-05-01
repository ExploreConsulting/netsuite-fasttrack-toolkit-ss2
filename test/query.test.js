(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "N/query", "../query"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const query = require("N/query");
    const query_1 = require("../query");
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
        };
        function getFakeSearchResult() {
            return {
                value: [
                    '880',
                ],
                asMap: jest.fn().mockReturnValueOnce({ foo: '880' })
            };
        }
        function getFakeQueryPageData() {
            return {
                count: 3,
                pageRange: 1,
                pageSize: 1,
                iterator: ,
                fetch: 
            };
        }
        function getFakeQueryPage() {
            return {
                data: getFakeQueryResultSet(),
                isFirst: true,
                isLast: false,
                pagedData: getFakeQueryPageData(),
                pageRange: jest.fn().mockReturnValue({ index: 0, size: 2 })
            };
        }
        function getFakeQueryResultSet() {
            return {
                results: getFakeSearchResultArray(),
                type: ['custome'],
                column: Column,
                iterator: ,
                asMappedResult: jest.fn().mockReturnValueOnce({ foo: '880' })
            };
        }
        function getFakeSearchResultArray() {
            return [{
                    value: [
                        '880',
                    ],
                    asMap: jest.fn().mockReturnValueOnce({ foo: '880' })
                },
                {
                    value: [
                        '990',
                    ],
                    asMap: jest.fn().mockReturnValueOnce({ foo: '990' })
                }
            ];
        }
        test('defaults to column name if label is undefined', () => {
            const noLabelResult = getFakeSearchResult();
            // default useLabels
            const x = (0, query_1.nsSearchResult2obj)(noLabelResult);
            expect(x).toHaveProperty('foo', '880');
        });
        test('defaults to column name if label is undefined', () => {
            const noLabelResult = getFakeQueryPageData();
            // default useLabels
            const temp = noLabelResult.fetch(1);
            const x = (0, query_1.nsSearchResult2obj)(noLabelResult);
            expect(x).toHaveProperty('foo', '880');
            query.runSuiteQL();
        });
    });
});
