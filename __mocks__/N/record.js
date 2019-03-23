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
    exports.create = jest.fn().mockReturnThis().mockName('create');
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
    exports.getSublistText = jest.fn();
    exports.getSublistValue = jest.fn();
    exports.setSublistText = jest.fn();
    exports.setSublistValue = jest.fn();
    exports.getSublistFields = jest.fn();
    exports.getSublistField = jest.fn();
});
