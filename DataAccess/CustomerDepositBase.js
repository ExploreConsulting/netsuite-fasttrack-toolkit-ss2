/**
 * Base Customer Deposit (customerdeposit) definition
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
        define(["require", "exports", "./Record", "./Transaction", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Record_1 = require("./Record");
    var Transaction_1 = require("./Transaction");
    var record = require("N/record");
    /**
     * NetSuite Customer Deposit Record 'customerdeposit'
     */
    var CustomerDepositBase = /** @class */ (function (_super) {
        __extends(CustomerDepositBase, _super);
        function CustomerDepositBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomerDepositBase.recordType = record.Type.CUSTOMER_DEPOSIT;
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
        return CustomerDepositBase;
    }(Transaction_1.TransactionBase));
    exports.CustomerDepositBase = CustomerDepositBase;
});
