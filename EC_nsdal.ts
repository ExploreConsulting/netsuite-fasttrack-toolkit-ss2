/**
 * Copyright Explore Consulting, LLC
 * 
 * NSDAL is NetSuite Data Access Layer and provides an improved interface to netsuite records.
 */

import * as record from 'N/record'
import * as search from 'N/search'
import * as format from 'N/format'


import * as LogManager from './EC_Logger'
import * as moment from 'typings/browser/definitions/moment'
import {Record} from "./N/record"

var log = LogManager.getLogger('nsdal')


class nsdal extends Record {

}
// these are functions that nlobjRecord defines which we want to expose on this object and pass through
// to the underling nlobjRecord instance.
var functionsToPassThru = [
    "cancelLine",
    "commitLine",
    "findSublistLineWithValue",
    "getCurrentSublistIndex",
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
         var value = getter()
         // ensure we don't return moments for null, undefined, etc.
         return value ? moment(format.parse({type:fieldType, value:value})) : value
      },
      set: function (value) {
         // allow null to flow through, but ignore undefined's
         if (value !== undefined)
            setter({ type:fieldType, value: value ? format.format(moment(value).toDate()) : null})
         else log.debug(`not setting ${fieldType} field`, 'value was undefined')
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
         return values ? values : []
      },
      set: function (value) {
         // ignore undefined's
         if (value !== undefined) setter(value)
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
         return getter() === 'T'
      },
      set: function (value) {
         // allow null to flow through, but ignore undefined's
         if (value !== undefined) setter(value === true ? 'T' : 'F')
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
      get: function () {
         return getter();
      },
      set: function (value) {
         // ignore undefined's
         if (value !== undefined) setter(value);
         else log.debug('ignoring','field is undefined')
      },
      enumerable: true //default is false
   };
}
var nsdal= {}
/**
 * Returns an object derived from the nlobjRecord that allows simple property access for the body fields of an nlobjRecord
 *
 * e.g. to add a the comments and title properties for a contact record:
 * var contact = addProperties( mycontactobject, ['comments','title'] );
 * @param theRecord - the object to add properties to, generally just pass the result from something like nlapiGetNewRecord()
 * @param propNames - one or more strings of the body field names that will appear as properties on the object
 * @return {Object} new object with read/write properties for each field name.
 */
nsdal.addFieldProperties = function (/*nlobjRecord*/ theRecord, /*Array*/ propNames) {
   // create a new object - for some reason the object returned from nlapiGetNewRecord() doesn't behave like an ECMAScript5 object
   // for instance, we can't call Object.create(theRecord) and expect theRecord set as the prototype. I suspect inheritance doesn't really
   // work with NetSuite's javascript, at least for their SuiteScript native objects.
   var obj = Object.create({});


   /**
    * Generic handler for dates since all dates are handled the same way by nsdal - only the type names change
    * @param {string} fieldType type of date field
    * @param {string} fieldname name of the field to create a date descriptor for
    * @returns {{get, set, enumerable}|*}
    */
   function dateHandler(fieldType, fieldname) {
      return dateTimeDescriptor(fieldType,
         theRecord.getFieldValue.bind(theRecord,fieldname),
         theRecord.setFieldValue.bind(theRecord,fieldname)
      );
   }

   // instances of field descriptors with the logic for handling body fields get/set values
   var bodyFieldDescriptors = {

      date: dateHandler.bind(theRecord,"date"),
      datetime: dateHandler.bind(theRecord,"datetime"),
      datetimetz: dateHandler.bind(theRecord,"datetimetz"),
      multiselect: function (fieldname) {
         return multiSelectDescriptor(
            theRecord.getFieldValues.bind(theRecord,fieldname),
            theRecord.setFieldValues.bind(theRecord,fieldname)
         );
      },
      checkbox: function (fieldname) {
         return checkboxDescriptor(
            theRecord.getFieldValue.bind(theRecord,fieldname),
            theRecord.setFieldValue.bind(theRecord,fieldname)
         );
      },
      defaultDesc: function (fieldname) {
         return defaultDescriptor(
            theRecord.getFieldValue.bind(theRecord,fieldname),
            theRecord.setFieldValue.bind(theRecord,fieldname)
         );
      }
   };

   /**
    * The execution context of the current script - used to detect if we are running client side or not?
    * @type {string}
    */
   nsdal.execContext = nlapiGetContext().getExecutionContext();

   /**
    * is nsdal being used in a client script? Uses a combination of the execution context and whether
    * nlapiGetNewRecord is defined
    * @type {boolean} true if this is a client script, else false.
    */
   nsdal.isClientScript = (nsdal.execContext == 'userinterface') && (typeof nlapiGetNewRecord !== 'function');

   // using standard property descriptors, define logic for each (body) field on the record.
   propNames.forEach(function (name) {
      try {
         var field;

         // getField isn't supported in client scripts, so degrade gracefully to just the default descriptor
         if ( !nsdal.isClientScript ) {
            // if getField doesn't return anything (some NS records seem to have this bug) then default rather
            // than error out
            field = theRecord.getField(name);
         }
         var fieldType =  field ? field.type : "defaultDesc";
         var descriptor = (bodyFieldDescriptors[fieldType] || bodyFieldDescriptors["defaultDesc"])(name);
         Object.defineProperty(obj, name, descriptor);

      } catch (e) {
         // include the field name we were working with to aid diagnosing the error
         if (e.constructor === TypeError) {
            Log.e("addFieldProperties() error", "possibly invalid field name: '" + name + "'");
         }
         throw e;
      }
   });

   // preserve the original non-javascript record reference,
   // as it doesn't behave quite like a native javascript object
   Object.defineProperty(obj, 'nlobjRecord',
      {
         value: theRecord,
         enumerable: false,
         writable: false,
         configurable: false
      });
   obj.save = nsdal.save;
   obj.withSublist = nsdal.withSublist;
   return obj;
};

