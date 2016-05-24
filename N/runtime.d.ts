/**
 * Minimal type declarations for the N/runtime NetSuite module
 */

/**
 * Encapsulates the user session for the currently executing script.
 *Use this object to set and get user-defined objects for the current user session. Use the objects to track
 *  user-related session data. For example, you can gather information about the user scope, budget, or business problems.
 *Use Session.set(options) to set session object values and then use Session.get(options) to retrieve the values.
 *For a complete list of this object’s methods, see Session Object Members.
 */
export declare interface Session {
   get(options:{ name:string }) : string
   set(options:{ name:string, value:string}) : void
}

/**
 * Returns a runtime.Session that represents the user session for the currently executing script.
 * Use this method to get session objects for the current user session. If you want to get properties for the script
 * or user, use runtime.getCurrentScript() or runtime.getCurrentUser() instead.
 */
export declare function getCurrentSession():Session





