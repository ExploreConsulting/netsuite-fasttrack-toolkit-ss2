import {NetsuiteRecord, FieldType} from './Record'
import {Sublist, SublistFieldType, SublistLine} from "./Sublist"
import * as record from 'N/record'

/**
 * Price Book Lines sublist (priceinterval)
 */
export class PriceIntervalBase extends SublistLine {
    /**
     * Subscription Line Type
     */
    @SublistFieldType.select
    chargetype: number

    /**
     * Discount
     */
    @SublistFieldType.decimalnumber
    discount: number | string | null

    /**
     * Charge Frequency
     */
    @SublistFieldType.select
    frequency: number | string

    /**
     * Required
     */
    @SublistFieldType.checkbox
    isrequired: boolean

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
    multiplierline: number | null

    /**
     * Price
     */
    @SublistFieldType.textarea
    price: string

    /**
     * Price Plan
     */
    @SublistFieldType.select
    priceplan: number

    /**
     * Repeat Every
     */
    @SublistFieldType.select
    repeatevery: number

    /**
     * Interval
     */
    @SublistFieldType.select
    startoffsetunit: number | string

    /**
     * Start On
     */
    @SublistFieldType.integernumber
    startoffsetvalue: number

    /**
     * Subscription Plan Line
     */
    @SublistFieldType.integernumber
    subscriptionplanline: number
}

/**
 * NetSuite Price Book (pricebook) record type
 */
export class PriceBookBase extends NetsuiteRecord {
    /**
     * Currency
     */
    @FieldType.select
    currency: number

    /**
     * External ID
     */
    @FieldType.freeformtext
    externalid: string

    /**
     * Internal ID
     */
    @FieldType.integernumber
    internalid: number | null

    /**
     * Name
     */
    @FieldType.freeformtext
    name: string

    /**
     * Subscription Plan
     */
    @FieldType.select
    subscriptionplan: number

    /**
     * priceinterval - Price Book Lines (Sublist)
     */
    @FieldType.sublist(PriceIntervalBase)
    priceinterval : Sublist<PriceIntervalBase>

    static recordType() { return record.Type.PRICE_BOOK }

}
