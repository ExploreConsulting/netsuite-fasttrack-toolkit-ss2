/**
 * Logging module from NS
 */



declare module "N/log" {
    /**
     * Debugs stuff
     * @param title
     * @param details
     */
    export function debug(title:string, details?:string)

    /**
     * does emergency stuff
     * @param title
     * @param details
     */
    export function emergency(title:string, details?:string)

    /**
     * audits stuff
     * @param title
     * @param details
     */
    export function audit(title:string, details?:string)

    /**
     * errors stuff
     * @param title
     * @param details
     */
    export function error(title:string, details?:string)
}


