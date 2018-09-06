"use strict";
exports.__esModule = true;
exports.create = jest.fn().mockReturnThis().mockName('create');
exports.Type = jest.fn();
exports.getValue = jest.fn().mockName('getValue');
exports.setValue = jest.fn().mockName('setValue');
exports.load = jest.fn().mockReturnThis().mockName('load');
exports.getLineCount = jest.fn().mockName('getLineCount');
