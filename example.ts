/**
 * Test file for SuiteScript 2.0
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

/*
this line adds lodash it as a silent dependency of this
module (in the correct path of ./lodash assuming lodash is installed in the same folder as this script)
*/

import * as LogManager from './EC_Logger'
import {CustomerBase} from "./DataAccess/CustomerBase"
import {ItemSublist, SalesOrderBase} from "./DataAccess/SalesOrderBase";
import { FieldType, NetsuiteRecord } from './DataAccess/Record'
import { Sublist } from './DataAccess/Sublist'
import * as _ from "lodash"


let log = LogManager.DefaultLogger

class Customer extends CustomerBase {
   // just add 'Text' to the property name to get/set text value. 'subsidiary' property still exists
   // as the internal id value
   @FieldType.select
   subsidiaryText: string

}

// the SalesOrderBase class has the item sublist fields already defined.
// you add fields that aren't already in SalesOrderBase here (e.g. custom fields, some less frequently used native fields)
class SalesOrder extends SalesOrderBase {

   @FieldType.sublist(ItemSublist)
   item: Sublist<ItemSublist>
}

// Example Custom Record definition
// see the CodeGeneration/ folder for ways to autogenerate classes for your custom records.
class MyCustomRecord extends NetsuiteRecord {
   static recordType() { return 'customrecord_myrecordid' }

   @FieldType.freeformtext
   custrecord_some_text: string
}

function demoCustomRecord () {
   // custom records work just like native records with NSDAL.
   const customRec = new MyCustomRecord(123)
   customRec.custrecord_some_text = 'hello world'
   customRec.save()
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
   const found = _.find(so.item, i => i.item == 123 )

   // ... can then access fields on the found line...
   // found.quantity
   // found.rate
   // found.itemtype
   // found.description
   // etc.

   // add a line item to end of sublist
   let newLine = so.item.addLine()
   newLine.item = 123
   newLine.quantity = 1

   // insert a line in the middle of the list
   const inserted = so.item.addLine(true, 2)
   newLine.item = 123
   newLine.quantity = 2
}

export = {

   onRequest: (req, resp) => {

      const c = new Customer(227)

      log.info('subsidiary value', c.subsidiary)
      log.info('subsidiary text', c.subsidiaryText)

      c.comments = c.comments + _.random(1,100).toString()
      log.warn('warning', 'this is a warning')
      log.info('customer', c)
      let id = c.save()
      log.debug(`saved record id: ${id}`)
      demoSalesOrderLineItems()
      demoCustomRecord()
   }
}


