(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./moment", "N/runtime", "./EC_Logger", "N/task"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var moment = require("./moment");
    var runtime = require("N/runtime");
    var EC_Logger_1 = require("./EC_Logger");
    var task = require("N/task");
    /**
     * returns a predicate function which returns true if we're not out of governance, false if we have reached time
     * remaining and/or units thresholds.
     * @param starttime when to start counting elapsed time for clock-time governance, defaults to 'now'
     * @param units threshold for minimum remaining governance units
     * @param minutes threshold for maximum number of minutes allowed to elapse
     * @example
     *
     * // defaults to 200 units threshold and starts elapsed time tracking at this invocation
     * sequence.takeWhile(governanceRemains())
     *
     */
    exports.governanceRemains = function (starttime, minutes, units) {
        if (starttime === void 0) { starttime = moment(); }
        if (minutes === void 0) { minutes = 45; }
        if (units === void 0) { units = 200; }
        return function () {
            var remainingUnits = runtime.getCurrentScript().getRemainingUsage();
            var outOfUnits = remainingUnits < units;
            var elapsedMinutes = moment.duration(moment(starttime).diff(moment.now())).abs().asMinutes();
            var outOfTime = elapsedMinutes > minutes; // enforced max is 60, use 45 to be safe
            var ok = !outOfUnits && !outOfTime;
            EC_Logger_1.DefaultLogger.debug("governance remains? " + ok, "elapsed time (m) " + elapsedMinutes.toFixed(3) + ", units remaining " + remainingUnits);
            return ok;
        };
    };
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
});
