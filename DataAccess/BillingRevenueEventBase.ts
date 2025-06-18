import { NetsuiteRecord, FieldType } from './Record'
import * as record from 'N/record'

/**
 * NetSuite Cash Refund Record type with custom fields.
 */
export class ImportTool_RevenueRecognitionEvent extends NetsuiteRecord {

	static override recordType () { return record.Type.BILLING_REVENUE_EVENT }

	@FieldType.select
	transactionline: number

	@FieldType.freeformtext
	transactionlineText: string

	@FieldType.select
	projectrevenuerule: number

	@FieldType.select
	eventtype: number

	@FieldType.freeformtext
	eventtypeText: string

	@FieldType.select
	eventpurpose: number

	@FieldType.freeformtext
	eventpurposeText: string

	@FieldType.date
	eventdate: Date

	@FieldType.decimalnumber
	quantity: number

	@FieldType.decimalnumber
	amount: number

}
