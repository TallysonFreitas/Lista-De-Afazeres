import { useState } from 'react'
import { SButtonDelete, SButtonTarefa, STarefaItem, SListaText } from './style'
import { useDispatch } from 'react-redux'
import { tarefa } from '../../containers/Lista'

const ListaItem = (props: tarefa) => {
  const [checado, setChecado] = useState(props.active)
  const [inDiv, setInDiv] = useState(false)
  const dispatch = useDispatch()

  const handleClickChecked = () => {
    setChecado(!checado)
    dispatch({
      type: 'tarefa/check',
      payload: { titulo: props.titulo, id: props.id, active: !props.active }
    })
  }
  const mouseEnterDelete = () => {
    setInDiv(true)
  }
  const mouseLeaveDelete = () => {
    setInDiv(false)
  }
  const DeleteTask = () => {
    dispatch({
      type: 'tarefa/remove',
      payload: { titulo: props.titulo, id: props.id, active: props.active }
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
      <SListaText>{props.titulo}</SListaText>
      <SButtonDelete estado={inDiv} onClick={DeleteTask}>
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
