/**
 * Provides a rich logging facility with more control and flexibility than the native NetSuite logger.
 *
 * Utilizes the [Aurelia logger](https://aurelia.io/docs/api/logging) under the hood.
 * This logger library adopts the common pattern of separating _how_ you log
 * (e.g. `log.debug()`) from _where_ the log messages are sent.
 *
 * By default, log messages are sent to the NetSuite Execution Log - *except* for client scripts which log to the
 * *browser console* by default.
 *
 * You can create as many named loggers as you like, but most often you'll work with the [Default Logger](#defaultlogger)
 *
 * @NApiVersion 2.x
 */

/**
 * dummy comment for TypeDoc
 */
import { addAppender, Appender, clearAppenders, getLogger, Logger, logLevel } from './aurelia-logging'
import * as nslog from 'N/log'
import * as runtime from 'N/runtime'
import * as aop from './aop'

export {
   logLevel,
   Logger,
   getAppenders,
   clearAppenders,
   addAppender,
   getLogger,
   removeAppender,
   addCustomLevel,
   getLevel,
   setLevel,
   removeCustomLevel,
   Appender
} from './aurelia-logging'

/**
 * Value to be prepended to each log message title. Defaults to a random 4 digit integer
 */
export let correlationId = Math.floor(Math.random() * 10000).toString()

/**
 * if true then log message includes a random integer (or your custom) prefix to each log entry title.
 * which is fixed for the duration of this script run. This can be used to correlate between different runs
 * of the same script (e.g. multiple runs of a scheduled script or discerning between multiple simultaneous calls
 * to a RESTlet or Suitelet)
 *
 * @example output
 * 1234> My log title
 * 1234> Another log title from the same run of the script
 * 5683> Log message from a subsequent execution of the script
 */
export let includeCorrelationId = false

/**
 * Controls whether the correlation id prefixes should be included in log messages or not.
 * @param enable if true, adds correlationid to the log messages, otherwise no correlation id prefix is added
 * returns the newly set value
 *
 * @example for `setIncludeCorrelationId(true)`
 * 1234> My log title
 * 1234> Another log title from the same run of the script
 * 5683> Log message from a subsequent execution of the script
 */
export const setIncludeCorrelationId = (enable: boolean) => includeCorrelationId = enable

// internal function to invoke the ns log function and handles adding a title tag
function log (loglevel: number, logger: Logger, ...rest: any[]) {
   let [title, details] = rest
   let prefix = ''

   if (includeCorrelationId) {
      prefix += `${correlationId}>`
   }
   // prefix all loggers except the 'default' one used by top level code
   if (logger.id !== 'default') {
      prefix += `[${logger.id}]`
   }
   nslog[toNetSuiteLogLevel(loglevel)](`${prefix} ${title}`, details)
}

/**
 * Log appender targeting the NS execution log. This is the default appender for everything except Client scripts
 * which log the browser console by default.
 *
 * Severities are mapped as follows:
 *
 * debug -> NS 'DEBUG'
 *
 * info -> NS 'AUDIT'
 *
 * warn -> NS 'ERROR'
 *
 * error -> NS 'EMERGENCY'
 */
export class ExecutionLogAppender implements Appender {

   debug (logger: Logger, ...rest: any[]) {
      log(logLevel.debug, logger, ...rest)
   }

   /**
    * Info about info
    * @param logger
    * @param rest
    */
   info (logger: Logger, ...rest: any[]) {
      log(logLevel.info, logger, ...rest)
   }

   warn (logger: Logger, ...rest: any[]) {
      log(logLevel.warn, logger, ...rest)
   }

   error (logger: Logger, ...rest: any[]) {
      log(logLevel.error, logger, ...rest)
   }
}

// instantiate the default logger and set it's logging level to the most verbose - this is used as
// the 'main' logger by consumers
let defaultLogger = getLogger('default')
defaultLogger.setLevel(logLevel.debug)

