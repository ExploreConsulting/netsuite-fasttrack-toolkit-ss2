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
}

export interface Column {
}

export interface ResultSet {
   getRange(options:Object):Result[]
   each(callback:() => void)
   columns:Column[]
}

export interface Search {
   save():number
   run():ResultSet
   runPaged(options:any):PagedData
}

export function create(options:{ type:string, filters?:Object[], columns?:any[], title?:string, id?:string}):Search



