/**
 * NS Base location record - contains definitions for most of the built in fields
 */
import { FieldType, NetsuiteRecord } from './Record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import * as record from "N/record";

/**
 * NetSuite generic Location used as a common base class for 'location-like' records,
 * This is meant to be inherited by concrete record types to avoid duplicating effort on fields.
 * Note that this inheritance hierarchy emerged empirically - it's not documented by NetSuite.
 *
 * It contains fields common to all 'location' records in NS
 */
export class BusinessHoursSublist extends SublistLine {
   @SublistFieldType.freeformtext
   endtime: string

   @SublistFieldType.checkbox
   isfriday: boolean

   @SublistFieldType.checkbox
   ismonday: boolean

   @SublistFieldType.checkbox
   issaturday: boolean

   @SublistFieldType.checkbox
   issunday: boolean

   @SublistFieldType.checkbox
   isthursday: boolean

   @SublistFieldType.checkbox
   istuesday: boolean

   @SublistFieldType.checkbox
   iswednesday: boolean

   @SublistFieldType.freeformtext
   samedaypickupcutofftime: string

   @SublistFieldType.freeformtext
   starttime: string
}
export class ExcludeTheseRegionsSublist extends SublistLine {
   @SublistFieldType.freeformtext
   name: string

   @SublistFieldType.integernumber
   ranking: number

   @SublistFieldType.select
   region: number
}

export class IncludeTheseRegionsSublist extends SublistLine {
   @SublistFieldType.freeformtext
   name: string

   @SublistFieldType.integernumber
   ranking: number

   @SublistFieldType.select
   region: number
}

/**
 * NetSuite Location base record type
 */
export class LocationBase extends NetsuiteRecord {
   static recordType() { return record.Type.LOCATION }

   @FieldType.freeformtext
   addrphone: string

   @FieldType.freeformtext
   addrtext: string

   @FieldType.checkbox
   allowstorepickup: boolean

   @FieldType.select
   autoassignmentregionsetting: number

   @FieldType.integernumber
   bufferstock: number

   @FieldType.freeformtext
   city: string

   @FieldType.select
   country: number | string

   @FieldType.integernumber
   dailyshippingcapacity: number

   @FieldType.freeformtext
   externalid: string

   @FieldType.freeformtext
   geolocationmethod: 'T' | 'F'

   @FieldType.checkbox
   includecontroltower: boolean

   @FieldType.checkbox
   includesupplyplanning: boolean

   @FieldType.checkbox
   isinactive: boolean

   @FieldType.float
   latitude: number

   @FieldType.select
   locationtype: number

   @FieldType.select
   logo: number

   @FieldType.float
   longitude: number

   @FieldType.checkbox
   makeinventoryavailable: boolean

   @FieldType.checkbox
   makeinventoryavailablestore: boolean

   @FieldType.freeformtext
   name: string

   @FieldType.datetime
   nextpickupcutofftime: Date

   @FieldType.checkbox
   override: boolean

   @FieldType.select
   parent: number

   @FieldType.address
   returnaddr: string

   @FieldType.freeformtext
   returnaddress1: string

   @FieldType.freeformtext
   returnaddress2: string

   @FieldType.freeformtext
   returncity: string

   @FieldType.select
   returncountry: number | string

   @FieldType.select
   returnstate: number

   @FieldType.freeformtext
   returnzip: string

   @FieldType.percent
   sopredconfidence: number

   @FieldType.integernumber
   sopredicteddays: number

   @FieldType.freeformtext
   state: string

   @FieldType.float
   storepickupbufferstock: number

   @FieldType.select
   subsidiary: number

   @FieldType.select
   timezone: number

   @FieldType.integernumber
   totalshippingcapacity: number

   @FieldType.freeformtext
   tranprefix: string

   @FieldType.checkbox
   usebins: boolean

   @FieldType.freeformtext
   zip: string

   @FieldType.sublist(BusinessHoursSublist)
   businesshours: Sublist<BusinessHoursSublist>

   @FieldType.sublist(ExcludeTheseRegionsSublist)
   excludelocationregions: Sublist<ExcludeTheseRegionsSublist>

   @FieldType.sublist(IncludeTheseRegionsSublist)
   includelocationregions: Sublist<IncludeTheseRegionsSublist>
}

