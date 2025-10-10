(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../queryAutoMapper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const queryAutoMapper_1 = require("../queryAutoMapper");
    describe('autoMap', function () {
        function getFakeSearchResultMRLong() {
            return {
                value: { "types": ["INTEGER", "STRING", "DATE"], "values": [880, 'jim', '5/5/35', 'date', 'otherdate', 20] }
            };
        }
        test('Build array of column header names', () => {
            const queryStr = 'SELECT id as foo, trandate, ?, ? as testingQuestion FROM transaction WHERE id = ?';
            const x = (0, queryAutoMapper_1.getColumns)(queryStr);
            expect(x).toEqual(['foo', 'trandate', 'param_1', 'testingquestion']);
        });
        test('Build array of column header names Exclude comments', () => {
            const queryStr = `SELECT TOP 1 
                                t.id, 
                                t.trandate as foo,
                               (SELECT TOP 1 c.id FROM customer as c WHERE c.id = t.entity) as bar,
                               TO_CHAR(t.trandate, 'MM/DD/YYYY'),
                               TO_CHAR(t.trandate, 'MM/DD/YYYY')                            as test,
                               COUNT(t.runtest) as lastcheck
                                --test
                        FROM transaction as t
                        WHERE id = 1000 AND (SELECT TOP 1 c.id FROM customer as c WHERE c.id = t.entity ) IS NOT NULL`;
            const x = (0, queryAutoMapper_1.getColumns)(queryStr);
            expect(x).toEqual(['id', 'foo', 'bar', 'trandate', 'test', 'lastcheck']);
        });
        test('Build object for search Results group operations, alias, multiple elements', () => {
            const noLabelResult = getFakeSearchResultMRLong();
            const queryStr = `SELECT TOP 1 t.id, t.trandate as foo,
                               (SELECT TOP 1 c.id FROM customer as c WHERE c.id = t.entity) as bar,
                               TO_CHAR(t.trandate, 'MM/DD/YYYY'),
                               TO_CHAR(t.trandate, 'MM/DD/YYYY')                            as test,
                               COUNT(t.runtest) as lastcheck
                        FROM transaction as t
                        WHERE id = 1000 AND (SELECT TOP 1 c.id FROM customer as c WHERE c.id = t.entity ) IS NOT NULL`;
            const col = (0, queryAutoMapper_1.getColumns)(queryStr);
            const x = (0, queryAutoMapper_1.mapQueryMRResults)(noLabelResult.value, col);
            expect(col).toEqual(['id', 'foo', 'bar', 'trandate', 'test', 'lastcheck']);
            expect(x).toHaveProperty('id', 880);
            expect(x).toHaveProperty('foo', 'jim');
            expect(x).toHaveProperty('bar', '5/5/35');
            expect(x).toHaveProperty('trandate', 'date');
            expect(x).toHaveProperty('test', 'otherdate');
            expect(x).toHaveProperty('lastcheck', 20);
        });
        test('Build object for SQL with CASE', () => {
            const noLabelResult = getFakeSearchResultMRLong();
            const queryStr = `SELECT TOP 1 t.id, 
                                     CASE 
                                         WHEN t.trandate > SYSDATE - 30 THEN 'Recent'
                                         WHEN t.trandate > SYSDATE - 90 THEN 'Moderate'
                                         ELSE 'Old'
                                     END as foo,
                               (SELECT TOP 1 c.id FROM customer as c WHERE c.id = t.entity) as bar,
                               TO_CHAR(t.trandate, 'MM/DD/YYYY'),
                               TO_CHAR(t.trandate, 'MM/DD/YYYY')                            as test,
                               COUNT(t.runtest) as lastcheck
                        FROM transaction as t
                        WHERE id = 1000 AND (SELECT TOP 1 c.id FROM customer as c WHERE c.id = t.entity ) IS NOT NULL`;
            const col = (0, queryAutoMapper_1.getColumns)(queryStr);
            const x = (0, queryAutoMapper_1.mapQueryMRResults)(noLabelResult.value, col);
            expect(col).toEqual(['id', 'foo', 'bar', 'trandate', 'test', 'lastcheck']);
            expect(x).toHaveProperty('id', 880);
            expect(x).toHaveProperty('foo', 'jim');
            expect(x).toHaveProperty('bar', '5/5/35');
            expect(x).toHaveProperty('trandate', 'date');
            expect(x).toHaveProperty('test', 'otherdate');
            expect(x).toHaveProperty('lastcheck', 20);
        });
    });
});
