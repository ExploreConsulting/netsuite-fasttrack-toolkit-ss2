import { NetsuiteRecord, FieldType } from './Record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import { ItemPricingBase } from './ItemPricingBase'
import * as record from 'N/record'

export class ItemSublist extends SublistLine {

	@SublistFieldType.select
	item: number

	@SublistFieldType.freeformtext
	itemText: string

	@SublistFieldType.currency
	rate: number

	@SublistFieldType.currency
	origrate: number

	@SublistFieldType.decimalnumber
	quantity: number

	@SublistFieldType.textarea
	description: string

	@SublistFieldType.checkbox
	itempricingset: boolean

	@SublistFieldType.subrecord(ItemPricingBase)
	itempricing: ItemPricingBase
}

/**
 * NetSuite Purchase Contract Record type with custom fields.
 */
export class PurchaseContractBase extends NetsuiteRecord {
	static recordType () { return record.Type.PURCHASE_CONTRACT }

	@FieldType.date
	trandate: Date

	@FieldType.select
	entity: number

	@FieldType.freeformtext
	memo: string

	@FieldType.freeformtext
	externalid: string

	@FieldType.select
	subsidiary: number

	@FieldType.select
	currency: number

	@FieldType.freeformtext
	effectivitybasedon: string

	@FieldType.date
	startdate: Date

	@FieldType.date
	enddate: Date

	@FieldType.currency
	minimumamount: number

	@FieldType.currency
	maximumamount: number

	@FieldType.checkbox
	updateitemvendor: boolean

	@FieldType.sublist(ItemSublist)
	item: Sublist<ItemSublist>

}
