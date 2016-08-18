/**
 * Minimal type declarations for the N/search NetSuite module
 */


export interface PagedData {

}

export interface Result {
   getValue(options:Object)
   getText(options:Object)
   recordType:string
   id:string
   columns:Column[]
   values:any
}

export interface Column {
}

export interface ResultSet {
   getRange(options:{
      // Index number of the first result to return, inclusive.
      start:number,
      //Index number of the last result to return, exclusive.
      end:number}):Result[]
   each(callback:() => void)
   columns:Column[]
}

export interface Search {
   save():number
   run():ResultSet
   runPaged(options:any):PagedData
}

/**
 * creates a new search
 * @param options
 */
export function create(options:{ type:string, filters?:Object[], columns?:any[], title?:string, id?:string}):Search

/**
 * Performs a search for one or more body fields on a record.
 * @param options
 * @param options.type netsuite record type. Can use search.Type enum
 * @param options.id internal id of the record to lookup fields on
 * @param options.columns column name(s) to lookup values for, supports dot(.) notation for joins e.g. foo.bar
 */
export function lookupFields(options:{ type:string, id:string, columns:string | string[] }):any

