import React from 'react'
import { Category } from '../store/taskReducerTypes'

const CategoryRaw: React.FC<{ category: Category, columns: string[] }> =
  ({ category, columns }) => {

    return (
      <tr>
        <td>
          <div className={`icon-category icon-${category.categoryName.toLowerCase().replaceAll(' ', '-')}`}></div>
        </td>

        {columns.map(col => (
          <td key={col} className={`cell-${col}`}>
            {category[col]}
          </td>
        )
        )}
      </tr>
    )
  }

export default CategoryRaw