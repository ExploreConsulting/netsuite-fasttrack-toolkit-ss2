/**
 * Minimal type declarations for the N/format NetSuite module
 */



/**
 * Netsuite Field Types
 */
export enum Type {
   DATE,
   TIME,
   TIMETRACK,
   TIMEOFDAY,
   DATETIME,
   DATETIMETZ,
   INTEGER,
   POSINTEGER,
   PERCENT,
   RATE,
   RATEHIGHPRECISION,
   FLOAT,
   POSFLOAT,
   NONNEGFLOAT,
   POSCURRENCY,
   NONNEGCURRENCY,
   CURRENCY,
   CURRENCY2,
   URL,
   CHECKBOX,
   CCNUMBER,
   PHONE,
   FULLPHONE,
   IDENTIFIER,
   FUNCTION,
   MMYYDATE,
   CCEXPDATE,
   CCVALIDFROM,
   COLOR
}

export interface FormatOptions {
   /**
    * The input data to format
    */
   value:Date | string | number,
   /**
    * The field type for the data.
    */
      type:Type
}
export function format(options:FormatOptions)

export function parse(options:Object)








