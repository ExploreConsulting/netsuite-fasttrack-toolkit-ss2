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

        // invokes the nsdal log function, DRY
        private log(func,logger:Logger,...rest:any[] ) {
           var [title, details] = rest
           var title = logger.id === 'default' ? title : `[${logger.id}] ${title}`
           return func.bind(nslog,title, details)
        }

        debug: (logger:Logger, ...rest:any[]) => this.log('debug')

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

    export const defaultLogger:Logger = getLogger('default')
    defaultLogger.setLevel(logLevel.debug)


    addAppender(new ExecutionLogAppender())


