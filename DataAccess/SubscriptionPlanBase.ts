import {NetsuiteRecord, FieldType} from './Record'
import {Sublist, SublistFieldType, SublistLine} from "./Sublist"
import * as record from 'N/record'


/**
 * Lines Sublist (member)
 */
export class LinesSublist extends SublistLine {
    /**
     * Billing Mode
     * NetSuite says this is a select field, but the value is a string.
     */
    @SublistFieldType.select
    billingmode: number | string

    /**
     * Item
     */
    @SublistFieldType.select
    item: number

    /**
     * Required
     */
    @SublistFieldType.checkbox
    isrequired: boolean

    /**
     * Line ID
     */
    @SublistFieldType.integernumber
    lineid: number

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
     * Include In Renewal Subscription
     * NetSuite says this is a select field, but the value is a string.
     */
    @SublistFieldType.select
    renewaloption: number | string

    /**
     * Type
     */
    @SublistFieldType.select
    subscriptionlinetype: number
}
/**
 * NetSuite Subscription Plan record type
 */
export class SubscriptionPlanBase extends NetsuiteRecord {
    @FieldType.integernumber
    advancerenewalperiodnumber: number

    @FieldType.select
    advancerenewalperiodunit: number

    /**
     * Automatically Initiate Renewal Process
     */
    @FieldType.checkbox
    autorenewal: boolean

    /**
     * Class
     */
    @FieldType.select
    class: number

    /**
     * Date Created
     */
    @FieldType.datetime
    createddate: Date

    /**
     * Default Renewal Method
     */
    @FieldType.select
    defaultrenewalmethod: number

    /**
     * Default Renewal Subscription Plan
     */
    @FieldType.select
    defaultrenewalplan: number

    /**
     * Default Renewal Term
     */
    @FieldType.select
    defaultrenewalterm: number

    /**
     * Default Renewal Transaction Type
     */
    @FieldType.select
    defaultrenewaltrantype: number

    /**
     * Department
     */
    @FieldType.select
    department: number

    /**
     * Description
     */
    @FieldType.textarea
    description: string

    /**
     * Display Name/Code
     */
    @FieldType.freeformtext
    displayname: string

    /**
     * External ID
     */
    @FieldType.freeformtext
    externalid: string

    /**
     * Include Children
     */
    @FieldType.checkbox
    includechildren: boolean

    /**
     * Income Account
     */
    @FieldType.select
    incomeaccount: number

    /**
     * Initial Term
     */
    @FieldType.select
    initialterm: number

    /**
     * Inactive
     */
    @FieldType.checkbox
    isinactive: boolean

    /**
     * Subscription Plan Name
     */
    @FieldType.freeformtext
    itemid: string

    /**
     * Item Type
     */
    @FieldType.freeformtext
    itemtype: string

    /**
     * Last Modified
     */
    @FieldType.datetime
    lastmodifieddate: Date

    /**
     * Location
     */
    @FieldType.select
    location: number

    /**
     * Subsidiary
     */
    @FieldType.select
    subsidiary: number

    /**
     * member - Lines (sublist)
     */
    @FieldType.sublist(LinesSublist)
    member: Sublist<LinesSublist>

    static override recordType() { return record.Type.SUBSCRIPTION_PLAN }

}
