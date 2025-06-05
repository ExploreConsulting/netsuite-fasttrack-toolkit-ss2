import * as LogManager from '../EC_Logger'
import { autolog } from '../EC_Logger'

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

      it('should autolog a function on an object; arguments and return value', () => {
         const X = { dummy: autolog( function dummy(arg:number) { return arg }) }

         // when invoked, by default should automatically log 'Entry' and 'Exit' lines describing the invocation
         X.dummy(4)

         expect(fakedebug).toHaveBeenCalledTimes(2)
         expect(fakedebug).toHaveBeenNthCalledWith(1, 'DEBUG [default]', 'Enter dummy() undefined', [4])
         expect(fakedebug).toHaveBeenLastCalledWith('DEBUG [default]', 'Exit dummy():  undefined',4)
      })

      it('should autolog a plain function expression; arguments and return value', () => {
         // note the function passed to autolog() must be named, otherwise the log will not show the function name
         const dummy = autolog( function dummy(arg:number) { return arg })

         // when invoked, by default should automatically log 'Entry' and 'Exit' lines describing the invocation
         dummy(4)

         expect(fakedebug).toHaveBeenCalledTimes(2)
         expect(fakedebug).toHaveBeenNthCalledWith(1, 'DEBUG [default]', 'Enter dummy() undefined', [4])
         expect(fakedebug).toHaveBeenLastCalledWith('DEBUG [default]', 'Exit dummy():  undefined',4)
      })

      it('should autolog method timing', () => {
         const dummy = autolog(function dummy(arg:number) { return arg }, { withProfiling:true })
         const fakedebug = jest.spyOn(console, 'debug')


         // when invoked, by default should automatically log 'Entry' and 'Exit' lines describing the invocation
         dummy(4)

         expect(fakedebug).toHaveBeenCalledTimes(2)
         expect(fakedebug).toHaveBeenNthCalledWith(1, 'DEBUG [default]', 'Enter dummy() undefined', [4])
         expect(fakedebug).toHaveBeenLastCalledWith('DEBUG [default]', 'Exit dummy(): 0ms = 0.00 minutes undefined',4)
      })

      it('should autolog for class methods', () => {
         expect(fakedebug).not.toHaveBeenCalled()
         class A {
            dummy (arg:number) { return arg }
         }
         // it should log for method calls on an instance of that class.
         const a = new A()
         // replace the dummy method with an autologged version
         a.dummy = autolog(a.dummy)

         // when invoked, by default should automatically log 'Entry' and 'Exit' lines describing the invocation
         a.dummy(4)

         expect(fakedebug).toHaveBeenCalledTimes(2)
         expect(fakedebug).toHaveBeenNthCalledWith(1, 'DEBUG [default]', 'Enter dummy() undefined', [4])
         expect(fakedebug).toHaveBeenLastCalledWith('DEBUG [default]', 'Exit dummy():  undefined',4)
      })
   })
})
