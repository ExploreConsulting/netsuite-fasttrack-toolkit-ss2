/**
 * Base class for Note record
 */
import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'

/**
 * Note record base class
 */
export class NoteBase extends NetsuiteRecord {
   /**
    * Record type
    */
   static recordType() {
      return record.Type.NOTE
   }

   /**
    * Accounting Period
    */
   @FieldType.select
   accountingperiod: number

   /**
    * Author
    */
   @FieldType.select
   author: number

   /**
    * Direction
    */
   @FieldType.select
   direction: number

   /**
    * Entity
    */
   @FieldType.select
   entity: number

   /**
    * ExternalId
    */
   @FieldType.freeformtext
   externalid: string

   /**
    * Folder
    */
   @FieldType.select
   folder: number

   /**
    * Item
    */
   @FieldType.select
   item: number

   /**
    * Modification Date
    */
   @FieldType.datetime
   lastmodifieddate: Date

   /**
    * Media
    */
   @FieldType.select
   media: number

   /**
    * Memo
    */
   @FieldType.textarea
   note: string

   /**
    * Date
    */
   @FieldType.date
   notedate: Date

   /**
    * Type
    */
   @FieldType.select
   notetype: number

   /**
    * Custom Record Key
    */
   @FieldType.select
   record: number

   /**
    * Custom Record Type
    */
   @FieldType.select
   recordtype: number

   /**
    * Time
    */
   @FieldType.freeformtext
   time: string

   /**
    * Title
    */
   @FieldType.freeformtext
   title: string

   /**
    * Topic
    */
   @FieldType.select
   topic: number

   /**
    * Transaction
    */
   @FieldType.select
   transaction: number
}
