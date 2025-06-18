import { NetsuiteRecord, FieldType } from './Record'
import { Sublist, SublistFieldType, SublistLine } from './Sublist'

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

export class ItemPricingBase extends NetsuiteRecord {

	@FieldType.select
	calculatequantitydiscounts: string | undefined

	@FieldType.select
	priceusing: string | undefined

	@FieldType.select
	inputusing: string | undefined

	@FieldType.sublist(DiscountSublist)
	discount: Sublist<DiscountSublist>
}
