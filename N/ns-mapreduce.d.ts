/**
 * Minimal type declarations for the NS SS2.0 map-reduce API
 */

declare interface  MapContext {
    isRestarted:boolean
    key:string
    value:string
    write(key:string, value:any)
}


declare interface  ReduceContext {
   isRestarted:boolean
   key:string
   values:string[]
   write(key:string, value:any)
}

declare interface GetInputContext {
    isRestarted:boolean
}



