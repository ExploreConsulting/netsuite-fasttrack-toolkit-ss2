/**
 * Minimal type declarations for the N/record NetSuite module
 */

interface createOptions {
   type:Type,
   isDynamic?:boolean
   defaultValue?:Object
}



export class Record {
   type:string
   id:number

   cancelLine(o:any) :void

   commitLine(o:any) : void

   findMatrixSublistLinewithValue(o:any) : void
   findSublistLineWithValue(o:any)
   

   /**
    * gets a field value
    * @param string
     */
   getValue({ fieldId: string}) : any
   /**
    * sets a field value
    *  
    */
   setValue({ fieldId:string, value:any, ignoreFieldChange:boolean}): void

   save(options?:any):number

   "delete"(options:any)

}
/**
 * loads a netsuite record
 * @param options
 */
export function load(options:{ type:Type, id:number, isDynamic?:boolean, defaultValue?:Object}):Record

/**
 * creates a new netsuite record
 */
export function create(options:createOptions) : Record


export function submitFields(options)


export declare enum Type {
   CUSTOMER
}
