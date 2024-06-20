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
        define(["require", "exports", "./Record", "N/record", "./Sublist", "./Transaction"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChargeRuleBase = exports.ResourcesSublist = void 0;
    /**
     * Charge Rule Base Record
     */
    const Record_1 = require("./Record");
    const record = require("N/record");
    const Sublist_1 = require("./Sublist");
    const Transaction_1 = require("./Transaction");
    /**
     * Charge Rule 'resourcerateoverride' Sublist
     */
    class ResourcesSublist extends Sublist_1.SublistLine {
    }
    exports.ResourcesSublist = ResourcesSublist;
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ResourcesSublist.prototype, "name", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ResourcesSublist.prototype, "rate", void 0);
    /**
     * NetSuite Charge Rule
     */
    class ChargeRuleBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.CHARGE_RULE; }
    }
    exports.ChargeRuleBase = ChargeRuleBase;
    __decorate([
        Record_1.FieldType.decimalnumber
    ], ChargeRuleBase.prototype, "amount", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeRuleBase.prototype, "billingitem", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], ChargeRuleBase.prototype, "caphours", void 0);
    __decorate([
        Record_1.FieldType.decimalnumber
    ], ChargeRuleBase.prototype, "capmoney", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeRuleBase.prototype, "captype", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeRuleBase.prototype, "chargeruletype", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeRuleBase.prototype, "customform", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], ChargeRuleBase.prototype, "description", void 0);
    __decorate([
        Record_1.FieldType.date
    ], ChargeRuleBase.prototype, "endbydate", void 0);
    __decorate([
        Record_1.FieldType.float
    ], ChargeRuleBase.prototype, "expamtmultiplier", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ChargeRuleBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ChargeRuleBase.prototype, "frequency", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ChargeRuleBase.prototype, "isinactive", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ChargeRuleBase.prototype, "name", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ChargeRuleBase.prototype, "noenddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeRuleBase.prototype, "project", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeRuleBase.prototype, "projecttask", void 0);
    __decorate([
        Record_1.FieldType.float
    ], ChargeRuleBase.prototype, "ratemultiplier", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeRuleBase.prototype, "rateroundingtype", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeRuleBase.prototype, "ratesourcetype", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], ChargeRuleBase.prototype, "ruleorder", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeRuleBase.prototype, "saleunit", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], ChargeRuleBase.prototype, "savedsearch", void 0);
    __decorate([
        Record_1.FieldType.date
    ], ChargeRuleBase.prototype, "scheduledate", void 0);
    __decorate([
        Record_1.FieldType.date
    ], ChargeRuleBase.prototype, "seriesstartdate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeRuleBase.prototype, "stage", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ChargeRuleBase.prototype, "stopifcapped", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeRuleBase.prototype, "unitstype", void 0);
    __decorate([
        Record_1.FieldType.sublist(ResourcesSublist)
    ], ChargeRuleBase.prototype, "resourcerateoverride", void 0);
});
