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
        define(["require", "exports", "./Transaction", "./Record", "./Sublist", "./InventoryDetailBase", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WorkOrderIssueBase = exports.ComponentSublist = void 0;
    var Transaction_1 = require("./Transaction");
    var Record_1 = require("./Record");
    var Sublist_1 = require("./Sublist");
    var InventoryDetailBase_1 = require("./InventoryDetailBase");
    var record = require("N/record");
    /**
     * Work Order Issue Components sublist.
     */
    var ComponentSublist = /** @class */ (function (_super) {
        __extends(ComponentSublist, _super);
        function ComponentSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ComponentSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ComponentSublist.prototype, "compitemname", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ComponentSublist.prototype, "quantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ComponentSublist.prototype, "units", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ComponentSublist.prototype, "unitsText", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ComponentSublist.prototype, "isserial", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ComponentSublist.prototype, "isnumbered", void 0);
        __decorate([
            Sublist_1.SublistFieldType.subrecord(InventoryDetailBase_1.InventoryDetailBase)
        ], ComponentSublist.prototype, "componentinventorydetail", void 0);
        return ComponentSublist;
    }(Sublist_1.SublistLine));
    exports.ComponentSublist = ComponentSublist;
    /**
     * NetSuite Work Order Issue record type.
     */
    var WorkOrderIssueBase = /** @class */ (function (_super) {
        __extends(WorkOrderIssueBase, _super);
        function WorkOrderIssueBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WorkOrderIssueBase.recordType = function () { return record.Type.WORK_ORDER_ISSUE; };
        __decorate([
            Record_1.FieldType.select
        ], WorkOrderIssueBase.prototype, "endoperation", void 0);
        __decorate([
            Record_1.FieldType.select
        ], WorkOrderIssueBase.prototype, "item", void 0);
        __decorate([
            Record_1.FieldType.select
        ], WorkOrderIssueBase.prototype, "manufacturingrouting", void 0);
        __decorate([
            Record_1.FieldType.select
        ], WorkOrderIssueBase.prototype, "revision", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], WorkOrderIssueBase.prototype, "revisionmemo", void 0);
        __decorate([
            Record_1.FieldType.select
        ], WorkOrderIssueBase.prototype, "startoperation", void 0);
        __decorate([
            Record_1.FieldType.sublist(ComponentSublist)
        ], WorkOrderIssueBase.prototype, "component", void 0);
        return WorkOrderIssueBase;
    }(Transaction_1.TransactionBase));
    exports.WorkOrderIssueBase = WorkOrderIssueBase;
});
