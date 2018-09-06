"use strict";
exports.__esModule = true;
exports.getCurrentScript = jest.fn().mockName('getCurrentScript').mockReturnValue({
    getRemainingUsage: jest.fn().mockName('getRemainingUsage')
});
