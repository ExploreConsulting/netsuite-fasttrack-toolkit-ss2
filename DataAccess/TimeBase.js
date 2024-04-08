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
        define(["require", "exports", "N/record", "./Transaction", "./Record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TimeBase = void 0;
    /**
     * Created by asariego on 4/8/24.
     */
    const record = require("N/record");
    const Transaction_1 = require("./Transaction");
    const Record_1 = require("./Record");
    /**
     * NetSuite Time Record
     */
    class TimeBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.TIME_BILL; }
    }
    __decorate([
        Record_1.FieldType.select
    ], TimeBase.prototype, "approvalstatus", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimeBase.prototype, "casetaskevent", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimeBase.prototype, "class", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimeBase.prototype, "customer", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimeBase.prototype, "customform", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimeBase.prototype, "department", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimeBase.prototype, "employee", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TimeBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TimeBase.prototype, "hours", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], TimeBase.prototype, "isbillable", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], TimeBase.prototype, "isexempt", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], TimeBase.prototype, "isproductive", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], TimeBase.prototype, "isutilized", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimeBase.prototype, "item", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimeBase.prototype, "location", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], TimeBase.prototype, "memo", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TimeBase.prototype, "overriderate", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], TimeBase.prototype, "paidexternally", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimeBase.prototype, "payrollitem", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TimeBase.prototype, "price", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimeBase.prototype, "projecttaskassignment", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TimeBase.prototype, "rate", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], TimeBase.prototype, "rejectionnote", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimeBase.prototype, "serviceitem", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimeBase.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], TimeBase.prototype, "supervisorapproval", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], TimeBase.prototype, "timemodified", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimeBase.prototype, "timesheet", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimeBase.prototype, "timetype", void 0);
    __decorate([
        Record_1.FieldType.date
    ], TimeBase.prototype, "trandate", void 0);
    exports.TimeBase = TimeBase;
});
