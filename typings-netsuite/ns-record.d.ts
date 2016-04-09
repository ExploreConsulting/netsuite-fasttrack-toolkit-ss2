/**
 * Minimal type declarations for the N/search NetSuite module
 */

declare module "N/record" {

    interface Record {

    }
    
    export function load(options:{ type:string, id:number, isDynamic?:boolean, defaultValue?:Object}): Record

}

