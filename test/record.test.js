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
        define(["require", "exports", "../__mocks__/N/record", "../DataAccess/Record", "../DataAccess/Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var record = require("../__mocks__/N/record");
    var Record_1 = require("../DataAccess/Record");
    var Sublist_1 = require("../DataAccess/Sublist");
    describe('Record base tests', function () {
        test('getText() on field', function () {
            var fakeRec = record.create({ type: 'fake' });
            record.getText.mockReturnValue('some text');
            record.getValue.mockReturnValue(123);
            // this was a bug - a field with any of the characters in 'Text' got ALL such characters trimmed
            // hence a field named 'foot' would be retrieved as 'foo' which was wrong.
            var A = /** @class */ (function (_super) {
                __extends(A, _super);
                function A() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    Record_1.FieldType.select
                ], A.prototype, "foot", void 0);
                __decorate([
                    Record_1.FieldType.select
                ], A.prototype, "footText", void 0);
                return A;
            }(Record_1.NetsuiteRecord));
            var sut = new A(fakeRec);
            expect(sut.foot).toEqual(123);
            expect(sut.footText).toEqual('some text');
            expect(record.getText).toBeCalledWith({
                fieldId: 'foot'
            });
            expect(record.getValue).toBeCalledTimes(1);
        });
        test('getField() success', function () {
            var fakeRec = record.create({ type: 'fake' });
            record.getField.mockReturnValue({});
            // this was a bug - a field with any of the characters in 'Text' got ALL such characters trimmed
            // hence a field named 'foot' would be retrieved as 'foo' which was wrong.
            var A = /** @class */ (function (_super) {
                __extends(A, _super);
                function A() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    Record_1.FieldType.select
                ], A.prototype, "foot", void 0);
                __decorate([
                    Record_1.FieldType.select
                ], A.prototype, "footText", void 0);
                return A;
            }(Record_1.NetsuiteRecord));
            var sut = new A(fakeRec);
            // when you start typing a string here, you should get intellisense on field names
            // in our class A, we should see 'foot' and 'footText' in intellisense completion
            sut.getField('foot');
            expect(record.getField).toBeCalledWith({
                fieldId: 'foot'
            });
            expect(record.getField).toBeCalledTimes(1);
        });
        test('special *Sublist convention', function () {
            var FakeSublist = /** @class */ (function (_super) {
                __extends(FakeSublist, _super);
                function FakeSublist() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    Sublist_1.SublistFieldType.checkbox
                ], FakeSublist.prototype, "bar", void 0);
                return FakeSublist;
            }(Sublist_1.SublistLine));
            var A = /** @class */ (function (_super) {
                __extends(A, _super);
                function A() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    Record_1.FieldType.select
                ], A.prototype, "foot", void 0);
                __decorate([
                    Record_1.FieldType.sublist(FakeSublist)
                ], A.prototype, "footSublist", void 0);
                return A;
            }(Record_1.NetsuiteRecord));
            var fakeRec = record.create({ type: 'fake' });
            fakeRec.getLineCount.mockReturnValue(1);
            var sut = new A(fakeRec);
            expect(sut).toBeTruthy();
            sut.foot;
            sut.footSublist[0].bar;
            expect(record.getValue).toHaveBeenCalledTimes(1);
            expect(record.getSublistValue).toHaveBeenCalledWith({
                sublistId: 'foot',
                fieldId: 'bar',
                line: 0,
            });
        });
    });
});
