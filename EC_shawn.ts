/**
 * Created by shawn on 4/7/16.
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import * as LogManager from './EC_Logger'

import * as format from 'N/format'
var log = LogManager.getLogger('default')



class Foo {
    log:LogManager.Logger

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


export = {

    onRequest: (params:any) => {
     
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

}
