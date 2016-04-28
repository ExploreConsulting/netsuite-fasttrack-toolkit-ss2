/**
 * Minimal type declarations for the NS SS2.0 map-reduce API
 */

interface  MapContext {
    isRestarted:boolean
    key:string
    value:string
    write(key:string, value:any)
}


interface  ReduceContext {
   isRestarted:boolean
   key:string
   values:string[]
   write(key:string, value:any)
}

interface GetInputContext {
    isRestarted:boolean
}



