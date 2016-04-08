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
            var title = logger.id === 'default' ? rest[0] : `[${logger.id}] ${rest[0]}`
            nslog.debug(title, rest[1])
        }

        info(logger:Logger, ...rest:any[]):void {
            var title = logger.id === 'default' ? rest[0] : `[${logger.id}] ${rest[0]}`
            nslog.audit(title, rest[1])
        }

        warn(logger:Logger, ...rest:any[]):void {
            var title = logger.id === 'default' ? rest[0] : `[${logger.id}] ${rest[0]}`
            nslog.error(title, rest[1])
        }

        error(logger:Logger, ...rest:any[]):void {
            var title = logger.id === 'default' ? rest[0] : `[${logger.id}] ${rest[0]}`
            nslog.emergency(title, rest[1])
        }
    }

    var _defaultLogger:Logger = getLogger('default')
    _defaultLogger.setLevel(logLevel.debug)

    export var Log = {
        d:_defaultLogger.debug.bind(_defaultLogger),
        a:_defaultLogger.info.bind(_defaultLogger),
        e:_defaultLogger.warn.bind(_defaultLogger),
        x: _defaultLogger.error.bind(_defaultLogger)
    }

    addAppender(new ExecutionLogAppender())


