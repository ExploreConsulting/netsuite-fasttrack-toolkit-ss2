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
    exports.isDynamic = exports.selectLine = exports.getSublistSubrecord = exports.getCurrentSublistSubrecord = exports.setCurrentSublistValue = exports.getCurrentSublistValue = exports.setCurrentSublistText = exports.getCurrentSublistText = exports.getSublistField = exports.getSublistFields = exports.setSublistValue = exports.setSublistText = exports.getSublistValue = exports.getSublistText = exports.findSublistLineWithValue = exports.removeLine = exports.insertLine = exports.getField = exports.getFields = exports.getLineCount = exports.load = exports.setText = exports.getText = exports.setValue = exports.getValue = exports.Type = exports.create = void 0;
    exports.create = jest.fn(function (config) {
        this.isDynamic = config.isDynamic;
        this.type = config.type;
        return this;
    }).mockName('create');
    exports.Type = jest.fn();
    exports.getValue = jest.fn().mockName('getValue');
    exports.setValue = jest.fn().mockName('setValue');
    exports.getText = jest.fn().mockName('getText');
    exports.setText = jest.fn().mockName('setText');
    exports.load = jest.fn(function ({ id, type, isDynamic }) {
        this.id = id;
        this.type = type;
        this.isDynamic = isDynamic;
        return this;
    });
    exports.getLineCount = jest.fn().mockName('getLineCount');
    exports.getFields = jest.fn();
    exports.getField = jest.fn();
    exports.insertLine = jest.fn().mockName('insertLine');
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
