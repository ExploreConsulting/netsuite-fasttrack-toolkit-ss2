/**
 * Represents the Revenue Arrangement NetSuite record (used with ARM)
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
        define(["require", "exports", "./Record", "./Sublist", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // dummy comment for tsdoc
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    /**
     * The 'revenueelement' sublist on Revenue Arrangement records
     */
    var RevenueElementSublist = /** @class */ (function (_super) {
        __extends(RevenueElementSublist, _super);
        function RevenueElementSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
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
        return RevenueElementSublist;
    }(Sublist_1.SublistLine));
    exports.RevenueElementSublist = RevenueElementSublist;
    /**
     * The Revenue Arrangement record type in NetSuite.
     * The records browser (2018.1) does not mention the `revenueelement` sublist but the NS help does.
     */
    var RevenueArrangementBase = /** @class */ (function (_super) {
        __extends(RevenueArrangementBase, _super);
        function RevenueArrangementBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RevenueArrangementBase.recordType = record.Type.REVENUE_ARRANGEMENT;
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
        return RevenueArrangementBase;
    }(Record_1.NetsuiteRecord));
    exports.RevenueArrangementBase = RevenueArrangementBase;
});
