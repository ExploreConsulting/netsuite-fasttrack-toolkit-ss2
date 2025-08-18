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
 *     const input: ReduceResult = mapQueryMRResults(JSON.parse(context.value), columns)
 *     log.info('input', input)
 *     ...
 *     return 'map complete'
 *   }
 *
 * ```
 */
export function mapQueryMRResults (r: any, columns: string[] ){
   return Object.fromEntries(columns.map((key, index) => [key, r.values[index]]))
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

   // Split query by spaces and replace ? with param_1, param_2, etc.


   queryStr = queryStr.toLocaleLowerCase() as NoAsterisk<string>
   //Remove ? from query string to avoid issues with the parser
   queryStr = queryStr.replace('?','1') as NoAsterisk<string>

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
