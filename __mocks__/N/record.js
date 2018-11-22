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
    exports.load = jest.fn().mockReturnThis().mockName('load');
    exports.getLineCount = jest.fn().mockName('getLineCount');
});
