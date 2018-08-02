import * as moment from "./moment"
import * as runtime from "N/runtime"
import {DefaultLogger as log} from "./EC_Logger"
import * as task from "N/task"

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
export const governanceRemains = (starttime = moment(), minutes = 45, units = 200) => () => {
   let remainingUnits = runtime.getCurrentScript().getRemainingUsage()
   const outOfUnits = remainingUnits < units
   const elapsedMinutes = moment.duration(moment(starttime).diff(moment.now())).abs().asMinutes()
   const outOfTime = elapsedMinutes > minutes // enforced max is 60, use 45 to be safe

   const ok = !outOfUnits && !outOfTime
   log.debug(`governance remains? ${ok}`, `elapsed time (m) ${elapsedMinutes.toFixed(3)}, units remaining ${remainingUnits}`)

   return ok
}

/**
 * Reschedules the current script using the same deployment id if we're out of governance
 * @param params optional script parameters to provide to the newly scheduled script
 * @param governancePredicate governance checker - if it returns false then script will reschedule.
 * typically this would be your invocation of `governanceRemains()`
 * @example
 *
 * results.takeWhile( rescheduleIfNeeded(governanceRemains) ).filter(...).map(...)
 */
export function rescheduleIfNeeded(governancePredicate: () => boolean, params?:object) {
   const outOfGovernance = !governancePredicate()
   if (outOfGovernance) {
      task.create({
         taskType: task.TaskType.SCHEDULED_SCRIPT,
         scriptId: runtime.getCurrentScript().id,
         deploymentId:runtime.getCurrentScript().deploymentId,
         params:params
      }).submit()
   }

   return outOfGovernance
}



