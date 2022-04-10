import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import TaskForm from './TaskForm'

const Modal = () => {
  const { modalClosed } = useTypedSelector(state => state.task)
  const { toggleModalAction, resetTaskFormAction } = useActions()

  const toggleModal = () => {
    toggleModalAction()
  }

  useEffect(() => {
    if (modalClosed === true) {
      resetTaskFormAction()
    }
  }, [modalClosed])

  let closed = modalClosed && ' closed'

  return (
    <>
      <div className={`modal ${closed}`}>
        <h3>Create task</h3>
        <button className="close-button" onClick={() => toggleModal()}>Close</button>
        <TaskForm />
      </div>
      <div className={`modal-overlay ${closed}`} onClick={() => toggleModal()}></div>
    </>
  )
}

export default Modal