import { useState } from 'react'
import ListaItem from '../../components/ListaItem'
import {
  SClearButton,
  SContainerLista,
  SRodapeLista,
  STextFooter
} from './style'

const Lista = () => {
  type tarefa = {
    titulo: string
    id: number
    active: boolean
  }
  const Tarefas: tarefa[] = [
    {
      titulo: 'Complete online JavaScript courses',
      id: 1,
      active: true
    },
    { titulo: 'Jog around the park 3x', id: 2, active: false },
    { titulo: '10 minutes meditation', id: 3, active: false },
    { titulo: 'Road for 1 hour', id: 4, active: false },
    { titulo: 'Pick up groceries', id: 5, active: false },
    { titulo: 'Complete Todo App on Frontend Mentor', id: 6, active: false }
  ]

  const [filtroTarefas, setFiltroTarefas] = useState(Tarefas)

  const RetiraTarefasCompletas = () => {
    setFiltroTarefas(filtroTarefas.filter((cada) => cada.active == false))
  }

  return (
    <SContainerLista>
      {filtroTarefas.map((cada) => (
        <ListaItem key={cada.id} checked={cada.active}>
          {cada.titulo}
        </ListaItem>
      ))}
      <SRodapeLista>
        <STextFooter>{filtroTarefas.length} items left</STextFooter>
        <SClearButton onClick={RetiraTarefasCompletas}>
          Clear Completed
        </SClearButton>
      </SRodapeLista>
    </SContainerLista>
  )
}

export default Lista
