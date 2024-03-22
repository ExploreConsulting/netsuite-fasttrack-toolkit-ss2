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
    exports.Item = void 0;
    const Record_1 = require("./Record");
    /**
     * Base class with fields common to all item types
     */
    class Item extends Record_1.NetsuiteRecord {
    }
    exports.Item = Item;
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "autoleadtime", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "autopreferredstocklevel", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "availabletopartners", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "assetaccount", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "atpmethod", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], Item.prototype, "averagecost", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "billingschedule", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "billpricevariantacct", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "class", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "cogsaccount", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "consumptionunit", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "copydescription", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], Item.prototype, "cost", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "costcategory", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "costingmethod", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "countryofmanufacture", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], Item.prototype, "createddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "customform", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "deferredrevenueaccount", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "deferrevrec", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "department", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], Item.prototype, "description", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "displayname", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "includechildren", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "incomeaccount", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "isdonationitem", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "isdropshipitem", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "isgcocompliant", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "isinactive", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "isonline", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "isspecialorderitem", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "isstorepickupallowed", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "itemcondition", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "itemid", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "itemoptions", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "itemtype", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], Item.prototype, "lastmodifieddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "location", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "parent", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "purchasedescription", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "revrecschedule", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "upccode", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "taxschedule", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "tracklandedcost", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "tranid", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "units", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "unitstype", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "usebins", void 0);
    __decorate([
        Record_1.FieldType.float
    ], Item.prototype, "weight", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "weightunit", void 0);
});
