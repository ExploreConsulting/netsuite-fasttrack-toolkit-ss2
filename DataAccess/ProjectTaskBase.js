/**
 * Represents an Project Task record in NetSuite
 */
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
        define(["require", "exports", "./Record", "N/record", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProjectTaskBase = exports.AssigneeSublist = void 0;
    const Record_1 = require("./Record");
    const record = require("N/record");
    const Sublist_1 = require("./Sublist");
    /**
     * Project task resource assignment ( ) sublist
     */
    class AssigneeSublist extends Sublist_1.SublistLine {
    }
    exports.AssigneeSublist = AssigneeSublist;
    __decorate([
        Sublist_1.SublistFieldType.select
    ], AssigneeSublist.prototype, "billingclass", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], AssigneeSublist.prototype, "cost", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], AssigneeSublist.prototype, "estimatedwork", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], AssigneeSublist.prototype, "price", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], AssigneeSublist.prototype, "resource", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], AssigneeSublist.prototype, "serviceitem", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], AssigneeSublist.prototype, "unitcost", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], AssigneeSublist.prototype, "unitprice", void 0);
    __decorate([
        Sublist_1.SublistFieldType.percent
    ], AssigneeSublist.prototype, "units", void 0);
    /**
     * Project Task Base class
     */
    class ProjectTaskBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.PROJECT_TASK; }
    }
    exports.ProjectTaskBase = ProjectTaskBase;
    __decorate([
        Record_1.FieldType.float
    ], ProjectTaskBase.prototype, "actualwork", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ProjectTaskBase.prototype, "bbudgetshowcalculatedlines", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ProjectTaskBase.prototype, "bbudgetusecalculatedvalues", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ProjectTaskBase.prototype, "cbudgetshowcalculatedlines", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ProjectTaskBase.prototype, "cbudgetusecalculatedvalues", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ProjectTaskBase.prototype, "company", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ProjectTaskBase.prototype, "constrainttype", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ProjectTaskBase.prototype, "contact", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ProjectTaskBase.prototype, "customform", void 0);
    __decorate([
        Record_1.FieldType.date
    ], ProjectTaskBase.prototype, "enddate", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], ProjectTaskBase.prototype, "enddatebaseline", void 0);
    __decorate([
        Record_1.FieldType.float
    ], ProjectTaskBase.prototype, "estimatedwork", void 0);
    __decorate([
        Record_1.FieldType.float
    ], ProjectTaskBase.prototype, "estimatedworkbaseline", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], ProjectTaskBase.prototype, "eventid", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ProjectTaskBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.date
    ], ProjectTaskBase.prototype, "finishbydate", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], ProjectTaskBase.prototype, "fxrate", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ProjectTaskBase.prototype, "ismilestone", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ProjectTaskBase.prototype, "isoncriticalpath", void 0);
    __decorate([
        Record_1.FieldType.date
    ], ProjectTaskBase.prototype, "lateend", void 0);
    __decorate([
        Record_1.FieldType.date
    ], ProjectTaskBase.prototype, "latestart", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], ProjectTaskBase.prototype, "message", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ProjectTaskBase.prototype, "nonbillabletask", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ProjectTaskBase.prototype, "order", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ProjectTaskBase.prototype, "owner", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ProjectTaskBase.prototype, "parent", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ProjectTaskBase.prototype, "percenttimecomplete", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ProjectTaskBase.prototype, "priority", void 0);
    __decorate([
        Record_1.FieldType.float
    ], ProjectTaskBase.prototype, "remainingwork", void 0);
    __decorate([
        Record_1.FieldType.float
    ], ProjectTaskBase.prototype, "slackminutes", void 0);
    __decorate([
        Record_1.FieldType.date
    ], ProjectTaskBase.prototype, "startdate", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], ProjectTaskBase.prototype, "startdatebaseline", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ProjectTaskBase.prototype, "starttime", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ProjectTaskBase.prototype, "status", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ProjectTaskBase.prototype, "title", void 0);
    __decorate([
        Record_1.FieldType.sublist(AssigneeSublist)
    ], ProjectTaskBase.prototype, "assignee", void 0);
});
