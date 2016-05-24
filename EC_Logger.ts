/**
 * Created by shawn on 4/6/16.
 * @NApiVersion 2.x
 */

import {Logger, addAppender, logLevel, getLogger, Appender} from "./aurelia-logging"
import * as nslog from "N/log"
import * as aop from "./aop"


export {getLogger, Logger, logLevel} from './aurelia-logging'

/**
 * Value to be prepended to each log message title. Defaults to a random 4 digit integer
 * @type {string}
 */
export var correlationId = Math.floor(Math.random() * 10000).toString();

/**
 * set true to include a random integer (or your custom) prefix to each auto log entry title.
 * which is fixed for the duration of this script run. This can be used to correlate between different runs
 * of the same script (e.g. multiple runs of a scheduled script or discerning between multiple simultaneous calls
 * to a RESTlet or Suitelet)
 */
export var includeCorrelationId = false;


// invokes the nsdal log function and handles adding a title tag 
function log(func:string, logger:Logger, ...rest:any[]) {
   var [title, details] = rest
   var prefix = ''

   if (includeCorrelationId === true) {
      prefix += `${correlationId}>`
   }
   // prefix all loggers except the 'default' one used by top level code
   if (logger.id !== 'default') {
      prefix += `[${logger.id}]`
   }

   nslog[func](`${prefix} ${title}`, details)
}

/**
 * Log appender targeting the NS execution log
 * Severities are mapped as follows:
 *
 * debug -> NS 'DEBUG'
 * info -> NS 'AUDIT'
 * warn -> NS 'ERROR'
 * error -> NS 'emergency'
 */
class ExecutionLogAppender implements Appender {


   debug(logger:Logger, ...rest:any[]) {
      log('debug', logger, ...rest)
   }

   info(logger:Logger, ...rest:any[]) {
      log('audit', logger, ...rest)
   }

   warn(logger:Logger, ...rest:any[]) {
      log('error', logger, ...rest)
   }

   error(logger:Logger, ...rest:any[]) {
      log('emergency', logger, ...rest)
   }
}

// instantiate the default logger and set it's logging level to the most verbose - this is used as
// the 'main' logger by consumers
var defaultLogger = getLogger('default')
defaultLogger.setLevel(logLevel.debug)

/**
 * Uses AOP to automatically log method entry/exit with arguments to the netsuite execution log.
 * Call this method at the end of your script. Log entries are 'DEBUG' level.
 *
 * @param {Object} config configuration settings
 * @param {{target,method}} [config.methodsToLogEntryExit] array of pointcuts, defaults to log all methods on the
 * "EC" object
 * @param {Boolean} [config.withArgs] true if you want to include logging the arguments passed to the method in the
 * details. Default is true.
 * @param {Boolean} [config.withReturnValue] true if you want function return values to be logged
 * @param {Boolean} [config.withProfiling] set true if you want elapsed time info printed for each function
 * @param {Boolean} [config.colors] set true if you want pretty colors in your log message output, default
 * false. Colors not configurable so that we maintain consistency across all our scripts.
 * @param {string} [config.logType] the NetSuite logging level to use, default to 'DEBUG'
 * @returns {} an array of jquery aop advices
 */
export function autoLogMethodEntryExit(config?:AutoLogConfig) {

}


/**
 * Uses AOP to automatically log governance units usage to the NetSuite execution log. Execute this method at the
 * end of your script file and it will log governance data at the start and end of all functions specified.
 * @param [methodsToLogEntryExit] array of pointcuts, defaults to log all methods on the "EC" object
 * @param {string} [logLevel] NetSuite defined logging level to use for generated log entries. Default: 'DEBUG'
 * @param {boolean} [withColor] true if you want to show colors in log output. Default: false
 * @remark returns an array of jquery aop advices
 */
export function autoLogGovernanceUsage(methodsToLogEntryExit?:any, logLevel?:string, withColor?:boolean) {

}

/**
 * Configuration options for AutoLogMethodEntryExit
 */
export interface AutoLogConfig {
   methodsToLogEntryExit?: { target:Object, method:string|RegExp }
   withArgs?:boolean
   withReturnValue?:boolean
   withProfiling?:boolean
   colors?:boolean
   logType?:string
}

/**
 * The default logger - this should be the main logger used in scripts
 */
export var DefaultLogger : Logger = defaultLogger

addAppender(new ExecutionLogAppender())


