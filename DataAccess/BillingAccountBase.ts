import {NetsuiteRecord, FieldType} from './Record'
import * as record from 'N/record'

/**
 * NetSuite Billing Account record type
 */
export class BillingAccountBase extends NetsuiteRecord {
    /**
     * Billing Schedule
     */
    @FieldType.select
    billingschedule: number

    /**
     * Cash Sale Form
     */
    @FieldType.select
    cashsaleform: number

    /**
     * Class
     */
    @FieldType.select
    class: number

    /**
     * Created By
     */
    @FieldType.freeformtext
    createdby: string

    /**
     * Created Date
     */
    @FieldType.datetime
    createddate: Date

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
     * Customer Default
     */
    @FieldType.checkbox
    customerdefault: boolean

    /**
     * Custom Form
     */
    @FieldType.select
    customform: number

    /**
     * Department
     */
    @FieldType.select
    department: number

    /**
     * External ID
     */
    @FieldType.freeformtext
    externalid: string

    /**
     * Frequency
     */
    @FieldType.select
    frequency: number

    /**
     * Account Number
     */
    @FieldType.freeformtext
    idnumber: string

    /**
     * External ID
     */
    @FieldType.freeformtext
    idnumberexternal: string

    /**
     * Inactive
     */
    @FieldType.checkbox
    inactive: boolean

    /**
     * Invoice Form
     */
    @FieldType.select
    invoiceform: number

    /**
     *	Last Bill Cycle Date
     */
    @FieldType.date
    lastbillcycledate: Date

    /**
     * Last Bill Date
     */
    @FieldType.date
    lastbilldate: Date

    /**
     * Account Description
     */
    @FieldType.textarea
    memo: string

    /**
     * Name
     */
    @FieldType.freeformtext
    name: string

    /**
     * Next Bill Cycle Date
     */
    @FieldType.date
    nextbillcycledate: Date

    /**
     * Start Date
     */
    @FieldType.date
    startdate: Date

    /**
     * Subsidiary
     */
    @FieldType.select
    subsidiary: number

    static recordType() { return record.Type.BILLING_ACCOUNT }

}
