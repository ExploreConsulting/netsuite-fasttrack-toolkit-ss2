/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */


///<amd-dependency path="./lodash" name="_" />

import * as LogManager from './EC_Logger'
import * as record from 'N/record'
import * as format from 'N/format'
import * as http from 'N/http'
import * as nsdal from "DataAccess/EC_nsdal";

var log = LogManager.getLogger('default')

class Customer extends nsdal.CustomerBase {
   @nsdal.FieldType.freeformtext
   companyname: string
}

function doSomeRecordStuff() {

   nsdal.log.setLevel(LogManager.logLevel.debug)

   var c = new Customer(1397)



   //var newCustomer = new Customer

   //log.debug('new customer', _.toPlainObject(newCustomer))

   var r = record.load({ type: record.Type.CUSTOMER, id:1397})
   r.save()
//   var existing = new Customer(r)

  // log.debug('existing', _.toPlainObject(existing))

  // log.debug('plainobject',_.toPlainObject(c))

   // c.companyname = "new name"
   // log.debug('after modification',_.pick(c,'companyname'))

  // var id = c.save()
}


export = {

   onRequest: (params:{request:http.ServerRequest, response:http.ServerResponse}) => {
      

//      doSomeLogging()

      // var r: any = record.load({type:'customer', id:1315})
      //
      // var id = r.save();

      //
      // var options = { fieldId:'phone'}
      // var pone    = r.getValue(options)
      // var p       = r.phone
      //
      // log.debug('customer', r)
      // log.debug('customer getvalue phone', pone)
      // log.debug('customer.phone', r.phone)
      //
      // params.response.write({output:JSON.stringify(r)})
      //
      // var x = new Customer()
      //
      // for (p in x) {
      //    log.debug('prop', p)
      // }
      doSomeRecordStuff()
   }

}
