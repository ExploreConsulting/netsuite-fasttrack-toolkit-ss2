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
        define(["require", "exports", "./Record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ItemBase = void 0;
    var Record_1 = require("./Record");
    /**
     * Base class with fields common to all item types
     */
    var ItemBase = /** @class */ (function (_super) {
        __extends(ItemBase, _super);
        function ItemBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Record_1.FieldType.checkbox
        ], ItemBase.prototype, "autoleadtime", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ItemBase.prototype, "autopreferredstocklevel", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ItemBase.prototype, "availabletopartners", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "assetaccount", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "atpmethod", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], ItemBase.prototype, "averagecost", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "billingschedule", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "billpricevariantacct", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "class", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "cogsaccount", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "consumptionunit", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ItemBase.prototype, "copydescription", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], ItemBase.prototype, "cost", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "costcategory", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "costingmethod", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "countryofmanufacture", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], ItemBase.prototype, "createddate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "customform", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "deferredrevenueaccount", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ItemBase.prototype, "deferrevrec", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "department", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], ItemBase.prototype, "description", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ItemBase.prototype, "displayname", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ItemBase.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ItemBase.prototype, "includechildren", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "incomeaccount", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ItemBase.prototype, "isdonationitem", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ItemBase.prototype, "isdropshipitem", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ItemBase.prototype, "isgcocompliant", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ItemBase.prototype, "isinactive", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ItemBase.prototype, "isonline", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ItemBase.prototype, "isspecialorderitem", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ItemBase.prototype, "isstorepickupallowed", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "itemcondition", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ItemBase.prototype, "itemid", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "itemoptions", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ItemBase.prototype, "itemtype", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], ItemBase.prototype, "lastmodifieddate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "location", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "parent", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ItemBase.prototype, "purchasedescription", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "revrecschedule", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "subsidiary", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ItemBase.prototype, "upccode", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "taxschedule", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ItemBase.prototype, "tracklandedcost", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], ItemBase.prototype, "tranid", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "units", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "unitstype", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], ItemBase.prototype, "usebins", void 0);
        __decorate([
            Record_1.FieldType.float
        ], ItemBase.prototype, "weight", void 0);
        __decorate([
            Record_1.FieldType.select
        ], ItemBase.prototype, "weightunit", void 0);
        return ItemBase;
    }(Record_1.NetsuiteRecord));
    exports.ItemBase = ItemBase;
});
