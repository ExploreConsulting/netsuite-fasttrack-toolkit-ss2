/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

/* these two lines bring lodash into scope for compile time, and add it as a silent dependency of this
 module (in the correct path of ./lodash assuming lodash is installed in the same folder as this script)
 */
///<reference path="typings/browser.d.ts"/>
///<amd-dependency path="./lodash" name="_" />
///<amd-dependency path="./moment" name="moment" />

import * as LogManager from './EC_Logger'
import * as nsdal from "./EC_nsdal"

var log = LogManager.getLogger('default')

/**
 * define the nsdal custom record for this client incl custom fields
 */
class Customer extends nsdal.CustomerBase {
   @nsdal.FieldType.multiselect
   custentity_multiselect:number[]

   @nsdal.FieldType.datetime
   custentity_shawn_date : moment.Moment
}

export = {
   onRequest: (req, resp) => {

      // var r = record.load({ type: record.Type.CUSTOMER, id:10})
      // var id = r.save(); // UNEXPECTED ERROR

      var c = new Customer(10)



      log.debug('customer', _.toPlainObject(c))

      log.debug('isperson', c.nsrecord.getValue({fieldId: 'isperson'}))

      c.custentity_multiselect = [1, 2]

      c.custentity_shawn_date = moment()
      log.debug('customer', _.toPlainObject(c))
      c.save()

   }
}
