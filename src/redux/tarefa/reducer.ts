const initialState = {
  currentTarefas: [
    {
      titulo: 'Complete online JavaScript courses',
      id: 1,
      active: true
    },
    { titulo: 'Jog around the park 3x', id: 2, active: false },
    { titulo: '10 minutes meditation', id: 3, active: false },
    { titulo: 'Road for 1 hour', id: 4, active: false },
    { titulo: 'Pick up groceries', id: 5, active: true },
    { titulo: 'Complete Todo App on Frontend Mentor', id: 6, active: false }
  ],
  allTarefas: [
    {
      titulo: 'Complete online JavaScript courses',
      id: 1,
      active: true
    },
    { titulo: 'Jog around the park 3x', id: 2, active: false },
    { titulo: '10 minutes meditation', id: 3, active: false },
    { titulo: 'Road for 1 hour', id: 4, active: false },
    { titulo: 'Pick up groceries', id: 5, active: true },
    { titulo: 'Complete Todo App on Frontend Mentor', id: 6, active: false }
  ]
}

const tarefaReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'tarefa/check':
      return {
        ...state,
        currentTarefas: state.currentTarefas.map((each) =>
          each.id === action.payload.id ? action.payload : each
        ),
        allTarefas: state.allTarefas.map((each) =>
          each.id === action.payload.id ? action.payload : each
        )
      }
    case 'tarefa/add':
      return {
        ...state,
        currentTarefas: [...state.currentTarefas, action.payload],
        allTarefas: [...state.allTarefas, action.payload]
      }
    case 'tarefa/remove':
      return {
        ...state,
        currentTarefas: state.currentTarefas.filter(
          (each) => each.id !== action.payload.id
        ),
        allTarefas: state.allTarefas.filter(
          (each) => each.id !== action.payload.id
        )
      }
    case 'tarefa/restantes':
      return {
        ...state,
        currentTarefas: state.allTarefas.filter((each) => each.active == false)
      }
    case 'tarefa/todas':
      return {
        ...state,
        currentTarefas: state.allTarefas
      }
    case 'tarefa/ativas':
      return {
        ...state,
        currentTarefas: state.allTarefas.filter((each) => each.active == true)
      }

    default:
      return { ...state }
  }
}

export default tarefaReducer
