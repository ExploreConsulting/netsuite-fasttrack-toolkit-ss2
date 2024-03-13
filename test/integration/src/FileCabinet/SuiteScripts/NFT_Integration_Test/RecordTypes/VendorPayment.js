(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "NFT/DataAccess/VendorPaymentBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VendorPayment = void 0;
    const VendorPaymentBase_1 = require("NFT/DataAccess/VendorPaymentBase");
    class VendorPayment extends VendorPaymentBase_1.VendorPaymentBase {
    }
    exports.VendorPayment = VendorPayment;
});
