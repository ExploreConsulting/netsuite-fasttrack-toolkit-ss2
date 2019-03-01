import * as LogManager from '../EC_Logger'

// spy on all console.debug() calls
const fakedebug = jest.spyOn(console, 'debug')
const fakeinfo = jest.spyOn(console, 'info')
const fakewarn = jest.spyOn(console, 'warn')
const fakeerror = jest.spyOn(console, 'error')

describe('basic logger tests', () => {

   const log  = LogManager.DefaultLogger

   beforeEach(() => LogManager.setLevel(LogManager.logLevel.debug))

   it('should log something as debug', ()=> {
      log.debug('foo')
      // log format is <LOGLEVEL> [<LOGNAME>] <MESSAGE>
      expect(fakedebug).toHaveBeenLastCalledWith('DEBUG [default]','foo')
   })

   it('should log something as info', ()=> {

      log.setLevel(LogManager.logLevel.info)
      log.info('foo')
      // log format is <LOGLEVEL> [<LOGNAME>] <MESSAGE>
      expect(fakeinfo).toHaveBeenLastCalledWith('INFO [default]','foo')
   })

   it('should log something as warn', ()=> {
      log.warn('foo')
      // log format is <LOGLEVEL> [<LOGNAME>] <MESSAGE>
      expect(fakewarn).toHaveBeenLastCalledWith('WARN [default]','foo')
   })

   it('should log something as error', ()=> {
      log.error('foo')
      // log format is <LOGLEVEL> [<LOGNAME>] <MESSAGE>
      expect(fakeerror).toHaveBeenLastCalledWith('ERROR [default]','foo')
   })

   it('should NOT log "debug" level if loglevel is set higher than debug', ()=> {
      const log  = LogManager.DefaultLogger
      log.setLevel(LogManager.logLevel.info)
      log.debug('foo')
      expect(fakedebug).not.toHaveBeenCalled()
   })

   describe('AutoLogging', () => {

      // an object with a method, for which we'll autolog invocations
      const X = {
         dummy: function(arg:number) { return arg }
       }

      it('should autolog arguments and return value', () => {

         LogManager.autoLogMethodEntryExit({target:X, method: 'dummy'})

         // when invoked, by default should automatically log 'Entry' and 'Exit' lines describing the invocation
         X.dummy(4)

         expect(fakedebug).toBeCalledTimes(2)
         expect(fakedebug).toHaveBeenNthCalledWith(1, 'DEBUG [default]', 'Enter dummy() undefined', 'args: [4]')
         expect(fakedebug).toHaveBeenLastCalledWith('DEBUG [default]', 'Exit dummy():  undefined','returned: 4')
      })

   })
})
