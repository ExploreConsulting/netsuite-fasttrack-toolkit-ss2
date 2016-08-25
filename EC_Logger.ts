/**
 * Created by shawn on 4/6/16.
 * @NApiVersion 2.x
 */

///<amd-dependency path='./moment' name="moment">

import {Logger, addAppender, logLevel, getLogger, Appender, LogLevel} from "./aurelia-logging"
import * as nslog from "N/log"
import * as runtime from "N/runtime"
import * as aop from "./aop"


export {getLogger, Logger, logLevel} from './aurelia-logging'

/**
 * Value to be prepended to each log message title. Defaults to a random 4 digit integer
 * @type {string}
 */
export var correlationId = Math.floor(Math.random() * 10000).toString();

/**
 * if true then log message include a random integer (or your custom) prefix to each log entry title.
 * which is fixed for the duration of this script run. This can be used to correlate between different runs
 * of the same script (e.g. multiple runs of a scheduled script or discerning between multiple simultaneous calls
 * to a RESTlet or Suitelet)
 */

export var includeCorrelationId = false;

/**
 * Controls whether the correlation id prefixes should be included in log messages or not.
 * @param enable if true, adds correlationid to the log messages, otherwise no correlation id prefix is added
 */
export var setIncludeCorrelationId = (enable:boolean) => includeCorrelationId = enable


// invokes the nsdal log function and handles adding a title tag 
function log(loglevel:number, logger:Logger, ...rest:any[]) {
   var [title, details] = rest
   var prefix = ''

   if (includeCorrelationId === true) {
      prefix += `${correlationId}>`
   }
   // prefix all loggers except the 'default' one used by top level code
   if (logger.id !== 'default') {
      prefix += `[${logger.id}]`
   }

   nslog[toNetSuiteLogLevel(loglevel)](`${prefix} ${title}`, details)
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
      log(logLevel.debug, logger, ...rest)
   }

   info(logger:Logger, ...rest:any[]) {
      log(logLevel.info, logger, ...rest)
   }

   warn(logger:Logger, ...rest:any[]) {
      log(logLevel.warn, logger, ...rest)
   }

   error(logger:Logger, ...rest:any[]) {
      log(logLevel.error, logger, ...rest)
   }
}

// instantiate the default logger and set it's logging level to the most verbose - this is used as
// the 'main' logger by consumers
var defaultLogger = getLogger('default')
defaultLogger.setLevel(logLevel.debug)

// maps aurelia numeric levels to NS string level names
function toNetSuiteLogLevel(level:number) {
   switch (level) {
      case logLevel.debug:
         return 'debug'
      case logLevel.info:
           return 'audit'
      case logLevel.warn:
           return 'error'
      case logLevel.error:
           return 'emergency'
      }
}

function getGovernanceMessage(governanceEnabled:boolean) {
   return governanceEnabled ? `governance: ${runtime.getCurrentScript().getRemainingUsage()}` : undefined
}

/**
 * Uses AOP to automatically log method entry/exit with arguments to the netsuite execution log.
 * Call this method at the end of your script. Log entries are 'DEBUG' level.
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
 */
export function autoLogMethodEntryExit(methodsToLogEntryExit: {target:Object, method:string | RegExp},
                                       config?:AutoLogConfig) {

   if (!config) config = {}
   // include method parameters by default
   var withArgs = config.withArgs !== false
   // include return values by default
   var withReturnValue = config.withReturnValue !== false
   // default to not show profiling info
   var withProfiling = config.withProfiling === true
   // default to not show governance info
   var withGovernance = config.withGovernance === true
   // logger on which to autolog, default to the top level 'Default' logger used by scripts
   var logger = config.logger || DefaultLogger

   return aop.around(methodsToLogEntryExit, function (invocation) {
      // record function entry with details for every method on our explore object
      log(config.logLevel || logLevel.debug,logger,`Enter ${invocation.method}() ${getGovernanceMessage(withGovernance)}`,
         withArgs ? 'args: ' + JSON.stringify(arguments[0].arguments) : null)
      var startTime = moment()
      var retval    = invocation.proceed()
      var elapsedMessage
      if (withProfiling) {
         var elapsedMilliseconds = moment().diff(startTime);
         elapsedMessage          = elapsedMilliseconds + "ms = " +
            moment.duration(elapsedMilliseconds).asMinutes().toFixed(2) + " minutes";
      }
      // record function exit for every method on our explore object
      log(config.logLevel || logLevel.debug, logger,
         [  `Exit ${invocation.method}()`,
            elapsedMessage,
            getGovernanceMessage(withGovernance)].join(' ').trim(),
         withReturnValue ? "returned: " + JSON.stringify(retval) : null);

      return retval;
   });
}

/**
 * Configuration options for AutoLogMethodEntryExit
 */
export interface AutoLogConfig {
   withArgs?:boolean
   withReturnValue?:boolean
   withProfiling?:boolean
   withGovernance?:boolean
   logger?:Logger
   logLevel?: number
}

/**
 * The default logger - this should be the main logger used in scripts
 */
export var DefaultLogger : Logger = defaultLogger

/**
 * Use to set the correlation id to a value other than the default random number
 * @param value new correlation id, will be used on all subsequent logging
 */
export var setCorrelationId = (value:string) => correlationId = value

addAppender(new ExecutionLogAppender())


