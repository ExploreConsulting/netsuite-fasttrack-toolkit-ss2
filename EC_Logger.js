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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./aurelia-logging", "N/log", "N/runtime", "./aop", "./aurelia-logging"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setCorrelationId = exports.DefaultLogger = exports.autoLogMethodEntryExit = exports.ExecutionLogAppender = exports.setIncludeCorrelationId = exports.includeCorrelationId = exports.correlationId = exports.removeCustomLevel = exports.setLevel = exports.getLevel = exports.addCustomLevel = exports.removeAppender = exports.getLogger = exports.addAppender = exports.clearAppenders = exports.getAppenders = exports.Logger = exports.logLevel = void 0;
    /**
     * dummy comment for TypeDoc
     */
    var aurelia_logging_1 = require("./aurelia-logging");
    var nslog = require("N/log");
    var runtime = require("N/runtime");
    var aop = require("./aop");
    var aurelia_logging_2 = require("./aurelia-logging");
    Object.defineProperty(exports, "logLevel", { enumerable: true, get: function () { return aurelia_logging_2.logLevel; } });
    Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return aurelia_logging_2.Logger; } });
    Object.defineProperty(exports, "getAppenders", { enumerable: true, get: function () { return aurelia_logging_2.getAppenders; } });
    Object.defineProperty(exports, "clearAppenders", { enumerable: true, get: function () { return aurelia_logging_2.clearAppenders; } });
    Object.defineProperty(exports, "addAppender", { enumerable: true, get: function () { return aurelia_logging_2.addAppender; } });
    Object.defineProperty(exports, "getLogger", { enumerable: true, get: function () { return aurelia_logging_2.getLogger; } });
    Object.defineProperty(exports, "removeAppender", { enumerable: true, get: function () { return aurelia_logging_2.removeAppender; } });
    Object.defineProperty(exports, "addCustomLevel", { enumerable: true, get: function () { return aurelia_logging_2.addCustomLevel; } });
    Object.defineProperty(exports, "getLevel", { enumerable: true, get: function () { return aurelia_logging_2.getLevel; } });
    Object.defineProperty(exports, "setLevel", { enumerable: true, get: function () { return aurelia_logging_2.setLevel; } });
    Object.defineProperty(exports, "removeCustomLevel", { enumerable: true, get: function () { return aurelia_logging_2.removeCustomLevel; } });
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
    var setIncludeCorrelationId = function (enable) { return exports.includeCorrelationId = enable; };
    exports.setIncludeCorrelationId = setIncludeCorrelationId;
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
            log.apply(void 0, __spreadArrays([aurelia_logging_1.logLevel.debug, logger], rest));
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
            log.apply(void 0, __spreadArrays([aurelia_logging_1.logLevel.info, logger], rest));
        };
        ExecutionLogAppender.prototype.warn = function (logger) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
            log.apply(void 0, __spreadArrays([aurelia_logging_1.logLevel.warn, logger], rest));
        };
        ExecutionLogAppender.prototype.error = function (logger) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
            log.apply(void 0, __spreadArrays([aurelia_logging_1.logLevel.error, logger], rest));
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
    function findKey(object, predicate) {
        var result;
        if (object == null) {
            // @ts-ignore
            // noinspection JSUnusedAssignment
            return result;
        }
        Object.keys(object).some(function (key) {
            var value = object[key];
            if (predicate(value, key, object)) {
                result = key;
                return true;
            }
            else
                return false;
        });
        // @ts-ignore
        // noinspection JSUnusedAssignment
        return result;
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
        var level = findKey(aurelia_logging_1.logLevel, function (o) { return o === (config.logLevel || aurelia_logging_1.logLevel.debug); });
        return aop.around(methodsToLogEntryExit, function (invocation) {
            // record function entry with details for every method on our explore object
            var entryTitle = "Enter " + invocation.method + "() " + getGovernanceMessage(withGovernance);
            var entryDetail = withArgs ? "args: " + JSON.stringify(arguments[0].arguments) : null;
            logger[level](entryTitle, entryDetail);
            var startTime = Date.now();
            var retval = invocation.proceed();
            var elapsedMessage = '';
            if (withProfiling) {
                var elapsedMilliseconds = Date.now() - startTime;
                var elapsedMinutes = ((elapsedMilliseconds / 1000) / 60).toFixed(2);
                elapsedMessage = elapsedMilliseconds + "ms = " + elapsedMinutes + " minutes";
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
    var setCorrelationId = function (value) { return exports.correlationId = value; };
    exports.setCorrelationId = setCorrelationId;
    /**
     * Adds the passed aurelia logging console (browser/node) appender with diagnostic logging
     * @param alc the aurelia-logging-console module
     */
    function addConsoleAppender(alc) {
        console.debug('** adding console appender **');
        aurelia_logging_1.addAppender(new alc.ConsoleAppender());
        defaultLogger.debug('added console appender');
    }
    // if we're running in nodejs (i.e. unit tests) load the console appender as usual, else use NS's async require(),
    // otherwise go ahead and log to the execution log (assume server-side suitescript)
    if (typeof module === 'object') /* nodejs */
        addConsoleAppender(require('aurelia-logging-console'));
    else if ((typeof console === 'object') && (typeof window === 'object') && window.alert) /* browser */
        require(['./aurelia-logging-console'], addConsoleAppender);
    else /* server-side SuiteScript */
        aurelia_logging_1.addAppender(new ExecutionLogAppender());
});
