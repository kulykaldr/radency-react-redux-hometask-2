import React from 'react'
import { useTypedSelector } from './hooks/useTypedSelector'
import Container from './components/Container'
import Table from './components/Table'
import AddButton from './components/AddButton'
import Modal from './components/Modal'

const App: React.FC = () => {
  const { tasks } = useTypedSelector(state => state.task)

  const activeTasks = tasks.filter(item => item.archived === false)
  const archivedTasks = tasks.filter(item => item.archived === true)

  return (
    <>
      <Container>
        <h2>Task table</h2>
        <Table tasks={activeTasks} />
        <AddButton />

        <h2>Archive table</h2>
        <Table tasks={archivedTasks} />

        <h2>Categories table</h2>
        <Table tasks={tasks} isSummary={true} />
      </Container>
      <Modal />
    </>
  )
}

export default App
