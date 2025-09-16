import { CustomerBase } from '../NFT-SS2-8.0.0/DataAccess/CustomerBase'
import { FieldType } from '../NFT-SS2-8.0.0/DataAccess/Record'

/**
 * NetSuite Customer record type
 */
export class Customer extends  CustomerBase {
  /**
   * a wonderful datetime field used for some glorious purpose (just an example - remove in real project)
   */
  @FieldType.datetime
  custentity_delete_me: Date | null

}
