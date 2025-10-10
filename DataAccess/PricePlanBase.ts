import {NetsuiteRecord, FieldType, Nullable} from './Record'
import {Sublist, SublistFieldType, SublistLine} from "./Sublist"
import * as record from 'N/record'

/**
 * NetSuite Price Plan Price Tiers sublist (pricetiers)
 */
export class PriceTiersBase extends SublistLine {
    /**
     * Above Quantity
     */
    @SublistFieldType.integernumber
    fromval: number

    /**
     * Line ID
     */
    @SublistFieldType.integernumber
    lineid: Nullable<string | number>

    /**
     * Price Plan
     */
    @SublistFieldType.select
    priceplan: number

    /**
     * Price Tier
     */
    @SublistFieldType.freeformtext
    pricetier: string

    /**
     * Pricing Option
     */
    @SublistFieldType.select
    pricingoption: number

    /**
     * Value
     */
    @SublistFieldType.currency
    value: number
}

/**
 * NetSuite Price Plan (priceplan)
 */
export class PricePlanBase extends NetsuiteRecord {
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
    internalid: number

    /**
     * Price Plan Type
     */
    @FieldType.select
    priceplantype: number

    /**
     * pricetiers  - Price Plan Price Tiers (Sublist)
     */
    @FieldType.sublist(PriceTiersBase)
    pricetiers : Sublist<PriceTiersBase>

    static override recordType() { return record.Type.PRICE_PLAN }

}
