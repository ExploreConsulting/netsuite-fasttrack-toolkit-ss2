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
    exports.SubscriptionPlanBase = exports.LinesSublist = void 0;
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    /**
     * Lines Sublist (member)
     */
    var LinesSublist = /** @class */ (function (_super) {
        __extends(LinesSublist, _super);
        function LinesSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LinesSublist.prototype, "billingmode", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LinesSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], LinesSublist.prototype, "isrequired", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], LinesSublist.prototype, "lineid", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], LinesSublist.prototype, "prorateenddate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], LinesSublist.prototype, "proratestartdate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LinesSublist.prototype, "renewaloption", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LinesSublist.prototype, "subscriptionlinetype", void 0);
        return LinesSublist;
    }(Sublist_1.SublistLine));
    exports.LinesSublist = LinesSublist;
    /**
     * NetSuite Subscription Plan record type
     */
    var SubscriptionPlanBase = /** @class */ (function (_super) {
        __extends(SubscriptionPlanBase, _super);
        function SubscriptionPlanBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SubscriptionPlanBase.recordType = function () { return record.Type.SUBSCRIPTION_PLAN; };
        __decorate([
            Record_1.FieldType.integernumber
        ], SubscriptionPlanBase.prototype, "advancerenewalperiodnumber", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionPlanBase.prototype, "advancerenewalperiodunit", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], SubscriptionPlanBase.prototype, "autorenewal", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionPlanBase.prototype, "class", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], SubscriptionPlanBase.prototype, "createddate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionPlanBase.prototype, "defaultrenewalmethod", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionPlanBase.prototype, "defaultrenewalplan", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionPlanBase.prototype, "defaultrenewalterm", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionPlanBase.prototype, "defaultrenewaltrantype", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionPlanBase.prototype, "department", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], SubscriptionPlanBase.prototype, "description", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubscriptionPlanBase.prototype, "displayname", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubscriptionPlanBase.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], SubscriptionPlanBase.prototype, "includechildren", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionPlanBase.prototype, "incomeaccount", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionPlanBase.prototype, "initialterm", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], SubscriptionPlanBase.prototype, "isinactive", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubscriptionPlanBase.prototype, "itemid", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubscriptionPlanBase.prototype, "itemtype", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], SubscriptionPlanBase.prototype, "lastmodifieddate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionPlanBase.prototype, "location", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubscriptionPlanBase.prototype, "subsidiary", void 0);
        __decorate([
            Record_1.FieldType.sublist(LinesSublist)
        ], SubscriptionPlanBase.prototype, "member", void 0);
        return SubscriptionPlanBase;
    }(Record_1.NetsuiteRecord));
    exports.SubscriptionPlanBase = SubscriptionPlanBase;
});
