import React from 'react'
import { useActions } from '../hooks/useActions'
import { Task } from '../store/taskReducerTypes'

const TaskRow: React.FC<{ task: Task, columns: string[], isSummary?: boolean }> =
  ({ task, columns, isSummary = false }) => {
    const { toggleArchivedAction, setCurrentTaskAction, toggleModalAction, deleteTaskAction } = useActions()

    const editTask = () => {
      setCurrentTaskAction(task)
      toggleModalAction()
    }

    return (
      <tr>
        <td>
          <div className={`icon-category icon-${task.category.toLowerCase().replaceAll(' ', '-')}`}></div>
        </td>

        {columns.map(col => (
          <td key={col} className={`cell-${col}`}>
            {task[col]}
          </td>
        )
        )}

        {isSummary === false && <td className='cell-btn'>
          <button className="btn-action btn-edit" onClick={() => editTask()}></button>
          <button className="btn-action btn-archive" onClick={() => toggleArchivedAction(task)} />
          <button className="btn-action btn-trash" onClick={() => deleteTaskAction(task)}></button>
        </td>}

      </tr>
    )
  }

export default TaskRow