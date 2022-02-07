import {NetsuiteRecord, FieldType} from './Record'
import * as record from 'N/record'

/**
 * NetSuite Project record type
 */
export class TermBase extends NetsuiteRecord {
    /**
     * STANDARD
     */
    @FieldType.select
    datedriven: boolean

    /**
     * Day Discount Expires
     */
    @FieldType.integernumber
    daydiscountexpires: number

    /**
     * Day Of Month Net Due
     */
    @FieldType.integernumber
    dayofmonthnetdue: number

    /**
     * Days Till Discount Expires
     */
    @FieldType.integernumber
    daysuntilexpiry: number

    /**
     * Days Till Net Due
     */
    @FieldType.integernumber
    daysuntilnetdue: number

    /**
     * % Discount
     */
    @FieldType.float
    discountpercent: number

    /**
     * % Discount
     */
    @FieldType.float
    discountpercentdatedriven: number

    /**
     * Due Next Month If Within Days
     */
    @FieldType.integernumber
    duenextmonthifwithindays: number

    /**
     * Installment
     */
    @FieldType.checkbox
    installment: boolean

    /**
     * External ID
     */
    @FieldType.freeformtext
    externalid: string

    /**
     * Inactive
     */
    @FieldType.checkbox
    isinactive: boolean

    /**
     * Terms
     */
    @FieldType.freeformtext
    name: string

    /**
     * Preferred
     */
    @FieldType.checkbox
    preferred: boolean

    /**
     * Recurrence Count
     */
    @FieldType.integernumber
    recurrencecount: number

    /**
     * Recurrence Frequency
     */
    @FieldType.select
    recurrencefrequency: number

    /**
     * Repeat Every
     */
    @FieldType.integernumber
    repeatevery: number

    /**
     * Split Evenly
     */
    @FieldType.checkbox
    splitevenly: boolean

    static recordType() {
        return record.Type.TERM
    }
}
