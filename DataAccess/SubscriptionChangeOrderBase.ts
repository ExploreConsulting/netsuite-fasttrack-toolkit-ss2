import {NetsuiteRecord, FieldType} from './Record'
import {Sublist, SublistFieldType, SublistLine} from "./Sublist"
import * as record from 'N/record'

/**
 * newsubline - New Lines (sublist)
 */
export class NewSublineSublist extends SublistLine {
    /**
     * Item
     */
    @SublistFieldType.freeformtext
    item: string

    /**
     * Subscription Line
     */
    @SublistFieldType.freeformtext
    subscriptionline: string
}

/**
 * renewalsteps - Renewal Steps (sublist)
 */
export class RenewalStepsSublist extends SublistLine {
    /**
     * Subscription
     */
    @SublistFieldType.decimalnumber
    subscription: number

    /**
     * Transaction
     */
    @SublistFieldType.decimalnumber
    transaction: number
}

/**
 * subline - Items (sublist)
 */
export class SublineSublist extends SublistLine {
    /**
     * Include
     */
    @SublistFieldType.checkbox
    apply: boolean

    /**
     * Billing Mode
     */
    @SublistFieldType.freeformtext
    billingmode: string

    /**
     * Discount
     */
    @SublistFieldType.percent
    discount: number

    /**
     * New Discount
     */
    @SublistFieldType.percent
    discountnew: number

    /**
     * End Date
     */
    @SublistFieldType.date
    enddate: Date

    /**
     * Include in Renewal
     */
    @SublistFieldType.freeformtext
    includeinrenewal: string
}

/**
 * Subscription Change Order NetSuite record |
 * On creation, the following default values are required: action and subscription.
 */
export class SubscriptionChangeOrderBase extends NetsuiteRecord {
    /**
     * Date Approved
     */
    @FieldType.datetime
    approvaldate: Date

    /**
     * Approval Status |
     * NetSuite lists this as a select field, but it is a string value (e.g. APPROVED).
     */
    @FieldType.select
    approvalstatus: number | string

    /**
     * Billing Account
     */
    @FieldType.select
    billingaccount: number

    /**
     * Created By
     */
    @FieldType.freeformtext
    createdby: string

    /**
     * Customer
     */
    @FieldType.select
    customer: number

    /**
     * Date Created
     */
    @FieldType.date
    datecreated: Date

    /**
     * Effective Date |
     * This date needs to match any other Change Order effective dates or else NetSuite will throw an error.
     */
    @FieldType.date
    effectivedate: Date

    /**
     * External ID
     */
    @FieldType.freeformtext
    externalid: string

    /**
     * Number
     */
    @FieldType.freeformtext
    idnumber: string

    /**
     * Memo
     */
    @FieldType.textarea
    memo: string

    /**
     * Modification Type
     */
    @FieldType.textarea
    modificationtype: string

    /**
     * Reactivation Option
     */
    @FieldType.select
    reactivationoption: number

    /**
     * Renewal End Date
     */
    @FieldType.date
    renewalenddate: Date

    /**
     * Renewal Method
     */
    @FieldType.select
    renewalmethod: number

    /**
     * Renewal Subscription Plan
     */
    @FieldType.select
    renewalplan: number

    /**
     * Renewal Price Book
     */
    @FieldType.select
    renewalpricebook: number

    /**
     * Renewal Start Date
     */
    @FieldType.date
    renewalstartdate: Date

    /**
     * Renewal Term
     */
    @FieldType.select
    renewalterm: number | string

    /**
     * Renewal Transaction Type
     */
    @FieldType.select
    renewaltrantype: number

    /**
     * Request Off-Cycle Invoice For Advance Charges
     */
    @FieldType.checkbox
    requestoffcycleinvoice: boolean

    /**
     * Requester
     */
    @FieldType.select
    requestor: number

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
     * Subscription Term Duration
     */
    @FieldType.integernumber
    subscriptiontermduration: number

    /**
     * Subscription Term Type
     */
    @FieldType.freeformtext
    subscriptiontermtype: string

    /**
     * Subsidiary
     */
    @FieldType.select
    subsidiary: number

    /**
     * newsubline - New Lines (Sublist)
     */
    @FieldType.sublist(NewSublineSublist)
    newsubline: Sublist<NewSublineSublist>

    /**
     * renewalsteps - Renewal Steps (Sublist)
     */
    @FieldType.sublist(RenewalStepsSublist)
    renewalsteps : Sublist<RenewalStepsSublist>

    /**
     * subline - Items (Sublist)
     */
    @FieldType.sublist(SublineSublist)
    subline  : Sublist<SublineSublist>

    static recordType() { return record.Type.SUBSCRIPTION_CHANGE_ORDER }

}
