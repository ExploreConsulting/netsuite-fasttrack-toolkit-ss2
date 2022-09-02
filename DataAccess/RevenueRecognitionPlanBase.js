/**
 * NetSuite Revenue Recognition Plan record. (revenueplan)
 * @module
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
        define(["require", "exports", "./Record", "./Sublist", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RevenueRecognitionPlanBase = exports.PlannedRevenueSublist = void 0;
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    const record = require("N/record");
    class PlannedRevenueSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], PlannedRevenueSublist.prototype, "amount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], PlannedRevenueSublist.prototype, "dateexecuted", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PlannedRevenueSublist.prototype, "deferredrevenueaccount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], PlannedRevenueSublist.prototype, "isrecognized", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], PlannedRevenueSublist.prototype, "journal", void 0);
    __decorate([
        Sublist_1.SublistFieldType.percent
    ], PlannedRevenueSublist.prototype, "percentrecognizedinperiod", void 0);
    __decorate([
        Sublist_1.SublistFieldType.percent
    ], PlannedRevenueSublist.prototype, "percenttotalrecognized", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PlannedRevenueSublist.prototype, "plannedperiod", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PlannedRevenueSublist.prototype, "recognitionaccount", void 0);
    exports.PlannedRevenueSublist = PlannedRevenueSublist;
    /**
     * NetSuite Revenue Recognition Plan record. (revenueplan)
     */
    class RevenueRecognitionPlanBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.REVENUE_PLAN; }
    }
    __decorate([
        Record_1.FieldType.currency
    ], RevenueRecognitionPlanBase.prototype, "amount", void 0);
    __decorate([
        Record_1.FieldType.select
    ], RevenueRecognitionPlanBase.prototype, "catchupperiod", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], RevenueRecognitionPlanBase.prototype, "comments", void 0);
    __decorate([
        Record_1.FieldType.select
    ], RevenueRecognitionPlanBase.prototype, "createdfrom", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], RevenueRecognitionPlanBase.prototype, "exchangerate", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], RevenueRecognitionPlanBase.prototype, "holdrevenuerecognition", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], RevenueRecognitionPlanBase.prototype, "initialamount", void 0);
    __decorate([
        Record_1.FieldType.select
    ], RevenueRecognitionPlanBase.prototype, "item", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], RevenueRecognitionPlanBase.prototype, "recognitionperiod", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], RevenueRecognitionPlanBase.prototype, "recordnumber", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], RevenueRecognitionPlanBase.prototype, "remainingdeferredbalance", void 0);
    __decorate([
        Record_1.FieldType.select
    ], RevenueRecognitionPlanBase.prototype, "revenueplantype", void 0);
    __decorate([
        Record_1.FieldType.select
    ], RevenueRecognitionPlanBase.prototype, "revenuerecognitionrule", void 0);
    __decorate([
        Record_1.FieldType.date
    ], RevenueRecognitionPlanBase.prototype, "revrecenddate", void 0);
    __decorate([
        Record_1.FieldType.date
    ], RevenueRecognitionPlanBase.prototype, "revrecstartdate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], RevenueRecognitionPlanBase.prototype, "status", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], RevenueRecognitionPlanBase.prototype, "terminmonths", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], RevenueRecognitionPlanBase.prototype, "totalrecognized", void 0);
    __decorate([
        Record_1.FieldType.sublist(PlannedRevenueSublist)
    ], RevenueRecognitionPlanBase.prototype, "plannedrevenue", void 0);
    exports.RevenueRecognitionPlanBase = RevenueRecognitionPlanBase;
});
