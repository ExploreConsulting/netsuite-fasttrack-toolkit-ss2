/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

/* these two lines bring lodash into scope for compile time, and add it as a silent dependency of this
 module (in the correct path of ./lodash assuming lodash is installed in the same folder as this script)
 */
///<amd-dependency path="./lodash" name="_" />
///<amd-dependency path="./moment" name="moment" />

import * as LogManager from './EC_Logger'
import * as nsdal from "./DataAccess/EC_nsdal"
import {CustomerBase} from "./DataAccess/CustomerBase"
import {Invoice as Inv} from "./DataAccess/InvoiceBase"
import {Sublist} from "./DataAccess/EC_nsdal";

var log = LogManager.getLogger('default')


export = {
   onRequest: (req, resp) => {
      log.debug('hello world')

      nsdal.log.setLevel(LogManager.logLevel.debug)

      var c = new Customer(10)
      c.

      log.debug('customer', _.toPlainObject(c))

      c.custentity_multiselect = [1, 2]
      c.custentity_shawn_date = moment()

      log.debug('customer', _.pick(c,['custentity_shawn_date', 'companyname']))
      //c.save()

      var i = new Invoice(975583)
      _.each(i.item, (i) => log.debug('line', _.toPlainObject(i)))

   }
}

/**
 * Define Invoice transaction - any required sublists need to be defined like below
 */
class Invoice extends Inv.Base {

   @nsdal.FieldType.datetime
   datecreated:moment.Moment

   item = new Sublist<InvoiceLine>(InvoiceLine, this.nsrecord, 'item')

   
}

/**
 * the shape of invoice item sublist
 */
class InvoiceLine extends Inv.ItemSublist {
   @nsdal.SublistFieldType.decimalnumber
   quantity:number
}

/**
 * define the nsdal custom record for this client incl custom fields
 */
class Customer extends CustomerBase {
   @nsdal.FieldType.multiselect
   custentity_multiselect:number[]

   @nsdal.FieldType.datetime
   custentity_shawn_date : moment.Moment
}
