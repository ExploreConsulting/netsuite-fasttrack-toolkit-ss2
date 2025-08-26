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
    exports.ShipItem = void 0;
    const Record_1 = require("./Record");
    const record = require("N/record");
    /**
     * Ship Item base class
     */
    class ShipItem extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.SHIP_ITEM; }
    }
    exports.ShipItem = ShipItem;
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "accchange", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "account", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "accounthandling", void 0);
    __decorate([
        Record_1.FieldType.radio
    ], ShipItem.prototype, "costbasis", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "countries", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], ShipItem.prototype, "description", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "displayname", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "doifarrangement", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "doiftotal", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], ShipItem.prototype, "doiftotalamt", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "doiftotaloperator", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "doifweight", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], ShipItem.prototype, "doifweightamt", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "doifweightoperator", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "doifweightunit", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "edition", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "excludecountries", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "excludesites", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.float
    ], ShipItem.prototype, "fedexdiscountrate", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "fedexonerate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "fedexservicecode", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], ShipItem.prototype, "freeifordertotalisoveramount", void 0);
    __decorate([
        Record_1.FieldType.percent
    ], ShipItem.prototype, "handlingaspercentageoftotal", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], ShipItem.prototype, "handlingbyweightamount", void 0);
    __decorate([
        Record_1.FieldType.float
    ], ShipItem.prototype, "handlingbyweightperquantity", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "handlingbyweightperunit", void 0);
    __decorate([
        Record_1.FieldType.radio
    ], ShipItem.prototype, "handlingcost", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], ShipItem.prototype, "handlingflatrateamount", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], ShipItem.prototype, "handlingperitemamount", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "handlingtablechargeby", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "handlingtableuom", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "handlingtaxcode", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "hasmaximumshippingcost", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "hasminimumshippingcost", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "integratedlabelsarrangement", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "integrationservicecode", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "invt_dispname", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "isfreeifordertotalisover", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "ishandlingbyweightbracketed", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "ishandlingtaxable", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "isinactive", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "isonline", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "isshippingbyweightbracketed", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "istaxable", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "itemid", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "itemtype", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "labelplugin", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "labelpluginselect", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "labelreg", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "labelregselect", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "labelservice", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "labelservicegroup", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "labelservicegroupselect", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "labelserviceselect", void 0);
    __decorate([
        Record_1.FieldType.radio
    ], ShipItem.prototype, "labeltype", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], ShipItem.prototype, "maximumshippingcost", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], ShipItem.prototype, "minimumshippingcost", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "needsallfreeshippingitems", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "omitpackaging", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "pluginlabelsarrangement", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "pluginratearrangement", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "ratingplugin", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "ratingpluginselect", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "ratingreg", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "ratingregselect", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "ratingservice", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "ratingservicegroup", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "ratingservicegroupselect", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "ratingserviceselect", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "restrictionarrangement", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "returnlabelreg", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "returnlabelregselect", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "returnlabelservice", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "returnlabelserviceselect", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "returnservicecode", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "returnsintegrated", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "shipitemcurrency", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], ShipItem.prototype, "shipperintegrated", void 0);
    __decorate([
        Record_1.FieldType.percent
    ], ShipItem.prototype, "shippingaspercentageoftotal", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], ShipItem.prototype, "shippingbyweightamount", void 0);
    __decorate([
        Record_1.FieldType.float
    ], ShipItem.prototype, "shippingbyweightperquantity", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "shippingbyweightperunit", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "shippingcarrier", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], ShipItem.prototype, "shippingflatrateamount", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], ShipItem.prototype, "shippingperitemamount", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "shippingtablechargeby", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "shippingtableuom", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "shippingtaxcode", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "site", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "states", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "tabtext", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "taxschedule", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "taxschedulehandling", void 0);
    __decorate([
        Record_1.FieldType.float
    ], ShipItem.prototype, "upsdiscountrate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], ShipItem.prototype, "upssavername", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "upsservicecode", void 0);
    __decorate([
        Record_1.FieldType.float
    ], ShipItem.prototype, "uspsdiscountrate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], ShipItem.prototype, "uspsservicecode", void 0);
});
