/**
 * Created by shawn on 4/6/16.
 * @NApiVersion 2.x
 */

import * as moment from "moment"
import {Logger, addAppender, logLevel, getLogger, Appender, LogLevel} from "aurelia-logging"
import * as nslog from "N/log"
import * as runtime from "N/runtime"
import * as aop from "./aop"
import * as _ from "lodash"

export {getLogger, Logger, logLevel} from 'aurelia-logging'

/**
 * Value to be prepended to each log message title. Defaults to a random 4 digit integer
 * @type {string}
 */
export let correlationId = Math.floor(Math.random() * 10000).toString();

/**
 * if true then log message include a random integer (or your custom) prefix to each log entry title.
 * which is fixed for the duration of this script run. This can be used to correlate between different runs
 * of the same script (e.g. multiple runs of a scheduled script or discerning between multiple simultaneous calls
 * to a RESTlet or Suitelet)
 */
export let includeCorrelationId = false;

/**
 * Controls whether the correlation id prefixes should be included in log messages or not.
 * @param enable if true, adds correlationid to the log messages, otherwise no correlation id prefix is added
 */
export let setIncludeCorrelationId = (enable:boolean) => includeCorrelationId = enable


// invokes the nsdal log function and handles adding a title tag 
function log(loglevel:number, logger:Logger, ...rest:any[]) {
   let [title, details] = rest
   let prefix = ''

   if (includeCorrelationId === true) {
      prefix += `${correlationId}>`
   }
   // prefix all loggers except the 'default' one used by top level code
   if (logger.id !== 'default') {
      prefix += `[${logger.id}]`
   }
   // NetSuite now supports logging js objects but does not log properties from the prototype chain. This is
   // basically how JSON.stringify() works so I presume they are doing that?
   // To cover the most common use case of logging an object to see its properties, first convert to
   // a plain object if it's not one already.
   if (_.isObject(details) && (!_.isPlainObject(details)) ) details = _.toPlainObject(details)
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
export class ExecutionLogAppender implements Appender {


   debug(logger:Logger, ...rest:any[]) {
      log(logLevel.debug, logger, ...rest)
   }

   /**
    * Info about info
    * @param logger
    * @param rest
    */
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
let defaultLogger = getLogger('default')
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
      default:
         return 'debug'
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
   let withArgs = config.withArgs !== false
   // include return values by default
   let withReturnValue = config.withReturnValue !== false
   // default to not show profiling info
   let withProfiling = config.withProfiling === true
   // default to not show governance info
   let withGovernance = config.withGovernance === true
   // logger on which to autolog, default to the top level 'Default' logger used by scripts
   let logger = config.logger || DefaultLogger

   return aop.around(methodsToLogEntryExit, function (invocation) {
      // record function entry with details for every method on our explore object
      log(config!.logLevel || logLevel.debug,logger,`Enter ${invocation.method}() ${getGovernanceMessage(withGovernance)}`,
         withArgs ? 'args: ' + JSON.stringify(arguments[0].arguments) : null)
      let startTime = moment()
      let retval    = invocation.proceed()
      let elapsedMessage
      if (withProfiling) {
         let elapsedMilliseconds = moment().diff(startTime);
         elapsedMessage          = elapsedMilliseconds + "ms = " +
            moment.duration(elapsedMilliseconds).asMinutes().toFixed(2) + " minutes";
      }
      // record function exit for every method on our explore object
      log(config!.logLevel || logLevel.debug, logger,
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
   /**
    * set true to include automatically include passed method arguments in the logs
    */
   withArgs?:boolean
   /**
    * If true, includes the function return value in the log
    */
   withReturnValue?:boolean
   /**
    *
    */
   withProfiling?:boolean
   withGovernance?:boolean
   logger?:Logger
   logLevel?: number
}

/**
 * The default logger - this should be the main top level logger used in scripts
 */
export let DefaultLogger : Logger = defaultLogger

/**
 * Use to set the correlation id to a value other than the default random number
 * @param value new correlation id, will be used on all subsequent logging
 */
export let setCorrelationId = (value:string) => correlationId = value

addAppender(new ExecutionLogAppender())


