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
    exports.TimesheetBase = void 0;
    /**
     * Created by asariego on 4/8/24.
     */
    const record = require("N/record");
    const Transaction_1 = require("./Transaction");
    const Record_1 = require("./Record");
    /**
     * NetSuite Time Record
     */
    class TimesheetBase extends Transaction_1.TransactionBase {
        static recordType() {
            return record.Type.TIME_SHEET;
        }
    }
    exports.TimesheetBase = TimesheetBase;
    __decorate([
        Record_1.FieldType.select
    ], TimesheetBase.prototype, "approvalstatus", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimesheetBase.prototype, "customform", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimesheetBase.prototype, "employee", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], TimesheetBase.prototype, "enddate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TimesheetBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], TimesheetBase.prototype, "startdate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimesheetBase.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TimesheetBase.prototype, "timeGridList", void 0);
    __decorate([
        Record_1.FieldType.decimalnumber
    ], TimesheetBase.prototype, "totalHours", void 0);
});
