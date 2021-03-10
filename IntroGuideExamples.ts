
//region load customer example

import * as record from 'N/record'
import * as cust from './DataAccess/CustomerBase'
import { FieldType} from './DataAccess/Record'
import { Sublist } from './DataAccess/Sublist'
import * as so from './DataAccess/SalesOrderBase'
//region logging
import * as nslog from 'N/log'
import * as LogManager from './EC_Logger'
import { DefaultLogger as log, logLevel } from './EC_Logger'
import { LazySearch, nsSearchResult2obj } from './search'
import { Seq } from 'immutable'
import * as search from 'N/search'

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

namespace B {

   class Customer extends cust.CustomerBase {
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
var itemInfo : any[] = [];

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
   })
}

namespace C {

   class SalesOrder extends so.SalesOrderBase {

      @FieldType.sublist(so.ItemSublist)
      // define a strongly typed item sublist
      item : Sublist<so.ItemSublist>
   }

   var salesorder = new SalesOrder(1234)
   salesorder.item // already a collection of line items with fields defined by so.ItemSublist
}


//endregion

nslog.debug('title', 'details')
   nslog.audit('title', 'details')
   nslog.error('title', 'details')
   nslog.emergency('title', 'details')

namespace NFT {

   // note method names are slightly different
   log.debug('title','details')
   log.info('title','details')
   log.warn('title','details')
   log.error('title','details')

   log.setLevel(logLevel.error) // only log errors and above

//endregion
}

//region lazysearch

/**
 * Company           Explore Consulting
 * Copyright         2017 Explore Consulting, LLC
 * Description       Intercompany Eliminations Journal Entries
 * Functional Spec   https://docs.google.com/document/d/1f69K8uzQ4TQvltA3yrI_aDTSqB-0K8LV6K3_p0Xeq68/edit#
 **/
/**
 * @NApiVersion 2.0
 * @NScriptType Suitelet
 */

LogManager.getLogger(LazySearch.LOGNAME).setLevel(LogManager.logLevel.debug)


namespace X {

   export function onRequest(ctx) {
      switch (ctx.request.method) {
         case "GET":
            log.debug('GET request')

            Seq<search.Result>(LazySearch.load('730'))
               .skip(123)
               .take(1)
               .map<{}>(nsSearchResult2obj<{}>())
               .forEach(i=> log.debug('result',i))

            break
         case "POST":
            log.debug('POST request parms', ctx.request.parameters)
            break;
      }
   }

}

export = X

LogManager.autoLogMethodEntryExit({target: X, method: /\w+/}, {
   withGovernance: true,
   withProfiling: true
});

//endregion
