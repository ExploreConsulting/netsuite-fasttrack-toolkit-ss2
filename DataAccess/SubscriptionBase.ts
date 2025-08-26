import {NetsuiteRecord, FieldType} from './Record'
import {Sublist, SublistFieldType, SublistLine} from "./Sublist"
import * as record from 'N/record'

/**
 * priceinterval - Price Book Lines
 * NOTE: This sublist cannot have lines added/removed, so addLine(), removeLine() and removeAllLines() will not work.
 *      Only a small number of fields are able to be edited on this sublist.
 */
export class PriceBookLinesSublist extends SublistLine {
    /**
     * Catalog Type |
     * NetSuite lists this as a select field, but often the value is a string (e.g. ADD_ON).
     */
    @SublistFieldType.select
    catalogtype: number | string

    /**
     * Subscription Line Type
     */
    @SublistFieldType.select
    chargetype: number

    /**
     * Discount
     */
    @SublistFieldType.percent
    discount: number | string

    /**
     * Charge Frequency |
     * NetSuite lists this as a select field, but often the value is a string (e.g. MONTHLY).
     */
    @SublistFieldType.select
    frequency: number | string

    /**
     * Included Quantity
     */
    @SublistFieldType.decimalnumber
    includedquantity: number

    /**
     * Item
     */
    @SublistFieldType.select
    item: number

    /**
     * Line Number
     */
    @SublistFieldType.integernumber
    linenumber: number

    /**
     * Included Quantity Multiplier
     */
    @SublistFieldType.select
    multiplierline: number

    /**
     * Price Plan
     */
    @SublistFieldType.freeformtext
    priceplan: string

    /**
     * Prorate By |
     * NetSuite lists this as a select field, but often the value is a string (e.g. MONTH).
     */
    @SublistFieldType.select
    prorateby: number | string

    /**
     * Quantity
     */
    @SublistFieldType.decimalnumber
    quantity: number

    /**
     * Recurring Amount
     */
    @SublistFieldType.currency
    recurringamount: number

    /**
     * Repeat Every
     */
    @SublistFieldType.select
    repeatevery: number

    /**
     * Start Date
     */
    @SublistFieldType.date
    startdate: Date

    /**
     * Interval |
     * NetSuite lists this as a select field, but often the value is a string (e.g. MONTH).
     */
    @SublistFieldType.select
    startoffsetunit: number

    /**
     * Start On
     */
    @SublistFieldType.integernumber
    startoffsetvalue: number

    /**
     * Status
     */
    @SublistFieldType.freeformtext
    status: string

    /**
     * Subscription Plan Line
     */
    @SublistFieldType.integernumber
    subscriptionplanline: number
}

/**
 * sublinefromplan - Lines
 */
export class SublineFromPlanSublist extends SublistLine {
    /**
     * Item
     */
    @SublistFieldType.freeformtext
    item: string

    /**
     * revrecoption
     */
    @SublistFieldType.freeformtext
    revrecoption: string
}

/**
 * subscriptionline - Lines (Sublist)
 * NOTE: The following fields can't be updated due to NetSuite throwing errors even if the same value is set:
 *      catalogtype, discount, enddate, quantity, recurrencestartdate, startdate, subscription, subscriptionline,
 *      terminationdate.
 *      removeAllLines() will not work on update.
 */
export class SubscriptionLineSublist extends SublistLine {
    /**
     * Billing Mode |
     * NetSuite lists this as a select field, but often the value is a string (e.g. IN_ADVANCE).
     */
    @SublistFieldType.select
    billingmode: number | string

    /**
     * Catalog Type |
     * NetSuite lists this as a select field, but often the value is a string (e.g. OPTIONAL).
     */
    @SublistFieldType.select
    catalogtype: number | string

    /**
     * Discount
     */
    @SublistFieldType.percent
    discount: number | string

    /**
     * End Date
     */
    @SublistFieldType.date
    enddate: Date

    /**
     * Include In Renewal Subscription
     */
    @SublistFieldType.checkbox
    includeinrenewal: boolean

    /**
     * Include
     */
    @SublistFieldType.checkbox
    isincluded: boolean

    /**
     * Item
     */
    @SublistFieldType.select
    item: number

    /**
     * Line Number
     */
    @SublistFieldType.freeformtext
    linenumber: string

    /**
     * Prorate End Date
     */
    @SublistFieldType.checkbox
    prorateenddate: boolean

    /**
     * Prorate Start Date
     */
    @SublistFieldType.checkbox
    proratestartdate: boolean

    /**
     * Quantity
     */
    @SublistFieldType.decimalnumber
    quantity: number

    /**
     * Recurrence Start Date
     */
    @SublistFieldType.date
    recurrencestartdate: Date

    /**
     * Revenue Recognition Option
     */
    @SublistFieldType.freeformtext
    revrecoption: string

    /**
     * Start Date
     */
    @SublistFieldType.date
    startdate: Date

    /**
     * Status |
     * NetSuite lists this as a select field, but often the value is a string (e.g. ACTIVE).
     */
    @SublistFieldType.select
    status: number | string

    /**
     * Subscription
     */
    @SublistFieldType.select
    subscription: number

    /**
     * Subscription Line
     */
    @SublistFieldType.integernumber
    subscriptionline: number

    /**
     * Subscription Line Type
     */
    @SublistFieldType.select
    subscriptionlinetype: number

    /**
     * Termination Date
     */
    @SublistFieldType.date
    terminationdate: Date
}
/**
 * NetSuite Subscription record type
 */
