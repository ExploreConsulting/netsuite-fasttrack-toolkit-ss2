/**
 * Minimal type declarations for the N/record NetSuite module
 */

declare interface createOptions {
   type:Type,
   isDynamic?:boolean
   defaultValue?:Object
}


export declare interface Record {
   type:string
   id:number

   cancelLine(o:any) :void

   commitLine(o:any) : void

   findMatrixSublistLinewithValue(o:any) : void
   /**
    * Returns the line number for the first occurrence of a field value in a sublist.
    * @param options
     */
   findSublistLineWithValue(options:{
      sublistId:string
      fieldId:string
      value?:number | Date| string| [any] | boolean
   })
   
   /**
    * gets a field value
     */
   getValue(options:{ fieldId: string}) : any
   /**
    * gets the text value for a field
    * @param options
     */
   getText(options:{ fieldId:string}) : string
   
   /**
    * sets a field value
    *  
    */
   setValue(options:{ fieldId:string, value:any, ignoreFieldChange:boolean}): void

   save(options?:any):number

   "delete"(options:any)
   /**
    * retrieves the given sublist by the sublist id (e.g. 'item' for the item sublist)
    * @param string
     */
   getSublist(options:{ sublistId: string}) : Sublist

    /**
     * returns the number of lines in a sublist
     * @param string internal id of the sublist (e.g. 'item')
     */
   getLineCount(options:{sublistId:string}) : number

    /**
     * inserts a sublist line
     * @param string
     * @param number
     * @param boolean
     */
   insertLine(options:{sublistId:string, line:number, ignoreRecalc:boolean})

    /**
     * returns the value of a sublist field
     * @param string which sublist?
     * @param string
     * @param number
     */
   getSublistValue(options:{sublistId:string, fieldId:string, line:number})


    /**
     *
     * @param options
     */
   setSublistValue(options:{sublistId:string, fieldId:string, line:number, value:any})

    /**
     *
     * @param options
     */
   getSublistField(options:{sublistId:string, fieldId:string, line:number}) : Field

   /**
    * Gets the subrecord associated with a sublist field.
    * @param options
     */
   getSublistSubrecord(options:{sublistId:string, fieldId:string, line:number})

   /**
    *
    * @param options
     */
   getSublistText(options:Object)

   /**
    * Returns all the names of all the sublists.
    */
   getSublists():string[]


   /**
    * Gets the subrecord for the associated field.
    * @param {Object} options
    * @param options.fieldId The internal ID of a standard or custom body field.
     */
   getSubrecord(options:{ fieldId:string })

   /**
    *
    * @param options
     */
   cancelLine(options:Object)

    /**
     *
     * @param options
     */
   commitLine(options:Object)

    /**
     *
     * @param options
     */
   selectLine(options:{sublistId:string, line:number})


}
/**
 * loads a netsuite record
 * @param options
 */
export declare function load(options:{ type:Type, id:number, isDynamic?:boolean, defaultValue?:Object}):Record

/**
 * creates a new nesuite record based on an existing record
 */
export declare function transform(options:{fromType:string, fromId:number, toType:string, isDynamic?:boolean, defaultValues?:any})

/**
 * creates a new netsuite record
 */
export declare function create(options:createOptions) : Record


/**
 * Returns a field object from a record
 * @param options the field to access
 */
export declare function getField(options:{fieldId:string}) : Field

/**
 * Returns the body field names (internal ids) of all the fields in the record, including machine header field and matrix header fields.
 */
export declare function getFields() : string[]

export declare function submitFields(options)

/**
 * Record types declared by NetSuite. Behind the scenes I think these correspond to the string record names
 * from SS1.0. For example 'customer' for the Customer record. Here we can just define an enumeration since 
 * the real values come from NS.
 */
export declare enum Type {
   CASH_REFUND,
   CREDIT_MEMO,
   CUSTOMER,
   CUSTOMER_PAYMENT,
   INTER_COMPANY_JOURNAL_ENTRY,
   INVOICE,
   SALES_ORDER,
   JOURNAL_ENTRY,
   PURCHASE_ORDER,
   SUBSIDIARY
}

export declare interface Sublist {
   getColumn(options:{ fieldId:string })
   /**
    * internal id of the sublist
    */
   id:string
   /**
    * Indicates whether the sublist has changed on the record form.
    */
   isChanged:boolean
   /**
    * Indicates whether the sublist is displayed on the record form.
    */
   isDisplay:boolean
   /**
    * Returns the sublist type.
    */
   type:string
}

/**
 * represents a data field on a netsuite record or sublist
 */
export declare interface Field {
   getSelectOptions() :any[]
   label:string
   id:string
   type:string
   isMandatory:boolean
   isDisabled:boolean
   isPopup:boolean
   isDisplay:boolean
   isVisible:boolean
   isReadOnly:boolean
}
