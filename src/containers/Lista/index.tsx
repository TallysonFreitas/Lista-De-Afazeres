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

import { useSelector } from 'react-redux'

export type tarefa = {
  titulo: string
  id: number
  active: boolean
}

const Lista = () => {
  const { currentTarefas } = useSelector(
    (rootReducer: any) => rootReducer.tarefaReducer
  )

  const [filtroTarefas, setFiltroTarefas] = useState(currentTarefas)

  const RetiraTarefasCompletas = () => {
    setFiltroTarefas(
      currentTarefas.filter((cada: tarefa) => cada.active == false)
    )
  }

  return (
    <SContainerLista>
      {filtroTarefas.map((cada: tarefa) => (
        <ListaItem
          key={cada.id}
          active={cada.active}
          id={cada.id}
          titulo={cada.titulo}
        />
      ))}
      <SRodapeLista>
        <STextFooter>{filtroTarefas.length} items left</STextFooter>
        <SContainerFilter>
          <SFilterItem>All</SFilterItem>
          <SFilterItem>Active</SFilterItem>
          <SFilterItem>Completed</SFilterItem>
        </SContainerFilter>
        <SClearButton onClick={RetiraTarefasCompletas}>
          Clear Completed
        </SClearButton>
      </SRodapeLista>
    </SContainerLista>
  )
}

export default Lista
