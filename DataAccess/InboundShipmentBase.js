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
        define(["require", "exports", "./Transaction", "./Sublist", "./Record", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InboundShipmentBase = exports.LandedCostSublist = exports.ItemSublist = void 0;
    /**
     * NetSuite Inbound Shipment record
     */
    var Transaction_1 = require("./Transaction");
    var Sublist_1 = require("./Sublist");
    var Record_1 = require("./Record");
    var record = require("N/record");
    /**
     * The 'item' sublist
     */
    var ItemSublist = /** @class */ (function (_super) {
        __extends(ItemSublist, _super);
        function ItemSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ItemSublist.prototype, "id", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ItemSublist.prototype, "currencyprecision", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ItemSublist.prototype, "expectedrate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "fulfillable", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "fxrate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "inventorydetailavail", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "inventorydetailid", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "isnumbereditem", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "itemid", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "itemtype", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "lineid", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "ownershiptransferscount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "pocurrency", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ItemSublist.prototype, "porate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "povendor", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "povendorkey", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "povendorurl", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "purchaseorder", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "purchaseorderkey", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "purchaseorderurl", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "quantitybilled", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "quantityexpected", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "quantityexpectedorig", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "quantityreceived", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "quantityremaining", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "receivinglocation", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "relatedtransactions", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "relatedtransactionsurl", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "sequencenumber", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "shipmentitem", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ItemSublist.prototype, "shipmentitemamount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "shipmentitemdescription", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ItemSublist.prototype, "shipmentitemeffectivedate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ItemSublist.prototype, "shipmentitemexchangerate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "shipmentitemfxrateoverriden", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "shipmentitemkey", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "shipmentitemtext", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "shipmentitemurl", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "totalunitcost", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "tracklandedcost", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "unit", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "unitlandedcost", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "unitrate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "vendorid", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "weightlbs", void 0);
        return ItemSublist;
    }(Sublist_1.SublistLine));
    exports.ItemSublist = ItemSublist;
    /**
     * The 'landedcost' sublist
     */
    var LandedCostSublist = /** @class */ (function (_super) {
        __extends(LandedCostSublist, _super);
        function LandedCostSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LandedCostSublist.prototype, "landedcostallocationmethod", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], LandedCostSublist.prototype, "landedcostamount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LandedCostSublist.prototype, "landedcostcostcategory", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LandedCostSublist.prototype, "landedcostcurrency", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], LandedCostSublist.prototype, "landedcostcurrencyprecision", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], LandedCostSublist.prototype, "landedcosteffectivedate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], LandedCostSublist.prototype, "landedcostexchangerate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], LandedCostSublist.prototype, "landedcostexchangerateoverriden", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], LandedCostSublist.prototype, "landedcostid", void 0);
        __decorate([
            Sublist_1.SublistFieldType.multiselect
        ], LandedCostSublist.prototype, "landedcostshipmentitems", void 0);
        return LandedCostSublist;
    }(Sublist_1.SublistLine));
    exports.LandedCostSublist = LandedCostSublist;
    /**
     * NetSuite Inbound Shipment Record Type
     */
    var InboundShipmentBase = /** @class */ (function (_super) {
        __extends(InboundShipmentBase, _super);
        function InboundShipmentBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InboundShipmentBase.recordType = function () {
            return record.Type.INBOUND_SHIPMENT;
        };
        __decorate([
            Record_1.FieldType.date
        ], InboundShipmentBase.prototype, "actualdeliverydate", void 0);
        __decorate([
            Record_1.FieldType.date
        ], InboundShipmentBase.prototype, "actualshippingdate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InboundShipmentBase.prototype, "billoflading", void 0);
        __decorate([
            Record_1.FieldType.date
        ], InboundShipmentBase.prototype, "expecteddeliverydate", void 0);
        __decorate([
            Record_1.FieldType.date
        ], InboundShipmentBase.prototype, "expectedshippingdate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InboundShipmentBase.prototype, "externaldocumentnumber", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InboundShipmentBase.prototype, "inventorydetailuitype", void 0);
        __decorate([
            Record_1.FieldType.select
        ], InboundShipmentBase.prototype, "shipmentbasecurrency", void 0);
        __decorate([
            Record_1.FieldType.select
        ], InboundShipmentBase.prototype, "shipmentbillingstatus", void 0);
        __decorate([
            Record_1.FieldType.date
        ], InboundShipmentBase.prototype, "shipmentcreateddate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InboundShipmentBase.prototype, "shipmentmemo", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InboundShipmentBase.prototype, "shipmentnumber", void 0);
        __decorate([
            Record_1.FieldType.select
        ], InboundShipmentBase.prototype, "shipmentstatus", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InboundShipmentBase.prototype, "templatestored", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], InboundShipmentBase.prototype, "vesselnumber", void 0);
        __decorate([
            Record_1.FieldType.sublist(ItemSublist)
        ], InboundShipmentBase.prototype, "items", void 0);
        __decorate([
            Record_1.FieldType.sublist(LandedCostSublist)
        ], InboundShipmentBase.prototype, "landedcost", void 0);
        return InboundShipmentBase;
    }(Transaction_1.TransactionBase));
    exports.InboundShipmentBase = InboundShipmentBase;
});
