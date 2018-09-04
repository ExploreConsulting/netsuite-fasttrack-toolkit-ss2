export const create = jest.fn().mockReturnThis().mockName('create')
export const submit = jest.fn().mockName('submit')
export enum TaskType {
   SCHEDULED_SCRIPT = "SCHEDULED_SCRIPT",
   MAP_REDUCE = "MAP_REDUCE",
   CSV_IMPORT = "CSV_IMPORT",
   ENTITY_DEDUPLICATION = "ENTITY_DEDUPLICATION",
   WORKFLOW_TRIGGER = "WORKFLOW_TRIGGER",
}
