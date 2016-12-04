/**
 * Defines the nsdal handling for record body fields.
 *
 */


import * as record from 'N/record'
import * as format from 'N/format'
import * as LogManager from '../EC_Logger'
import * as moment from "../moment"
import * as _ from "../lodash"
var log = LogManager.getLogger('nsdal')

/**
 * Since the netsuite defined 'CurrentRecord' type has almost all the same operations as the normal 'Record'
 * we use this as our base class
 */
export abstract class NetsuiteCurrentRecord {

   /**
    * Netsuite internal id of this record
    * @type {number}
    */
   protected _id: number
   get id() {
      return this._id
   }

   /**
    * The netsuite record type (constant string) - this is declared here and overriden in derived classes
    */
   public static recordType: record.Type | string

   /**
    * The underlying netsuite 'record' object. For client scripts, this is the slightly less feature rich
    * 'ClientCurrentRecord' when accessing the 'current' record the script is associated to.
    */
   nsrecord: record.Record | record.ClientCurrentRecord

   /**
    * Defines a descriptor for nsrecord so as to prevent it from being enumerable. Conceptually only the
    * field properties defined on derived classes should be seen when enumerating
    * @param value
    */
   private makeRecordProp(value) {
      Object.defineProperty(this, 'nsrecord', {
         value: value,
         enumerable: false
      })
   }

   constructor(rec?: number | record.Record | record.ClientCurrentRecord, isDynamic?: boolean, defaultValues?: Object) {
      // since the context of this.constructor is the derived class we're instantiating, using the line below we can
      // pull the 'static' recordType from the derived class and remove the need for derived classes to
      // define a constructor to pass the record type to super()
      var type = Object.getPrototypeOf(this).constructor.recordType
      if (typeof rec === "number") {
         log.debug('loading existing record', `type:${type}, id:${rec}`)
         this.makeRecordProp(record.load({
            type: type,
            id: rec,
            isDynamic: isDynamic || false,
            defaultValue: defaultValues
         }))
         this._id = this.nsrecord.id
      }
      else if (!rec) {
         log.debug('creating new record', `type:${type}  isDyanamic:${isDynamic} defaultValues:${defaultValues}`)
         this.makeRecordProp(record.create({type: type, isDynamic: isDynamic, defaultValues: defaultValues}))
      }
      else {
         log.debug('using existing record', `type:${rec.type}, id:${rec.id}`)
         this.makeRecordProp(rec)
         this._id = rec.id
      }
   }
}

/**
 * A regular netsuite record.
 */
export abstract class NetsuiteRecord extends NetsuiteCurrentRecord {
   /**
    * underlying netsuite record
    */
   nsrecord: record.Record

   /**
    * Persists this record to the NS database
    * @param enableSourcing
    * @param ignoreMandatoryFields
    * @returns {number}
    */
   save(enableSourcing?: boolean, ignoreMandatoryFields?: boolean) {
      var id = this.nsrecord.save({
         enableSourcing: enableSourcing,
         ignoreMandatoryFields: ignoreMandatoryFields
      })
      this._id = id
      return id
   }
}


/**
 * Generic decorator factory with basic default algorithm that exposes the field value directly with no
 * other processing.
 * @param getText if true, property read (get) uses getText() rather than getValue().
 * @param setText if true, property write (set) uses setText() rather than setValue()
 * @returns a decorator that returns a property descriptor to be used
 * with Object.defineProperty
 */
export function defaultDescriptor(getText = false, setText = false): any {
   return function(target:any, propertyKey:string) {
      return {
         get: function () {
            return getText ? this.nsrecord.getText({fieldId: propertyKey})
               : this.nsrecord.getValue({fieldId: propertyKey})
         },
         set: function (value) {
            // ignore undefined's
            if (value !== undefined) {
               if (setText) this.nsrecord.setText({fieldId: propertyKey, text: value})
               else  this.nsrecord.setValue({fieldId: propertyKey, value: value})
            }
            else log.info(`ignoring field [${propertyKey}]`, 'field value is undefined')
         },
         enumerable: true //default is false
      }
   }
}
/**
 * Just like the default decriptor but calls Number() on the value. This exists for numeric types that
 * would blow up if you tried to assign number primitive values to a field. Don't know why - did various checks
 * with lodash and typeof to confirm the raw value was a number but only passing through Number() worked on sets.
 * Reads still seem to return a number.
 * @returns an object property descriptor to be used
 * with Object.defineProperty
 */
