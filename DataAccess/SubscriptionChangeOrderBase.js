var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
        define(["require", "exports", "./Record", "./Sublist", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscriptionChangeOrderBase = exports.SublineSublist = exports.RenewalStepsSublist = exports.NewSublineSublist = void 0;
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    /**
     * New Lines (newsubline) sublist
     */
    var NewSublineSublist = /** @class */ (function (_super) {
        __extends(NewSublineSublist, _super);
        function NewSublineSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], NewSublineSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], NewSublineSublist.prototype, "subscriptionline", void 0);
        return NewSublineSublist;
    }(Sublist_1.SublistLine));
    exports.NewSublineSublist = NewSublineSublist;
    /**
     * Renewal Steps (renewalsteps) sublist
     */
    var RenewalStepsSublist = /** @class */ (function (_super) {
        __extends(RenewalStepsSublist, _super);
        function RenewalStepsSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], RenewalStepsSublist.prototype, "subscription", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], RenewalStepsSublist.prototype, "transaction", void 0);
        return RenewalStepsSublist;
    }(Sublist_1.SublistLine));
    exports.RenewalStepsSublist = RenewalStepsSublist;
    /**
     * Items (subline) sublist
     */
    var SublineSublist = /** @class */ (function (_super) {
        __extends(SublineSublist, _super);
        function SublineSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
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
        return SublineSublist;
    }(Sublist_1.SublistLine));
    exports.SublineSublist = SublineSublist;
    /**
     * Subscription Change Order NetSuite record |
     * On creation, the following default values are required: action and subscription.
     */
    var SubscriptionChangeOrderBase = /** @class */ (function (_super) {
        __extends(SubscriptionChangeOrderBase, _super);
        function SubscriptionChangeOrderBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SubscriptionChangeOrderBase.recordType = function () { return record.Type.SUBSCRIPTION_CHANGE_ORDER; };
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
        return SubscriptionChangeOrderBase;
    }(Record_1.NetsuiteRecord));
    exports.SubscriptionChangeOrderBase = SubscriptionChangeOrderBase;
});
