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
    exports.SubscriptionChangeOrderBase = exports.SublineSublist = exports.RenewalStepsSublist = exports.NewSublineSublist = void 0;
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    const record = require("N/record");
    /**
     * New Lines (newsubline) sublist
     */
    class NewSublineSublist extends Sublist_1.SublistLine {
    }
    exports.NewSublineSublist = NewSublineSublist;
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], NewSublineSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], NewSublineSublist.prototype, "subscriptionline", void 0);
    /**
     * Renewal Steps (renewalsteps) sublist
     */
    class RenewalStepsSublist extends Sublist_1.SublistLine {
    }
    exports.RenewalStepsSublist = RenewalStepsSublist;
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], RenewalStepsSublist.prototype, "subscription", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], RenewalStepsSublist.prototype, "transaction", void 0);
    /**
     * Items (subline) sublist
     */
    class SublineSublist extends Sublist_1.SublistLine {
    }
    exports.SublineSublist = SublineSublist;
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], SublineSublist.prototype, "apply", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], SublineSublist.prototype, "billingmode", void 0);
    __decorate([
        Sublist_1.SublistFieldType.percent
    ], SublineSublist.prototype, "discount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.percent
    ], SublineSublist.prototype, "discountnew", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], SublineSublist.prototype, "enddate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], SublineSublist.prototype, "includeinrenewal", void 0);
    /**
     * Subscription Change Order NetSuite record |
     * On creation, the following default values are required: action and subscription.
     */
    class SubscriptionChangeOrderBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.SUBSCRIPTION_CHANGE_ORDER; }
    }
    exports.SubscriptionChangeOrderBase = SubscriptionChangeOrderBase;
    __decorate([
        Record_1.FieldType.datetime
    ], SubscriptionChangeOrderBase.prototype, "approvaldate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionChangeOrderBase.prototype, "approvalstatus", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionChangeOrderBase.prototype, "billingaccount", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SubscriptionChangeOrderBase.prototype, "createdby", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionChangeOrderBase.prototype, "customer", void 0);
    __decorate([
        Record_1.FieldType.date
    ], SubscriptionChangeOrderBase.prototype, "datecreated", void 0);
    __decorate([
        Record_1.FieldType.date
    ], SubscriptionChangeOrderBase.prototype, "effectivedate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SubscriptionChangeOrderBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SubscriptionChangeOrderBase.prototype, "idnumber", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], SubscriptionChangeOrderBase.prototype, "memo", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], SubscriptionChangeOrderBase.prototype, "modificationtype", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionChangeOrderBase.prototype, "reactivationoption", void 0);
    __decorate([
        Record_1.FieldType.date
    ], SubscriptionChangeOrderBase.prototype, "renewalenddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionChangeOrderBase.prototype, "renewalmethod", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionChangeOrderBase.prototype, "renewalplan", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionChangeOrderBase.prototype, "renewalpricebook", void 0);
    __decorate([
        Record_1.FieldType.date
    ], SubscriptionChangeOrderBase.prototype, "renewalstartdate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionChangeOrderBase.prototype, "renewalterm", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionChangeOrderBase.prototype, "renewaltrantype", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SubscriptionChangeOrderBase.prototype, "requestoffcycleinvoice", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionChangeOrderBase.prototype, "requestor", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionChangeOrderBase.prototype, "subscription", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionChangeOrderBase.prototype, "subscriptionplan", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], SubscriptionChangeOrderBase.prototype, "subscriptiontermduration", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SubscriptionChangeOrderBase.prototype, "subscriptiontermtype", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionChangeOrderBase.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.sublist(NewSublineSublist)
    ], SubscriptionChangeOrderBase.prototype, "newsubline", void 0);
    __decorate([
        Record_1.FieldType.sublist(RenewalStepsSublist)
    ], SubscriptionChangeOrderBase.prototype, "renewalsteps", void 0);
    __decorate([
        Record_1.FieldType.sublist(SublineSublist)
    ], SubscriptionChangeOrderBase.prototype, "subline", void 0);
});
