/**
 * Defines the nsdal handling for record body fields.
 *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "N/record", "N/format", "../EC_Logger", "../lodash", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var record = require("N/record");
    var format = require("N/format");
    var LogManager = require("../EC_Logger");
    var _ = require("../lodash");
    var Sublist_1 = require("./Sublist");
    var log = LogManager.getLogger('nsdal');
    /**
     * Since the netsuite defined 'CurrentRecord' type has almost all the same operations as the normal 'Record'
     * we use this as our base class
     */
    var NetsuiteCurrentRecord = /** @class */ (function () {
        function NetsuiteCurrentRecord(rec, isDynamic, defaultValues) {
            var _this = this;
            this.defaultValues = defaultValues;
            /**
             * Defines a descriptor for nsrecord so as to prevent it from being enumerable. Conceptually only the
             * field properties defined on derived classes should be seen when enumerating
             * @param value
             */
            this.makeRecordProp = function (value) { return Object.defineProperty(_this, 'nsrecord', { value: value }); };
            // since the context of this.constructor is the derived class we're instantiating, using the line below we can
            // pull the 'static' recordType from the derived class and remove the need for derived classes to
            // define a constructor to pass the record type to super()
            var type = Object.getPrototypeOf(this).constructor.recordType;
            if (!rec) {
                log.debug('creating new record', "type:" + type + "  isDyanamic:" + isDynamic + " defaultValues:" + defaultValues);
                this.makeRecordProp(record.create({ type: type, isDynamic: isDynamic, defaultValues: defaultValues }));
            }
            else if (typeof rec === 'object') {
                log.debug('using existing record', "type:" + rec.type + ", id:" + rec.id);
                this.makeRecordProp(rec);
                this._id = rec.id;
            }
            // allow
            else if (typeof rec === 'number' || +rec) {
                log.debug('loading existing record', "type:" + type + ", id:" + rec);
                this.makeRecordProp(record.load({
                    type: type,
                    id: rec,
                    isDynamic: isDynamic || false,
                    defaultValue: defaultValues,
                }));
                this._id = this.nsrecord.id;
            }
            else
                throw new Error("invalid value for argument \"rec\": " + rec + ". \n      Must be one of: null/undefined, an internal id, or an existing record");
        }
        Object.defineProperty(NetsuiteCurrentRecord.prototype, "id", {
            get: function () {
                return this._id;
            },
            enumerable: true,
            configurable: true
        });
        NetsuiteCurrentRecord.prototype.toJSON = function () { return _.toPlainObject(this); };
        return NetsuiteCurrentRecord;
    }());
    exports.NetsuiteCurrentRecord = NetsuiteCurrentRecord;
    /**
     * A regular netsuite record.
     */
    var NetsuiteRecord = /** @class */ (function (_super) {
        __extends(NetsuiteRecord, _super);
        function NetsuiteRecord() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Persists this record to the NS database
         * @param enableSourcing
         * @param ignoreMandatoryFields
         * @returns {number}
         */
        NetsuiteRecord.prototype.save = function (enableSourcing, ignoreMandatoryFields) {
            var id = this.nsrecord.save({
                enableSourcing: enableSourcing,
                ignoreMandatoryFields: ignoreMandatoryFields,
            });
            this._id = id;
            return id;
        };
        return NetsuiteRecord;
    }(NetsuiteCurrentRecord));
    exports.NetsuiteRecord = NetsuiteRecord;
    /**
     * Generic decorator factory with basic default algorithm that exposes the field value directly with no
     * other processing. If the property name ends with "Text" then the property will use getText()/setText()
     *
     * @returns a decorator that returns a property descriptor to be used
     * with Object.defineProperty
     */
    function defaultDescriptor(target, propertyKey) {
        var isTextField = _.endsWith(propertyKey, 'Text');
        var nsfield = isTextField ? _.trimEnd(propertyKey, 'Text') : propertyKey;
        return {
            get: function () {
                log.debug('field GET', nsfield + ", as text:" + isTextField);
                return isTextField ? this.nsrecord.getText({ fieldId: nsfield })
                    : this.nsrecord.getValue({ fieldId: nsfield });
            },
            set: function (value) {
                // ignore undefined's
                if (value !== undefined) {
                    if (isTextField)
                        this.nsrecord.setText({ fieldId: nsfield, text: value });
                    else
                        this.nsrecord.setValue({ fieldId: nsfield, value: value });
                }
                else
                    log.info("ignoring field [" + propertyKey + "]", 'field value is undefined');
            },
            enumerable: true //default is false
        };
    }
    exports.defaultDescriptor = defaultDescriptor;
    /**
     * Just like the default decriptor but calls Number() on the value. This exists for numeric types that
     * would blow up if you tried to assign number primitive values to a field. Don't know why - did various checks
     * with lodash and typeof to confirm the raw value was a number but only passing through Number() worked on sets.
     * Reads still seem to return a number.
     * @returns an object property descriptor to be used
     * with Object.defineProperty
     */
    function numericDescriptor(target, propertyKey) {
        return {
            get: function () {
                return this.nsrecord.getValue({ fieldId: propertyKey });
            },
            set: function (value) {
                // ignore undefined's
                if (value !== undefined)
                    this.nsrecord.setValue({ fieldId: propertyKey, value: Number(value) });
                else
                    log.info("ignoring field [" + propertyKey + "]", 'field value is undefined');
            },
            enumerable: true //default is false
        };
    }
    exports.numericDescriptor = numericDescriptor;
    /**
     * Decorator for adding sublists with each line of the sublist represented by a type T which
     * defines the properties you want on the sublist
     * @param ctor Constructor for the type that has the properties you want from each sublist line.
     * e.g. Invoice.ItemSublistLine
     */
    function sublistDescriptor(ctor) {
        return function (target, propertyKey) {
            var privateProp = "_" + propertyKey;
            return {
                enumerable: true,
                // sublist is read only for now - if we have a use case where this should be assigned then tackle it
                get: function () {
                    if (!this[privateProp]) {
                        log.debug('initializing sublist', "sublist property named " + propertyKey);
                        // using defineProperty() here defaults to making the property non-enumerable which is what we want
                        // for this 'private' property so it doesn't appear on serialization (e.g. JSON.stringify())
                        Object.defineProperty(this, privateProp, { value: new Sublist_1.Sublist(ctor, this.nsrecord, propertyKey) });
                    }
                    return this[privateProp];
                },
            };
        };
    }
    exports.sublistDescriptor = sublistDescriptor;
    /**
     * Generic property descriptor with algorithm for values that need to go through the NS format module on field
     * write. Returns plain getValue() on reads
     * note: does not take into account timezone
     * @param {string} formatType the NS field type (e.g. 'date')
     * @param target
     * @param propertyKey
     * @returns  an object property descriptor to be used
     * with decorators
     */
    function formattedDescriptor(formatType, target, propertyKey) {
        return {
            get: function () {
                return this.nsrecord.getValue({ fieldId: propertyKey });
            },
            set: function (value) {
                // allow null to flow through, but ignore undefined's
                if (value !== undefined) {
                    var formattedValue = format.format({ type: formatType, value: value });
                    log.debug("setting field [" + propertyKey + ":" + formatType + "]", "to formatted value [" + formattedValue + "] javascript type:" + typeof formattedValue);
                    if (value === null)
                        this.nsrecord.setValue({ fieldId: propertyKey, value: null });
                    else
                        this.nsrecord.setValue({ fieldId: propertyKey, value: formattedValue });
                }
                else
                    log.info("not setting " + propertyKey + " field", 'value was undefined');
            },
            enumerable: true //default is false
        };
    }
    /**
     *  Netsuite field types - decorate your model properties with these to tie netsuite field types to your
     *  model's field type.
     *  To get 'Text' rather than field value, suffix your property name with 'Text' e.g. 'afieldText' for the
     *  field 'afield'.
     */
    var FieldType;
    (function (FieldType) {
        FieldType.address = defaultDescriptor;
        FieldType.checkbox = defaultDescriptor;
        FieldType.currency = numericDescriptor;
        FieldType.date = defaultDescriptor;
        FieldType.datetime = defaultDescriptor;
        FieldType.email = defaultDescriptor;
        FieldType.freeformtext = defaultDescriptor;
        FieldType.float = numericDescriptor;
        FieldType.decimalnumber = FieldType.float;
        FieldType.hyperlink = defaultDescriptor;
        FieldType.inlinehtml = defaultDescriptor;
        FieldType.image = defaultDescriptor;
        FieldType.integernumber = numericDescriptor;
        FieldType.longtext = defaultDescriptor;
        FieldType.multiselect = defaultDescriptor;
        FieldType.percent = _.partial(formattedDescriptor, format.Type.PERCENT);
        /**
         * NetSuite 'Select' field type.
         */
        FieldType.select = defaultDescriptor;
        FieldType.textarea = defaultDescriptor;
        /**
         * this isn't a native NS 'field' type, but rather is used to indicate a property should represent a NS sub-list.
         * Pass a type derived from SublistLine that describes the sublist fields you want. e.g. Invoice.ItemSublistLine
         * @example
         * class MySublistLine extends Invoice.ItemSublistLine { custcol_foo:string }
         * class Invoice {
         * @FieldType.sublist(MySublistLine)
         * item: SublistLine<MySublistLine>
         * }
         */
        FieldType.sublist = sublistDescriptor;
    })(FieldType = exports.FieldType || (exports.FieldType = {}));
});
