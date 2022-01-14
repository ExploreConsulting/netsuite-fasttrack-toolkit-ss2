(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "N/runtime", "./EC_Logger", "N/task"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.autoReschedule = exports.rescheduleIfNeeded = exports.governanceRemains = void 0;
    var runtime = require("N/runtime");
    var EC_Logger_1 = require("./EC_Logger");
    var task = require("N/task");
    /**
     * returns a predicate function which returns true if we're not out of governance, false if we have reached time
     * remaining and/or units thresholds.
     * @param startTime when to start counting elapsed time for clock-time governance, ms since the epoch (e.g. Date.now())
     * @param units threshold for minimum remaining governance units
     * @param minutes threshold for maximum number of minutes allowed to elapse
     * @example
     *
     * // defaults to 200 units threshold and starts elapsed time tracking at this invocation
     * sequence.takeWhile(governanceRemains())
     *
     */
    function governanceRemains(startTime, minutes, units) {
        if (startTime === void 0) { startTime = Date.now(); }
        if (minutes === void 0) { minutes = 45; }
        if (units === void 0) { units = 200; }
        return function () {
            var remainingUnits = runtime.getCurrentScript().getRemainingUsage();
            var outOfUnits = remainingUnits < units;
            var elapsedSeconds = (Date.now() - startTime) / 1000;
            var elapsedMinutes = elapsedSeconds / 60;
            var outOfTime = elapsedMinutes > minutes; // enforced max is 60, use 45 to be safe
            var ok = !outOfUnits && !outOfTime;
            EC_Logger_1.DefaultLogger.debug("governance remains? ".concat(ok), "elapsed time (m) ".concat(elapsedMinutes.toFixed(3), ", units remaining ").concat(remainingUnits));
            return ok;
        };
    }
    exports.governanceRemains = governanceRemains;
    /**
     * Reschedules the current script using the same deployment id if we're out of governance
     * @param params optional script parameters to provide to the newly scheduled script
     * @param governancePredicate governance checker - if it returns false then script will reschedule.
     * typically this would be your invocation of `governanceRemains()`
     * @example
     * results.takeWhile( rescheduleIfNeeded(governanceRemains()) ).filter(...).map(...)
     * @returns a function that returns the same boolean that the governancePredicate() does
     * ( so it can be invoked by takeWhile() as well)
     *
     */
    function rescheduleIfNeeded(governancePredicate, params) {
        return function () {
            var governanceRemains = governancePredicate();
            if (!governanceRemains) {
                EC_Logger_1.DefaultLogger.warn('out of governance, rescheduling', task.create({
                    taskType: task.TaskType.SCHEDULED_SCRIPT,
                    scriptId: runtime.getCurrentScript().id,
                    deploymentId: runtime.getCurrentScript().deploymentId,
                    params: params
                }).submit());
            }
            return governanceRemains;
        };
    }
    exports.rescheduleIfNeeded = rescheduleIfNeeded;
    /**
     * Automatically reschedule the current task if governance is exhausted.
     * Convenience function that composes `governanceRemains` and `rescheduleIfNeeded`
     * @param startTime when (as a Date timestamp) to start counting elapsed time for clock-time governance,
     * defaults to `Date.now()`
     * @param units threshold for minimum remaining governance units before rescheduling
     * @param minutes threshold for maximum number of minutes allowed to elapse before rescheduling
     * @example
     *
     * // defaults to 200 units threshold and starts elapsed time tracking at this invocation
     * sequence.takeWhile(autoReschedule())
     *
     */
    function autoReschedule(startTime, minutes, units) {
        return rescheduleIfNeeded(governanceRemains(startTime, minutes, units));
    }
    exports.autoReschedule = autoReschedule;
});
