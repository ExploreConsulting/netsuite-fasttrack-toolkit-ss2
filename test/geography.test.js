/**
 * Basic tests for geographic info (states and countries)
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../geography"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var geography_1 = require("../geography");
    describe('get states info', function () {
        test('get WA by abbreviation', function () {
            var foundstate = geography_1.getStateById(48);
            expect(foundstate).toHaveProperty('abbrev', 'WA');
        });
    });
});
