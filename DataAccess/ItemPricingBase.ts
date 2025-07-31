import { NetsuiteRecord, FieldType } from './Record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'
import * as record from 'N/record'

export class DiscountSublist extends SublistLine {
	@SublistFieldType.freeformtext
	memo: string

	@SublistFieldType.decimalnumber
	fromquantity: number

	@SublistFieldType.percent
	percent: number

	@SublistFieldType.decimalnumber
	quantityordered: number

	@SublistFieldType.decimalnumber
	rate: number
}

/**
 * NetSuite Item Pricing Record type with custom fields.
 */
export class ItemPricingBase extends NetsuiteRecord {

	static override recordType() { return 'itempricing' }

	@FieldType.select
	calculatequantitydiscounts: string | undefined

	@FieldType.select
	priceusing: string | undefined

	@FieldType.select
	inputusing: string | undefined

	@FieldType.sublist(DiscountSublist)
	discount: Sublist<DiscountSublist>
}
