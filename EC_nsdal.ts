/**
 * Copyright Explore Consulting, LLC
 * 
 * NSDAL is NetSuite Data Access Layer and provides an improved interface to netsuite records.
 */

import * as record from 'N/record'

// these are functions that nlobjRecord defines which we want to expose on this object and pass through
// to the underling nlobjRecord instance.
var functionsToPassThru = [
    "getId",
    "getRecordType",
    "getField",
    "getSubList",
    "getMatrixField",
    "getLineItemField",
    "getLineItemMatrixField",
    "getLineItemMatrixValue",
    "setFieldValue",
    "setFieldValues",
    "getFieldValue",
    "getFieldValues",
    "setFieldText",
    "setFieldTexts",
    "getFieldText",
    "getFieldTexts",
    "getMatrixValue",
    "setMatrixValue",
    "getAllFields",
    "getAllLineItemFields",
    "setLineItemValue",
    "getLineItemValue",
    "getLineItemText",
    "setCurrentLineItemValue",
    "getCurrentLineItemValue",
    "getCurrentLineItemText",
    "setCurrentLineItemMatrixValue",
    "getCurrentLineItemMatrixValue",
    "getMatrixCount",
    "getLineItemCount",
    "findLineItemValue",
    "findLineItemMatrixValue",
    "insertLineItem",
    "removeLineItem",
    "selectNewLineItem",
    "selectLineItem",
    "viewLineItemSubrecord",
    "viewCurrentLineItemSubrecord",
    "createCurrentLineItemSubrecord",
    "editCurrentLineItemSubrecord",
    "removeCurrentLineItemSubrecord",
    "createSubrecord",
    "editSubrecord",
    "viewSubrecord",
    "removeSubrecord",
    "commitLineItem"]

/**
 * Generic property descriptor with algorithm for date handling. Surfaces dates as moment() instances
 * @param {string} fieldType the NS field type (e.g. 'date')
 * @param getter function for getting values
 * @param setter function for setting values
 * @returns {{get: Function, set: Function, enumerable: boolean}} an object property descriptor to be used
 * with Object.defineProperty
 */
function dateTimeDescriptor(fieldType, getter, setter) {
   return {
      get: function () {
         var value = getter();
         // ensure we don't return moments for null, undefined, etc.
         return value ? moment(nlapiStringToDate(value, fieldType)) : value;
      },
      set: function (value) {
         // allow null to flow through, but ignore undefined's
         if (value !== undefined)
            setter(value ? nlapiDateToString(moment(value).toDate(), fieldType) : null);
      },
      enumerable: true //default is false
   };
}

/**
 * Generic property descriptor with algorithm for multiselect lists. Surfaces the multiselect as a native javascript
 * array with internalids of the values as the element values of the array.
 * @param getter function for getting values
 * @param setter function for setting values
 * @returns {{get: Function, set: Function, enumerable: boolean}} an object property descriptor to be used
 * with Object.defineProperty
 */
function multiSelectDescriptor(getter, setter) {
   return  {
      get: function () {
         var values = getter();
         // Server side values will be null if nothing is selected
         return values ? values : [];
      },
      set: function (value) {
         // ignore undefined's
         if (value !== undefined) setter(value);
      },
      enumerable: true // default is false - this lets you JSON.stringify() this prop
   };
}

/**
 * Generic property descriptor with algorithm NS checkbox to native boolean.
 * @param getter function for getting values
 * @param setter function for setting values
 * @returns {{get: Function, set: Function, enumerable: boolean}} an object property descriptor to be used
 * with Object.defineProperty
 */
function checkboxDescriptor(getter, setter) {
   return {
      get: function () {
         return getter() === 'T';
      },
      set: function (value) {
         // allow null to flow through, but ignore undefined's
         if (value !== undefined) setter(value === true ? 'T' : 'F');
      },
      enumerable: true // default is false - this lets you JSON.stringify() this prop
   };
}

/**
 * Generic property descriptor with basic default algorithm that exposes the field value directly with no
 * other processing.
 * @param getter function for getting values
 * @param setter function for setting values
 * @returns {{get: Function, set: Function, enumerable: boolean}} an object property descriptor to be used
 * with Object.defineProperty
 */
function defaultDescriptor(getter, setter) {
   return {
      // get: getter,
      get: function () {
         var result = getter();
         return result;
      },
      set: function (value) {

         // ignore undefined's
         if (value !== undefined) setter(value);
      },
      enumerable: true //default is false
   };
}
