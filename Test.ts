/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */


import * as record from "N/record"
import * as LogManager from './EC_Logger'
import * as nsdal from "./EC_nsdal"

var log = LogManager.getLogger('default')

class Customer extends nsdal.CustomerBase {
   @nsdal.freeformtext
   companyname:string
}

export = {
   onRequest: (req,resp) => {

         // var r = record.load({ type: record.Type.CUSTOMER, id:1359})
         // var id = r.save(); // UNEXPECTED ERROR

         var c = new Customer(1359)
         var id = c.save()

         log.debug('loaded and saved record', id)
      
   }
}
