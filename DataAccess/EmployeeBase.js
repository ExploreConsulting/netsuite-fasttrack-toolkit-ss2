/**
 * NetSuite Employee Base Record
 */
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
        define(["require", "exports", "./Record", "./Entity", "N/record", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmployeeBase = exports.RolesSublist = void 0;
    var Record_1 = require("./Record");
    var Entity_1 = require("./Entity");
    var record = require("N/record");
    var Sublist_1 = require("./Sublist");
    var RolesSublist = /** @class */ (function (_super) {
        __extends(RolesSublist, _super);
        function RolesSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], RolesSublist.prototype, "selectedrole", void 0);
        return RolesSublist;
    }(Sublist_1.SublistLine));
    exports.RolesSublist = RolesSublist;
    var EmployeeBase = /** @class */ (function (_super) {
        __extends(EmployeeBase, _super);
        function EmployeeBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EmployeeBase.recordType = function () {
            return record.Type.EMPLOYEE;
        };
        __decorate([
            Record_1.FieldType.select
        ], EmployeeBase.prototype, "approver", void 0);
        __decorate([
            Record_1.FieldType.date
        ], EmployeeBase.prototype, "birthdate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EmployeeBase.prototype, "class", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EmployeeBase.prototype, "department", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], EmployeeBase.prototype, "directdeposit", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EmployeeBase.prototype, "employeestatus", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EmployeeBase.prototype, "employeetype", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EmployeeBase.prototype, "gender", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], EmployeeBase.prototype, "giveaccess", void 0);
        __decorate([
            Record_1.FieldType.date
        ], EmployeeBase.prototype, "hiredate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], EmployeeBase.prototype, "homephone", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EmployeeBase.prototype, "image", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], EmployeeBase.prototype, "isjobresource", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], EmployeeBase.prototype, "isjobmanager", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], EmployeeBase.prototype, "jobdescription", void 0);
        __decorate([
            Record_1.FieldType.date
        ], EmployeeBase.prototype, "lastreviewdate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EmployeeBase.prototype, "location", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EmployeeBase.prototype, "maritalstatus", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], EmployeeBase.prototype, "mobilephone", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], EmployeeBase.prototype, "officephone", void 0);
        __decorate([
            Record_1.FieldType.date
        ], EmployeeBase.prototype, "releasedate", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], EmployeeBase.prototype, "sendemail", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EmployeeBase.prototype, "supervisor", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EmployeeBase.prototype, "timeapprover", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], EmployeeBase.prototype, "title", void 0);
        __decorate([
            Record_1.FieldType.select
        ], EmployeeBase.prototype, "workcalendar", void 0);
        return EmployeeBase;
    }(Entity_1.Entity));
    exports.EmployeeBase = EmployeeBase;
});
