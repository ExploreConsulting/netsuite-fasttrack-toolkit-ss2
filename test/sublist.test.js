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
    const Sublist_1 = require("../DataAccess/Sublist");
    const record = require("../__mocks__/N/record");
    describe('Sublists', function () {
        class FakeSublistLine extends Sublist_1.SublistLine {
        }
        class SublistLineWithTextField extends Sublist_1.SublistLine {
        }
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], SublistLineWithTextField.prototype, "fooText", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], SublistLineWithTextField.prototype, "foo", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], SublistLineWithTextField.prototype, "anotherfield", void 0);
        test('read value from sublist property', () => {
            const fakeRec = record.create({ type: 'fake' });
            record.getSublistValue.mockReturnValue('some text');
            record.getLineCount.mockImplementation(() => 1);
            class MyLine extends FakeSublistLine {
            }
            __decorate([
                Sublist_1.SublistFieldType.freeformtext
            ], MyLine.prototype, "myfield", void 0);
            const sut = new Sublist_1.Sublist(MyLine, fakeRec, 'fakesublist');
            expect(sut[0].myfield).toEqual('some text');
        });
        test('remove a line in the middle', () => {
            const fakeRec = record.create({ type: 'fake' });
            let lineCount = 10;
            record.getLineCount.mockImplementation(() => lineCount);
            record.removeLine.mockImplementation(() => lineCount--);
            const sut = new Sublist_1.Sublist(FakeSublistLine, fakeRec, 'fakesublist');
            // initial linecount should be  10 from test setup
            expect(sut.length).toBe(10);
            sut.removeLine(3, true);
            expect(sut.length).toBe(9);
            expect(record.removeLine.mock.calls.length).toBe(1);
            expect(record.removeLine).lastCalledWith({ sublistId: 'fakesublist', ignoreRecalc: true, line: 3 });
            // uncomment to view calls to removeLine() console.log(record.removeLine.mock.calls)
        });
        test('insert a line in the middle', () => {
            const fakeRec = record.create({ type: 'fake' });
            let lineCount = 10;
            record.getLineCount.mockImplementation(() => lineCount);
            record.insertLine.mockImplementation(() => lineCount++);
            const sut = new Sublist_1.Sublist(FakeSublistLine, fakeRec, 'fakesublist');
            // initial linecount should be  10 from test setup
            expect(sut.length).toBe(10);
            const newline = sut.addLine(true, 4);
            expect(newline._line).toEqual(4);
            expect(sut.length).toBe(11);
            expect(record.insertLine).toBeCalled();
            // uncomment to view calls to removeLine() console.log(record.removeLine.mock.calls)
        });
        test('insert a line', () => {
            const fakeRec = record.create({ type: 'fake' });
            let lineCount = 10;
            record.getLineCount.mockImplementation(() => lineCount);
            record.insertLine.mockImplementation(() => lineCount++);
            const sut = new Sublist_1.Sublist(FakeSublistLine, fakeRec, 'fakesublist');
            // initial linecount should be  10 from test setup
            expect(sut.length).toBe(10);
            // inserts line at the end by default
            const newline = sut.addLine();
            expect(newline).toHaveProperty('_line', 10);
            expect(sut.length).toBe(11);
            expect(record.insertLine).toBeCalled();
            //console.log('keys', Object.keys(sut))
            // uncomment to view calls to removeLine() console.log(record.removeLine.mock.calls)
        });
        test('insert a line beyond the end throws', () => {
            const fakeRec = record.create({ type: 'fake' });
            let lineCount = 10;
            record.getLineCount.mockImplementation(() => lineCount);
            record.insertLine.mockImplementation(() => lineCount++);
            const sut = new Sublist_1.Sublist(FakeSublistLine, fakeRec, 'fakesublist');
            // initial linecount should be  10 from test setup
            expect(sut.length).toBe(10);
            // inserts line at the end by default
            expect(() => sut.addLine(false, 22)).toThrow();
        });
        test('remove all lines on an already empty sublist', () => {
            const fakeRec = record.create({ type: 'fake' });
            let lineCount = 0; // start with an empty sublist
            record.getLineCount.mockImplementation(() => lineCount);
            record.removeLine.mockImplementation(() => lineCount--);
            const sut = new Sublist_1.Sublist(FakeSublistLine, fakeRec, 'fakesublist');
            sut.removeAllLines();
            expect(sut.length).toBe(0);
            expect(record.removeLine).not.toBeCalled();
            // uncomment to view calls to native removeLine() console.log(record.removeLine.mock.calls)
        }),
            test('getText() on field', () => {
                const fakeRec = record.create({ type: 'fake' });
                record.getSublistText.mockReturnValue('some text');
                record.getSublistValue.mockImplementation(() => { throw new Error(); });
                const sut = new SublistLineWithTextField('fakesublist', fakeRec, 0);
                sut.fooText;
                expect(record.getSublistText).toBeCalledTimes(1);
                expect(record.getValue).not.toHaveBeenCalled();
            }),
            test('getText() on field - dynamic record', () => {
                const fakeRec = record.create({ type: 'fake' });
                fakeRec.isDynamic = true;
                record.getSublistText.mockReturnValue('some text');
                record.getSublistValue.mockImplementation(() => { throw new Error(); });
                const sut = new SublistLineWithTextField('fakesublist', fakeRec, 0);
                sut.fooText;
                expect(record.getCurrentSublistText).toBeCalledTimes(1);
                expect(record.getSublistText).not.toHaveBeenCalled();
            }),
            test('setText() on field', () => {
                const fakeRec = record.create({ type: 'fake' });
                record.getSublistText.mockReturnValue('some text');
                record.getSublistValue.mockImplementation(() => { throw new Error(); });
                const sut = new SublistLineWithTextField('fakesublist', fakeRec, 0);
                sut.fooText = 'hello world';
                expect(record.setSublistText).toBeCalledWith({
                    'fieldId': 'foo',
                    'line': 0,
                    'sublistId': 'fakesublist',
                    'text': 'hello world'
                });
                expect(record.getValue).not.toHaveBeenCalled();
            });
        test('setText() on field - dynamic mode', () => {
            const fakeRec = record.create({ type: 'fake', isDynamic: true });
            record.getSublistText.mockReturnValue('some text');
            record.getSublistValue.mockImplementation(() => { throw new Error(); });
            const sut = new SublistLineWithTextField('fakesublist', fakeRec, 0);
            sut.fooText = 'hello world';
            expect(record.setCurrentSublistText).toBeCalledWith({
                'fieldId': 'foo',
                'ignoreFieldChange': false,
                'sublistId': 'fakesublist',
                'text': 'hello world',
                'forceSyncSourcing': false
            });
        });
        test('setText() on field - dynamic mode - force sync sourcing on then off', () => {
            const fakeRec = record.create({ type: 'fake', isDynamic: true });
            record.getSublistText.mockReturnValue('some text');
            record.getSublistValue.mockImplementation(() => { throw new Error(); });
            const sut = new SublistLineWithTextField('fakesublist', fakeRec, 0);
            sut.forceSyncSourcing = true;
            sut.fooText = 'hello world';
            expect(record.setCurrentSublistText).toBeCalledWith({
                'fieldId': 'foo',
                'ignoreFieldChange': false,
                'sublistId': 'fakesublist',
                'text': 'hello world',
                'forceSyncSourcing': true
            });
            sut.forceSyncSourcing = false;
            sut.fooText = 'goodbye world';
            expect(record.setCurrentSublistText).toBeCalledWith({
                'fieldId': 'foo',
                'ignoreFieldChange': false,
                'sublistId': 'fakesublist',
                'text': 'goodbye world',
                'forceSyncSourcing': false
            });
        });
        test('setText() on field - dynamic mode - ignore field changed', () => {
            const fakeRec = record.create({ type: 'fake', isDynamic: true });
            record.getSublistText.mockReturnValue('some text');
            record.getSublistValue.mockImplementation(() => { throw new Error(); });
            const sut = new SublistLineWithTextField('fakesublist', fakeRec, 0);
            sut.ignoreFieldChange = true;
            sut.fooText = 'hello world';
            expect(record.setCurrentSublistText).toBeCalledWith({
                'fieldId': 'foo',
                'ignoreFieldChange': true,
                'sublistId': 'fakesublist',
                'text': 'hello world',
                'forceSyncSourcing': false
            });
        });
        test('setValue() on field - dynamic mode - ignore field changed', () => {
            const fakeRec = record.create({ type: 'fake', isDynamic: true });
            const sut = new SublistLineWithTextField('fakesublist', fakeRec, 0);
            sut.ignoreFieldChange = true;
            sut.foo = 1;
            expect(record.setCurrentSublistValue).toBeCalledWith({
                'fieldId': 'foo',
                'ignoreFieldChange': true,
                'sublistId': 'fakesublist',
                'value': 1,
                'forceSyncSourcing': false
            });
        });
        test('setValue() on field - dynamic mode - force sync sourcing on then off', () => {
            const fakeRec = record.create({ type: 'fake', isDynamic: true });
            const sut = new SublistLineWithTextField('fakesublist', fakeRec, 0);
            sut.forceSyncSourcing = true;
            sut.foo = 1;
            expect(record.setCurrentSublistValue).toBeCalledWith({
                'fieldId': 'foo',
                'ignoreFieldChange': false,
                'sublistId': 'fakesublist',
                'value': 1,
                'forceSyncSourcing': true
            });
            sut.forceSyncSourcing = false;
            sut.foo = 999;
            expect(record.setCurrentSublistValue).toBeCalledWith({
                'fieldId': 'foo',
                'ignoreFieldChange': false,
                'sublistId': 'fakesublist',
                'value': 999,
                'forceSyncSourcing': false
            });
        });
        test('getField() - dynamic mode', () => {
            const fakeRec = record.create({ type: 'fake', isDynamic: true });
            record.getSublistField.mockReturnValue({});
            record.getSublistText.mockReturnValue('some text');
            record.getSublistValue.mockImplementation(() => { throw new Error(); });
            const sut = new Sublist_1.Sublist(SublistLineWithTextField, fakeRec, 'fakesublist');
            sut.getField('anotherfield');
            expect(record.getSublistField).toBeCalledWith({
                'fieldId': 'anotherfield',
                'sublistId': 'fakesublist',
                'line': 0
            });
        });
        test('toJSON in dynamic mode', () => {
            const fakeRec = record.create({ type: 'fake', isDynamic: true });
            let lineCount = 1;
            record.getLineCount.mockImplementation(() => lineCount);
            const sut = new Sublist_1.Sublist(FakeSublistLine, fakeRec, 'fakesublist');
            // our sublist has zero _saved_ lines but since dynamic more a phantom line
            // exists (default new line at end of sublist
            const phantomLine = sut[1];
            expect(phantomLine).toBeDefined();
            // stringifying the sublist should not try to output the phantom line
            const json = JSON.stringify(sut);
            expect(json).not.toContainEqual('1'); // no key "1" in JSON since we only have line 0 saved
            expect(Object.keys(sut)).not.toContainEqual('1');
        });
        describe('toggling dynamic mode/standard mode api', function () {
            test('set standard mode on dynamic record', function () {
                const fakeRec = record.create({ type: 'fake', isDynamic: true });
                const sut = new Sublist_1.Sublist(SublistLineWithTextField, fakeRec, 'fakesublist');
                // temporarily turn on standard more
                sut.useDynamicModeAPI = false;
                sut[0].foo = 1;
                expect(record.setSublistValue).toBeCalledWith({
                    'fieldId': 'foo',
                    'sublistId': 'fakesublist',
                    'line': 0,
                    'value': 1
                });
                expect(record.setCurrentSublistValue).not.toHaveBeenCalled();
                // back to dynamic mode apis
                sut.useDynamicModeAPI = true;
                sut[0].foo = 1;
                expect(record.setCurrentSublistValue).toHaveBeenCalled();
            });
        });
    });
});
