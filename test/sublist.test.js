var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../DataAccess/Sublist", "../__mocks__/N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Sublist_1 = require("../DataAccess/Sublist");
    var record = require("../__mocks__/N/record");
    describe('Sublists', function () {
        var FakeSublistLine = /** @class */ (function (_super) {
            __extends(FakeSublistLine, _super);
            function FakeSublistLine() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return FakeSublistLine;
        }(Sublist_1.SublistLine));
        test('remove all lines results in zero length sublist', function () {
            var fakeRec = record.create({ type: 'fake' });
            var lineCount = 10;
            record.getLineCount.mockImplementation(function () { return lineCount; });
            record.removeLine.mockImplementation(function () { return lineCount--; });
            var sut = new Sublist_1.Sublist(FakeSublistLine, fakeRec, 'fakesublist');
            // initial linecount should be  10 from test setup
            expect(sut.length).toBe(10);
            sut.removeAllLines();
            expect(sut.length).toBe(0);
            expect(record.removeLine.mock.calls.length).toBe(10);
            expect(record.removeLine).lastCalledWith({ sublistId: 'fakesublist', ignoreRecalc: true, line: 0 });
            // uncomment to view calls to removeLine() console.log(record.removeLine.mock.calls)
        });
        test('remove all lines on an already empty sublist', function () {
            var fakeRec = record.create({ type: 'fake' });
            var lineCount = 0; // start with an empty sublist
            record.getLineCount.mockImplementation(function () { return lineCount; });
            record.removeLine.mockImplementation(function () { return lineCount--; });
            var sut = new Sublist_1.Sublist(FakeSublistLine, fakeRec, 'fakesublist');
            sut.removeAllLines();
            expect(sut.length).toBe(0);
            expect(record.removeLine).not.toBeCalled();
            // uncomment to view calls to removeLine() console.log(record.removeLine.mock.calls)
        });
    });
});
