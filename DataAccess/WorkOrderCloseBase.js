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
        define(["require", "exports", "./Sublist", "./Record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WorkOrderCloseBase = exports.ComponentSublist = void 0;
    /**
     * NetSuite Work Order Close Record Type
     */
    const Sublist_1 = require("./Sublist");
    const Record_1 = require("./Record");
    class ComponentSublist extends Sublist_1.SublistLine {
    }
    exports.ComponentSublist = ComponentSublist;
    /**
     * NetSuite Work Order Close Record type
     */
    class WorkOrderCloseBase extends Record_1.NetsuiteRecord {
    }
    exports.WorkOrderCloseBase = WorkOrderCloseBase;
    __decorate([
        Record_1.FieldType.sublist(ComponentSublist)
    ], WorkOrderCloseBase.prototype, "component", void 0);
});
