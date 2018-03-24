/**
 * Created by shawn on 4/6/16.
 * @NApiVersion 2.x
 */
define(["require", "exports", "./moment", "./aurelia-logging", "N/log", "N/runtime", "./aop", "./lodash", "./aurelia-logging"], function (require, exports, moment, aurelia_logging_1, nslog, runtime, aop, _, aurelia_logging_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLogger = aurelia_logging_2.getLogger;
    exports.Logger = aurelia_logging_2.Logger;
    exports.logLevel = aurelia_logging_2.logLevel;
    /**
     * Value to be prepended to each log message title. Defaults to a random 4 digit integer
     * @type {string}
     */
    exports.correlationId = Math.floor(Math.random() * 10000).toString();
    /**
     * if true then log message include a random integer (or your custom) prefix to each log entry title.
     * which is fixed for the duration of this script run. This can be used to correlate between different runs
     * of the same script (e.g. multiple runs of a scheduled script or discerning between multiple simultaneous calls
     * to a RESTlet or Suitelet)
     */
    exports.includeCorrelationId = false;
    /**
     * Controls whether the correlation id prefixes should be included in log messages or not.
     * @param enable if true, adds correlationid to the log messages, otherwise no correlation id prefix is added
     */
    exports.setIncludeCorrelationId = function (enable) { return exports.includeCorrelationId = enable; };
    // invokes the nsdal log function and handles adding a title tag 
    function log(loglevel, logger) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        var title = rest[0], details = rest[1];
        var prefix = '';
        if (exports.includeCorrelationId === true) {
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
     * Log appender targeting the NS execution log
     * Severities are mapped as follows:
     *
     * debug -> NS 'DEBUG'
     * info -> NS 'AUDIT'
     * warn -> NS 'ERROR'
     * error -> NS 'emergency'
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
        }
    }
    function getGovernanceMessage(governanceEnabled) {
        return governanceEnabled ? "governance: " + runtime.getCurrentScript().getRemainingUsage() : undefined;
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
        // logger on which to autolog, default to the top level 'Default' logger used by scripts
        var logger = config.logger || exports.DefaultLogger;
        return aop.around(methodsToLogEntryExit, function (invocation) {
            // record function entry with details for every method on our explore object
            log(config.logLevel || aurelia_logging_1.logLevel.debug, logger, "Enter " + invocation.method + "() " + getGovernanceMessage(withGovernance), withArgs ? 'args: ' + JSON.stringify(arguments[0].arguments) : null);
            var startTime = moment();
            var retval = invocation.proceed();
            var elapsedMessage;
            if (withProfiling) {
                var elapsedMilliseconds = moment().diff(startTime);
                elapsedMessage = elapsedMilliseconds + "ms = " +
                    moment.duration(elapsedMilliseconds).asMinutes().toFixed(2) + " minutes";
            }
            // record function exit for every method on our explore object
            log(config.logLevel || aurelia_logging_1.logLevel.debug, logger, ["Exit " + invocation.method + "()",
                elapsedMessage,
                getGovernanceMessage(withGovernance)].join(' ').trim(), withReturnValue ? "returned: " + JSON.stringify(retval) : null);
            return retval;
        });
    }
    exports.autoLogMethodEntryExit = autoLogMethodEntryExit;
    /**
     * The default logger - this should be the main top level logger used in scripts
     */
    exports.DefaultLogger = defaultLogger;
    /**
     * Use to set the correlation id to a value other than the default random number
     * @param value new correlation id, will be used on all subsequent logging
     */
    exports.setCorrelationId = function (value) { return exports.correlationId = value; };
    aurelia_logging_1.addAppender(new ExecutionLogAppender());
});
