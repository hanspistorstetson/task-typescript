export type TaskStateTypes = "TASK_PINNED" | "TASK_ARCHIVED" | "TASK_INBOX"

export default interface Task {
  id: string;
  title: string;
  state:TaskStateTypes
}
