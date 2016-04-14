/**
 * Minimal type declarations for the N/record NetSuite module
 */

interface createOptions {
   type:string,
   isDynamic?:boolean
   defaultValue?:Object
}



export class Record {
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

   save():number
}
/**
 * loads a netsuite record
 * @param options
 */
export function load(options:{ type:string, id:number, isDynamic?:boolean, defaultValue?:Object}):Record

/**
 * creates a new netsuite record
 */
export function create(options:createOptions) : Record


export function submitFields(options)



