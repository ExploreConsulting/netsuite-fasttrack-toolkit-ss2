/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

/* these two lines bring lodash into scope for compile time, and add it as a silent dependency of this
 module (in the correct path of ./lodash assuming lodash is installed in the same folder as this script)
 */
///<amd-dependency path="./NFT-SS2-0.1.0/lodash" name="_" />
///<amd-dependency path="./NFT-SS2-0.1.0/moment" name="moment" />

import * as LogManager from './NFT-SS2-0.1.0/EC_Logger'
import * as customer from "./NFT-SS2-0.1.0/DataAccess/CustomerBase"
import * as nsdal from "./NFT-SS2-0.1.0/DataAccess/EC_nsdal"

var log = LogManager.DefaultLogger

/**
 * define the nsdal custom record for this client including a couple custom fields
 */
class Customer extends customer.Base {
   @nsdal.FieldType.multiselect
   custentity_multiselect:number[]

   @nsdal.FieldType.date
   custentity_shawn_date : moment.Moment
}


export = {

   onRequest: (req, resp) => {

      log.debug('hello world')

      // turn on debug logging for just the nsdal logger
      nsdal.log.setLevel(LogManager.logLevel.debug)

      // load customer internal id 10
      var c = new Customer(1542)

      // strongly typed field access
     // c.companyname = 'a new company name'
      // c.custentity_multiselect = [1, 2]
      c.custentity_shawn_date = moment()
      log.debug('nsrecord', c.nsrecord)
      // persist our changes
      c.save();

      // just log a couple properties from our customer object
      log.debug('customer', _.pick(c,['isperson', 'companyname']))

   }
}

// /**
//  * Define Invoice transaction - any required sublists need to be defined like below
//  */
// class Invoice extends nsdal.Invoice.Base {
//
//    @nsdal.FieldType.datetime
//    datecreated:moment.Moment
//
//    item = new nsdal.Sublist<InvoiceLine>(InvoiceLine, this.nsrecord, 'item')
//
//
// }
//
// /**
//  * the shape of invoice item sublist
//  */
// class InvoiceLine extends nsdal.Invoice.ItemSublist {
//    @nsdal.SublistFieldType.decimalnumber
//    quantity:number
// }
