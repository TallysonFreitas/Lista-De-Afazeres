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

const Lista = () => {
  type tarefa = {
    titulo: string
    id: number
    active: boolean
  }
  const { Tarefas } = useSelector(
    (rootReducer: any) => rootReducer.tarefaReducer
  )

  const [filtroTarefas, setFiltroTarefas] = useState(Tarefas)

  const RetiraTarefasCompletas = () => {
    setFiltroTarefas(Tarefas.filter((cada: tarefa) => cada.active == false))
  }

  return (
    <SContainerLista>
      {filtroTarefas.map((cada: tarefa) => (
        <ListaItem key={cada.id} checked={cada.active}>
          {cada.titulo}
        </ListaItem>
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
