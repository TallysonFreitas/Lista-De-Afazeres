import { useState } from 'react'
import { SButton, SSearchContainer, SSearchInput } from './style'
import { useDispatch } from 'react-redux'

const Search = () => {
  const [tarefa, setTarefa] = useState('')

  const dispatch = useDispatch()

  const AddTask = () => {
    dispatch({
      type: 'tarefa/add',
      payload: {
        titulo: tarefa,
        active: false,
        id: Math.floor(Math.random() * 1000)
      }
    })
  }

  const setTarefaValue = (e: any) => {
    setTarefa(e.target.value)
  }

  return (
    <SSearchContainer>
      <SSearchInput type="text" placeholder="|" onChange={setTarefaValue} />
      {tarefa.length >= 1 && (
        <SButton type="submit" onClick={AddTask}>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
            <path
              fill="none"
              stroke="#000"
              strokeWidth="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        </SButton>
      )}
    </SSearchContainer>
  )
}

export default Search
