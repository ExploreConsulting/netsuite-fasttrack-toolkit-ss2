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
    exports.EmailTemplate = void 0;
    /**
     * NetSuite Email Template Record Type
     */
    const Record_1 = require("./Record");
    /**
     * NetSuite Email Template Record Type (emailtemplate)
     */
    class EmailTemplate extends Record_1.NetsuiteRecord {
        static recordType() { return 'emailtemplate'; }
    }
    __decorate([
        Record_1.FieldType.checkbox
    ], EmailTemplate.prototype, "addcompanyaddress", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], EmailTemplate.prototype, "addunsubscribelink", void 0);
    __decorate([
        Record_1.FieldType.select
    ], EmailTemplate.prototype, "campaigndomain", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], EmailTemplate.prototype, "content", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], EmailTemplate.prototype, "description", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], EmailTemplate.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], EmailTemplate.prototype, "isinactive", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], EmailTemplate.prototype, "isprivate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], EmailTemplate.prototype, "mediaitem", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], EmailTemplate.prototype, "name", void 0);
    __decorate([
        Record_1.FieldType.select
    ], EmailTemplate.prototype, "restricttogroup", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], EmailTemplate.prototype, "subject", void 0);
    exports.EmailTemplate = EmailTemplate;
});
