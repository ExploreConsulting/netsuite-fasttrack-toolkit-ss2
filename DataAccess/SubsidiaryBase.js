/**
 * NS Base subsidiary record - contains definitions built in fields
 */
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
        define(["require", "exports", "./Record", "N/record", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AccountBookDetail = exports.SubsidiaryBase = void 0;
    var Record_1 = require("./Record");
    var record = require("N/record");
    var Sublist_1 = require("./Sublist");
    var SubsidiaryBase = /** @class */ (function (_super) {
        __extends(SubsidiaryBase, _super);
        function SubsidiaryBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SubsidiaryBase.recordType = record.Type.SUBSIDIARY;
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubsidiaryBase.prototype, "addr1", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubsidiaryBase.prototype, "addr2", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubsidiaryBase.prototype, "addr3", void 0);
        __decorate([
            Record_1.FieldType.freeformtext,
            Record_1.FieldType.select
        ], SubsidiaryBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.email
        ], SubsidiaryBase.prototype, "email", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubsidiaryBase.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubsidiaryBase.prototype, "fax", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], SubsidiaryBase.prototype, "iselimination", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], SubsidiaryBase.prototype, "isinactive", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubsidiaryBase.prototype, "legalname", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubsidiaryBase.prototype, "logo", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], SubsidiaryBase.prototype, "name", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], SubsidiaryBase.prototype, "override", void 0);
        __decorate([
            Record_1.FieldType.select
        ], SubsidiaryBase.prototype, "parent", void 0);
        return SubsidiaryBase;
    }(Record_1.NetsuiteRecord));
    exports.SubsidiaryBase = SubsidiaryBase;
    var AccountBookDetail = /** @class */ (function (_super) {
        __extends(AccountBookDetail, _super);
        function AccountBookDetail() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], AccountBookDetail.prototype, "accountingbook", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], AccountBookDetail.prototype, "currency", void 0);
        return AccountBookDetail;
    }(Sublist_1.SublistLine));
    exports.AccountBookDetail = AccountBookDetail;
});
