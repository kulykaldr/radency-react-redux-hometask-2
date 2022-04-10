import { initialState } from './initialState'
import { TaskState, TaskAction, TaskActionTypes } from './taskReducerTypes'

export const taskReducer = (state = initialState, action: TaskAction): TaskState => {
    switch (action.type) {
        case TaskActionTypes.ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload,
                ],
            }

        case TaskActionTypes.EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload
                    } else {
                        return item
                    }
                })
            }

        case TaskActionTypes.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.payload.id)
            }

        case TaskActionTypes.TOGGLE_TASK_ARCHIVED:
            return {
                tasks: [
                    ...state.tasks.filter(item => item.id !== action.payload.id),
                    {
                        ...action.payload,
                        archived: !action.payload.archived
                    }
                ],
                modalClosed: state.modalClosed,
                currentTask: state.currentTask,
            }

        case TaskActionTypes.TOGGLE_MODAL:
            return {
                tasks: state.tasks,
                modalClosed: !state.modalClosed,
                currentTask: state.currentTask,
            }

        case TaskActionTypes.SET_CURRENT_TASK:
            return {
                tasks: state.tasks,
                modalClosed: state.modalClosed,
                currentTask: action.payload,
            }

        case TaskActionTypes.RESET_TASK_FORM:
            return {
                tasks: state.tasks,
                modalClosed: state.modalClosed,
                currentTask: initialState.currentTask,
            }

        default:
            return state
    }
}