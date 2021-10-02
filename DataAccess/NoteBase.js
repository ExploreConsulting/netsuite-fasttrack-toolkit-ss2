var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
        define(["require", "exports", "./Record", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NoteBase = void 0;
    /**
     * Base class for Note record
     */
    var Record_1 = require("./Record");
    var record = require("N/record");
    /**
     * Note record base class
     */
    var NoteBase = /** @class */ (function (_super) {
        __extends(NoteBase, _super);
        function NoteBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Record type
         */
        NoteBase.recordType = function () {
            return record.Type.NOTE;
        };
        __decorate([
            Record_1.FieldType.select
        ], NoteBase.prototype, "accountingperiod", void 0);
        __decorate([
            Record_1.FieldType.select
        ], NoteBase.prototype, "author", void 0);
        __decorate([
            Record_1.FieldType.select
        ], NoteBase.prototype, "direction", void 0);
        __decorate([
            Record_1.FieldType.select
        ], NoteBase.prototype, "entity", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], NoteBase.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.select
        ], NoteBase.prototype, "folder", void 0);
        __decorate([
            Record_1.FieldType.select
        ], NoteBase.prototype, "item", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], NoteBase.prototype, "lastmodifieddate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], NoteBase.prototype, "media", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], NoteBase.prototype, "note", void 0);
        __decorate([
            Record_1.FieldType.date
        ], NoteBase.prototype, "notedate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], NoteBase.prototype, "notetype", void 0);
        __decorate([
            Record_1.FieldType.select
        ], NoteBase.prototype, "record", void 0);
        __decorate([
            Record_1.FieldType.select
        ], NoteBase.prototype, "recordtype", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], NoteBase.prototype, "time", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], NoteBase.prototype, "title", void 0);
        __decorate([
            Record_1.FieldType.select
        ], NoteBase.prototype, "topic", void 0);
        __decorate([
            Record_1.FieldType.select
        ], NoteBase.prototype, "transaction", void 0);
        return NoteBase;
    }(Record_1.NetsuiteRecord));
    exports.NoteBase = NoteBase;
});
