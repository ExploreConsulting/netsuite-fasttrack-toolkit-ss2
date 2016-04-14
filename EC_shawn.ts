/**
 * Created by shawn on 4/7/16.
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

///<reference path="typings/browser.d.ts"/>


///<amd-dependency path='./lodash' name="_">

import * as LogManager from './EC_Logger'
import * as record from 'N/record'
import * as format from 'N/format'
import * as http from 'N/http'
import {Record} from "N/record";
import * as nsdal from "./EC_nsdal";


var log = LogManager.getLogger('default')

class Foo {
   log:LogManager.Logger
   // this is the a property
   a:string = undefined
   // this is the b prop
   b:string = undefined
   // this is property C, it is awesome.
   c:boolean = undefined
   d:boolean = undefined
   
    constructor() {
        this.log = LogManager.getLogger('foo')
    }

    dofoo() {
        this.log.debug('debug from foo', 'details')
        this.log.warn('warn from foo')
        this.log.info('info from foo')
        this.log.error('error from foo')
    }
}

class Bar {
    log:LogManager.Logger

    constructor() {
        this.log = LogManager.getLogger('bar')

       
    }

    dobar() {
        this.log.debug('debug from bar')
        this.log.warn('warn from bar')
        this.log.info('info from bar')
        this.log.error('error from bar')
    }
}

function doSomeLogging() {
   var f = new Foo()
   var b = new Bar()

   f.log.setLevel(LogManager.logLevel.debug)

   b.log.setLevel(LogManager.logLevel.warn)

   f.dofoo()
   b.dobar()

   f.log.setLevel(LogManager.logLevel.none)

   f.dofoo()

   b.dobar()

   log.debug('main script hello', 'world')
   log.info('main script hello', 'world')
   log.warn('main script hello', 'world')
   log.error('main script hello', 'world')
}

class Customer extends nsdal.CustomerBase {
   @nsdal.freeformtext
   companyname: string


}

function doSomeRecordStuff() {

   nsdal.log.setLevel(LogManager.logLevel.debug)

   var c = new Customer(1404)



   var newCustomer = new Customer()

   log.debug('new customer', _.toPlainObject(newCustomer))

   var r = record.load({ type: 'customer', id:1404})

   var existing = new Customer(r)

   log.debug('existing', _.toPlainObject(existing))

   log.debug('plainobject',_.toPlainObject(c))

   c.companyname = "new name"
   log.debug('after modification',_.pick(c,'companyname'))

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
