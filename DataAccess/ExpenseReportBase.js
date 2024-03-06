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
        define(["require", "exports", "./Transaction", "./Sublist", "./Record", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExpenseReportBase = exports.ExpenseSublist = void 0;
    /**
     * NetSuite Expense Report record
     */
    const Transaction_1 = require("./Transaction");
    const Sublist_1 = require("./Sublist");
    const Record_1 = require("./Record");
    const record = require("N/record");
    /**
     * The 'expense' sublist
     */
    class ExpenseSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ExpenseSublist.prototype, "amount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExpenseSublist.prototype, "category", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExpenseSublist.prototype, "class", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExpenseSublist.prototype, "customer", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExpenseSublist.prototype, "department", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExpenseSublist.prototype, "expenseaccount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], ExpenseSublist.prototype, "expensedate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExpenseSublist.prototype, "expenseitem", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ExpenseSublist.prototype, "line", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExpenseSublist.prototype, "location", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ExpenseSublist.prototype, "memo", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ExpenseSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ExpenseSublist.prototype, "rate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ExpenseSublist.prototype, "refnumber", void 0);
    exports.ExpenseSublist = ExpenseSublist;
    /**
     * NetSuite Expense Report Record Type
     */
    class ExpenseReportBase extends Transaction_1.TransactionBase {
        static recordType() {
            return record.Type.EXPENSE_REPORT;
        }
    }
    __decorate([
        Record_1.FieldType.select
    ], ExpenseReportBase.prototype, "account", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], ExpenseReportBase.prototype, "amount", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ExpenseReportBase.prototype, "approvalstatus", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ExpenseReportBase.prototype, "class", void 0);
    __decorate([
        Record_1.FieldType.date
    ], ExpenseReportBase.prototype, "duedate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ExpenseReportBase.prototype, "transactionnumber", void 0);
    __decorate([
        Record_1.FieldType.sublist(ExpenseSublist)
    ], ExpenseReportBase.prototype, "items", void 0);
    exports.ExpenseReportBase = ExpenseReportBase;
});
