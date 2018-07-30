"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentScript = jest.fn().mockName('getCurrentScript').mockReturnValue({
    getRemainingUsage: jest.fn().mockName('getRemainingUsage')
});
