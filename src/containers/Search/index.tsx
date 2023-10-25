import { useState } from 'react'
import { SButton, SSearchContainer, SSearchInput } from './style'

const Search = () => {
  const [tarefa, setTarefa] = useState('')

  const setTarefaValue = (e: any) => {
    setTarefa(e.target.value)
  }

  return (
    <SSearchContainer>
      <SSearchInput type="text" placeholder="|" onChange={setTarefaValue} />
      {tarefa.length >= 1 && (
        <SButton type="submit">
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
