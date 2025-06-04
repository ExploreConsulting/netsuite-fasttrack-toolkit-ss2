/**
 * Created by asariego on 4/8/24.
 */
import * as record from 'N/record'
import {TransactionBase} from './Transaction'
import {FieldType} from './Record'

/**
 * NetSuite Time Record
 */
export class TimesheetBase extends TransactionBase {
  static recordType() {
    return record.Type.TIME_SHEET
  }

  @FieldType.select
  approvalstatus: number

  @FieldType.select
  customform: number

  @FieldType.select
  employee: number

  @FieldType.datetime
  enddate: Date

  @FieldType.freeformtext
  externalid: string

  @FieldType.datetime
  startdate: Date

  @FieldType.select
  subsidiary: number

  @FieldType.select
  timeGridList: number

  @FieldType.select
  totalHours: number

}
