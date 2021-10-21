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
    const geography_1 = require("../geography");
    describe('get states info', function () {
        test('get WA by id', function () {
            let foundstate = (0, geography_1.getStateById)(48);
            expect(foundstate).toHaveProperty('shortname', 'WA');
        });
        test('get unknown state by id', function () {
            let foundState = (0, geography_1.getStateById)('');
            expect(foundState).toBeUndefined();
        });
    });
    describe('get country info', function () {
        test('get USA by id', function () {
            let foundCountry = (0, geography_1.getCountryById)('US');
            expect(foundCountry).toHaveProperty('name', 'United States');
        });
        test('get unknown country by id', function () {
            let foundCountry = (0, geography_1.getCountryById)('no such country code exists');
            expect(foundCountry).toBeUndefined();
        });
        test('get country by uniquekey', function () {
            let foundCountry = (0, geography_1.getCountryByUniqueKey)(3);
            expect(foundCountry).toHaveProperty('id', 'AF');
        });
        test('get unknown country by uniquekey', function () {
            let foundCountry = (0, geography_1.getCountryByUniqueKey)(-1);
            expect(foundCountry).toBeUndefined();
        });
    });
});
