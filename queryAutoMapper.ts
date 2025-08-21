import { Parser } from './transactsql.umd'

/**
 * A type guard to ensure that the query string does not contain an asterisk (*).
 */
type NoAsterisk<T extends string> = T extends `${string}*${string}`
   ? `Error: Query string cannot contain '*'`
   : T;

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
export function mapQueryMRResults <T extends object> (r: any, columns: string[] ){
   return Object.fromEntries(columns.map((key, index) => [key, r.values[index]])) as T
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
export function getColumns(queryStr: NoAsterisk<string>): string[] {
   if (queryStr.includes('*')) {
      throw new Error('getColumns() does not support * in query string')
   }

   queryStr = queryStr.toLocaleLowerCase() as NoAsterisk<string>

   // Remove ? from query string and replace with incrementing generic string to avoid issues with the parser.
   // This allows for parameters to be used in the query without affecting the column extraction.
   let counter = 0
   queryStr = queryStr.split('').map((t) => {
        if (t.startsWith('?')) {
           counter += 1
           return `param_${counter}` as NoAsterisk<string>
        }
        return t
   }).join('')

   const parser = new Parser()
   const par = parser.astify(queryStr)
   return par['columns'].map(t => {
      var colName = t.as ?? t.expr.column ?? null
      if (t.expr.type === 'function' && colName === null) {
         colName = t.expr.args.value[0].column
      } else if (t.expr.type === 'aggr_func' && colName === null) {
         colName = t.expr.args.expr.column
      }

      if(colName != null) {
         return colName as string
      }
   })
}
