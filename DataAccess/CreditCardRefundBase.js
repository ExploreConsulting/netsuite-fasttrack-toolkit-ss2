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
        define(["require", "exports", "N/record", "./Transaction", "./Sublist", "./Record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReimbursementsSublist = exports.ExpenseSublist = exports.ItemSublist = exports.CreditCardRefundBase = void 0;
    /**
     * Created by rhackey on 3/20/24.
     */
    const record = require("N/record");
    const Transaction_1 = require("./Transaction");
    const Sublist_1 = require("./Sublist");
    const Record_1 = require("./Record");
    /**
     * NetSuite Credit Card Refund Record
     */
    class CreditCardRefundBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.CREDIT_CARD_REFUND; }
    }
    __decorate([
        Record_1.FieldType.select
    ], CreditCardRefundBase.prototype, "account", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CreditCardRefundBase.prototype, "balance", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardRefundBase.prototype, "class", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], CreditCardRefundBase.prototype, "cleared", void 0);
    __decorate([
        Record_1.FieldType.date
    ], CreditCardRefundBase.prototype, "cleareddate", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], CreditCardRefundBase.prototype, "createddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardRefundBase.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardRefundBase.prototype, "currencyname", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardRefundBase.prototype, "currencysymbol", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardRefundBase.prototype, "customform", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardRefundBase.prototype, "department", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardRefundBase.prototype, "entity", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardRefundBase.prototype, "entity_nexus_country", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardRefundBase.prototype, "entitynexus", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CreditCardRefundBase.prototype, "exchangerate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardRefundBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], CreditCardRefundBase.prototype, "isbasecurrency", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], CreditCardRefundBase.prototype, "lastmodifieddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardRefundBase.prototype, "location", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardRefundBase.prototype, "memo", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardRefundBase.prototype, "nexus", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardRefundBase.prototype, "nexus_country", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardRefundBase.prototype, "postingperiod", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardRefundBase.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardRefundBase.prototype, "taxperiod", void 0);
    __decorate([
        Record_1.FieldType.date
    ], CreditCardRefundBase.prototype, "taxpointdate", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], CreditCardRefundBase.prototype, "taxpointdateoverride", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CreditCardRefundBase.prototype, "total", void 0);
    __decorate([
        Record_1.FieldType.date
    ], CreditCardRefundBase.prototype, "trandate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardRefundBase.prototype, "tranid", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardRefundBase.prototype, "transactionnumber", void 0);
    __decorate([
        Record_1.FieldType.radio
    ], CreditCardRefundBase.prototype, "trantype", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardRefundBase.prototype, "updatecurrency", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CreditCardRefundBase.prototype, "usertotal", void 0);
    exports.CreditCardRefundBase = CreditCardRefundBase;
    /**
     * Sublist 'item' on Credit Card Refunds
     */
    class ItemSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ItemSublist.prototype, "amount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "billvariancestatus", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "catchupperiod", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "class", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "customer", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "deferrevrec", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "department", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "description", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "id", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ItemSublist.prototype, "isbillable", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "isvsoebundle", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "itemsubtype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "itemtype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "line", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ItemSublist.prototype, "linenumber", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "linked", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ItemSublist.prototype, "location", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "matrixtype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.namevaluelist
    ], ItemSublist.prototype, "options", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "printitems", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ItemSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.rate
    ], ItemSublist.prototype, "rate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "rateschedule", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ItemSublist.prototype, "vendorname", void 0);
    exports.ItemSublist = ItemSublist;
    /**
     * Sublist 'expense' on Credit Card Refunds
     */
    class ExpenseSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.select
    ], ExpenseSublist.prototype, "account", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], ExpenseSublist.prototype, "amount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
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
        Sublist_1.SublistFieldType.integernumber
    ], ExpenseSublist.prototype, "expenseitem", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], ExpenseSublist.prototype, "isbillable", void 0);
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
        Sublist_1.SublistFieldType.integernumber
    ], ExpenseSublist.prototype, "numrules", void 0);
    exports.ExpenseSublist = ExpenseSublist;
    /**
     * Sublist 'reimbursements' on Credit Card Refunds
     */
    class ReimbursementsSublist extends Sublist_1.SublistLine {
    }
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ReimbursementsSublist.prototype, "id", void 0);
    exports.ReimbursementsSublist = ReimbursementsSublist;
});
