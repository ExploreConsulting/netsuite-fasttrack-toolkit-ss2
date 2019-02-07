(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../EC_Logger"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogManager = require("../EC_Logger");
    // spy on all console.debug() calls
    var fakedebug = jest.spyOn(console, 'debug');
    var fakeinfo = jest.spyOn(console, 'info');
    var fakewarn = jest.spyOn(console, 'warn');
    var fakeerror = jest.spyOn(console, 'error');
    describe('basic logger tests', function () {
        var log = LogManager.DefaultLogger;
        beforeEach(function () { return LogManager.setLevel(LogManager.logLevel.debug); });
        it('should log something as debug', function () {
            log.debug('foo');
            // log format is <LOGLEVEL> [<LOGNAME>] <MESSAGE>
            expect(fakedebug).toHaveBeenLastCalledWith('DEBUG [default]', 'foo');
        });
        it('should log something as info', function () {
            log.setLevel(LogManager.logLevel.info);
            log.info('foo');
            // log format is <LOGLEVEL> [<LOGNAME>] <MESSAGE>
            expect(fakeinfo).toHaveBeenLastCalledWith('INFO [default]', 'foo');
        });
        it('should log something as warn', function () {
            log.warn('foo');
            // log format is <LOGLEVEL> [<LOGNAME>] <MESSAGE>
            expect(fakewarn).toHaveBeenLastCalledWith('WARN [default]', 'foo');
        });
        it('should log something as error', function () {
            log.error('foo');
            // log format is <LOGLEVEL> [<LOGNAME>] <MESSAGE>
            expect(fakeerror).toHaveBeenLastCalledWith('ERROR [default]', 'foo');
        });
        it('should NOT log "debug" level if loglevel is set higher than debug', function () {
            var log = LogManager.DefaultLogger;
            log.setLevel(LogManager.logLevel.info);
            log.debug('foo');
            expect(fakedebug).not.toHaveBeenCalled();
        });
        describe('AutoLogging', function () {
            // an object with a method, for which we'll autolog invocations
            var X = {
                dummy: function (arg) { return arg; }
            };
            it('should autolog arguments and return value', function () {
                LogManager.autoLogMethodEntryExit({ target: X, method: 'dummy' });
                // when invoked, by default should automatically log 'Entry' and 'Exit' lines describing the invocation
                X.dummy(4);
                expect(fakedebug).toBeCalledTimes(2);
                expect(fakedebug).toHaveBeenNthCalledWith(1, 'DEBUG [default]', 'Enter dummy() undefined', 'args: [4]');
                expect(fakedebug).toHaveBeenLastCalledWith('DEBUG [default]', 'Exit dummy():  undefined', 'returned: 4');
            });
        });
    });
});
