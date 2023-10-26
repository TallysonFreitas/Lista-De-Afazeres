const initialState = {
  current: [
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
  if (action.type == 'tarefa/check') {
    return {
      ...state,
      current: state.current.map((each) =>
        each.id === action.payload.id ? action.payload : each
      )
    }
  }
  if (action.type == 'tarefa/add') {
    return {
      ...state,
      current: [...state.current, action.payload]
    }
  }
  if (action.type == 'tarefa/remove') {
    return {
      ...state,
      current: [
        { titulo: 'Road for 1 hour', id: 4, active: false },
        { titulo: 'Pick up groceries', id: 5, active: true },
        { titulo: 'Complete Todo App on Frontend Mentor', id: 6, active: false }
      ]
    }
  }
  return state
}

export default tarefaReducer
