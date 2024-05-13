/**
 * NetSuite Work Order Close Record Type
 */
import { type Sublist, SublistLine } from './Sublist'
import { FieldType, NetsuiteRecord } from './Record'

export class ComponentSublist extends SublistLine {

}

/**
 * NetSuite Work Order Close Record type
 */
export class WorkOrderCloseBase extends NetsuiteRecord {

  @FieldType.sublist(ComponentSublist)
  component: Sublist<ComponentSublist>
}