export function numericDescriptor(target: any, propertyKey: string): any {
   return {
      get: function () {
         return this.nsrecord.getValue({fieldId: propertyKey})
      },
      set: function (value) {
         // ignore undefined's
         if (value !== undefined) this.nsrecord.setValue({fieldId: propertyKey, value: Number(value)})
         else log.info(`ignoring field [${propertyKey}]`, 'field value is undefined')
      },
      enumerable: true //default is false
   };
}

/**
 * Generic property descriptor with algorithm for date handling. Surfaces dates as moment() instances
 * note: does not take into account timezone
 * @param {string} formatType the NS field type (e.g. 'date')
 * @param target
 * @param propertyKey
 * @returns  an object property descriptor to be used
 * with decorators
 */
function dateTimeDescriptor(formatType: format.Type, target: any, propertyKey: string): any {
   return {
      get: function () {
         var value = this.nsrecord.getValue({fieldId: propertyKey})
         log.debug(`transforming field [${propertyKey}] of type [${formatType}]`, `with value ${value}`)
         // ensure we don't return moments for null, undefined, etc.
         return value ? moment(format.parse({type: formatType, value: value})) : value
      },
      set: function (value) {
         // allow null to flow through, but ignore undefined's
         if (value !== undefined) {
            var asDate;
            // the value needs to either be a moment already, or a moment compatible string else null
            if (moment.isMoment(value)) asDate = value.toDate()
            else asDate = value ? moment(value).toDate() : null
            log.debug(`setting field [${propertyKey}:${formatType}]`, `to date [${asDate}]`)
            this.nsrecord.setValue({fieldId: propertyKey, value: asDate})
         }
         else log.info(`not setting ${propertyKey} field`, 'value was undefined')
      },
      enumerable: true //default is false
   };
}


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
function formattedDescriptor(formatType: format.Type, target: any, propertyKey: string): any {
   return {
      get: function () {
         return this.nsrecord.getValue({fieldId: propertyKey})
      },
      set: function (value) {
         // allow null to flow through, but ignore undefined's
         if (value !== undefined) {
            var formattedValue = format.format({type: formatType, value: value})
            log.debug(`setting field [${propertyKey}:${formatType}]`,
               `to formatted value [${formattedValue}] javascript type:${typeof formattedValue}`)
            if (value === null) this.nsrecord.setValue({fieldId: propertyKey, value: null})
            else this.nsrecord.setValue({fieldId: propertyKey, value: formattedValue})
         }
         else log.info(`not setting ${propertyKey} field`, 'value was undefined')
      },
      enumerable: true //default is false
   };
}

export type FieldDecorator = (getText?:boolean, setText?:boolean)=> (target:any, propertyKey:string) => any
/**
 Netsuite field types - decorate your model properties with these to tie netsuite field types to your
 model's field type.
 */
export namespace FieldType {
   export var address = defaultDescriptor()
   export var checkbox = defaultDescriptor()
   export var currency = numericDescriptor
   export var date = _.partial(dateTimeDescriptor, format.Type.DATE)
   export var datetime = _.partial(dateTimeDescriptor, format.Type.DATETIME)
   export var email = defaultDescriptor()
   export var freeformtext = defaultDescriptor()
   export var float = numericDescriptor
   export var decimalnumber = float
   export var hyperlink = defaultDescriptor()
   export var image = defaultDescriptor()
   export var integernumber = numericDescriptor
   export var longtext = defaultDescriptor()
   export var multiselect= defaultDescriptor
   export var percent = _.partial(formattedDescriptor, format.Type.PERCENT)
   /**
    * NetSuite 'Select' field type.
    * set getText = true to have the decorated
    * @type {(getText?:boolean, setText?:boolean)=>any}
    */
   export var select = defaultDescriptor
   export var textarea = defaultDescriptor()
}