export class SubscriptionBase extends NetsuiteRecord {
    @FieldType.integernumber
    advancerenewalperiodnumber: number

    /**
     * NetSuite lists this as a select field, but often the value is a string (e.g. DAYS).
     */
    @FieldType.select
    advancerenewalperiodunit: number | string

    /**
     * Auto
     */
    @FieldType.checkbox
    autoname: boolean

    /**
     * Automatically Initiate Renewal Process
     */
    @FieldType.checkbox
    autorenewal: boolean

    /**
     * Billing Account
     */
    @FieldType.select
    billingaccount: number

    /**
     * Billing Account Start Date |
     * As of 1/20/22, NetSuite says this is a required field, which is incorrect. It is most likely being confused with startdate.
     */
    @FieldType.date
    billingaccountstartdate: Date

    /**
     * Billing Schedule
     */
    @FieldType.select
    billingschedule: number

    /**
     * Status |
     * NetSuite lists this as a select field, but it is a string value (e.g. ACTIVE).
     */
    @FieldType.select
    billingsubscriptionstatus: number | string

    /**
     * Currency
     */
    @FieldType.currency
    currency: number

    /**
     * Customer
     */
    @FieldType.select
    customer: number

    /**
     * Custom Form
     */
    @FieldType.select
    customform: number

    /**
     * Default Renewal Method |
     * NetSuite lists this as a select field, but it is a string value (e.g. CREATE_NEW_SUBSCRIPTION).
     * This is optional when Initial Term is Evergreen.
     */
    @FieldType.select
    defaultrenewalmethod: number | string

    /**
     * Default Renewal Plan |
     * This is optional when Initial Term is Evergreen.
     */
    @FieldType.select
    defaultrenewalplan: number

    /**
     * Default Renewal Price Book
     */
    @FieldType.select
    defaultrenewalpricebook: number

    /**
     * Default Renewal Term |
     * This is optional when Initial Term is Evergreen.
     */
    @FieldType.select
    defaultrenewalterm: number

    /**
     * Default Renewal Transaction Type
     */
    @FieldType.select
    defaultrenewaltrantype: number

    /**
     * End Date
     */
    @FieldType.date
    enddate: Date

    /**
     * Estimated Revenue Recognition End Date
     */
    @FieldType.date
    estimatedrevrecenddate: Date

    /**
     * External ID
     */
    @FieldType.freeformtext
    externalid: string

    /**
     * Billing Frequency |
     * NetSuite lists this as a select field, but it is a string value (e.g. MONTHLY).
     */
    @FieldType.select
    frequency: number | string

    /**
     * Subscription ID
     */
    @FieldType.freeformtext
    idnumber: string | null

    /**
     * Initial Term
     */
    @FieldType.select
    initialterm: number

    /**
     * Initial Term Duration
     */
    @FieldType.integernumber
    initialtermduration: number

    /**
     * Initial Term Type |
     * NetSuite lists this as a select field, but it is a string value (e.g. EVERGREEN).
     */
    @FieldType.select
    initialtermtype: number

    /**
     * Initial Term Units |
     * NetSuite lists this as a select field, but it is a string value (e.g. MONTHS).
     */
    @FieldType.select
    initialtermunits: number | string

    /**
     * Internal ID
     */
    @FieldType.integernumber
    internalid: number

    /**
     * Last Bill Cycle Date
     */
    @FieldType.date
    lastbillcycledate: Date

    /**
     * Last Bill Date
     */
    @FieldType.date
    lastbilldate: Date

    /**
     * Subscription Name
     */
    @FieldType.freeformtext
    name: string

    /**
     * Next Bill Cycle Date
     */
    @FieldType.date
    nextbillcycledate: Date

    /**
     * Next Renewal Start Date
     */
    @FieldType.date
    nextrenewalstartdate: Date

    /**
     * Other Record Number
     */
    @FieldType.freeformtext
    otherrecordnumber: string

    /**
     * Price Book
     */
    @FieldType.select
    pricebook: number

    /**
     * Number of Renewal
     */
    @FieldType.integernumber
    renewalnumber: number

    /**
     * Originating Sales Order
     */
    @FieldType.select
    salesorder: number

    /**
     * Start Date |
     * As of 1/20/22, NetSuite says this is not a required field, which is incorrect. It is most likely being confused with billingaccountstartdate.
     */
    @FieldType.date
    startdate: Date

    /**
     * Subscription Plan
     */
    @FieldType.select
    subscriptionplan: number

    /**
     * Subscription Plan Name
     */
    @FieldType.freeformtext
    subscriptionplanname: string

    /**
     * Subscription Revision
     */
    @FieldType.integernumber
    subscriptionrevision: number

    /**
     * Template Stored
     */
    @FieldType.checkbox
    templatestored: boolean

    /**
     * Subsidiary
     */
    @FieldType.select
    subsidiary: number

    /**
     * priceinterval - Price Book Lines (Sublist)
     */
    @FieldType.sublist(PriceBookLinesSublist)
    priceinterval: Sublist<PriceBookLinesSublist>

    /**
     * sublinefromplan - Lines (Sublist)
     */
    @FieldType.sublist(SublineFromPlanSublist)
    sublinefromplan: Sublist<SublineFromPlanSublist>

    /**
     * subscriptionline - Lines (Sublist)
     */
    @FieldType.sublist(SubscriptionLineSublist)
    subscriptionline: Sublist<SubscriptionLineSublist>

    static override recordType() { return record.Type.SUBSCRIPTION }

}
