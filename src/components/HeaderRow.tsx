import React from 'react'

const HeaderRow: React.FC<{ columns: string[], isSummary?: boolean }> = ({ columns, isSummary = false }) => {
  return (
    <tr>
      <th> </th>

      {columns.map(col => (<th key={col} className={`cell-${col}`}>
        {col}
      </th>))}

      {isSummary === false && <th className='cell-btn'>
        <div className="icon-action icon-archive-white"></div>
        <div className="icon-action icon-trash-white"></div>
      </th>}
    </tr>
  )
}

export default HeaderRow