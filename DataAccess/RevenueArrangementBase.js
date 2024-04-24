/**
 * Represents the Revenue Arrangement NetSuite record (used with ARM)
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
    exports.RevenueArrangementBase = exports.RevenueElementSublist = void 0;
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    const record = require("N/record");
    /**
     * The 'revenueelement' sublist on Revenue Arrangement records
     */
    class RevenueElementSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.select
    ], RevenueElementSublist.prototype, "allocationtype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], RevenueElementSublist.prototype, "amortizationenddate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], RevenueElementSublist.prototype, "amortizationstartdate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], RevenueElementSublist.prototype, "fairvalue", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], RevenueElementSublist.prototype, "calculatedamount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], RevenueElementSublist.prototype, "contractexpenseacct", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], RevenueElementSublist.prototype, "contractexpenseoffsetacct", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], RevenueElementSublist.prototype, "costamortizationamount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], RevenueElementSublist.prototype, "deferralaccount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], RevenueElementSublist.prototype, "revrecenddate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], RevenueElementSublist.prototype, "fairvalueoverride", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], RevenueElementSublist.prototype, "forecaststartdate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], RevenueElementSublist.prototype, "forecastenddate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], RevenueElementSublist.prototype, "isvsoeprice", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], RevenueElementSublist.prototype, "permitdiscount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.longtext
    ], RevenueElementSublist.prototype, "referenceid", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], RevenueElementSublist.prototype, "recognitionaccount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], RevenueElementSublist.prototype, "returnofelement", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], RevenueElementSublist.prototype, "revenueelement", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], RevenueElementSublist.prototype, "revenueallocationgroup", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], RevenueElementSublist.prototype, "allocationamount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], RevenueElementSublist.prototype, "revenuerecognitionrule", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], RevenueElementSublist.prototype, "revrecstartdate", void 0);
    exports.RevenueElementSublist = RevenueElementSublist;
    /**
     * The Revenue Arrangement record type in NetSuite.
     * The records browser (2018.1) does not mention the `revenueelement` sublist but the NS help does.
     */
    class RevenueArrangementBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.REVENUE_ARRANGEMENT; }
    }
    __decorate([
        Record_1.FieldType.select
    ], RevenueArrangementBase.prototype, "accountingbook", void 0);
    __decorate([
        Record_1.FieldType.select
    ], RevenueArrangementBase.prototype, "class", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], RevenueArrangementBase.prototype, "compliant", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], RevenueArrangementBase.prototype, "contrevhandlingtriggered", void 0);
    __decorate([
        Record_1.FieldType.select
    ], RevenueArrangementBase.prototype, "department", void 0);
    __decorate([
        Record_1.FieldType.select
    ], RevenueArrangementBase.prototype, "location", void 0);
    __decorate([
        Record_1.FieldType.longtext
    ], RevenueArrangementBase.prototype, "memo", void 0);
    __decorate([
        Record_1.FieldType.select
    ], RevenueArrangementBase.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.sublist(RevenueElementSublist)
    ], RevenueArrangementBase.prototype, "revenueelement", void 0);
    exports.RevenueArrangementBase = RevenueArrangementBase;
});
