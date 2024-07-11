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
    exports.TaskType = exports.submit = exports.create = void 0;
    exports.create = jest.fn().mockReturnThis().mockName('create');
    exports.submit = jest.fn().mockName('submit');
    var TaskType;
    (function (TaskType) {
        TaskType["SCHEDULED_SCRIPT"] = "SCHEDULED_SCRIPT";
        TaskType["MAP_REDUCE"] = "MAP_REDUCE";
        TaskType["CSV_IMPORT"] = "CSV_IMPORT";
        TaskType["ENTITY_DEDUPLICATION"] = "ENTITY_DEDUPLICATION";
        TaskType["WORKFLOW_TRIGGER"] = "WORKFLOW_TRIGGER";
    })(TaskType || (exports.TaskType = TaskType = {}));
});
