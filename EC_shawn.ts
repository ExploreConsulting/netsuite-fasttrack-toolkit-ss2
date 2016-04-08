/**
 * Created by shawn on 4/7/16.
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import * as LogManager from './EC_Logger'

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


        LogManager.Log.d('from the main script', 'details from main script default logger')

        f.dofoo()

        b.dobar()

        f.log.setLevel(LogManager.logLevel.none)

        f.dofoo()

        b.dobar()
    }

}