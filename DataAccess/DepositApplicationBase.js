var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
        define(["require", "exports", "./Record", "./Sublist", "./Transaction", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DepositApplicationBase = void 0;
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var Transaction_1 = require("./Transaction");
    var record = require("N/record");
    var ApplySublist = /** @class */ (function (_super) {
        __extends(ApplySublist, _super);
        function ApplySublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "amount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ApplySublist.prototype, "apply", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ApplySublist.prototype, "applydate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "createdfrom", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "doc", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "due", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ApplySublist.prototype, "duedate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ApplySublist.prototype, "job", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ApplySublist.prototype, "line", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ApplySublist.prototype, "refnum", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "total", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "url", void 0);
        return ApplySublist;
    }(Sublist_1.SublistLine));
    /**
     *
     */
    var DepositApplicationBase = /** @class */ (function (_super) {
        __extends(DepositApplicationBase, _super);
        function DepositApplicationBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DepositApplicationBase.recordType = record.Type.DEPOSIT_APPLICATION;
        __decorate([
            Record_1.FieldType.select
        ], DepositApplicationBase.prototype, "aracct", void 0);
        __decorate([
            Record_1.FieldType.select
        ], DepositApplicationBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.select
        ], DepositApplicationBase.prototype, "customer", void 0);
        __decorate([
            Record_1.FieldType.select
        ], DepositApplicationBase.prototype, "deposit", void 0);
        __decorate([
            Record_1.FieldType.date
        ], DepositApplicationBase.prototype, "depositdate", void 0);
        __decorate([
            Record_1.FieldType.sublist(ApplySublist)
        ], DepositApplicationBase.prototype, "apply", void 0);
        return DepositApplicationBase;
    }(Transaction_1.TransactionBase));
    exports.DepositApplicationBase = DepositApplicationBase;
});
