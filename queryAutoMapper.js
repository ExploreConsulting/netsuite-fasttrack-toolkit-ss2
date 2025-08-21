(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./transactsql.umd"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mapQueryMRResults = mapQueryMRResults;
    exports.getColumns = getColumns;
    const transactsql_umd_1 = require("./transactsql.umd");
    /**
     * Converts a query result to a plain object using the column names as keys.
     *
     * @param r
     * @param columns
     *
     * @example
     *
     * ```TypeScript
     *
     * export function map (context: EntryPoints.MapReduce.mapContext) {
     *     const input = mapQueryMRResults<{foo: string, bar: number}>(JSON.parse(context.value), columns)
     *     log.info('input', input)
     *     ...
     *     return 'map complete'
     *   }
     *
     * ```
     */
    function mapQueryMRResults(r, columns) {
        return Object.fromEntries(columns.map((key, index) => [key, r.values[index]]));
    }
    /**
     * Extracts the column names from a SuiteQL query string.
     *
     * @param queryStr
     *
     * @example
     *
     * ```TypeScript
     *
     * namespace X {
     *    const queryStr = 'SELECT id as foo, trandate FROM transaction WHERE id = ?'
     *    const columns = getColumns(queryStr)
     *
     *    export function getInputData () {
     *     }...
     * }
     *
     * ```
     */
    function getColumns(queryStr) {
        if (queryStr.includes('*')) {
            throw new Error('getColumns() does not support * in query string');
        }
        queryStr = queryStr.toLocaleLowerCase();
        // Remove ? from query string and replace with incrementing generic string to avoid issues with the parser.
        // This allows for parameters to be used in the query without affecting the column extraction.
        let counter = 0;
        queryStr = queryStr.split('').map((t) => {
            if (t.startsWith('?')) {
                counter += 1;
                return `param_${counter}`;
            }
            return t;
        }).join('');
        const parser = new transactsql_umd_1.Parser();
        const par = parser.astify(queryStr);
        return par['columns'].map(t => {
            var _a, _b;
            var colName = (_b = (_a = t.as) !== null && _a !== void 0 ? _a : t.expr.column) !== null && _b !== void 0 ? _b : null;
            if (t.expr.type === 'function' && colName === null) {
                colName = t.expr.args.value[0].column;
            }
            else if (t.expr.type === 'aggr_func' && colName === null) {
                colName = t.expr.args.expr.column;
            }
            if (colName != null) {
                return colName;
            }
        });
    }
});
