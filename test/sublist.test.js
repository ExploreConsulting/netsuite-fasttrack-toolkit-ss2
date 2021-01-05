var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
        var SublistWithTextField = /** @class */ (function (_super) {
            __extends(SublistWithTextField, _super);
            function SublistWithTextField() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            __decorate([
                Sublist_1.SublistFieldType.freeformtext
            ], SublistWithTextField.prototype, "fooText", void 0);
            __decorate([
                Sublist_1.SublistFieldType.select
            ], SublistWithTextField.prototype, "foo", void 0);
            __decorate([
                Sublist_1.SublistFieldType.checkbox
            ], SublistWithTextField.prototype, "anotherfield", void 0);
            return SublistWithTextField;
        }(Sublist_1.SublistLine));
        test('read value from sublist property', function () {
            var fakeRec = record.create({ type: 'fake' });
            record.getSublistValue.mockReturnValue('some text');
            record.getLineCount.mockImplementation(function () { return 1; });
            var MyLine = /** @class */ (function (_super) {
                __extends(MyLine, _super);
                function MyLine() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    Sublist_1.SublistFieldType.freeformtext
                ], MyLine.prototype, "myfield", void 0);
                return MyLine;
            }(FakeSublistLine));
            var sut = new Sublist_1.Sublist(MyLine, fakeRec, 'fakesublist');
            expect(sut[0].myfield).toEqual('some text');
        });
        test('remove a line in the middle', function () {
            var fakeRec = record.create({ type: 'fake' });
            var lineCount = 10;
            record.getLineCount.mockImplementation(function () { return lineCount; });
            record.removeLine.mockImplementation(function () { return lineCount--; });
            var sut = new Sublist_1.Sublist(FakeSublistLine, fakeRec, 'fakesublist');
            // initial linecount should be  10 from test setup
            expect(sut.length).toBe(10);
            sut.removeLine(3, true);
            expect(sut.length).toBe(9);
            expect(record.removeLine.mock.calls.length).toBe(1);
            expect(record.removeLine).lastCalledWith({ sublistId: 'fakesublist', ignoreRecalc: true, line: 3 });
            // uncomment to view calls to removeLine() console.log(record.removeLine.mock.calls)
        });
        test('insert a line in the middle', function () {
            var fakeRec = record.create({ type: 'fake' });
            var lineCount = 10;
            record.getLineCount.mockImplementation(function () { return lineCount; });
            record.insertLine.mockImplementation(function () { return lineCount++; });
            var sut = new Sublist_1.Sublist(FakeSublistLine, fakeRec, 'fakesublist');
            // initial linecount should be  10 from test setup
            expect(sut.length).toBe(10);
            var newline = sut.addLine(true, 4);
            expect(newline._line).toEqual(4);
            expect(sut.length).toBe(11);
            expect(record.insertLine).toBeCalled();
            // uncomment to view calls to removeLine() console.log(record.removeLine.mock.calls)
        });
        test('insert a line', function () {
            var fakeRec = record.create({ type: 'fake' });
            var lineCount = 10;
            record.getLineCount.mockImplementation(function () { return lineCount; });
            record.insertLine.mockImplementation(function () { return lineCount++; });
            var sut = new Sublist_1.Sublist(FakeSublistLine, fakeRec, 'fakesublist');
            // initial linecount should be  10 from test setup
            expect(sut.length).toBe(10);
            // inserts line at the end by default
            var newline = sut.addLine();
            expect(newline).toHaveProperty('_line', 10);
            expect(sut.length).toBe(11);
            expect(record.insertLine).toBeCalled();
            //console.log('keys', Object.keys(sut))
            // uncomment to view calls to removeLine() console.log(record.removeLine.mock.calls)
        });
        test('insert a line beyond the end throws', function () {
            var fakeRec = record.create({ type: 'fake' });
            var lineCount = 10;
            record.getLineCount.mockImplementation(function () { return lineCount; });
            record.insertLine.mockImplementation(function () { return lineCount++; });
            var sut = new Sublist_1.Sublist(FakeSublistLine, fakeRec, 'fakesublist');
            // initial linecount should be  10 from test setup
            expect(sut.length).toBe(10);
            // inserts line at the end by default
            expect(function () { return sut.addLine(false, 22); }).toThrow();
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
            // uncomment to view calls to native removeLine() console.log(record.removeLine.mock.calls)
        }),
            test('getText() on field', function () {
                var fakeRec = record.create({ type: 'fake' });
                record.getSublistText.mockReturnValue('some text');
                record.getSublistValue.mockImplementation(function () { throw new Error(); });
                var sut = new SublistWithTextField('fakesublist', fakeRec, 0);
                sut.fooText;
                expect(record.getSublistText).toBeCalledTimes(1);
                expect(record.getValue).not.toHaveBeenCalled();
            }),
            test('getText() on field - dynamic record', function () {
                var fakeRec = record.create({ type: 'fake' });
                fakeRec.isDynamic = true;
                record.getSublistText.mockReturnValue('some text');
                record.getSublistValue.mockImplementation(function () { throw new Error(); });
                var sut = new SublistWithTextField('fakesublist', fakeRec, 0);
                sut.fooText;
                expect(record.getCurrentSublistText).toBeCalledTimes(1);
                expect(record.getSublistText).not.toHaveBeenCalled();
            }),
            test('setText() on field', function () {
                var fakeRec = record.create({ type: 'fake' });
                record.getSublistText.mockReturnValue('some text');
                record.getSublistValue.mockImplementation(function () { throw new Error(); });
                var sut = new SublistWithTextField('fakesublist', fakeRec, 0);
                sut.fooText = 'hello world';
                expect(record.setSublistText).toBeCalledWith({
                    'fieldId': 'foo',
                    'line': 0,
                    'sublistId': 'fakesublist',
                    'text': 'hello world'
                });
                expect(record.getValue).not.toHaveBeenCalled();
            });
        test('setText() on field - dynamic mode', function () {
            var fakeRec = record.create({ type: 'fake', isDynamic: true });
            record.getSublistText.mockReturnValue('some text');
            record.getSublistValue.mockImplementation(function () { throw new Error(); });
            var sut = new SublistWithTextField('fakesublist', fakeRec, 0);
            sut.fooText = 'hello world';
            expect(record.setCurrentSublistText).toBeCalledWith({
                'fieldId': 'foo',
                'ignoreFieldChange': false,
                'sublistId': 'fakesublist',
                'text': 'hello world'
            });
        });
        test('setText() on field - dynamic mode - ignore field changed', function () {
            var fakeRec = record.create({ type: 'fake', isDynamic: true });
            record.getSublistText.mockReturnValue('some text');
            record.getSublistValue.mockImplementation(function () { throw new Error(); });
            var sut = new SublistWithTextField('fakesublist', fakeRec, 0);
            sut.ignoreFieldChange = true;
            sut.fooText = 'hello world';
            expect(record.setCurrentSublistText).toBeCalledWith({
                'fieldId': 'foo',
                'ignoreFieldChange': true,
                'sublistId': 'fakesublist',
                'text': 'hello world'
            });
        });
        test('setValue() on field - dynamic mode - ignore field changed', function () {
            var fakeRec = record.create({ type: 'fake', isDynamic: true });
            var sut = new SublistWithTextField('fakesublist', fakeRec, 0);
            sut.ignoreFieldChange = true;
            sut.foo = 1;
            expect(record.setCurrentSublistValue).toBeCalledWith({
                'fieldId': 'foo',
                'ignoreFieldChange': true,
                'sublistId': 'fakesublist',
                'value': 1
            });
        });
        test('getField() - dynamic mode', function () {
            var fakeRec = record.create({ type: 'fake', isDynamic: true });
            record.getSublistField.mockReturnValue({});
            record.getSublistText.mockReturnValue('some text');
            record.getSublistValue.mockImplementation(function () { throw new Error(); });
            var sut = new Sublist_1.Sublist(SublistWithTextField, fakeRec, 'fakesublist');
            sut.getField('anotherfield');
            expect(record.getSublistField).toBeCalledWith({
                'fieldId': 'anotherfield',
                'sublistId': 'fakesublist',
                'line': 0
            });
        });
        test('toJSON in dynamic mode', function () {
            var fakeRec = record.create({ type: 'fake', isDynamic: true });
            var lineCount = 1;
            record.getLineCount.mockImplementation(function () { return lineCount; });
            var sut = new Sublist_1.Sublist(FakeSublistLine, fakeRec, 'fakesublist');
            // our sublist has zero _saved_ lines but since dynamic more a phantom line
            // exists (default new line at end of sublist
            var phantomLine = sut[1];
            expect(phantomLine).toBeDefined();
            // stringifying the sublist should not try to output the phantom line
            var json = JSON.stringify(sut);
            expect(json).not.toContainEqual('1'); // no key "1" in JSON since we only have line 0 saved
            expect(Object.keys(sut)).not.toContainEqual('1');
        });
    });
});
