import { FieldType, NetsuiteRecord } from './Record'
import * as record from 'N/record'

/**
 * Ship Item base class
 */
export class ShipItem extends NetsuiteRecord {


   static override recordType() { return record.Type.SHIP_ITEM }

   @FieldType.checkbox
   accchange: boolean

   @FieldType.select
   account: number

   @FieldType.select
   accounthandling: number

   @FieldType.radio
   costbasis: string

   @FieldType.select
   countries: number

   @FieldType.textarea
   description: string

   @FieldType.freeformtext
   displayname: string

   @FieldType.freeformtext
   doifarrangement: string

   @FieldType.checkbox
   doiftotal: boolean

   @FieldType.currency
   doiftotalamt: number

   @FieldType.select
   doiftotaloperator: number

   @FieldType.checkbox
   doifweight: boolean

   @FieldType.currency
   doifweightamt: number

   @FieldType.select
   doifweightoperator: number

   @FieldType.select
   doifweightunit: number

   @FieldType.freeformtext
   edition: string

   @FieldType.checkbox
   excludecountries: boolean

   @FieldType.checkbox
   excludesites: boolean

   @FieldType.freeformtext
   externalid: string

   @FieldType.float
   fedexdiscountrate: number

   @FieldType.checkbox
   fedexonerate: boolean

   @FieldType.select
   fedexservicecode: number

   @FieldType.currency
   freeifordertotalisoveramount: number

   @FieldType.percent
   handlingaspercentageoftotal: number

   @FieldType.currency
   handlingbyweightamount: number

   @FieldType.float
   handlingbyweightperquantity: number

   @FieldType.select
   handlingbyweightperunit: number

   @FieldType.radio
   handlingcost: string

   @FieldType.currency
   handlingflatrateamount: number

   @FieldType.currency
   handlingperitemamount: number

   @FieldType.select
   handlingtablechargeby: number

   @FieldType.select
   handlingtableuom: number

   @FieldType.select
   handlingtaxcode: number

   @FieldType.checkbox
   hasmaximumshippingcost: boolean

   @FieldType.checkbox
   hasminimumshippingcost: boolean

   @FieldType.freeformtext
   integratedlabelsarrangement: string

   @FieldType.select
   integrationservicecode: number

   @FieldType.freeformtext
   invt_dispname: string

   @FieldType.checkbox
   isfreeifordertotalisover: boolean

   @FieldType.checkbox
   ishandlingbyweightbracketed: boolean

   @FieldType.checkbox
   ishandlingtaxable: boolean

   @FieldType.checkbox
   isinactive: boolean

   @FieldType.checkbox
   isonline: boolean

   @FieldType.checkbox
   isshippingbyweightbracketed: boolean

   @FieldType.checkbox
   istaxable: boolean

   @FieldType.freeformtext
   itemid: string

   @FieldType.freeformtext
   itemtype: string

   @FieldType.freeformtext
   labelplugin: string

   @FieldType.select
   labelpluginselect: number

   @FieldType.freeformtext
   labelreg: string

   @FieldType.select
   labelregselect: number

   @FieldType.freeformtext
   labelservice: string

   @FieldType.freeformtext
   labelservicegroup: string

   @FieldType.select
   labelservicegroupselect: number

   @FieldType.select
   labelserviceselect: number

   @FieldType.radio
   labeltype: string

   @FieldType.currency
   maximumshippingcost: number

   @FieldType.currency
   minimumshippingcost: number

   @FieldType.checkbox
   needsallfreeshippingitems: boolean

   @FieldType.checkbox
   omitpackaging: boolean

   @FieldType.freeformtext
   pluginlabelsarrangement: string

   @FieldType.freeformtext
   pluginratearrangement: string

   @FieldType.freeformtext
   ratingplugin: string

   @FieldType.select
   ratingpluginselect: number

   @FieldType.freeformtext
   ratingreg: string

   @FieldType.select
   ratingregselect: number

   @FieldType.freeformtext
   ratingservice: string

   @FieldType.freeformtext
   ratingservicegroup: string

   @FieldType.select
   ratingservicegroupselect: number

   @FieldType.select
   ratingserviceselect: number

   @FieldType.freeformtext
   restrictionarrangement: string

   @FieldType.freeformtext
   returnlabelreg: string

   @FieldType.select
   returnlabelregselect: number

   @FieldType.freeformtext
   returnlabelservice: string

   @FieldType.select
   returnlabelserviceselect: number

   @FieldType.select
   returnservicecode: number

   @FieldType.checkbox
   returnsintegrated: boolean

   @FieldType.freeformtext
   shipitemcurrency: string

   @FieldType.checkbox
   shipperintegrated: boolean

   @FieldType.percent
   shippingaspercentageoftotal: number

   @FieldType.currency
   shippingbyweightamount: number

   @FieldType.float
   shippingbyweightperquantity: number

   @FieldType.select
   shippingbyweightperunit: number

   @FieldType.freeformtext
   shippingcarrier: string

   @FieldType.currency
   shippingflatrateamount: number

   @FieldType.currency
   shippingperitemamount: number

   @FieldType.select
   shippingtablechargeby: number

   @FieldType.select
   shippingtableuom: number

   @FieldType.select
   shippingtaxcode: number

   @FieldType.select
   site: number

   @FieldType.select
   states: number

   @FieldType.select
   subsidiary: number

   @FieldType.freeformtext
   tabtext: string

   @FieldType.select
   taxschedule: number

   @FieldType.select
   taxschedulehandling: number

   @FieldType.float
   upsdiscountrate: number

   @FieldType.freeformtext
   upssavername: string

   @FieldType.select
   upsservicecode: number

   @FieldType.float
   uspsdiscountrate: number

   @FieldType.select
   uspsservicecode: number

}
