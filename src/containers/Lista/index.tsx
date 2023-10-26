import { useState } from 'react'
import ListaItem from '../../components/ListaItem'
import {
  SClearButton,
  SContainerFilter,
  SContainerLista,
  SFilterItem,
  SRodapeLista,
  STextFooter
} from './style'

import { useDispatch, useSelector } from 'react-redux'

export type tarefa = {
  titulo: string
  id: number
  active: boolean
}

const Lista = () => {
  const { currentTarefas } = useSelector(
    (rootReducer: any) => rootReducer.tarefaReducer
  )
  const dispatch = useDispatch()

  const RetiraTarefasCompletas = () => {
    dispatch({ type: 'tarefa/restantes' })
  }

  const MostraTodasTarefas = () => {
    dispatch({ type: 'tarefa/todas' })
  }

  const MostraTarefasAtivas = () => {
    dispatch({ type: 'tarefa/ativas' })
  }

  return (
    <SContainerLista>
      {currentTarefas.map((cada: tarefa) => (
        <ListaItem
          key={cada.id}
          active={cada.active}
          id={cada.id}
          titulo={cada.titulo}
        />
      ))}
      <SRodapeLista>
        <STextFooter>{currentTarefas.length} items left</STextFooter>
        <SContainerFilter>
          <SFilterItem onClick={MostraTodasTarefas}>All</SFilterItem>
          <SFilterItem onClick={RetiraTarefasCompletas}>Active</SFilterItem>
          <SFilterItem onClick={MostraTarefasAtivas}>Completed</SFilterItem>
        </SContainerFilter>
        <SClearButton onClick={RetiraTarefasCompletas}>
          Clear Completed
        </SClearButton>
      </SRodapeLista>
    </SContainerLista>
  )
}

export default Lista
