var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
        define(["require", "exports", "./Record", "./Entity", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VendorBase = void 0;
    /**
     * Netsuite Vendor base Record
     */
    var Record_1 = require("./Record");
    var Entity_1 = require("./Entity");
    var record = require("N/record");
    /**
     * VendorBase
     */
    var VendorBase = /** @class */ (function (_super) {
        __extends(VendorBase, _super);
        function VendorBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VendorBase.recordType = record.Type.VENDOR;
        __decorate([
            Record_1.FieldType.freeformtext
        ], VendorBase.prototype, "bcn", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], VendorBase.prototype, "creditlimit", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], VendorBase.prototype, "emailtransactions", void 0);
        __decorate([
            Record_1.FieldType.select
        ], VendorBase.prototype, "expenseaccount", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], VendorBase.prototype, "faxtransactions", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], VendorBase.prototype, "giveaccess", void 0);
        __decorate([
            Record_1.FieldType.select
        ], VendorBase.prototype, "incoterm", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], VendorBase.prototype, "is1099eligible", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], VendorBase.prototype, "isjobresourcevend", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], VendorBase.prototype, "laborcost", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], VendorBase.prototype, "openingbalance", void 0);
        __decorate([
            Record_1.FieldType.select
        ], VendorBase.prototype, "openingbalanceaccount", void 0);
        __decorate([
            Record_1.FieldType.date
        ], VendorBase.prototype, "openingbalancedate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], VendorBase.prototype, "payablesaccount", void 0);
        __decorate([
            Record_1.FieldType.float
        ], VendorBase.prototype, "purchaseorderamount", void 0);
        __decorate([
            Record_1.FieldType.float
        ], VendorBase.prototype, "purchaseorderquantity", void 0);
        __decorate([
            Record_1.FieldType.float
        ], VendorBase.prototype, "purchaseorderquantitydiff", void 0);
        __decorate([
            Record_1.FieldType.float
        ], VendorBase.prototype, "receiptamount", void 0);
        __decorate([
            Record_1.FieldType.float
        ], VendorBase.prototype, "receiptquantity", void 0);
        __decorate([
            Record_1.FieldType.float
        ], VendorBase.prototype, "receiptquantitydiff", void 0);
        __decorate([
            Record_1.FieldType.select
        ], VendorBase.prototype, "representingsubsidiary", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], VendorBase.prototype, "sendemail", void 0);
        __decorate([
            Record_1.FieldType.select
        ], VendorBase.prototype, "taxfractionunit", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], VendorBase.prototype, "taxidnum", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], VendorBase.prototype, "vatregnumber", void 0);
        __decorate([
            Record_1.FieldType.select
        ], VendorBase.prototype, "workcalendar", void 0);
        return VendorBase;
    }(Entity_1.Entity));
    exports.VendorBase = VendorBase;
});
