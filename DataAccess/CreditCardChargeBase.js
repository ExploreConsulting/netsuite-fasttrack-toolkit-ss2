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
    exports.ReimbursementsSublist = exports.ExpenseSublist = exports.ItemSublist = exports.CreditCardChargeBase = void 0;
    /**
     * Created by rhackey on 3/20/24.
     */
    const record = require("N/record");
    const Transaction_1 = require("./Transaction");
    const Sublist_1 = require("./Sublist");
    const Record_1 = require("./Record");
    /**
     * NetSuite Credit Card Charge Record
     */
    class CreditCardChargeBase extends Transaction_1.TransactionBase {
        static recordType() { return record.Type.CREDIT_CARD_CHARGE; }
    }
    exports.CreditCardChargeBase = CreditCardChargeBase;
    __decorate([
        Record_1.FieldType.select
    ], CreditCardChargeBase.prototype, "account", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CreditCardChargeBase.prototype, "balance", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardChargeBase.prototype, "class", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], CreditCardChargeBase.prototype, "cleared", void 0);
    __decorate([
        Record_1.FieldType.date
    ], CreditCardChargeBase.prototype, "cleareddate", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], CreditCardChargeBase.prototype, "createddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardChargeBase.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardChargeBase.prototype, "currencyname", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardChargeBase.prototype, "currencysymbol", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardChargeBase.prototype, "customform", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardChargeBase.prototype, "department", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardChargeBase.prototype, "entity", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardChargeBase.prototype, "entity_nexus_country", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardChargeBase.prototype, "entitynexus", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CreditCardChargeBase.prototype, "exchangerate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardChargeBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], CreditCardChargeBase.prototype, "isbasecurrency", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], CreditCardChargeBase.prototype, "lastmodifieddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardChargeBase.prototype, "location", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardChargeBase.prototype, "memo", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardChargeBase.prototype, "nexus", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardChargeBase.prototype, "nexus_country", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardChargeBase.prototype, "postingperiod", void 0);
    __decorate([
        Record_1.FieldType.select
    ], CreditCardChargeBase.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardChargeBase.prototype, "taxperiod", void 0);
    __decorate([
        Record_1.FieldType.date
    ], CreditCardChargeBase.prototype, "taxpointdate", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], CreditCardChargeBase.prototype, "taxpointdateoverride", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CreditCardChargeBase.prototype, "total", void 0);
    __decorate([
        Record_1.FieldType.date
    ], CreditCardChargeBase.prototype, "trandate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardChargeBase.prototype, "tranid", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardChargeBase.prototype, "transactionnumber", void 0);
    __decorate([
        Record_1.FieldType.radio
    ], CreditCardChargeBase.prototype, "trantype", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], CreditCardChargeBase.prototype, "updatecurrency", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], CreditCardChargeBase.prototype, "usertotal", void 0);
    /**
     * Sublist 'item' on Credit Card Charges
     */
    class ItemSublist extends Sublist_1.SublistLine {
    }
    exports.ItemSublist = ItemSublist;
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
    /**
     * Sublist 'expense' on Credit Card Charges
     */
    class ExpenseSublist extends Sublist_1.SublistLine {
    }
    exports.ExpenseSublist = ExpenseSublist;
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
    /**
     * Sublist 'reimbursements' on Credit Card Charges
     */
    class ReimbursementsSublist extends Sublist_1.SublistLine {
    }
    exports.ReimbursementsSublist = ReimbursementsSublist;
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ReimbursementsSublist.prototype, "id", void 0);
});
