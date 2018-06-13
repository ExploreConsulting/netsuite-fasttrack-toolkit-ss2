/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

/*
this line adds lodash it as a silent dependency of this
module (in the correct path of ./lodash assuming lodash is installed in the same folder as this script)
*/

import * as moment from "moment"
import * as LogManager from './EC_Logger'
import {CustomerBase} from "./DataAccess/CustomerBase"
import {ItemSublist, SalesOrderBase} from "NFT/DataAccess/SalesOrderBase";
import * as _ from "lodash"
import * as nsdal from "./DataAccess/EC_nsdal"


let log = LogManager.DefaultLogger

class Customer extends CustomerBase {
   // just add 'Text' to the property name to get/set text value. 'subsidiary' property still exists
   // as the internal id value
   @nsdal.FieldType.select
   subsidiaryText: string

}

// the SalesOrderBase class has the item sublist fields already defined.
// you add fields that aren't already in SalesOrderBase here (e.g. custom fields, some less frequently used native fields)
class SalesOrder extends SalesOrderBase {

   @nsdal.FieldType.sublist(ItemSublist)
   item: nsdal.Sublist<ItemSublist>
}


function demoSalesOrderLineItems () {

   // load sales order internal id 123
   const so = new SalesOrder(123)

   // just some contrived examples to illustrate the ease of using the item sublist as an array

   // access first line item
   so.item[0].quantity = 1

   // you can also access the item row when saved as a variable reference - shorter code
   const line = so.item[0]
   line.rate = 20

   // get all line items over $50 amount
   const overFifty = _.filter(so.item, item=> item.amount > 50.00 )

   // increase quantity by 1 for all lines
   _.map(so.item, i => i.quantity += 1 )

   // find first line item with specific item
   const found = _.find(so.item, i => i.item = 123 )

   // ... can then access fields on the found line...
   // found.quantity
   // found.rate
   // found.itemtype
   // found.description
   // etc.

   // add a line item
   let newLine = so.item.addLine()
   newLine.item = 123
   newLine.quantity = 1
}

export = {

   onRequest: (req, resp) => {
      log.debug('are some true', _.some([true,true]))
      log.debug('hello world')
      let now = moment()
      now.add(1, 'day')
      // turn on debug logging for just the nsdal logger
      nsdal.log.setLevel(LogManager.logLevel.info)
      //log.debug('tomorrow is', now.format())

      let c = new Customer(227)

      log.info('subsidiary value', c.subsidiary)
      log.info('subsidiary text', c.subsidiaryText)

      c.comments = c.comments + _.random(1,100).toString()
      log.warn('warning', 'this is a warning')
      log.info('customer', c)
      let id = c.save()


   }
}
