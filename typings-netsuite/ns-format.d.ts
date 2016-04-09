/**
 * Minimal type declarations for the N/search NetSuite module
 */

declare module 'N/format' {

   /**
    * Netsuite Field Types
    */
   enum Type {
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

   interface FormatOptions {
      /**
       * The input data to format
       */
      value: Date | string | number,
      /**
       * The field type for the data.
       */
      type:Type
   }
   export function format(options:FormatOptions)


}







