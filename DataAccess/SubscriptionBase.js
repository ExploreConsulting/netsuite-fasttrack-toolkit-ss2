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
    exports.SubscriptionBase = exports.SubscriptionLineSublist = exports.SublineFromPlanSublist = exports.PriceBookLinesSublist = void 0;
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    /**
     * priceinterval - Price Book Lines
     * NOTE: This sublist cannot have lines added/removed, so addLine(), removeLine() and removeAllLines() will not work.
     *      Only a small number of fields are able to be edited on this sublist.
     */
    var PriceBookLinesSublist = /** @class */ (function (_super) {
        __extends(PriceBookLinesSublist, _super);
        function PriceBookLinesSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], PriceBookLinesSublist.prototype, "catalogtype", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], PriceBookLinesSublist.prototype, "chargetype", void 0);
        __decorate([
            Sublist_1.SublistFieldType.percent
        ], PriceBookLinesSublist.prototype, "discount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], PriceBookLinesSublist.prototype, "frequency", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], PriceBookLinesSublist.prototype, "includedquantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], PriceBookLinesSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], PriceBookLinesSublist.prototype, "linenumber", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], PriceBookLinesSublist.prototype, "multiplierline", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], PriceBookLinesSublist.prototype, "priceplan", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], PriceBookLinesSublist.prototype, "prorateby", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], PriceBookLinesSublist.prototype, "quantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], PriceBookLinesSublist.prototype, "recurringamount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], PriceBookLinesSublist.prototype, "repeatevery", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], PriceBookLinesSublist.prototype, "startdate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], PriceBookLinesSublist.prototype, "startoffsetunit", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], PriceBookLinesSublist.prototype, "startoffsetvalue", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], PriceBookLinesSublist.prototype, "status", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], PriceBookLinesSublist.prototype, "subscriptionplanline", void 0);
        return PriceBookLinesSublist;
    }(Sublist_1.SublistLine));
    exports.PriceBookLinesSublist = PriceBookLinesSublist;
    /**
     * sublinefromplan - Lines
     */
    var SublineFromPlanSublist = /** @class */ (function (_super) {
        __extends(SublineFromPlanSublist, _super);
        function SublineFromPlanSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], SublineFromPlanSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], SublineFromPlanSublist.prototype, "revrecoption", void 0);
        return SublineFromPlanSublist;
    }(Sublist_1.SublistLine));
    exports.SublineFromPlanSublist = SublineFromPlanSublist;
    /**
     * subscriptionline - Lines (Sublist)
     * NOTE: The following fields can't be updated due to NetSuite throwing errors even if the same value is set:
     *      catalogtype, discount, enddate, quantity, recurrencestartdate, startdate, subscription, subscriptionline,
     *      terminationdate.
     *      removeAllLines() will not work on update.
     */
    var SubscriptionLineSublist = /** @class */ (function (_super) {
        __extends(SubscriptionLineSublist, _super);
        function SubscriptionLineSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], SubscriptionLineSublist.prototype, "billingmode", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], SubscriptionLineSublist.prototype, "catalogtype", void 0);
        __decorate([
            Sublist_1.SublistFieldType.percent
        ], SubscriptionLineSublist.prototype, "discount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], SubscriptionLineSublist.prototype, "enddate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], SubscriptionLineSublist.prototype, "includeinrenewal", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], SubscriptionLineSublist.prototype, "isincluded", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], SubscriptionLineSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], SubscriptionLineSublist.prototype, "linenumber", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], SubscriptionLineSublist.prototype, "prorateenddate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], SubscriptionLineSublist.prototype, "proratestartdate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], SubscriptionLineSublist.prototype, "quantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], SubscriptionLineSublist.prototype, "recurrencestartdate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], SubscriptionLineSublist.prototype, "revrecoption", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], SubscriptionLineSublist.prototype, "startdate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], SubscriptionLineSublist.prototype, "status", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], SubscriptionLineSublist.prototype, "subscription", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], SubscriptionLineSublist.prototype, "subscriptionline", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], SubscriptionLineSublist.prototype, "subscriptionlinetype", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], SubscriptionLineSublist.prototype, "terminationdate", void 0);
        return SubscriptionLineSublist;
    }(Sublist_1.SublistLine));
    exports.SubscriptionLineSublist = SubscriptionLineSublist;
    /**
     * NetSuite Subscription record type
     */
    var SubscriptionBase = /** @class */ (function (_super) {
        __extends(SubscriptionBase, _super);
        function SubscriptionBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SubscriptionBase.recordType = function () { return record.Type.SUBSCRIPTION; };
        __decorate([
            Record_1.FieldType.integernumber
        ], SubscriptionBase.prototype, "advancerenewalperiodnumber", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "advancerenewalperiodunit", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], SubscriptionBase.prototype, "autoname", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], SubscriptionBase.prototype, "autorenewal", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "billingaccount", void 0);
        __decorate([
            Record_1.FieldType.date
        ], SubscriptionBase.prototype, "billingaccountstartdate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "billingschedule", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "billingsubscriptionstatus", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], SubscriptionBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "customer", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "customform", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "defaultrenewalmethod", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "defaultrenewalplan", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "defaultrenewalpricebook", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "defaultrenewalterm", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "defaultrenewaltrantype", void 0);
        __decorate([
            Record_1.FieldType.date
        ], SubscriptionBase.prototype, "enddate", void 0);
        __decorate([
            Record_1.FieldType.date
        ], SubscriptionBase.prototype, "estimatedrevrecenddate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubscriptionBase.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "frequency", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubscriptionBase.prototype, "idnumber", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "initialterm", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], SubscriptionBase.prototype, "initialtermduration", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "initialtermtype", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "initialtermunits", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], SubscriptionBase.prototype, "internalid", void 0);
        __decorate([
            Record_1.FieldType.date
        ], SubscriptionBase.prototype, "lastbillcycledate", void 0);
        __decorate([
            Record_1.FieldType.date
        ], SubscriptionBase.prototype, "lastbilldate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubscriptionBase.prototype, "name", void 0);
        __decorate([
            Record_1.FieldType.date
        ], SubscriptionBase.prototype, "nextbillcycledate", void 0);
        __decorate([
            Record_1.FieldType.date
        ], SubscriptionBase.prototype, "nextrenewalstartdate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubscriptionBase.prototype, "otherrecordnumber", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "pricebook", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], SubscriptionBase.prototype, "renewalnumber", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "salesorder", void 0);
        __decorate([
            Record_1.FieldType.date
        ], SubscriptionBase.prototype, "startdate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "subscriptionplan", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubscriptionBase.prototype, "subscriptionplanname", void 0);
        __decorate([
            Record_1.FieldType.integernumber
        ], SubscriptionBase.prototype, "subscriptionrevision", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], SubscriptionBase.prototype, "templatestored", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionBase.prototype, "subsidiary", void 0);
        __decorate([
            Record_1.FieldType.sublist(PriceBookLinesSublist)
        ], SubscriptionBase.prototype, "priceinterval", void 0);
        __decorate([
            Record_1.FieldType.sublist(SublineFromPlanSublist)
        ], SubscriptionBase.prototype, "sublinefromplan", void 0);
        __decorate([
            Record_1.FieldType.sublist(SubscriptionLineSublist)
        ], SubscriptionBase.prototype, "subscriptionline", void 0);
        return SubscriptionBase;
    }(Record_1.NetsuiteRecord));
    exports.SubscriptionBase = SubscriptionBase;
});
