import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import strToHash from '../helpers/strToHash'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Task } from '../store/taskReducerTypes'

const TaskForm = () => {
  const { tasks, currentTask, modalClosed } = useTypedSelector(state => state.task)
  const { toggleModalAction, editTaskAction, addTaskAction } = useActions()

  const { register, handleSubmit, reset, setValue, getValues, formState: {errors} } = useForm()

  useEffect(() => {
    if (currentTask.id !== 0) {
      setValue('name', currentTask.name)
      setValue('category', currentTask.category)
      setValue('content', currentTask.content)
    }
  }, [currentTask, setValue])

  useEffect(() => {
    if (modalClosed) {
      reset()
    }
  }, [modalClosed, reset])

  const onSubmit = handleSubmit(() => {
    const name = getValues('name')
    const content = getValues('content')
    const category = getValues('category')

    let id: number
    if (currentTask.id === 0) {
      id = strToHash(name)
    } else {
      id = currentTask.id
    }

    const dateRegex = /\d{1,2}\/\d{1,2}\/\d{1,4}/gm
    const mDates: string = content.match(dateRegex)
    const dates = mDates ? Array.from(mDates) : []

    let created: string
    if (currentTask.created === '') {
      created = new Date().toLocaleDateString('en', { year: 'numeric', month: 'numeric', day: 'numeric' })
    } else {
      created = currentTask.created
    }

    const task: Task = {
      id,
      name,
      dates,
      content,
      category,
      created,
      archived: false
    }

    if (currentTask.id === 0) {
      addTaskAction(task)
    } else {
      editTaskAction(task)
    }
    reset()

    toggleModalAction()
  })

  const categoryNames = Array.from(new Set(tasks.map(item => item.category)))

  return (
    <form className="add-task-form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name</label><br />
        <input type="text" id="name" placeholder="Input task name"
          {...register('name', {required: 'This is required', minLength: {value: 2, message: 'Must be more than 2 characters long'}})} />
        <ErrorMessage errors={errors} name="name" as="p" style={{color: 'red'}}/>
      </div>

      <div>
        <label htmlFor="category">Category</label><br />
        <select id="category" {...register("category")}>
          {categoryNames.map(name => (
            <option value={name} key={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="content">Content</label><br />
        <input type="text" id="content" placeholder="Input your content with date"
          {...register('content', {required: 'This is required', minLength: {value: 2, message: 'Must be more than 2 characters long'}})} />
        <ErrorMessage errors={errors} name="content" as="p" style={{color: 'red'}}/>
      </div>

      <input type="submit" className="btn" value="Submit" />
    </form>
  )
}

export default TaskForm