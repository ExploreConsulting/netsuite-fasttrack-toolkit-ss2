"use strict";
/**
 * Basic tests for geographic info (states and countries)
 */
Object.defineProperty(exports, "__esModule", { value: true });
var geography_1 = require("../geography");
describe('get states info', function () {
    test('get WA by abbreviation', function () {
        var foundstate = geography_1.getStateById(48);
        expect(foundstate).toHaveProperty('abbrev', 'WA');
    });
});
