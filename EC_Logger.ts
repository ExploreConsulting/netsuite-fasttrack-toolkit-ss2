/**
 * Created by shawn on 4/6/16.
 * @NApiVersion 2.x
 */

import {Logger, addAppender, logLevel, getLogger, Appender} from "./aurelia-logging"
import * as nslog from "N/log"
export {getLogger, Logger, logLevel} from './aurelia-logging'


// invokes the nsdal log function and handles adding a title tag 
function log(func:string, logger:Logger, ...rest:any[]) {
   var [title, details] = rest
   var title = logger.id === 'default' ? title : `[${logger.id}] ${title}`
   nslog[func](title, details)
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
      log('emergency', logger, rest)
   }
}

// instantiate the default logger and set it's logging level to the most verbose - this is used as
// the 'main' logger by consumers
var defaultLogger = getLogger('default')
defaultLogger.setLevel(logLevel.debug)

/**
 * The default logger - this should be the main logger used in scripts
 */
export var DefaultLogger : Logger = defaultLogger

addAppender(new ExecutionLogAppender())


