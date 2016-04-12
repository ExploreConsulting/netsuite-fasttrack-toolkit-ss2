/**
 * Created by shawn on 4/7/16.
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import * as LogManager from './EC_Logger'
import * as record from 'N/record'
import * as format from 'N/format'
import * as http from 'N/http'
import {Record} from "./N/record";

var log = LogManager.getLogger('default')


class X {
   a:string = undefined
   b:string = undefined
   c:number = undefined
   d:string = undefined
   e:boolean = undefined
}

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
         let l = new X()
    }

    dofoo() {
        this.log.debug('debug from foo', 'details')
        this.log.warn('warn from foo')
        this.log.info('info from foo')
        this.log.error('error from foo')

       if (this.d) this.log('d is defined')
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

   format.format({
      type: format.Type.CHECKBOX,
      value: "foo"
   })

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

export = {



    onRequest: (params:{request:http.ServerRequest, response:http.ServerResponse}) => {
     
      doSomeLogging()

       var r: any = record.load({type:'customer', id:1315})

       var options = { fieldid:'phone'}
       var pone    = r.getValue(options)
       var p       = r.phone
         
       log.debug('customer', r)
       log.debug('customer.phone', r.phone)

       params.response.write({output:JSON.stringify(r)})
    }

}


class CustomerBase {
     _record:Record
      get phone() {
         return  this._phone
      }
   
   constructor(private _phone:string){}   
}

class Customer extends  CustomerBase {
   companyname:string
}

var x = new Customer()

x.phone = '45'
x.companyname = 'sdfsa'
 
