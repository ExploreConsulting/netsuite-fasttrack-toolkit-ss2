/**
 * NS Base Landed Cost subrecord contains definitions for the built in fields
 */
import { NetsuiteRecord } from './Record'
import * as record from 'N/record'
import { Sublist, SublistLine, SublistFieldType } from './Sublist'

export class LandedCostDataSublist extends SublistLine {

	@SublistFieldType.currency
	amount: number

	@SublistFieldType.select
	landedcostcategory: number
}

/**
 * The inventory detail 'subrecord'. In SS2.0 this is mostly treated as a normal record object.
 * However I caution against trying to create new instances of it, only passing an existing record
 * to the constructor.
 */
export class LandedCostBase extends NetsuiteRecord {
	static recordType () { return 'landedcost' }
	landedcostdata: Sublist<LandedCostDataSublist>
}
