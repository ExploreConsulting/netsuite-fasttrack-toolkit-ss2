/**
 * Minimal type declarations for the N/format NetSuite module
 */



/**
 * Netsuite Field Types for format
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

declare enum Timezone {
   ETC_GMT_PLUS12,
   PACIFIC_SAMOA,
   PACIFIC_HONOLULU,
   AMERICA_ANCHORAGE,
   AMERICA_LOS_ANGELES,
   AMERICA_TIJUANA,
   AMERICA_DENVER,
   AMERICA_PHOENIX,
   AMERICA_CHIHUAHUA,
   AMERICA_CHICAGO,
   AMERICA_REGINA,
   AMERICA_GUATEMALA,
   AMERICA_MEXICO_CITY,
   AMERICA_NEW_YORK,
   US_EAST_INDIANA,
   AMERICA_BOGOTA,
   AMERICA_CARACAS,
   AMERICA_HALIFAX,
   AMERICA_LA_PAZ,
   AMERICA_MANAUS,
   AMERICA_SANTIAGO,
   AMERICA_ST_JOHNS,
   AMERICA_SAO_PAULO,
   AMERICA_BUENOS_AIRES,
   ETC_GMT_PLUS_3,
   AMERICA_GODTHAB,
   AMERICA_MONTEVIDEO,
   AMERICA_NORONHA,
   ETC_GMT_PLUS_1,
   ATLANTIC_AZORES,
   EUROPE_LONDON,
   GMT,
   ATLANTIC_REYKJAVIK,
   EUROPE_WARSAW,
   EUROPE_PARIS,
   ETC_GMT_MINUS_1,
   EUROPE_AMSTERDAM,
   EUROPE_BUDAPEST,
   AFRICA_CAIRO,
   EUROPE_ISTANBUL,
   ASIA_JERUSALEM,
   ASIA_AMMAN,
   ASIA_BEIRUT,
   AFRICA_JOHANNESBURG,
   EUROPE_KIEV,
   EUROPE_MINSK,
   AFRICA_WINDHOEK,
   ASIA_RIYADH,
   EUROPE_MOSCOW,
   ASIA_BAGHDAD,
   AFRICA_NAIROBI,
   ASIA_TEHRAN,
   ASIA_MUSCAT,
   ASIA_BAKU,
   ASIA_YEREVAN,
   ETC_GMT_MINUS_3,
   ASIA_KABUL,
   ASIA_KARACHI,
   ASIA_YEKATERINBURG,
   ASIA_TASHKENT,
   ASIA_CALCUTTA,
   ASIA_KATMANDU,
   ASIA_ALMATY,
   ASIA_DHAKA,
   ASIA_RANGOON,
   ASIA_BANGKOK,
   ASIA_KRASNOYARSK,
   ASIA_HONG_KONG,
   ASIA_KUALA_LUMPUR,
   ASIA_TAIPEI,
   AUSTRALIA_PERTH,
   ASIA_IRKUTSK,
   ASIA_MANILA,
   ASIA_SEOUL,
   ASIA_TOKYO,
   ASIA_YAKUTSK,
   AUSTRALIA_DARWIN,
   AUSTRALIA_ADELAIDE,
   AUSTRALIA_SYDNEY,
   AUSTRALIA_BRISBANE,
   AUSTRALIA_HOBART,
   PACIFIC_GUAM,
   ASIA_VLADIVOSTOK,
   ASIA_MAGADAN,
   PACIFIC_KWAJALEIN,
   PACIFIC_AUCKLAND,
   PACIFIC_TONGATAPU
}


export interface FormatOptions {
   /**
    * The input data to format
    */
   value:Date | string | number

   /**
    * The field type for the data.
    */
      type:Type

    /**
     * The time zone specified for the returned string. Set using the format.Timezone enum or key.
     * If a time zone is not specified, the time zone is set based on user preference.
     * If the time zone is invalid, the time zone is set to GMT. only use this if the field type is DATETIME
     * or DATETIMETZ
     */
   timezone?: Timezone | number
}

export function format(options:FormatOptions)

interface ParseOptions {
   /**
    * The input data to parse
    */
   value:string

   /**
    * field type we targeting
    */
      type:Type

   /**
    * timezone - poorly documented, only used with field type DATETIME/DATETIMETZ
    */
   timezone?:Timezone | number
}


export function parse(options:ParseOptions)










