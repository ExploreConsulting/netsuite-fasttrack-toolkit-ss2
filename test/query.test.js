(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../query"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const query_1 = require("../query");
    describe('nsQueryResult2obj', function () {
        function getFakeSearchResult() {
            return {
                value: [
                    '880',
                ],
                asMap: jest.fn().mockReturnValueOnce({ foo: '880' })
            };
        }
        function getFakeSearchResultMR() {
            return {
                value: { "types": ["INTEGER"], "values": [880] }
            };
        }
        test('defaults to column name if label is undefined', () => {
            const noLabelResult = getFakeSearchResult();
            // default useLabels
            const x = (0, query_1.nsQueryResult2obj)(noLabelResult);
            expect(x).toHaveProperty('foo', '880');
        });
        test('Build array of column header names', () => {
            const queryStr = 'SELECT id as foo, trandate FROM transaction WHERE id = 1000';
            const x = (0, query_1.getColumns)(queryStr);
            expect(x).toEqual(['foo', 'trandate']);
        });
        test('Build object for search Results with labels', () => {
            const noLabelResult = getFakeSearchResultMR();
            const queryStr = 'SELECT id as foo FROM transaction WHERE id = 1000';
            const x = (0, query_1.mapQueryMRResults)(noLabelResult.value.values, queryStr);
            expect(x).toHaveProperty('foo', 880);
        });
    });
});
