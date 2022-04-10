import { TaskState, CategoryNames } from './taskReducerTypes'

export const initialState: TaskState = {
  tasks: [
    {
      id: 1012247892,
      name: 'Shoppings list',
      created: '02.04.2021',
      category: CategoryNames.TASK,
      content: 'Tomatoes, bread 6/05/2021',
      dates: [
        '6/05/2021',
      ],
      archived: false,
    },
    {
      id: 5653396163234,
      name: 'The theory of evolution',
      created: '12/5/2021',
      category: CategoryNames.RANDOM_TOUGHT,
      content: 'The evolution of Darwin is...',
      dates: [],
      archived: false,
    },
    {
      id: 565339616,
      name: 'New feature',
      created: '13/5/2021',
      category: CategoryNames.IDEA,
      content: 'Implement new feature on the webportal 8/6/2021 and 16/6/2021',
      dates: [
        '8/6/2021',
        '16/6/2021',
      ],
      archived: false,
    },
    {
      id: 428162286,
      name: 'Books',
      created: '18/5/2021',
      category: CategoryNames.TASK,
      content: 'The learn startup 23/6/2021',
      dates: [
        '23/6/2021',
      ],
      archived: false,
    },
    {
      id: 2092076449,
      name: 'My story',
      created: '26/6/2021',
      category: CategoryNames.RANDOM_TOUGHT,
      content: 'My story is very long 2/7/2021',
      dates: [
        '2/7/2021',
      ],
      archived: false,
    },
    {
      id: 702693269,
      name: 'Go to picnic',
      created: '18/6/2021',
      category: CategoryNames.IDEA,
      content: 'Go to picnic on Saturday 23/6/2021',
      dates: [
        '23/6/2021',
      ],
      archived: false,
    },
    {
      id: 12804284,
      name: 'Check weather',
      created: '18/6/2021',
      category: CategoryNames.TASK,
      content: 'Check weather on Friday 20/6/2021',
      dates: [
        '20/6/2021',
      ],
      archived: false,
    },
  ],
  modalClosed: true,
  currentTask: {
    id: 0,
    name: '',
    created: '',
    category: CategoryNames.TASK,
    content: '',
    dates: [],
    archived: false,
  },
}