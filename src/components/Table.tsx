import React from 'react'
import { Category, Task } from '../store/taskReducerTypes'
import CategoryRaw from './CategoryRaw'
import HeaderRow from './HeaderRow'
import TaskRow from './TaskRow'

const Table: React.FC<{ tasks: Task[], isSummary?: boolean }> = ({ tasks = [], isSummary = false }) => {
  if (!tasks.length) {
    return <p>No tasks ...</p>
  }

  let columns: string[] = Object.keys(tasks[0]).filter(elem => elem !== 'id' && elem !== 'archived')

  let categories: Category[] | undefined
  let categoryNames: string[]
  if (isSummary) {
    categoryNames = Array.from(new Set(tasks.map(item => item.category)))
    categories = categoryNames.map(name => ({
      categoryName: name,
      active: tasks.filter(t => t.category === name && t.archived === false).length,
      archived: tasks.filter(t => t.category === name && t.archived === true).length,
    }))
    columns = Object.keys(categories[0])
  }

  return (
    <table>
      <thead>
        <HeaderRow tasks={tasks} columns={columns} isSummary={isSummary} />
      </thead>

      <tbody>
        {!isSummary && tasks.map(task => (
          <TaskRow task={task} columns={columns} key={task.id} />
        ))}

        {categories && categories.map(cat => (
          <CategoryRaw category={cat} columns={columns} key={cat.categoryName} />
        ))}
      </tbody>
    </table>
  )
}

export default Table