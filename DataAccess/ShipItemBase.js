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
        define(["require", "exports", "./Record", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Item = void 0;
    const Record_1 = require("./Record");
    const record = require("N/record");
    /**
     * Base class with fields common to all item types
     */
    class Item extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.SHIP_ITEM; }
    }
    exports.Item = Item;
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "accchange", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "account", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "accounthandling", void 0);
    __decorate([
        Record_1.FieldType.radio
    ], Item.prototype, "costbasis", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "countries", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], Item.prototype, "description", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "displayname", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "doifarrangement", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "doiftotal", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], Item.prototype, "doiftotalamt", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "doiftotaloperator", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "doifweight", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], Item.prototype, "doifweightamt", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "doifweightoperator", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "doifweightunit", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "edition", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "excludecountries", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "excludesites", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.float
    ], Item.prototype, "fedexdiscountrate", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "fedexonerate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "fedexservicecode", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], Item.prototype, "freeifordertotalisoveramount", void 0);
    __decorate([
        Record_1.FieldType.percent
    ], Item.prototype, "handlingaspercentageoftotal", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], Item.prototype, "handlingbyweightamount", void 0);
    __decorate([
        Record_1.FieldType.float
    ], Item.prototype, "handlingbyweightperquantity", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "handlingbyweightperunit", void 0);
    __decorate([
        Record_1.FieldType.radio
    ], Item.prototype, "handlingcost", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], Item.prototype, "handlingflatrateamount", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], Item.prototype, "handlingperitemamount", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "handlingtablechargeby", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "handlingtableuom", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "handlingtaxcode", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "hasmaximumshippingcost", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "hasminimumshippingcost", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "integratedlabelsarrangement", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "integrationservicecode", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "invt_dispname", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "isfreeifordertotalisover", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "ishandlingbyweightbracketed", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "ishandlingtaxable", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "isinactive", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "isonline", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "isshippingbyweightbracketed", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "istaxable", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "itemid", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "itemtype", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "labelplugin", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "labelpluginselect", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "labelreg", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "labelregselect", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "labelservice", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "labelservicegroup", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "labelservicegroupselect", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "labelserviceselect", void 0);
    __decorate([
        Record_1.FieldType.radio
    ], Item.prototype, "labeltype", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], Item.prototype, "maximumshippingcost", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], Item.prototype, "minimumshippingcost", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "needsallfreeshippingitems", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "omitpackaging", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "pluginlabelsarrangement", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "pluginratearrangement", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "ratingplugin", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "ratingpluginselect", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "ratingreg", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "ratingregselect", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "ratingservice", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "ratingservicegroup", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "ratingservicegroupselect", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "ratingserviceselect", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "restrictionarrangement", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "returnlabelreg", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "returnlabelregselect", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "returnlabelservice", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "returnlabelserviceselect", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "returnservicecode", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "returnsintegrated", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "shipitemcurrency", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], Item.prototype, "shipperintegrated", void 0);
    __decorate([
        Record_1.FieldType.percent
    ], Item.prototype, "shippingaspercentageoftotal", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], Item.prototype, "shippingbyweightamount", void 0);
    __decorate([
        Record_1.FieldType.float
    ], Item.prototype, "shippingbyweightperquantity", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "shippingbyweightperunit", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "shippingcarrier", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], Item.prototype, "shippingflatrateamount", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], Item.prototype, "shippingperitemamount", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "shippingtablechargeby", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "shippingtableuom", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "shippingtaxcode", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "site", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "states", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "tabtext", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "taxschedule", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "taxschedulehandling", void 0);
    __decorate([
        Record_1.FieldType.float
    ], Item.prototype, "upsdiscountrate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], Item.prototype, "upssavername", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "upsservicecode", void 0);
    __decorate([
        Record_1.FieldType.float
    ], Item.prototype, "uspsdiscountrate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], Item.prototype, "uspsservicecode", void 0);
});
