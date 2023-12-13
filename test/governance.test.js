(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../__mocks__/N/task", "../governance", "../__mocks__/N/runtime", "moment"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    jest.mock('EC_Logger');
    const mocktask = require("../__mocks__/N/task");
    const governance_1 = require("../governance");
    const mockruntime = require("../__mocks__/N/runtime");
    const moment = require("moment");
    describe('governance', function () {
        const getRemainingUsage = mockruntime.getCurrentScript().getRemainingUsage;
        test('time and units remain returns true', function () {
            getRemainingUsage.mockReturnValue(1000);
            const sut = (0, governance_1.governanceRemains)();
            expect(sut()).toEqual(true);
        });
        test('drop below units threshold returns false', function () {
            getRemainingUsage.mockReturnValue(199);
            const sut = (0, governance_1.governanceRemains)();
            expect(sut()).toEqual(false);
        });
        test('drop below time threshold returns false', function () {
            getRemainingUsage.mockReturnValue(1000);
            // simulate a start time 46 minutes in the past
            const inThePast = moment().subtract(46, 'minutes').valueOf();
            const sut = (0, governance_1.governanceRemains)(inThePast);
            expect(sut()).toEqual(false);
        });
        test('drop below time threshold and units returns false', function () {
            getRemainingUsage.mockReturnValue(100);
            // simulate a start time 46 minutes in the past
            const inThePast = moment().subtract(46, 'minutes').valueOf();
            const sut = (0, governance_1.governanceRemains)(inThePast);
            expect(sut()).toEqual(false);
        });
        test('time remains should return true', function () {
            getRemainingUsage.mockReturnValue(1000);
            // simulate a start time 30 minutes in the past - still has 15 minutes of time before the default 45 min limit
            const inThePast = moment().subtract(30, 'minutes').valueOf();
            const sut = (0, governance_1.governanceRemains)(inThePast);
            expect(sut()).toEqual(true);
        });
    });
    describe('rescheduling', function () {
        test('should not reschedule if governance remains (no parms)', function () {
            const alwaysTrue = () => true;
            const sut = (0, governance_1.rescheduleIfNeeded)(alwaysTrue);
            expect(sut()).toEqual(true);
            expect(mocktask.create).not.toHaveBeenCalled();
        });
        test('does not reschedule if governance exhausted (no parms)', function () {
            const alwaysFalse = () => false;
            const sut = (0, governance_1.rescheduleIfNeeded)(alwaysFalse);
            expect(sut()).toEqual(false);
            expect(mocktask.create).toHaveBeenCalled();
        });
        test('passes script params when rescheduling', function () {
            const alwaysFalse = () => false;
            let scriptParams = { foo: 'bar' };
            const sut = (0, governance_1.rescheduleIfNeeded)(alwaysFalse, scriptParams);
            expect(sut()).toEqual(false);
            // task.create() is called with our script params
            expect(mocktask.create.mock.calls[0][0]).toEqual(expect.objectContaining({ params: scriptParams }));
        });
        test('passes callback script params when rescheduling (supersedes params:object parameter)', function () {
            const alwaysFalse = () => false;
            let scriptParams = { foo: 'bar' };
            const makeScriptParams = () => scriptParams;
            const sut = (0, governance_1.rescheduleIfNeeded)(alwaysFalse, undefined, () => makeScriptParams());
            expect(sut()).toEqual(false);
            // task.create() is called with our script params
            expect(mocktask.create.mock.calls[0][0]).toEqual(expect.objectContaining({ params: scriptParams }));
        });
    });
});
