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
        define(["require", "exports", "./Record", "N/record", "./Transaction"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChargeBase = void 0;
    /**
     * Created by asariego on 4/8/24.
     */
    const Record_1 = require("./Record");
    const record = require("N/record");
    const Transaction_1 = require("./Transaction");
    /**
     * NetSuite Charge
     */
    class ChargeBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.CHARGE; }
    }
    exports.ChargeBase = ChargeBase;
    __decorate([
        Record_1.FieldType.decimalnumber
    ], ChargeBase.prototype, "amount", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "billingaccount", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "billingitem", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "billto", void 0);
    __decorate([
        Record_1.FieldType.date
    ], ChargeBase.prototype, "chargedate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "chargetype", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "class", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], ChargeBase.prototype, "createddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "department", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ChargeBase.prototype, "description", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "invoice", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ChargeBase.prototype, "invoiceline", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "location", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "projecttask", void 0);
    __decorate([
        Record_1.FieldType.float
    ], ChargeBase.prototype, "quantity", void 0);
    __decorate([
        Record_1.FieldType.decimalnumber
    ], ChargeBase.prototype, "rate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "rule", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ChargeBase.prototype, "runid", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "salesorder", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "salesorderline", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "stage", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "subscriptionline", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "timerecord", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "transaction", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "transactionline", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ChargeBase.prototype, "use", void 0);
});
