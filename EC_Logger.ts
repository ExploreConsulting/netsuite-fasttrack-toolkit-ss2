/**
 * Created by shawn on 4/6/16.
 * @NApiVersion 2.x
 */

import {Logger, addAppender, logLevel,getLogger, Appender} from "./aurelia-logging"
import * as nslog from "N/log"
export {getLogger, Logger, logLevel} from './aurelia-logging'

    
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
        debug(logger:Logger, ...rest:any[]):void {
            nslog.debug(rest[0], rest[1])
        }

        info(logger:Logger, ...rest:any[]):void {
            nslog.audit(rest[0], rest[1])
        }

        warn(logger:Logger, ...rest:any[]):void {
            nslog.error(rest[0], rest[1])
        }

        error(logger:Logger, ...rest:any[]):void {
            nslog.emergency(rest[0], rest[1])
        }
    }

    var _defaultLogger:Logger = getLogger('default')
    _defaultLogger.setLevel(logLevel.debug)

    export var Log = {
        d:_defaultLogger.debug,
        a:_defaultLogger.info,
        e:_defaultLogger.warn,
        x: _defaultLogger.error
    }

    addAppender(new ExecutionLogAppender())


