import React from 'react'
import { useActions } from '../hooks/useActions'
import { Task } from '../store/taskReducerTypes'

const HeaderRow: React.FC<{ tasks: Task[], columns: string[], isSummary?: boolean }> = 
    ({ tasks, columns, isSummary = false }) => {
  const {deleteAllTasksAction, archivedAllTasksAction} = useActions()
  
  return (
    <tr>
      <th> </th>

      {columns.map(col => (<th key={col} className={`cell-${col}`}>
        {col}
      </th>))}

      {isSummary === false && <th className='cell-btn'>
        <button className="btn-action btn-archive-white" onClick={() => archivedAllTasksAction(tasks)}></button>
        <button className="btn-action btn-trash-white" onClick={() => deleteAllTasksAction(tasks)}></button>
      </th>}
    </tr>
  )
}

export default HeaderRow