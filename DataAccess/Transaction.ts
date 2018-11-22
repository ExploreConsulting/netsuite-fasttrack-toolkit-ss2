/**
 * NetSuite generic Transaction record
 */

import { FieldType, NetsuiteRecord } from './Record'

/**
 * Fields common to all transactions in NS
 */
export abstract class TransactionBase extends NetsuiteRecord {

   @FieldType.select
   customform: number

   @FieldType.select
   department: number

   @FieldType.freeformtext
   email: string

   @FieldType.select
   entity: number

   @FieldType.freeformtext
   externalid: string

   @FieldType.select
   location: number

   @FieldType.freeformtext
   memo: string

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
   trandate: Date | string

   /**
    * locates line on the 'apply' sublist that corresponds to the passed related record internal id
    * expose this method in derived classes that need dynamic access to the apply sublist
    * returns undefined
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



