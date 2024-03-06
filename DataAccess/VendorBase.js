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
    const Record_1 = require("./Record");
    const Entity_1 = require("./Entity");
    const record = require("N/record");
    /**
     * VendorBase
     */
    class VendorBase extends Entity_1.Entity {
        static recordType() { return record.Type.VENDOR; }
    }
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
    exports.VendorBase = VendorBase;
});
