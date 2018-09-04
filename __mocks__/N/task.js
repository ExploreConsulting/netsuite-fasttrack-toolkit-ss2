"use strict";
exports.__esModule = true;
exports.create = jest.fn().mockReturnThis().mockName('create');
exports.submit = jest.fn().mockName('submit');
var TaskType;
(function (TaskType) {
    TaskType["SCHEDULED_SCRIPT"] = "SCHEDULED_SCRIPT";
    TaskType["MAP_REDUCE"] = "MAP_REDUCE";
    TaskType["CSV_IMPORT"] = "CSV_IMPORT";
    TaskType["ENTITY_DEDUPLICATION"] = "ENTITY_DEDUPLICATION";
    TaskType["WORKFLOW_TRIGGER"] = "WORKFLOW_TRIGGER";
})(TaskType = exports.TaskType || (exports.TaskType = {}));
