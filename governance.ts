import * as runtime from "N/runtime"
import {DefaultLogger as log} from "./EC_Logger"
import * as task from "N/task"

/**
 * returns a predicate function which returns true if we're not out of governance, false if we have reached time
 * remaining and/or units thresholds.
 * @param startTime when to start counting elapsed time for clock-time governance, ms since the epoch (e.g. Date.now())
 * @param units threshold for minimum remaining governance units
 * @param minutes threshold for maximum number of minutes allowed to elapse.
 *                Note: If not setting a minute value, pass {undefined} or a very high minute value. Using {null} will
 *                      create undesired behavior (i.e., it will return false when comparing the elapsed time to null)
 *
 * @example
 *
 * // defaults to 200 units threshold and starts elapsed time tracking at this invocation
 * sequence.takeWhile(governanceRemains())
 *
 */
export function governanceRemains (startTime = Date.now(), minutes = 45, units = 200) { return () => {
   let remainingUnits = runtime.getCurrentScript().getRemainingUsage()
   const outOfUnits = remainingUnits < units
   const elapsedSeconds = (Date.now() - startTime)/1000
   const elapsedMinutes =  elapsedSeconds / 60
   const outOfTime = elapsedMinutes > minutes // enforced max is 60, use 45 to be safe
   const ok = !outOfUnits && !outOfTime
   log.debug(`governance remains? ${ok}`, `elapsed time (m) ${elapsedMinutes.toFixed(3)}, units remaining ${remainingUnits}`)

   return ok
}}

/**
 * Reschedules the current script using the same deployment id if we're out of governance
 * @param params optional script parameters to provide to the newly scheduled script
 * @param paramsCallback optional callback that will supply the params object. This can be useful if you have
 * parameters data that is updated after the point rescheduleIfNeeded is executed.
 * @param governancePredicate governance checker - if it returns false then script will reschedule.
 * typically this would be your invocation of `governanceRemains()`
 * @example
 * results.takeWhile( rescheduleIfNeeded(governanceRemains()) ).filter(...).map(...)
 * @returns a function that returns the same boolean that the governancePredicate() does
 * ( so it can be invoked by takeWhile() as well)
 *
 */
export function rescheduleIfNeeded(governancePredicate: () => boolean, params?: object, paramsCallback?: () => {}) {
   return () => {
      const governanceRemains = governancePredicate()
      if (!governanceRemains) {
         const effectiveParams = paramsCallback ? paramsCallback() : params
         const taskID = task.create({
            taskType: task.TaskType.SCHEDULED_SCRIPT,
            scriptId: runtime.getCurrentScript().id,
            deploymentId: runtime.getCurrentScript().deploymentId,
            params: effectiveParams
         }).submit()
         log.info('out of governance, rescheduling',
            `Task ID ${taskID} with parameters ${JSON.stringify(effectiveParams)}` )
      }
      return governanceRemains
   }
}

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
export function autoReschedule (startTime?:number, minutes?:number, units?: number) {
   return rescheduleIfNeeded(governanceRemains(startTime, minutes, units))
}
