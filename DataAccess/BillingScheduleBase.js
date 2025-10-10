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
    exports.BillingScheduleBase = exports.Recurrence = void 0;
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    const record = require("N/record");
    class Recurrence extends Sublist_1.SublistLine {
    }
    exports.Recurrence = Recurrence;
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], Recurrence.prototype, "amount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], Recurrence.prototype, "amountText", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], Recurrence.prototype, "count", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], Recurrence.prototype, "paymentterms", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], Recurrence.prototype, "recurrenceid", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], Recurrence.prototype, "recurrencedate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], Recurrence.prototype, "relativetoprevious", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], Recurrence.prototype, "units", void 0);
    /**
     * NetSuite Billing Schedule Record type with custom fields.
     */
    class BillingScheduleBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.BILLING_SCHEDULE; }
    }
    exports.BillingScheduleBase = BillingScheduleBase;
    __decorate([
        Record_1.FieldType.freeformtext
    ], BillingScheduleBase.prototype, "name", void 0);
    __decorate([
        Record_1.FieldType.decimalnumber
    ], BillingScheduleBase.prototype, "initialamount", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], BillingScheduleBase.prototype, "initialamountText", void 0);
    __decorate([
        Record_1.FieldType.select
    ], BillingScheduleBase.prototype, "initialterms", void 0);
    __decorate([
        Record_1.FieldType.select
    ], BillingScheduleBase.prototype, "frequency", void 0);
    __decorate([
        Record_1.FieldType.select
    ], BillingScheduleBase.prototype, "repeatevery", void 0);
    __decorate([
        Record_1.FieldType.select
    ], BillingScheduleBase.prototype, "numberremaining", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], BillingScheduleBase.prototype, "inarrears", void 0);
    __decorate([
        Record_1.FieldType.select
    ], BillingScheduleBase.prototype, "recurrenceterms", void 0);
    __decorate([
        Record_1.FieldType.sublist(Recurrence)
    ], BillingScheduleBase.prototype, "recurrence", void 0);
});
