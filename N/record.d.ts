/**
 * Minimal type declarations for the N/record NetSuite module
 */


interface Record {

}

export function load(options:{ type:string, id:number, isDynamic?:boolean, defaultValue?:Object}):Record



