(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../EC_Logger", "../EC_Logger"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const LogManager = require("../EC_Logger");
    const EC_Logger_1 = require("../EC_Logger");
    // spy on all console.debug() calls
    const fakedebug = jest.spyOn(console, 'debug');
    const fakeinfo = jest.spyOn(console, 'info');
    const fakewarn = jest.spyOn(console, 'warn');
    const fakeerror = jest.spyOn(console, 'error');
    describe('basic logger tests', () => {
        const log = LogManager.DefaultLogger;
        beforeEach(() => LogManager.setLevel(LogManager.logLevel.debug));
        it('should log something as debug', () => {
            log.debug('foo');
            // log format is <LOGLEVEL> [<LOGNAME>] <MESSAGE>
            expect(fakedebug).toHaveBeenLastCalledWith('DEBUG [default]', 'foo');
        });
        it('should log something as info', () => {
            log.setLevel(LogManager.logLevel.info);
            log.info('foo');
            // log format is <LOGLEVEL> [<LOGNAME>] <MESSAGE>
            expect(fakeinfo).toHaveBeenLastCalledWith('INFO [default]', 'foo');
        });
        it('should log something as warn', () => {
            log.warn('foo');
            // log format is <LOGLEVEL> [<LOGNAME>] <MESSAGE>
            expect(fakewarn).toHaveBeenLastCalledWith('WARN [default]', 'foo');
        });
        it('should log something as error', () => {
            log.error('foo');
            // log format is <LOGLEVEL> [<LOGNAME>] <MESSAGE>
            expect(fakeerror).toHaveBeenLastCalledWith('ERROR [default]', 'foo');
        });
        it('should NOT log "debug" level if loglevel is set higher than debug', () => {
            const log = LogManager.DefaultLogger;
            log.setLevel(LogManager.logLevel.info);
            log.debug('foo');
            expect(fakedebug).not.toHaveBeenCalled();
        });
        describe('AutoLogging', () => {
            it('should autolog a function on an object; arguments and return value', () => {
                const X = { dummy: (0, EC_Logger_1.autolog)(function dummy(arg) { return arg; }) };
                // when invoked, by default should automatically log 'Entry' and 'Exit' lines describing the invocation
                X.dummy(4);
                expect(fakedebug).toHaveBeenCalledTimes(2);
                expect(fakedebug).toHaveBeenNthCalledWith(1, 'DEBUG [default]', 'Enter dummy() undefined', [4]);
                expect(fakedebug).toHaveBeenLastCalledWith('DEBUG [default]', 'Exit dummy():  undefined', 4);
            });
            it('should autolog a plain function expression; arguments and return value', () => {
                // note the function passed to autolog() must be named, otherwise the log will not show the function name
                const dummy = (0, EC_Logger_1.autolog)(function dummy(arg) { return arg; });
                // when invoked, by default should automatically log 'Entry' and 'Exit' lines describing the invocation
                dummy(4);
                expect(fakedebug).toHaveBeenCalledTimes(2);
                expect(fakedebug).toHaveBeenNthCalledWith(1, 'DEBUG [default]', 'Enter dummy() undefined', [4]);
                expect(fakedebug).toHaveBeenLastCalledWith('DEBUG [default]', 'Exit dummy():  undefined', 4);
            });
            it('should autolog method timing', () => {
                const dummy = (0, EC_Logger_1.autolog)(function dummy(arg) { return arg; }, { withProfiling: true });
                const fakedebug = jest.spyOn(console, 'debug');
                // when invoked, by default should automatically log 'Entry' and 'Exit' lines describing the invocation
                dummy(4);
                expect(fakedebug).toHaveBeenCalledTimes(2);
                expect(fakedebug).toHaveBeenNthCalledWith(1, 'DEBUG [default]', 'Enter dummy() undefined', [4]);
                expect(fakedebug).toHaveBeenLastCalledWith('DEBUG [default]', 'Exit dummy(): 0ms = 0.00 minutes undefined', 4);
            });
            it('should autolog for class methods', () => {
                expect(fakedebug).not.toHaveBeenCalled();
                class A {
                    dummy(arg) { return arg; }
                }
                // it should log for method calls on an instance of that class.
                const a = new A();
                // replace the dummy method with an autologged version
                a.dummy = (0, EC_Logger_1.autolog)(a.dummy);
                // when invoked, by default should automatically log 'Entry' and 'Exit' lines describing the invocation
                a.dummy(4);
                expect(fakedebug).toHaveBeenCalledTimes(2);
                expect(fakedebug).toHaveBeenNthCalledWith(1, 'DEBUG [default]', 'Enter dummy() undefined', [4]);
                expect(fakedebug).toHaveBeenLastCalledWith('DEBUG [default]', 'Exit dummy():  undefined', 4);
            });
            it('should preserve `this` context for class instance methods', () => {
                class Counter {
                    constructor() {
                        this.count = 0;
                    }
                    increment(val) {
                        this.count += val;
                        return this.count;
                    }
                }
                const counter = new Counter();
                // Wrap the method with autolog
                counter.increment = (0, EC_Logger_1.autolog)(counter.increment);
                // Call the method and check that `this.count` is updated
                const result = counter.increment(5);
                expect(result).toBe(5);
                expect(counter.count).toBe(5);
            });
        });
        describe('autoLogMethodEntryExit Backwards Compatability', () => {
            function getTarget() {
                return {
                    dummy: function (arg) { return arg; }
                };
            }
            it('should autolog arguments and return value BackwardsComp', () => {
                const X = getTarget();
                LogManager.autoLogMethodEntryExit({ target: X, method: 'dummy' });
                // when invoked, by default should automatically log 'Entry' and 'Exit' lines describing the invocation
                X.dummy(5);
                expect(fakedebug).toBeCalledTimes(2);
                expect(fakedebug).toHaveBeenNthCalledWith(1, 'DEBUG [default]', 'Enter dummy() undefined', [5]);
                expect(fakedebug).toHaveBeenLastCalledWith('DEBUG [default]', 'Exit dummy():  undefined', 5);
            });
            it('should autolog method timing BackwardsComp', () => {
                const X = getTarget();
                const fakedebug = jest.spyOn(console, 'debug');
                LogManager.autoLogMethodEntryExit({ target: X, method: /\w+/ }, { withProfiling: true });
                // when invoked, by default should automatically log 'Entry' and 'Exit' lines describing the invocation
                X.dummy(4);
                expect(fakedebug).toBeCalledTimes(2);
                expect(fakedebug).toHaveBeenNthCalledWith(1, 'DEBUG [default]', 'Enter dummy() undefined', [4]);
                expect(fakedebug).toHaveBeenLastCalledWith('DEBUG [default]', 'Exit dummy(): 0ms = 0.00 minutes undefined', 4);
            });
            it('should autolog for class methods BackwardsComp', () => {
                expect(fakedebug).not.toHaveBeenCalled();
                class A {
                    dummy(arg) { return arg; }
                }
                // it should log for method calls on an instance of that class.
                const a = new A();
                // if you pass a class
                LogManager.autoLogMethodEntryExit({ target: a, method: /\w+/ });
                // when invoked, by default should automatically log 'Entry' and 'Exit' lines describing the invocation
                a.dummy(4);
                expect(fakedebug).toBeCalledTimes(2);
                expect(fakedebug).toHaveBeenNthCalledWith(1, 'DEBUG [default]', 'Enter dummy() undefined', [4]);
                expect(fakedebug).toHaveBeenLastCalledWith('DEBUG [default]', 'Exit dummy():  undefined', 4);
            });
        });
    });
});
