import { useState } from 'react'
import { SButtonDelete, SButtonTarefa, STarefaItem } from './style'
import { tarefa } from '../../containers/Lista'
import { useDispatch } from 'react-redux'

const ListaItem = (props: tarefa) => {
  const dispatch = useDispatch()

  const [checado, setChecado] = useState(props.active)
  const [inDiv, setInDiv] = useState(false)

  const handleClickChecked = () => {
    setChecado(!checado)
  }
  const mouseEnterDelete = () => {
    setInDiv(true)
    deleteTask()
  }
  const mouseLeaveDelete = () => {
    setInDiv(false)
  }

  const deleteTask = () => {
    dispatch({
      type: 'tarefa/remove'
    })
  }

  return (
    <STarefaItem
      checked={checado}
      onMouseEnter={mouseEnterDelete}
      onMouseLeave={mouseLeaveDelete}
    >
      <SButtonTarefa checked={checado} onClick={handleClickChecked}>
        {checado && (
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        )}
      </SButtonTarefa>
      {props.titulo}
      <SButtonDelete estado={inDiv} onClick={deleteTask}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </SButtonDelete>
    </STarefaItem>
  )
}

export default ListaItem
