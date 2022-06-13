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
    exports.TaskBase = void 0;
    const Record_1 = require("./Record");
    const record = require("N/record");
    /**
     * Project Task Base class
     */
    class TaskBase extends Record_1.NetsuiteRecord {
        /**
         * Record type
         */
        static recordType() {
            return record.Type.TASK;
        }
    }
    __decorate([
        Record_1.FieldType.checkbox
    ], TaskBase.prototype, "accesslevel", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TaskBase.prototype, "actualtime", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TaskBase.prototype, "assigned", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TaskBase.prototype, "company", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TaskBase.prototype, "contact", void 0);
    __decorate([
        Record_1.FieldType.date
    ], TaskBase.prototype, "duedate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TaskBase.prototype, "enddate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TaskBase.prototype, "endtime", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TaskBase.prototype, "endtimepicker", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TaskBase.prototype, "estimatedtime", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TaskBase.prototype, "estimatedtimeoverride", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TaskBase.prototype, "group", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], TaskBase.prototype, "message", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TaskBase.prototype, "milestone", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TaskBase.prototype, "owner", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TaskBase.prototype, "parent", void 0);
    __decorate([
        Record_1.FieldType.percent
    ], TaskBase.prototype, "percentcomplete", void 0);
    __decorate([
        Record_1.FieldType.percent
    ], TaskBase.prototype, "percenttimecomplete", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TaskBase.prototype, "priority", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TaskBase.prototype, "reminderminutes", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TaskBase.prototype, "remindertype", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], TaskBase.prototype, "sendemail", void 0);
    __decorate([
        Record_1.FieldType.date
    ], TaskBase.prototype, "startdate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TaskBase.prototype, "starttime", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TaskBase.prototype, "starttimepicker", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TaskBase.prototype, "status", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TaskBase.prototype, "supportcase", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], TaskBase.prototype, "timedevent", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TaskBase.prototype, "timeremaining", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TaskBase.prototype, "timezone", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TaskBase.prototype, "title", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TaskBase.prototype, "transaction", void 0);
    exports.TaskBase = TaskBase;
});
