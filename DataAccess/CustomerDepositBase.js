/**
 * Base Customer Deposit (customerdeposit) definition
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
        define(["require", "exports", "./Record", "./Transaction", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerDepositBase = void 0;
    const Record_1 = require("./Record");
    const Transaction_1 = require("./Transaction");
    const record = require("N/record");
    /**
     * NetSuite Customer Deposit Record 'customerdeposit'
     */
    class CustomerDepositBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.CUSTOMER_DEPOSIT; }
    }
    __decorate([
        Record_1.FieldType.select
    ], CustomerDepositBase.prototype, "account", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CustomerDepositBase.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CustomerDepositBase.prototype, "customer", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CustomerDepositBase.prototype, "paymentmethod", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CustomerDepositBase.prototype, "salesorder", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CustomerDepositBase.prototype, "payment", void 0);
    exports.CustomerDepositBase = CustomerDepositBase;
});
