import {NetsuiteRecord, FieldType} from './Record'
import * as record from 'N/record'

/**
 * NetSuite Subscription Line record type
 */
export class SubscriptionLineBase extends NetsuiteRecord {
    @FieldType.integernumber
    advancerenewalperiodnumber: number

    /**
     * NetSuite lists this as a select field, but often the value is a string (e.g. DAYS).
     */
    @FieldType.select
    advancerenewalperiodunit: number | string

    /**
     * Billing Account Start Date
     */
    @FieldType.date
    billingaccountstartdate: Date

    /**
     * Billing Mode
     * NetSuite lists this as a select field, but often the value is a string (e.g. IN_ADVANCE).
     */
    @FieldType.select
    billingmode: number | string

    /**
     * Catalog Type
     * NetSuite lists this as a select field, but often the value is a string (e.g. OPTIONAL).
     */
    @FieldType.select
    catalogtype: number | string

    /**
     * Currency
     */
    @FieldType.select
    currency: number

    /**
     * Custom Form
     */
    @FieldType.select
    customform: number

    /**
     * End Date
     */
    @FieldType.date
    enddate: Date

    /**
     * External ID
     */
    @FieldType.freeformtext
    externalid: string

    /**
     * Include In Renewal Subscription
     */
    @FieldType.checkbox
    includeinrenewal: boolean

    /**
     * Item
     */
    @FieldType.select
    item: number

    /**
     * Line Number
     */
    @FieldType.integernumber
    linenumber: number

    /**
     * PO Number
     */
    @FieldType.freeformtext
    ponumber: string

    /**
     * Prorate End Date
     */
    @FieldType.checkbox
    prorateenddate: boolean

    /**
     * Prorate Start Date
     */
    @FieldType.checkbox
    proratestartdate: boolean

    /**
     * Recurrence Start Date
     */
    @FieldType.date
    recurrencestartdate: Date

    /**
     * Revenue Recognition Option
     */
    @FieldType.freeformtext
    revrecoption: string

    /**
     * Start Date
     */
    @FieldType.date
    startdate: Date

    /**
     * Sales Order
     */
    @FieldType.select
    salesorder: number

    /**
     * Sales Order Line Number
     */
    @FieldType.integernumber
    salesorderlinenumber: number

    /**
     * Subscription Line Status
     * NetSuite lists this as a select field, but often the value is a string (e.g. ACTIVE).
     */
    @FieldType.select
    subscriptionlinestatus: number | string

    /**
     * Subscription
     */
    @FieldType.select
    subscription: number

    /**
     * Subscription Plan
     */
    @FieldType.select
    subscriptionplan: number

    /**
     * Subscription Line Type
     */
    @FieldType.select
    subscriptionlinetype: number

    /**
     * Termination Date
     */
    @FieldType.date
    terminationdate: Date

    /**
     * Total
     */
    @FieldType.currency
    total: number | string

    static override recordType() { return record.Type.SUBSCRIPTION_LINE }

}
