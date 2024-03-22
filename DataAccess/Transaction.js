/**
 * NetSuite generic Transaction record
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransactionBase = void 0;
    const Record_1 = require("./Record");
    /**
     * Fields common to all transactions in NS, and is the share base class for bundled DataAccess transaction types.
     * Note that when using this base class, pass an existing native NS record object to the constructor.
     * Attempting to create a new instance of this class from scratch or load an existing transaction by internal id
     * will fail (since the record type cannot be ambiguous in those cases).
     *
     */
    class TransactionBase extends Record_1.NetsuiteRecord {
        /**
         * locates line on the 'apply' sublist that corresponds to the passed related record internal id
         * expose this method in derived classes that need dynamic access to the apply sublist
         * returns undefined
         * @deprecated - dynamic access to the apply sublist should generally work using normal collection oriented means
         */
        findApplyLine(docId) {
            let rec = this.nsrecord;
            if (!rec.isDynamic || !this.defaultValues)
                throw new Error('record must be in dynamic mode and have default values set to use this method');
            const line = rec.findSublistLineWithValue({
                sublistId: 'apply',
                fieldId: 'doc',
                value: docId.toString()
            });
            // helper function for adding a 'current sublist' getter/settor for the given property name on the apply sublist
            const addProp = (o, prop) => {
                Object.defineProperty(o, prop, {
                    get: function () {
                        rec.selectLine({ sublistId: 'apply', line: line });
                        return rec.getCurrentSublistValue({ sublistId: 'apply', fieldId: prop });
                    },
                    set: function (value) {
                        rec.selectLine({ sublistId: 'apply', line: line });
                        rec.setCurrentSublistValue({ sublistId: 'apply', fieldId: prop, value: value });
                        rec.commitLine({ sublistId: 'apply' });
                    }
                });
            };
            if (line >= 0) {
                let newLine = { line: line };
                addProp(newLine, 'apply');
                addProp(newLine, 'amount');
                return newLine;
            }
            else
                return null;
        }
    }
    exports.TransactionBase = TransactionBase;
    __decorate([
        Record_1.FieldType.datetime
    ], TransactionBase.prototype, "createddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TransactionBase.prototype, "customform", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TransactionBase.prototype, "department", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TransactionBase.prototype, "deletionreason", void 0);
    __decorate([
        Record_1.FieldType.longtext
    ], TransactionBase.prototype, "deletionreasonmemo", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TransactionBase.prototype, "email", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TransactionBase.prototype, "entity", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TransactionBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], TransactionBase.prototype, "istaxable", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], TransactionBase.prototype, "lastmodifieddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TransactionBase.prototype, "location", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TransactionBase.prototype, "memo", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TransactionBase.prototype, "orderstatus", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TransactionBase.prototype, "otherrefnum", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TransactionBase.prototype, "postingperiod", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TransactionBase.prototype, "salesrep", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TransactionBase.prototype, "status", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TransactionBase.prototype, "statusRef", void 0);
    __decorate([
        Record_1.FieldType.select
    ], TransactionBase.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], TransactionBase.prototype, "tranid", void 0);
    __decorate([
        Record_1.FieldType.date
    ], TransactionBase.prototype, "trandate", void 0);
});
