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
        define(["require", "exports", "../NFT-SS2-7.3.1/DataAccess/CustomerBase", "../NFT-SS2-7.3.1/DataAccess/Record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Customer = void 0;
    const CustomerBase_1 = require("../NFT-SS2-7.3.1/DataAccess/CustomerBase");
    const Record_1 = require("../NFT-SS2-7.3.1/DataAccess/Record");
    /**
     * NetSuite Customer record type
     */
    class Customer extends CustomerBase_1.CustomerBase {
    }
    exports.Customer = Customer;
    __decorate([
        Record_1.FieldType.datetime
    ], Customer.prototype, "custentity_delete_me", void 0);
});