// maps aurelia numeric levels to NS string level names
function toNetSuiteLogLevel (level: number) {
   switch (level) {
      case logLevel.debug:
         return 'debug'
      case logLevel.info:
         return 'audit'
      case logLevel.warn:
         return 'error'
      case logLevel.error:
         return 'emergency'
      default:
         return 'debug'
   }
}

function getGovernanceMessage (governanceEnabled: boolean) {
   return governanceEnabled ? `governance: ${runtime.getCurrentScript().getRemainingUsage()}` : undefined
}

/**
 * (taken from lodash https://github.com/lodash/lodash/blob/a0a3a6af910e475d8dd14dabc452f957e436e28b/findKey.js)
 * This method is like `find` except that it returns the key of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @since 1.1.0
 * @category Object
 * @param {Object} object The object to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {string|undefined} Returns the key of the matched element,
 *  else `undefined`.
 * @see find, findIndex, findLast, findLastIndex, findLastKey
 * @example
 *
 * const users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * }
 *
 * findKey(users, ({ age }) => age < 40)
 * // => 'barney' (iteration order is not guaranteed)
 */
function findKey (object, predicate) {
   let result
   if (object == null) {
      // @ts-ignore
      // noinspection JSUnusedAssignment
      return result
   }
   Object.keys(object).some((key) => {
      const value = object[key]
      if (predicate(value, key, object)) {
         result = key
         return true
      } else return false
   })
   // @ts-ignore
   // noinspection JSUnusedAssignment
   return result
}

/**
 * Uses AOP to automatically log method entry/exit with arguments to the netsuite execution log.
 * Call this method at the end of your script. Log entries are 'DEBUG' level by default but may be overridden
 * as described below.
 *
 * @param methodsToLogEntryExit array of pointcuts
 * @param {Object} config configuration settings
 * @param {Boolean} [config.withArgs] true if you want to include logging the arguments passed to the method in the
 * details. Default is true.
 * @param {Boolean} [config.withReturnValue] true if you want function return values to be logged
 * @param {Boolean} [config.withProfiling] set true if you want elapsed time info printed for each function
 * @param {Boolean} [config.withGovernance] set true if you want remaining governance units info printed for
 * each function
 * false. Colors not configurable so that we maintain consistency across all our scripts.
 * @param {number} [config.logType] the logging level to use, logLevel.debug, logLevel.info, etc.
 * @returns {} an array of jquery aop advices
 *
 * @example log all methods on the object `X`
 * ```
 * namespace X {
 *   export onRequest() {
 *     log.debug('hello world')
 *   }
 * }
 * LogManager.autoLogMethodEntryExit({ target:X, method:/\w+/})
 *
 * ```
 * The above results in automatic log entries similar to:
 *
 * |Log Title   | Detail |
 * |--------|--------|
 |Enter onRequest()| args:[] |
 |hello world |   |
 |Exit onRequest() | returned: undefined |
 */
export function autoLogMethodEntryExit (methodsToLogEntryExit: { target: Object, method: string | RegExp },
                                        config?: AutoLogConfig) {

   if (!config) config = {}
   // include method parameters by default
   const withArgs = config.withArgs !== false
   // include return values by default
   const withReturnValue = config.withReturnValue !== false
   // default to not show profiling info
   const withProfiling = config.withProfiling === true
   // default to not show governance info
   const withGovernance = config.withGovernance === true
   // logger name on which to autolog, default to the top level 'Default' logger used by scripts
   const logger = config.logger || DefaultLogger
   // logging level specified in config else default to debug. need to translate from number loglevels back to names
   const level = findKey(logLevel, o => o === (config!.logLevel || logLevel.debug))!

   return aop.around(methodsToLogEntryExit, function (invocation) {
      // record function entry with details for every method on our explore object
      const entryTitle = `Enter ${invocation.method}() ${getGovernanceMessage(withGovernance)}`
      const entryDetail = withArgs ? `args: ${JSON.stringify(arguments[0].arguments)}` : null

      logger[level](entryTitle, entryDetail)

      const startTime = Date.now()
      const retval = invocation.proceed()
      let elapsedMessage = ''
      if (withProfiling) {
         const elapsedMilliseconds = Date.now() - startTime
         const elapsedMinutes = ((elapsedMilliseconds / 1000) / 60).toFixed(2)
         elapsedMessage = `${elapsedMilliseconds}ms = ${elapsedMinutes} minutes`
      }

      const exitTitle = `Exit ${invocation.method}(): ${elapsedMessage} ${getGovernanceMessage(withGovernance)}`
      const exitDetail = withReturnValue ? `returned: ${JSON.stringify(retval)}` : null
      logger[level](exitTitle, exitDetail)
      return retval
   })
}

