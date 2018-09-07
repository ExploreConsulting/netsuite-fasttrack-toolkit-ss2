"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock('EC_Logger');
var mocktask = require("../__mocks__/N/task");
var governance_1 = require("../governance");
var mockruntime = require("../__mocks__/N/runtime");
var moment = require("moment");
describe('governance', function () {
    var getRemainingUsage = mockruntime.getCurrentScript().getRemainingUsage;
    test('time and units remain returns true', function () {
        getRemainingUsage.mockReturnValue(1000);
        var sut = governance_1.governanceRemains();
        expect(sut()).toEqual(true);
    });
    test('drop below units threshold returns false', function () {
        getRemainingUsage.mockReturnValue(199);
        var sut = governance_1.governanceRemains();
        expect(sut()).toEqual(false);
    });
    test('drop below time threshold returns false', function () {
        getRemainingUsage.mockReturnValue(1000);
        // simulate a start time 46 minutes in the past
        var inThePast = moment().subtract(46, 'minutes');
        var sut = governance_1.governanceRemains(inThePast);
        expect(sut()).toEqual(false);
    });
    test('drop below time threshold and units returns false', function () {
        getRemainingUsage.mockReturnValue(100);
        // simulate a start time 46 minutes in the past
        var inThePast = moment().subtract(46, 'minutes');
        var sut = governance_1.governanceRemains(inThePast);
        expect(sut()).toEqual(false);
    });
});
describe('rescheduling', function () {
    test('should not reschedule if governance remains (no parms)', function () {
        var alwaysTrue = function () { return true; };
        var sut = governance_1.rescheduleIfNeeded(alwaysTrue);
        expect(sut()).toEqual(true);
        expect(mocktask.create).not.toHaveBeenCalled();
    });
    test('does not reschedule if governance exhausted (no parms)', function () {
        var alwaysFalse = function () { return false; };
        var sut = governance_1.rescheduleIfNeeded(alwaysFalse);
        expect(sut()).toEqual(false);
        expect(mocktask.create).toHaveBeenCalled();
    });
    test('passes script params when rescheduling', function () {
        var alwaysFalse = function () { return false; };
        var scriptParams = { foo: 'bar' };
        var sut = governance_1.rescheduleIfNeeded(alwaysFalse, scriptParams);
        expect(sut()).toEqual(false);
        // task.create() is called with our script params
        expect(mocktask.create.mock.calls[0][0]).toEqual(expect.objectContaining({ params: scriptParams }));
    });
});
