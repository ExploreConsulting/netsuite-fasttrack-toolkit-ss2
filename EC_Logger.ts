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

        //debug =  _.partial(this.log, 'debug')
        debug: (logger:Logger, ...rest:any[]) => void = _.partial(this.log, 'debug')
        info: (logger:Logger, ...rest:any[]) => void = _.partial(this.log, 'info')
        warn: (logger:Logger, ...rest:any[]) => void = _.partial(this.log, 'warn')
        error: (logger:Logger, ...rest:any[]) => void = _.partial(this.log, 'error')

    }

// instantiate the default logger and set it's logging level to the most verbose - this is used as
// the 'main' logger by consumers
getLogger('default').setLevel(logLevel.debug)

addAppender(new ExecutionLogAppender())


