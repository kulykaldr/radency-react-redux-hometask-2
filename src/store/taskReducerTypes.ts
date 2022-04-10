export enum CategoryNames {
    TASK = 'Task',
    RANDOM_TOUGHT = 'Random Tought',
    IDEA = 'Idea',
}

export interface Category {
    [key: string]: number | string
    categoryName: string
    active: number
    archived: number
}

export interface Task {
    [key: string]: number | string | boolean | string[]
    id: number
    name: string
    created: string
    category: string
    content: string
    dates: string[]
    archived: boolean
}

export interface TaskState {
    tasks: Task[]
    modalClosed: boolean
    currentTask: Task
}

export enum TaskActionTypes {
    TOGGLE_TASK_ARCHIVED = 'TOGGLE_TASK_ARCHIVED',
    TOGGLE_MODAL = 'TOGGLE_MODAL',
    ADD_TASK = 'ADD_TASK',
    EDIT_TASK = 'EDIT_TASK',
    DELETE_TASK = 'DELETE_TASK',
    SET_CURRENT_TASK = 'SET_CURRENT_TASK',
    SET_CATEGORIES = 'SET_CATEGORIES',
    RESET_TASK_FORM = 'RESET_TASK_FORM',
}

interface AddTaskAction {
    type: TaskActionTypes.ADD_TASK
    payload: Task
}

interface EditTaskAction {
    type: TaskActionTypes.EDIT_TASK
    payload: Task
}

interface DeleteTaskAction {
    type: TaskActionTypes.DELETE_TASK
    payload: Task
}

interface ToggleArchivedTaskAction {
    type: TaskActionTypes.TOGGLE_TASK_ARCHIVED
    payload: Task
}

interface SetCurrentTaskAction {
    type: TaskActionTypes.SET_CURRENT_TASK
    payload: Task
}

interface ToggleModalAction {
    type: TaskActionTypes.TOGGLE_MODAL
    payload: boolean
}

interface ResetTaskFormAction {
    type: TaskActionTypes.RESET_TASK_FORM
    payload: Category[]
}

export type TaskAction = AddTaskAction | EditTaskAction |
    ToggleArchivedTaskAction | ToggleModalAction |
    SetCurrentTaskAction | ResetTaskFormAction | DeleteTaskAction