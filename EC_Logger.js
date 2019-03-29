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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./moment", "./aurelia-logging", "N/log", "N/runtime", "./aop", "./lodash", "./aurelia-logging"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * dummy comment for TypeDoc
     */
    var moment = require("./moment");
    var aurelia_logging_1 = require("./aurelia-logging");
    var nslog = require("N/log");
    var runtime = require("N/runtime");
    var aop = require("./aop");
    var _ = require("./lodash");
    var aurelia_logging_2 = require("./aurelia-logging");
    exports.logLevel = aurelia_logging_2.logLevel;
    exports.Logger = aurelia_logging_2.Logger;
    exports.getAppenders = aurelia_logging_2.getAppenders;
    exports.clearAppenders = aurelia_logging_2.clearAppenders;
    exports.addAppender = aurelia_logging_2.addAppender;
    exports.getLogger = aurelia_logging_2.getLogger;
    exports.removeAppender = aurelia_logging_2.removeAppender;
    exports.addCustomLevel = aurelia_logging_2.addCustomLevel;
    exports.getLevel = aurelia_logging_2.getLevel;
    exports.setLevel = aurelia_logging_2.setLevel;
    exports.removeCustomLevel = aurelia_logging_2.removeCustomLevel;
    /**
     * Value to be prepended to each log message title. Defaults to a random 4 digit integer
     */
    exports.correlationId = Math.floor(Math.random() * 10000).toString();
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
    exports.includeCorrelationId = false;
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
    exports.setIncludeCorrelationId = function (enable) { return exports.includeCorrelationId = enable; };
    // internal function to invoke the ns log function and handles adding a title tag
    function log(loglevel, logger) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        var title = rest[0], details = rest[1];
        var prefix = '';
        if (exports.includeCorrelationId) {
            prefix += exports.correlationId + ">";
        }
        // prefix all loggers except the 'default' one used by top level code
        if (logger.id !== 'default') {
            prefix += "[" + logger.id + "]";
        }
        // NetSuite now supports logging js objects but does not log properties from the prototype chain. This is
        // basically how JSON.stringify() works so I presume they are doing that?
        // To cover the most common use case of logging an object to see its properties, first convert to
        // a plain object if it's not one already.
        if (_.isObject(details) && (!_.isPlainObject(details)))
            details = _.toPlainObject(details);
        nslog[toNetSuiteLogLevel(loglevel)](prefix + " " + title, details);
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
    var ExecutionLogAppender = /** @class */ (function () {
        function ExecutionLogAppender() {
        }
        ExecutionLogAppender.prototype.debug = function (logger) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
            log.apply(void 0, [aurelia_logging_1.logLevel.debug, logger].concat(rest));
        };
        /**
         * Info about info
         * @param logger
         * @param rest
         */
        ExecutionLogAppender.prototype.info = function (logger) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
            log.apply(void 0, [aurelia_logging_1.logLevel.info, logger].concat(rest));
        };
        ExecutionLogAppender.prototype.warn = function (logger) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
            log.apply(void 0, [aurelia_logging_1.logLevel.warn, logger].concat(rest));
        };
        ExecutionLogAppender.prototype.error = function (logger) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
            log.apply(void 0, [aurelia_logging_1.logLevel.error, logger].concat(rest));
        };
        return ExecutionLogAppender;
    }());
    exports.ExecutionLogAppender = ExecutionLogAppender;
    // instantiate the default logger and set it's logging level to the most verbose - this is used as
    // the 'main' logger by consumers
    var defaultLogger = aurelia_logging_1.getLogger('default');
    defaultLogger.setLevel(aurelia_logging_1.logLevel.debug);
    // maps aurelia numeric levels to NS string level names
    function toNetSuiteLogLevel(level) {
        switch (level) {
            case aurelia_logging_1.logLevel.debug:
                return 'debug';
            case aurelia_logging_1.logLevel.info:
                return 'audit';
            case aurelia_logging_1.logLevel.warn:
                return 'error';
            case aurelia_logging_1.logLevel.error:
                return 'emergency';
            default:
                return 'debug';
        }
    }
    function getGovernanceMessage(governanceEnabled) {
        return governanceEnabled ? "governance: " + runtime.getCurrentScript().getRemainingUsage() : undefined;
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
    function autoLogMethodEntryExit(methodsToLogEntryExit, config) {
        if (!config)
            config = {};
        // include method parameters by default
        var withArgs = config.withArgs !== false;
        // include return values by default
        var withReturnValue = config.withReturnValue !== false;
        // default to not show profiling info
        var withProfiling = config.withProfiling === true;
        // default to not show governance info
        var withGovernance = config.withGovernance === true;
        // logger name on which to autolog, default to the top level 'Default' logger used by scripts
        var logger = config.logger || exports.DefaultLogger;
        // logging level specified in config else default to debug. need to translate from number loglevels back to names
        var level = _.findKey(aurelia_logging_1.logLevel, function (o) { return o === (config.logLevel || aurelia_logging_1.logLevel.debug); });
        return aop.around(methodsToLogEntryExit, function (invocation) {
            // record function entry with details for every method on our explore object
            var entryTitle = "Enter " + invocation.method + "() " + getGovernanceMessage(withGovernance);
            var entryDetail = withArgs ? "args: " + JSON.stringify(arguments[0].arguments) : null;
            logger[level](entryTitle, entryDetail);
            var startTime = moment();
            var retval = invocation.proceed();
            var elapsedMessage = '';
            if (withProfiling) {
                var elapsedMilliseconds = moment().diff(startTime);
                elapsedMessage = elapsedMilliseconds + 'ms = ' +
                    moment.duration(elapsedMilliseconds).asMinutes().toFixed(2) + ' minutes';
            }
            var exitTitle = "Exit " + invocation.method + "(): " + elapsedMessage + " " + getGovernanceMessage(withGovernance);
            var exitDetail = withReturnValue ? "returned: " + JSON.stringify(retval) : null;
            logger[level](exitTitle, exitDetail);
            return retval;
        });
    }
    exports.autoLogMethodEntryExit = autoLogMethodEntryExit;
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
    exports.DefaultLogger = defaultLogger;
    /**
     * Use to set the correlation id to a value other than the default random number
     * @param value new correlation id, will be used on all subsequent log messages for the current script execution
     */
    exports.setCorrelationId = function (value) { return exports.correlationId = value; };
    /**
     * Adds the passed aurelia logging console (browser/node) appender with diagnostic logging
     * @param alc the aurelia-logging-console module
     */
    function addConsoleAppender(alc) {
        console.debug('** adding console appender **');
        aurelia_logging_1.addAppender(new alc.ConsoleAppender());
        defaultLogger.debug('added console appender');
    }
    // if we're executing client side, default to using the browser console for logging to avoid
    // expensive network round trips to the NS execution log. aurelia-logging-console depends upon the
    // global 'console' variable and will fail to load if it's not defined.
    if (typeof console === 'object') {
        var isNodeJS = typeof module === 'object';
        // if we're running in nodejs (i.e. unit tests) load the console appender as usual, else use NS's async require()
        if (isNodeJS)
            addConsoleAppender(require('aurelia-logging-console'));
        else
            require(['./aurelia-logging-console'], addConsoleAppender);
    }
    else
        aurelia_logging_1.addAppender(new ExecutionLogAppender());
});
