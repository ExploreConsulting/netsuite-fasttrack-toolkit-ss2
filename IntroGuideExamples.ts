
//region load customer example

import * as record from "N/record"

var customer = record.load({
   type: record.Type.CUSTOMER,
   id: 1234
});

// loosly typed 'string' names for fields
var comments = customer.getValue({
   fieldId: 'comments'
})

var isinactive = customer.getValue({
   fieldId: 'isinactive'
})

var acustomfield = customer.getValue({
   fieldId: 'custbody_field'
})

var datecreated = customer.getValue({
   fieldId: 'datecreated'
})

if (!comments) {
   customer.setValue({fieldId: "comments", value: "hello world"})
}

import * as cust from "NFT/DataAccess/CustomerBase"
import {FieldType} from "./DataAccess/EC_nsdal"

namespace B {

   class Customer extends cust.Base {
      // define custom customer fields here, built-in fields are defined on the base
      @FieldType.freeformtext
      custbody_field: string
   }

// fields like comments, isinactive, phone are already defined on the customer object so no need for intermediate vars
   var customer = new Customer(1234)

   customer.isinactive
   customer.phone
   customer.datecreated // this is a Moment instance
   customer.custbody_field // string

   if (!customer.comments) customer.comments = "hello world"
}

//endregion

//region sublist example

var salesorder = record.load({
   type: record.Type.SALES_ORDER,
   id: 1234
})

var count = salesorder.getLineCount({
   sublistId:'item'
})

// build a collection of item id and quantity objects for all items on the salesorder
var itemInfo = [];

for ( var x = 0; x < count; x++) {
   var item = salesorder.getSublistValue({
      sublistId:'item',
      fieldId:'item',
      line:x
   })
   var quantity = salesorder.getSublistValue({
      sublistId:'item',
      fieldId:'quantity',
      line:x
   })
   itemInfo.push({
      item: item,
      quantity: quantity
   });
}


import * as so from "NFT/DataAccess/SalesOrderBase"
import {Sublist} from "NFT/DataAccess/EC_nsdal"
namespace C {

   class SalesOrder extends so.Base {
      // define a strongly typed item sublist
      item = new Sublist<so.ItemSublist>(so.ItemSublist,this.nsrecord,'item')
   }

   var salesorder = new SalesOrder(1234)
   salesorder.item // already a collection of line items with fields defined by so.ItemSublist
}


//endregion


//region logging
   import * as nslog from 'N/log'

   nslog.debug('title', 'details')
   nslog.audit('title', 'details')
   nslog.error('title', 'details')
   nslog.emergency('title', 'details')

import {DefaultLogger as log, logLevel} from "NFT/EC_Logger"

namespace NFT {

   // note method names are slightly different
   log.debug('title','details')
   log.info('title','details')
   log.warn('title','details')
   log.error('title','details')

   log.setLevel(logLevel.error) // only log errors and above

//endregion
}
