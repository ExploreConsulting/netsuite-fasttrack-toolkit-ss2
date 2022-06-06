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
        define(["require", "exports", "./Record", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TaskBase = void 0;
    var Record_1 = require("./Record");
    var record = require("N/record");
    /**
     * Project Task Base class
     */
    var TaskBase = /** @class */ (function (_super) {
        __extends(TaskBase, _super);
        function TaskBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Record type
         */
        TaskBase.recordType = function () {
            return record.Type.TASK;
        };
        __decorate([
            Record_1.FieldType.checkbox
        ], TaskBase.prototype, "accesslevel", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], TaskBase.prototype, "actualtime", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TaskBase.prototype, "assigned", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TaskBase.prototype, "company", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TaskBase.prototype, "contact", void 0);
        __decorate([
            Record_1.FieldType.date
        ], TaskBase.prototype, "duedate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], TaskBase.prototype, "enddate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], TaskBase.prototype, "endtime", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TaskBase.prototype, "endtimepicker", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], TaskBase.prototype, "estimatedtime", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], TaskBase.prototype, "estimatedtimeoverride", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], TaskBase.prototype, "group", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], TaskBase.prototype, "message", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TaskBase.prototype, "milestone", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], TaskBase.prototype, "owner", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TaskBase.prototype, "parent", void 0);
        __decorate([
            Record_1.FieldType.percent
        ], TaskBase.prototype, "percentcomplete", void 0);
        __decorate([
            Record_1.FieldType.percent
        ], TaskBase.prototype, "percenttimecomplete", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TaskBase.prototype, "priority", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TaskBase.prototype, "reminderminutes", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TaskBase.prototype, "remindertype", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], TaskBase.prototype, "sendemail", void 0);
        __decorate([
            Record_1.FieldType.date
        ], TaskBase.prototype, "startdate", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], TaskBase.prototype, "starttime", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TaskBase.prototype, "starttimepicker", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TaskBase.prototype, "status", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TaskBase.prototype, "supportcase", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], TaskBase.prototype, "timedevent", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], TaskBase.prototype, "timeremaining", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], TaskBase.prototype, "timezone", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], TaskBase.prototype, "title", void 0);
        __decorate([
            Record_1.FieldType.select
        ], TaskBase.prototype, "transaction", void 0);
        return TaskBase;
    }(Record_1.NetsuiteRecord));
    exports.TaskBase = TaskBase;
});
