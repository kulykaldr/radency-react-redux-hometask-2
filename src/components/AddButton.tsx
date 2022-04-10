import React from 'react'
import { useActions } from '../hooks/useActions'

const AddButton: React.FC = () => {
  const { toggleModalAction } = useActions()

  const toggleModal = () => {
    toggleModalAction()
  }

  return (
    <div className="btn-create-task">
      <button type="button" className="btn btn-create-task" onClick={() => toggleModal()} >Create Task</button>
    </div>
  )
}

export default AddButton