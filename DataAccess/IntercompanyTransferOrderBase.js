/**
 *  Represents an Intercompany Transfer Order (intercompanytransferorder) transaction type in NetSuite
 */
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
        define(["require", "exports", "N/record", "./TransferOrderBase", "./Record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ItemSublist = exports.IntercompanyTransferOrderBase = void 0;
    const record = require("N/record");
    const to = require("./TransferOrderBase");
    const Record_1 = require("./Record");
    /**
     * NetSuite Intercompany Transfer Order Record
     * Primary difference between this an a regular Transfer order is a TO destination subsidiary.
     */
    class IntercompanyTransferOrderBase extends to.TransferOrderBase {
        static recordType() { return record.Type.INTER_COMPANY_TRANSFER_ORDER; }
    }
    __decorate([
        Record_1.FieldType.select
    ], IntercompanyTransferOrderBase.prototype, "tosubsidiary", void 0);
    exports.IntercompanyTransferOrderBase = IntercompanyTransferOrderBase;
    /**
     * Sublist 'item' on the Intercompany Tranfer Order record (same as on regular Transfer Order)
     */
    class ItemSublist extends to.ItemSublist {
    }
    exports.ItemSublist = ItemSublist;
});
