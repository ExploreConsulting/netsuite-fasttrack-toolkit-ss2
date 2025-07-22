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
        define(["require", "exports", "./Record", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BillingRevenueEventBase = void 0;
    const Record_1 = require("./Record");
    const record = require("N/record");
    /**
     * NetSuite Billing Revenue Event Record type with custom fields.
     */
    class BillingRevenueEventBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.BILLING_REVENUE_EVENT; }
    }
    exports.BillingRevenueEventBase = BillingRevenueEventBase;
    __decorate([
        Record_1.FieldType.select
    ], BillingRevenueEventBase.prototype, "transactionline", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], BillingRevenueEventBase.prototype, "transactionlineText", void 0);
    __decorate([
        Record_1.FieldType.select
    ], BillingRevenueEventBase.prototype, "projectrevenuerule", void 0);
    __decorate([
        Record_1.FieldType.select
    ], BillingRevenueEventBase.prototype, "eventtype", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], BillingRevenueEventBase.prototype, "eventtypeText", void 0);
    __decorate([
        Record_1.FieldType.select
    ], BillingRevenueEventBase.prototype, "eventpurpose", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], BillingRevenueEventBase.prototype, "eventpurposeText", void 0);
    __decorate([
        Record_1.FieldType.date
    ], BillingRevenueEventBase.prototype, "eventdate", void 0);
    __decorate([
        Record_1.FieldType.decimalnumber
    ], BillingRevenueEventBase.prototype, "quantity", void 0);
    __decorate([
        Record_1.FieldType.decimalnumber
    ], BillingRevenueEventBase.prototype, "amount", void 0);
});
