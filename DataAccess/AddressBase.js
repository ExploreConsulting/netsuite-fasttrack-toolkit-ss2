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
    exports.AddressBase = void 0;
    const Record_1 = require("./Record");
    /**
     * The addressbook 'subrecord'. In SS2.x this is mostly treated as a normal record object but you can't
     * create or load one from scratch. Typically just reference this type on the appropriate address subrecord
     * property. For example,
     *
     * @example - an NSDAL Customer instance can refer to the first address's subrecord simply as:
     *
     * customer.addressbook[0].addressbookaddress.addr1
     *
     *
     * @example - defining custom addressbook subrecord fields.
    
     ```typescript
    
     // define custom fields on address subrecord (optional)
      export class MyCustomAddressClass extends AddressBase {
             // ... define custom address subrecord fields here
        }
    
      // tell the customer address sublist to use our custom subrecord class
      export class MyAddressSublist extends CustomerAddressSublist {
           @SublistFieldType.subrecord(MyCustomAddressClass)
          addressbookaddress: MyCustomAddressClass
       }
     ```
     */
    class AddressBase extends Record_1.NetsuiteRecord {
    }
    __decorate([
        Record_1.FieldType.freeformtext
    ], AddressBase.prototype, "addr1", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], AddressBase.prototype, "addr2", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], AddressBase.prototype, "addr3", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], AddressBase.prototype, "addressee", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], AddressBase.prototype, "addrphone", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], AddressBase.prototype, "addrtext", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], AddressBase.prototype, "attention", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], AddressBase.prototype, "city", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AddressBase.prototype, "country", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], AddressBase.prototype, "state", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], AddressBase.prototype, "zip", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], AddressBase.prototype, "override", void 0);
    exports.AddressBase = AddressBase;
});
