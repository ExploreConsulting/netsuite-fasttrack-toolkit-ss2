/**
 * NetSuite generic Transaction record
 */

import { FieldType, NetsuiteRecord } from './Record'

/**
 * Fields common to all transactions in NS, and is the share base class for bundled DataAccess transaction types.
 * Note that when using this base class, pass an existing native NS record object to the constructor.
 * Attempting to create a new instance of this class from scratch or load an existing transaction by internal id
 * will fail (since the record type cannot be ambiguous in those cases).
 *
 */
export class TransactionBase extends  NetsuiteRecord {

   @FieldType.datetime
   createddate: Date

   @FieldType.select
   customform: number

   @FieldType.select
   department: number

   /**
    * This field exists only if 'Use Deletion Reason' feature is enabled on the account
    */
   @FieldType.select
   deletionreason: number

   /**
    * This field exists only if 'Use Deletion Reason' feature is enabled on the account
    */
   @FieldType.longtext
   deletionreasonmemo: string

   @FieldType.freeformtext
   email: string

   @FieldType.select
   entity: number

   @FieldType.freeformtext
   externalid: string

   @FieldType.checkbox
   istaxable: boolean

   @FieldType.datetime
   lastmodifieddate: Date

   @FieldType.select
   location: number

   @FieldType.freeformtext
   memo: string

   @FieldType.select
   orderstatus: number

   @FieldType.freeformtext
   otherrefnum: string

   @FieldType.select
   postingperiod: number

   @FieldType.select
   salesrep: number

   /**
    * Note unlike other identifiers in NetSuite, this one is a string (e.g. 'Partially Fulfilled')
    */
   @FieldType.freeformtext
   status: string

   /**
    * Note unlike other references in NetSuite, this one is a set of undocumented string keys (e.g. 'partiallyFulfilled')
    * The possible statusref values differ for each transaction type
    */
   @FieldType.freeformtext
   statusRef: string

   @FieldType.select
   subsidiary: number

   @FieldType.freeformtext
   tranid: string

   @FieldType.date
   trandate: Date

   /**
    * locates line on the 'apply' sublist that corresponds to the passed related record internal id
    * expose this method in derived classes that need dynamic access to the apply sublist
    * returns undefined
    * @deprecated - dynamic access to the apply sublist should generally work using normal collection oriented means
    */
   protected findApplyLine (docId: number): { apply: boolean, amount: number, line: number } | null {
      let rec = this.nsrecord
      if (!rec.isDynamic || !this.defaultValues)
         throw new Error('record must be in dynamic mode and have default values set to use this method')

      const line = rec.findSublistLineWithValue({
         sublistId: 'apply',
         fieldId: 'doc',
         value: docId.toString()
      })

      // helper function for adding a 'current sublist' getter/settor for the given property name on the apply sublist
      const addProp = (o: object, prop: any) => {
         Object.defineProperty(o, prop, {
            get: function () {
               rec.selectLine({sublistId: 'apply', line: line})
               return rec.getCurrentSublistValue({sublistId: 'apply', fieldId: prop})
            },
            set: function (value) {
               rec.selectLine({sublistId: 'apply', line: line})
               rec.setCurrentSublistValue({sublistId: 'apply', fieldId: prop, value: value})
               rec.commitLine({sublistId: 'apply'})
            }
         })
      }

      if (line >= 0) {
         let newLine = {line: line}
         addProp(newLine, 'apply')
         addProp(newLine, 'amount')
         return newLine as { apply: boolean, amount: number, line: number }
      } else return null
   }
}
