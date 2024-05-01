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
    const Record_1 = require("./Record");
    const record = require("N/record");
    /**
     * Note record base class
     */
    class NoteBase extends Record_1.NetsuiteRecord {
        /**
         * Record type
         */
        static recordType() {
            return record.Type.NOTE;
        }
    }
    exports.NoteBase = NoteBase;
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
});
