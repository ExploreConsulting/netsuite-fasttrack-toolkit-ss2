/**
 * Base Customer Deposit (customerdeposit) definition
 */

import { FieldType } from './Record'
import { TransactionBase } from './Transaction'
import * as record from 'N/record'

/**
 * NetSuite Customer Deposit Record 'customerdeposit'
 */
export class CustomerDepositBase extends TransactionBase {

   static recordType() { return record.Type.CUSTOMER_DEPOSIT }

   @FieldType.select
   account: number

   @FieldType.select
   currency: number

   @FieldType.select
   customer: number

   @FieldType.select
   paymentmethod: number

   @FieldType.select
   salesorder: number

   @FieldType.currency
   payment: string
}