nsdal.save = function (doSourcing, ignoreMandatoryFields) {
   // netsuite expects only the base type (nlobjRecord) to be passed to SubmitRecord()
   return nlapiSubmitRecord(this.nlobjRecord, doSourcing, ignoreMandatoryFields);
};

nsdal.createObject = function (typeName, propNames) {
   return this.fromRecord(nlapiCreateRecord(typeName), propNames);
};

nsdal.loadObject = function (recordType, id, propNames) {
   return this.fromRecord(nlapiLoadRecord(recordType, id), propNames);
};

nsdal.fromRecord = function (theRecord, propNames) {
   var obj = nsdal.addFieldProperties(theRecord, propNames);

   // pass through calls to nlobjRecord when invoked on this object
   _.each(nsdal.functionsToPassThru, function (name) {
      var func = theRecord[name];
      if (func) // some methods aren't supported clientside
         obj[name] = func.bind(theRecord);
   });

   return obj;
};


nsdal.withSublist = function (listname, propNames) {

   // how big does our array representing the sublist need to be?
   var numLines = parseInt(this.getLineItemCount(listname));

   // add the parent array property named after the list (e.g. customer.addressbook)
   // not writable so the user can't reassign it to an object that doesn't understand netsuite
   Object.defineProperty(this, listname, { value: [], writable: false, enumerable:true });
   var list = this[listname];
   list.parent = this;
   /** adds a new line item to the existing sublist list
    * @param {Number} linenum
    * @param {nsdal} recordObj
    * */
   list.addNewLineItem = function (linenum, recordObj) {
      // date handler leaves the line number field to be locked down at runtime.
      function dateHandler(fieldType, listname, fieldname,linenum) {
         return dateTimeDescriptor(fieldType,
            this.getLineItemValue.bind(this,listname,fieldname,linenum),
            this.setLineItemValue.bind(this,listname,fieldname,linenum)
         );
      }
      // instances of field descriptors with the logic for sublist field getter/setters for
      // sublist fields
      var sublistFieldDescriptors = {

         date: dateHandler.bind(recordObj,"date"),
         datetime: dateHandler.bind(recordObj,"datetime"),
         datetimetz: dateHandler.bind(recordObj,"datetimetz"),
         multiselect: function (listname, fieldname, line) {
            return multiSelectDescriptor(
               recordObj.getLineItemValues.bind(recordObj,fieldname,line),
               recordObj.setLineItemValues.bind(recordObj,fieldname,line)
            );
         },
         checkbox: function (listname, fieldname, line) {
            return checkboxDescriptor(
               recordObj.getLineItemValue.bind(recordObj,listname,fieldname,line),
               recordObj.setLineItemValue.bind(recordObj,listname,fieldname,line)
            );
         },
         defaultDesc: function (listname, fieldname, linenum) {
            return defaultDescriptor(
               recordObj.getLineItemValue.bind(recordObj,listname,fieldname,linenum),
               recordObj.setLineItemValue.bind(recordObj,listname,fieldname,linenum)
            );
         }
      };

      var newItem = Object.create({});

      propNames.forEach(function (name) {
         var fieldObj;
         if (!nsdal.isClientScript) { // SSS_NOT_YET_SUPPORTED in client script
            fieldObj = recordObj.getLineItemField(listname, name);
         }
         var fieldType = fieldObj ? fieldObj.type : "unknown";
         var descriptor = (sublistFieldDescriptors[fieldType] ||
         sublistFieldDescriptors["defaultDesc"])(listname,name,linenum);
         Object.defineProperty(newItem, name, descriptor);
      });

      this.push(newItem);
      return newItem;
   };

   // add an object representing each existing line in the sublist
   for (var i = 1; i <= numLines; i++) {
      list.addNewLineItem(i, this);
   }

   /**
    * Adds a new empty line to the sublist
    * @returns the newly added line item object
    */
   list.addLine = function () {

      var currentLineCount = this.parent.getLineItemCount(listname);
      var insertLinePosition = parseInt(currentLineCount) + 1;
      Log.d("Inserting Line Item", "sublist: '" + listname + "' line: " + insertLinePosition);

      this.parent.insertLineItem(listname, parseInt(insertLinePosition));
      Log.d("Line count after adding:" + this.parent.getLineItemCount(listname));

      return this.addNewLineItem(insertLinePosition, this.parent);
   };
   /**
    * calls record.commitLineItem() for this sublist. When adding new lines you don't need to call this method
    */
   list.commitLine = function () {
      Log.d("Committing line on list '" + listname + "'");
      this.parent.commitLineItem(listname);
   };
   return this; // for chaining
};

