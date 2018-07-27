import * as moment from "./moment"
import * as runtime from "N/runtime"
import {DefaultLogger as log} from "./EC_Logger"

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

