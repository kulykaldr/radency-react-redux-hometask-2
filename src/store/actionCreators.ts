import { Task, TaskActionTypes } from './taskReducerTypes'

export const toggleArchivedAction = (payload: Task) => (
  { type: TaskActionTypes.TOGGLE_TASK_ARCHIVED, payload }
)

export const addTaskAction = (payload: Task) => (
  { type: TaskActionTypes.ADD_TASK, payload }
)

export const editTaskAction = (payload: Task) => (
  { type: TaskActionTypes.EDIT_TASK, payload }
)

export const deleteTaskAction = (payload: Task) => (
  { type: TaskActionTypes.DELETE_TASK, payload }
)

export const setCurrentTaskAction = (payload: Task) => (
  { type: TaskActionTypes.SET_CURRENT_TASK, payload }
)

export const resetTaskFormAction = () => (
  { type: TaskActionTypes.RESET_TASK_FORM }
)

export const toggleModalAction = () => (
  { type: TaskActionTypes.TOGGLE_MODAL }
)

export const deleteAllTasksAction = (payload: Task[]) => (
  { type: TaskActionTypes.DELETE_ALL_TASKS, payload }
)

export const archivedAllTasksAction = (payload: Task[]) => (
  { type: TaskActionTypes.ARCHIVED_ALL_TASKS, payload }
)