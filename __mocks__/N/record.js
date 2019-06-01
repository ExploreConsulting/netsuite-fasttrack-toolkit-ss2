(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = jest.fn(function (config) {
        this.isDynamic = config.isDynamic;
        return this;
    }).mockName('create');
    exports.Type = jest.fn();
    exports.getValue = jest.fn().mockName('getValue');
    exports.setValue = jest.fn().mockName('setValue');
    exports.getText = jest.fn().mockName('getText');
    exports.setText = jest.fn().mockName('setText');
    exports.load = jest.fn().mockReturnThis().mockName('load');
    exports.getLineCount = jest.fn().mockName('getLineCount');
    exports.getFields = jest.fn();
    exports.removeLine = jest.fn();
    exports.findSublistLineWithValue = jest.fn();
    exports.getSublistText = jest.fn().mockName('getSublistText');
    exports.getSublistValue = jest.fn().mockName('getSublistValue');
    exports.setSublistText = jest.fn().mockName('setSublistText');
    exports.setSublistValue = jest.fn().mockName('setSublistValue');
    exports.getSublistFields = jest.fn();
    exports.getSublistField = jest.fn();
    exports.getCurrentSublistText = jest.fn().mockName('getCurrentSublistText');
    exports.setCurrentSublistText = jest.fn().mockName('setCurrentSublistText');
    exports.getCurrentSublistValue = jest.fn().mockName('getCurrentSublistValue');
    exports.setCurrentSublistValue = jest.fn().mockName('setCurrentSublistValue');
    exports.getCurrentSublistSubrecord = jest.fn().mockName('getCurrentSublistSubrecord');
    exports.getSublistSubrecord = jest.fn().mockName('getSublistSubrecord');
    exports.selectLine = jest.fn().mockName('selectLine');
    exports.isDynamic = false;
});
