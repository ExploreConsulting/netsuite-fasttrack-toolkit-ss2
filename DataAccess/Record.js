/**
 * Defines the nsdal handling for record body fields.
 *
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "N/record", "N/format", "../EC_Logger", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FieldType = exports.numericDescriptor = exports.defaultDescriptor = exports.NetsuiteRecord = exports.NetsuiteCurrentRecord = void 0;
    const record = require("N/record");
    const format = require("N/format");
    const LogManager = require("../EC_Logger");
    const Sublist_1 = require("./Sublist");
    const log = LogManager.getLogger('nsdal');
    /**
     * Since the netsuite defined 'CurrentRecord' type has almost all the same operations as the normal 'Record'
     * we use this as our base class
     */
    class NetsuiteCurrentRecord {
        constructor(rec, isDynamic, defaultValues) {
            this.defaultValues = defaultValues;
            /**
             * Defines a descriptor for nsrecord so as to prevent it from being enumerable. Conceptually only the
             * field properties defined on derived classes should be seen when enumerating
             * @param value
             */
            this.makeRecordProp = (value) => Object.defineProperty(this, 'nsrecord', { value: value });
            // since the context of this.constructor is the derived class we're instantiating, using the line below we can
            // pull the 'static' recordType from the derived class and remove the need for derived classes to
            // define a constructor to pass the record type to super()
            let type = Object.getPrototypeOf(this).constructor.recordType();
            if (!rec) { // falsey values (e.g. invalid id 0, null, undefined, etc.) implies creating a new record
                log.debug('creating new record', `type:${type}  isDyanamic:${isDynamic} defaultValues:${defaultValues}`);
                this.makeRecordProp(record.create({ type: type, isDynamic: isDynamic, defaultValues: defaultValues }));
            }
            else if (typeof rec === 'object') {
                log.debug('using existing record', `type:${rec.type}, id:${rec.id}`);
                this.makeRecordProp(rec);
                this._id = rec.id;
            }
            // allow
            else if (typeof rec === 'number' || +rec) {
                log.debug('loading existing record', `type:${type}, id:${rec}`);
                this.makeRecordProp(record.load({
                    type: type,
                    id: rec,
                    isDynamic: isDynamic || false,
                    defaultValues: defaultValues,
                }));
                this._id = this.nsrecord.id;
            }
            else
                throw new Error(`invalid value for argument "rec": ${rec}. 
      Must be one of: null/undefined, an internal id, or an existing record`);
        }
        get id() {
            return this._id;
        }
        /**
         * The netsuite record type (constant string) - this is declared here and overridden in derived classes
         */
        static recordType() {
            // the base class version of this method should never be invoked.
            return 'NetSuiteCurrentRecord:recordType not implemented. Did you forget to define a static recordType() method on your derived class?';
        }
        toJSON() {
            // surface inherited properties on a new object so JSON.stringify() sees them all
            const result = { id: this._id };
            for (const key in this) {
                // NetSuite will error if you try to serialize 'Text' fields on record *create*.
                // i.e. "Invalid API usage. You must use getSublistValue to return the value set with setSublistValue."
                // As a workaround, consider this record to be in 'create' mode if there is no _id_ assigned yet
                // then skip any 'xxxxText' fields.
                if (!this._id && (key.substring(key.length - 4) === 'Text')) {
                    // yes, this is a side effecting function inside a toJSON but this is a painful enough 'netsuiteism'
                    // to justify
                    log.debug(`toJSON skipping field ${key}`, `workaround to avoid NS erroring on the getText() on a new record`);
                }
                else
                    result[key] = this[key];
            }
            return result;
        }
        /**
         * Returns NetSuite field metadata. Useful for doing things like disabling a field on the form programmatically.
         * @param field field name for which you want to retrieve the NetSuite field object
         */
        getField(field) {
            return this.nsrecord.getField({
                fieldId: field
            });
        }
    }
    exports.NetsuiteCurrentRecord = NetsuiteCurrentRecord;
    /**
     * A regular netsuite record.
     */
    class NetsuiteRecord extends NetsuiteCurrentRecord {
        /**
         * Persists this record to the NS database
         * @param enableSourcing
         * @param ignoreMandatoryFields
         * @returns {number}
         */
        save(enableSourcing, ignoreMandatoryFields) {
            const id = this.nsrecord.save({
                enableSourcing: enableSourcing,
                ignoreMandatoryFields: ignoreMandatoryFields,
            });
            this._id = id;
            return id;
        }
    }
    exports.NetsuiteRecord = NetsuiteRecord;
    /**
     * parses a property name from a declaration (supporting 'Text' suffix per our convention)
     * @param propertyKey original property name as declared on class
     * @returns pair consisting of a flag indicating this field wants 'text' behavior and the actual ns field name (with
     * Text suffix removed)
     */
    const parseProp = suffixParser('Text');
    /**
     * returns a function for parsing property names from a declaration (e.g.
     * properties that end with 'Text' or 'Sublist' suffix per convention)
     * @param suffixToSearch string that may be at the end of a property name. this string will be strippped off
     * the end of the property name if it is present.
     * @returns function that takes a property name and returns a pair [flag indicating this field matched the suffix,
     * the stripped property name (with suffix removed)]
     */
    function suffixParser(suffixToSearch) {
        const suffixLength = suffixToSearch.length;
        return function (propertyKey) {
            const endsWithSuffix = propertyKey.slice(-suffixLength) === suffixToSearch;
            return [endsWithSuffix, endsWithSuffix ? propertyKey.slice(0, -suffixLength) : propertyKey];
        };
    }
    /**
     * parses a property name from a declaration (supporting 'Sublist' suffix per convention)
     * @param propertyKey original property name as declared on class
     * @returns pair consisting of a flag indicating this is actually a sublist and the actual ns sublist name (with
     * Sublist suffix removed)
     */
    const parseSublistProp = suffixParser('Sublist');
    /**
     * Generic decorator factory with basic default algorithm that exposes the field value directly with no
     * other processing. If the property name ends with "Text" then the property will use getText()/setText()
     *
     * @returns a decorator that returns a property descriptor to be used
     * with Object.defineProperty
     */
    function defaultDescriptor(target, propertyKey) {
        const [isTextField, nsfield] = parseProp(propertyKey);
        return {
            get: function () {
                log.debug('field GET', `${nsfield}, as text:${isTextField}`);
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
                    log.info(`ignoring field [${propertyKey}]`, 'field value is undefined');
            },
            enumerable: true //default is false
        };
    }
    exports.defaultDescriptor = defaultDescriptor;
    /**
     * Just like the default descriptor but calls Number() on the value. This exists for numeric types that
     * would blow up if you tried to assign number primitive values to a field. Don't know why - did various checks
     * with lodash and typeof to confirm the raw value was a number but only passing through Number() worked on sets.
     * Reads still seem to return a number.
     * @returns an object property descriptor to be used
     * with Object.defineProperty
     */
    function numericDescriptor(target, propertyKey) {
        const [isTextField, nsfield] = parseProp(propertyKey);
        return {
            get: function () {
                return isTextField ? this.nsrecord.getText({ fieldId: nsfield })
                    : this.nsrecord.getValue({ fieldId: nsfield });
            },
            set: function (value) {
                // ignore undefined's
                if (value !== undefined) {
                    if (isTextField)
                        this.nsrecord.setText({ fieldId: nsfield, text: value });
                    else
                        this.nsrecord.setValue({ fieldId: nsfield, value: Number(value) });
                }
                else
                    log.info(`ignoring field [${propertyKey}]`, 'field value is undefined');
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
            const [, nssublist] = parseSublistProp(propertyKey);
            const privateProp = `_${nssublist}`;
            return {
                enumerable: true,
                // sublist is read only for now - if we have a use case where this should be assigned then tackle it
                get: function () {
                    if (!this[privateProp]) {
                        log.debug('initializing sublist', `sublist property named ${propertyKey}, sublist id ${nssublist}`);
                        // using defineProperty() here defaults to making the property non-enumerable which is what we want
                        // for this 'private' property so it doesn't appear on serialization (e.g. JSON.stringify())
                        Object.defineProperty(this, privateProp, { value: new Sublist_1.Sublist(ctor, this.nsrecord, nssublist) });
                    }
                    return this[privateProp];
                },
            };
        };
    }
    /**
     * Decorator for *subrecord* fields with the subrecord shape represented by T (which
     * defines the properties you want on the subrecord)
     * @param ctor Constructor for the type that has the properties you want from the subrecord.
     * e.g. AssemblyBuild.InventoryDetail
     */
    function subrecordDescriptor(ctor) {
        return function (target, propertyKey) {
            return {
                enumerable: true,
                // sublist is read only for now - if we have a use case where this should be assigned then tackle it
                get: function () {
                    return new ctor(this.nsrecord.getSubrecord({
                        fieldId: propertyKey
                    }));
                },
            };
        };
    }
    /**
     * Generic property descriptor with algorithm for values that need to go through the NS format module on field
     * write. Returns plain getValue() on reads
     * note: does not take into account timezone
     * This decorator applies to record properties only (i.e. not for use on sublists).
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
                    let formattedValue = format.format({ type: formatType, value: value });
                    log.debug(`setting field [${propertyKey}:${formatType}]`, `to formatted value [${formattedValue}] javascript type:${typeof formattedValue}`);
                    if (value === null)
                        this.nsrecord.setValue({ fieldId: propertyKey, value: null });
                    else
                        this.nsrecord.setValue({ fieldId: propertyKey, value: formattedValue });
                }
                else
                    log.info(`not setting ${propertyKey} field`, 'value was undefined');
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
        /**
         * use for ns  _address_ field type
         */
        FieldType.address = defaultDescriptor;
        /**
         * use for NS _checkbox_ field type - surfaces as `boolean` in TypeScript
         */
        FieldType.checkbox = defaultDescriptor;
        FieldType.date = defaultDescriptor;
        FieldType.currency = numericDescriptor;
        FieldType.datetime = defaultDescriptor;
        FieldType.document = defaultDescriptor;
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
        FieldType.percent = defaultDescriptor;
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
        /**
         * NetSuite _SubRecord_ field type (reference to a subrecord object, usually described as 'summary' in the
         * records browser.
         * Pass in the (TypeScript) type that matches the subrecord this property points to
         * @example the `assemblybuild.inventorydetail` property
         * ```typescript
         * import { InventoryDetail } from './DataAceess/InventoryDetail'
         *
         * class AssemblyBuild {
         *    @FieldType.subrecord(InventoryDetail)
         *    inventorydetail: InventoryDetail
         * }
         * ```
         */
        FieldType.subrecord = subrecordDescriptor;
    })(FieldType = exports.FieldType || (exports.FieldType = {}));
});
