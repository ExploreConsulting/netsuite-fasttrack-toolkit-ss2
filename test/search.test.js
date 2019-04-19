(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../search", "immutable"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var search_1 = require("../search");
    var immutable_1 = require("immutable");
    describe('nsSearchResult2obj', function () {
        /**
         *
         * @param colname column internal id
         * @param label optional label for column
         * @param value what value (getValue()) should the result have?
         * @param text what text (getText()) value should the result have?
         */
        function getFakeSearchResult(colname, label, value, text) {
            return {
                id: '1',
                getValue: jest.fn().mockReturnValueOnce(value),
                getText: jest.fn().mockReturnValueOnce(text),
                recordType: 'recordType',
                columns: [{
                        name: colname,
                        label: label
                    }]
            };
        }
        test('defaults to column name if label is undefined', function () {
            var noLabelResult = getFakeSearchResult('foo', undefined);
            // default useLabels
            var x = search_1.nsSearchResult2obj()(noLabelResult);
            expect(x).toHaveProperty('foo');
        });
        test('uses column label by default', function () {
            var labeledResult = getFakeSearchResult('foo', 'fooLabel');
            // default useLabels
            var x = search_1.nsSearchResult2obj()(labeledResult);
            expect(x).toHaveProperty('fooLabel');
        });
        test('uses column label if useLabels is true', function () {
            var labeledResult = getFakeSearchResult('foo', 'fooLabel');
            // explicitly set useLabels = true
            var x = search_1.nsSearchResult2obj(true)(labeledResult);
            expect(x).toHaveProperty('fooLabel');
        });
        test('uses column name if useLabels is false', function () {
            var labeledResult = getFakeSearchResult('foo', 'fooLabel');
            // default useLabels
            var x = search_1.nsSearchResult2obj(false)(labeledResult);
            expect(x).toHaveProperty('foo');
            expect(x).not.toHaveProperty('fooLabel');
        });
        test('does not generate xxxText field if text value is falsey', function () {
            var labeledResult = getFakeSearchResult('foo', 'fooLabel', 'value', undefined);
            // default useLabels
            var x = search_1.nsSearchResult2obj()(labeledResult);
            expect(x).toHaveProperty('fooLabel');
            expect(x).not.toHaveProperty('fooLabelText');
        });
        test('generates xxxText field if text value truthy', function () {
            var labeledResult = getFakeSearchResult('foo', 'fooLabel', 'value', 'value text');
            // default useLabels
            var x = search_1.nsSearchResult2obj()(labeledResult);
            expect(x).toHaveProperty('fooLabel', 'value');
            expect(x).toHaveProperty('fooLabelText', 'value text');
        });
        test('two column result generates xxxText field only if text value truthy', function () {
            var labeledResult = getFakeSearchResult('foo', 'fooLabel', 'value', 'value text');
            labeledResult.columns.push({ name: 'bar', label: undefined });
            // mock the second call to getValue() to return 5 (for the 'bar' property)
            var mockGetValue = labeledResult.getValue;
            mockGetValue.mockReturnValueOnce(5);
            // default useLabels = true
            var x = search_1.nsSearchResult2obj()(labeledResult);
            expect(x).toHaveProperty('fooLabel', 'value');
            expect(x).toHaveProperty('fooLabelText', 'value text');
            expect(x).toEqual({
                id: '1',
                fooLabel: 'value',
                fooLabelText: 'value text',
                bar: 5
                // note no 'barText' here
            });
        });
    });
    describe('ImuutableJS behavior', function () {
        test('indirect toString() of Seq causes eager eval', function () {
            var alwaysTrue = jest.fn(function (val) {
                console.log("alwaysTrue called with value " + val);
                return true;
            });
            immutable_1.Seq.of(1, 2, 3, 4, 5)
                .takeWhile(alwaysTrue)
                // subtle issue - this causes repeated eager evaluation due to serializing the 3rd argument passed
                .forEach(console.log);
            // above forEach() passes value, key, and the *entire iterable* to console.log. console.log then proceeds to
            // convert its given arguments to strings. When toString() is called on the third param (the iterable sequence)
            // it forces eager evaluation of the whole sequence because a Seq() has toString() defined to do just that.
            //
            // So each value of the sequence is first passed through takeWhile() predicate (alwaysTrue()) then the
            // entire sequence is passed through alwaysTrue() again as it's being serialized to [1,2,3,4,5]. This results
            // in 6 invocations of alwaysTrue() for each element - once as expected by the forEach() and 5 more as we
            // reserialize the entire sequence (1..5)
            // see next test for workaround
            expect(alwaysTrue).toBeCalledTimes(5 * 6);
        });
        test('how to avoid eager eval of Seq', function () {
            var alwaysTrue = jest.fn(function (val) {
                console.log("alwaysTrue called with value " + val);
                return true;
            });
            immutable_1.Seq.of(1, 2, 3, 4, 5)
                .takeWhile(alwaysTrue)
                // arity-1 function will NOT cause repeated eager evaluation of the sequence 1..5
                // because console.log only proceses the value, not also receiving the key and iterable
                .forEach(function (x) { return console.log(x); });
            // above forEach() passes just value to console.log
            expect(alwaysTrue).toBeCalledTimes(5);
        });
        test('behavior of groupBy', function () {
            var taker = jest.fn(function (val) {
                console.log("taker called with value " + val + ", length " + val.size);
                return val.size === 1;
            });
            var sideEffect = jest.fn(function (val) {
                console.log("side effect called with value " + val);
            });
            immutable_1.Seq.of(1, 2, 3, 4, 4, 5, 5)
                // groupBy returns a keyed sequence (<key, value>) that for some reason I don't understand
                // invokes the .map() *eagerly* (though we do know groupBy() itself must be eager)
                .groupBy(function (x) { return x; })
                .takeWhile(taker)
                .forEach(function (x) { return sideEffect(x); });
            // see the console log here - all calls to take() happen before any calls to sideEffect()
            expect(taker).toBeCalledTimes(4);
            // expect our side effect to only be called 3 times due to .takeWhile()
            expect(sideEffect).toBeCalledTimes(3);
            console.log('---- BETTER/EXPECTED BEHAVIOR ---');
            immutable_1.Seq.of(1, 2, 3, 4, 4, 5, 5)
                // groupBy returns a keyed sequence (<key, value>) that for some reason I don't understand
                // invokes the .map() *eagerly* (though we do know groupBy() itself must be eager)
                .groupBy(function (x) { return x; })
                .valueSeq() // converting to a valueSeq Here gets us back into lazy eval
                .takeWhile(taker)
                .forEach(function (x) { return sideEffect(x); });
            // see console output from above - now take is called then sideEffect as expected,
            // once per each passing value.
        });
    });
});
