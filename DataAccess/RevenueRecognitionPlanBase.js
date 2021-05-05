/**
 * NetSuite Revenue Recognition Plan record. (revenueplan)
 */
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
        define(["require", "exports", "./Record", "./Sublist", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RevenueRecognitionPlanBase = exports.PlannedRevenueSublist = void 0;
    /**
     * dummy comment for tsdoc
     */
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    var PlannedRevenueSublist = /** @class */ (function (_super) {
        __extends(PlannedRevenueSublist, _super);
        function PlannedRevenueSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
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
        return PlannedRevenueSublist;
    }(Sublist_1.SublistLine));
    exports.PlannedRevenueSublist = PlannedRevenueSublist;
    /**
     * NetSuite Revenue Recognition Plan record. (revenueplan)
     */
    var RevenueRecognitionPlanBase = /** @class */ (function (_super) {
        __extends(RevenueRecognitionPlanBase, _super);
        function RevenueRecognitionPlanBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RevenueRecognitionPlanBase.recordType = function () { return record.Type.REVENUE_PLAN; };
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
        return RevenueRecognitionPlanBase;
    }(Record_1.NetsuiteRecord));
    exports.RevenueRecognitionPlanBase = RevenueRecognitionPlanBase;
});
