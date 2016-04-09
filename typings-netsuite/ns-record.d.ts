/**
 * Minimal type declarations for the N/search NetSuite module
 */

declare namespace "N/record" {

    interface Record {

    }
    
    export function load(options:{ type:string, id:number, isDynamic?:boolean, defaultValue?:Object}): Record

}

export = "N/record"
