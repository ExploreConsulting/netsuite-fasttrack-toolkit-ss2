(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../query"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const query_1 = require("../query");
    describe('nsSearchResult2obj', function () {
        function getFakeSearchResult() {
            return {
                value: [
                    '880',
                ],
                asMap: jest.fn().mockReturnValueOnce({ foo: '880' })
            };
        }
        test('defaults to column name if label is undefined', () => {
            const noLabelResult = getFakeSearchResult();
            // default useLabels
            const x = (0, query_1.nsSearchResult2obj)(noLabelResult);
            expect(x).toHaveProperty('foo', '880');
        });
    });
});
