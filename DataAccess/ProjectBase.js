/**
 * Represents an Item Fulfillment (itemfulfillment) transaction type in NetSuite
 */
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
    var Record_1 = require("./Record");
    var record = require("N/record");
    var Sublist_1 = require("./Sublist");
    /**
     * Project resource sublist
     */
    var JobResourcesSublist = /** @class */ (function (_super) {
        __extends(JobResourcesSublist, _super);
        function JobResourcesSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], JobResourcesSublist.prototype, "defaultcost", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], JobResourcesSublist.prototype, "email", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], JobResourcesSublist.prototype, "jobresource", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], JobResourcesSublist.prototype, "overridencost", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], JobResourcesSublist.prototype, "role", void 0);
        return JobResourcesSublist;
    }(Sublist_1.SublistLine));
    exports.JobResourcesSublist = JobResourcesSublist;
    /**
     * Project (job) base type
     */
    var ProjectBase = /** @class */ (function (_super) {
        __extends(ProjectBase, _super);
        function ProjectBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ProjectBase.recordType = record.Type.JOB;
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "allowtime", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "allowexpenses", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ProjectBase.prototype, "accountnumber", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ProjectBase.prototype, "actualtime", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "allowallresourcesfortasks", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "applyprojectexpensetypetoall", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "autoname", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "bbudgetshowcalculatedlines", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "bbudgetusecalculatedvalues", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ProjectBase.prototype, "billingschedule", void 0);
        __decorate([
            Record_1.FieldType.date
        ], ProjectBase.prototype, "calculatedenddate", void 0);
        __decorate([
            Record_1.FieldType.date
        ], ProjectBase.prototype, "calculatedenddatebaseline", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ProjectBase.prototype, "category", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "cbudgetshowcalculatedlines", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "cbudgetusecalculatedvalues", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], ProjectBase.prototype, "comments", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ProjectBase.prototype, "companyname", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ProjectBase.prototype, "contact", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ProjectBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ProjectBase.prototype, "customform", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], ProjectBase.prototype, "datecreated", void 0);
        __decorate([
            Record_1.FieldType.date
        ], ProjectBase.prototype, "enddate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ProjectBase.prototype, "entityid", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ProjectBase.prototype, "entitystatus", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], ProjectBase.prototype, "estimatedcost", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], ProjectBase.prototype, "estimatedgrossprofit", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ProjectBase.prototype, "estimatedgrossprofitpercent", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], ProjectBase.prototype, "estimatedlaborcost", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], ProjectBase.prototype, "estimatedlaborcostbaseline", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], ProjectBase.prototype, "estimatedlaborrevenue", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], ProjectBase.prototype, "estimatedrevenue", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ProjectBase.prototype, "estimatedtime", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ProjectBase.prototype, "estimatedtimeoverride", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ProjectBase.prototype, "estimatedtimeoverridebaseline", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ProjectBase.prototype, "estimaterevrectemplate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ProjectBase.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], ProjectBase.prototype, "fxrate", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "includecrmtasksintotals", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "isbasecurrency", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "isexempttime", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "isinactive", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "isjob", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "isproductivetime", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "isutilizedtime", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ProjectBase.prototype, "jobbillingtype", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ProjectBase.prototype, "jobitem", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], ProjectBase.prototype, "jobprice", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ProjectBase.prototype, "jobtype", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ProjectBase.prototype, "language", void 0);
        __decorate([
            Record_1.FieldType.date
        ], ProjectBase.prototype, "lastbaselinedate", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], ProjectBase.prototype, "lastmodifieddate", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "limittimetoassignees", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ProjectBase.prototype, "materializetime", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ProjectBase.prototype, "otherrelationships", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ProjectBase.prototype, "parent", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ProjectBase.prototype, "percentcomplete", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ProjectBase.prototype, "percenttimecomplete", void 0);
        __decorate([
            Record_1.FieldType.date
        ], ProjectBase.prototype, "projectedenddate", void 0);
        __decorate([
            Record_1.FieldType.date
        ], ProjectBase.prototype, "projectedenddatebaseline", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ProjectBase.prototype, "projectexpensetype", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ProjectBase.prototype, "stage", void 0);
        __decorate([
            Record_1.FieldType.date
        ], ProjectBase.prototype, "startdate", void 0);
        __decorate([
            Record_1.FieldType.date
        ], ProjectBase.prototype, "startdatebaseline", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ProjectBase.prototype, "subsidiary", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ProjectBase.prototype, "timeapproval", void 0);
        __decorate([
            Record_1.FieldType.decimalnumber
        ], ProjectBase.prototype, "timeremaining", void 0);
        __decorate([
            Record_1.FieldType.sublist(JobResourcesSublist)
        ], ProjectBase.prototype, "jobresources", void 0);
        return ProjectBase;
    }(Record_1.NetsuiteRecord));
    exports.ProjectBase = ProjectBase;
});