/**
 * Configuration options for AutoLogMethodEntryExit
 */
export interface AutoLogConfig {
   /**
    * set true to include automatically include passed method arguments in the logs
    */
   withArgs?: boolean
   /**
    * If true, includes the function return value in the log
    */
   withReturnValue?: boolean
   /**
    * If true, including function (execution time) statistics
    */
   withProfiling?: boolean
   /**
    * If true, includes governance before and after function execution
    */
   withGovernance?: boolean
   /**
    * Name of logger to use for autologging, defaults to 'default'
    */
   logger?: Logger
   /**
    * The logging level autologging uses - defaults to 'debug'
    */
   logLevel?: number
}

/**
 * The default logger - this should be the main top level logger used in scripts
 *
 * This logger defaults to log level 'debug' and is named 'default'.
 * For client scripts, it logs to the _browser console_ (not NS execution log because it incurs significant
 * overhead). For server-side scripts it logs to the NS Exectuion Log.
 *
 * @example To make a client script log to both the local browser console and the NS script execution log
 *```
 * import * as LogManager from "./NFT/EC_Logger"
 *
 * LogManager.addAppender(new LogManager.ExecutionLogAppender())
 *```
 * @example
 *```
 * import * as LogManager from "./NFT/EC_Logger"
 * const log = LogManager.DefaultLogger
 * log.debug('hello world')
 * ```
 */
export let DefaultLogger: Logger = defaultLogger

/**
 * Use to set the correlation id to a value other than the default random number
 * @param value new correlation id, will be used on all subsequent log messages for the current script execution
 */
export const setCorrelationId = (value: string) => correlationId = value

/**
 * Adds the passed aurelia logging console (browser/node) appender with diagnostic logging
 * @param alc the aurelia-logging-console module
 */
function addConsoleAppender (alc: any) {
   console.debug('** adding console appender **')
   addAppender(new alc.ConsoleAppender())
   defaultLogger.debug('added console appender')
}

/**
 * NetSuite also declares a require() function to accept an array and callback (AMD)
 * this declaration is to allow either nodejs-style or netsuite style require calls used below
 * @param deps dependencies
 * @param cb the callback to invoke when the dependencies are resolved
 */
declare function require (deps: string | string[], cb?: (...args: any[]) => void)

// if we're executing client side, default to using the browser console for logging to avoid
// expensive network round trips to the NS execution log. aurelia-logging-console depends upon the
// global 'console' variable and will fail to load if it's not defined.
declare var window

// if we're running in nodejs (i.e. unit tests) load the console appender as usual, else use NS's async require(),
// otherwise go ahead and log to the execution log (assume server-side suitescript)
if ((typeof console === 'object') && (typeof window === 'object') && window.alert) /* browser */
   require(['./aurelia-logging-console'], addConsoleAppender)
else if (typeof module === 'object') /* nodejs */
   addConsoleAppender(require('aurelia-logging-console'))
else /* server-side SuiteScript */
   addAppender(new ExecutionLogAppender())


