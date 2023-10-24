import ListaItem from '../../components/ListaItem'
import { SContainerLista } from './style'

const Lista = () => {
  type tarefa = {
    titulo: string
    id: number
    check: boolean
  }
  const Tarefas: tarefa[] = [
    {
      titulo: 'Complete online JavaScript courses',
      id: 1,
      check: true
    },
    { titulo: 'Jog around the park 3x', id: 2, check: false },
    { titulo: '10 minutes meditation', id: 3, check: false },
    { titulo: 'Road for 1 hour', id: 4, check: false },
    { titulo: 'Pick up groceries', id: 5, check: false },
    { titulo: 'Complete Todo App on Frontend Mentor', id: 6, check: false }
  ]

  return (
    <SContainerLista>
      {Tarefas.map((cada) => (
        <ListaItem key={cada.id} checked={cada.check}>
          {cada.titulo}
        </ListaItem>
      ))}
    </SContainerLista>
  )
}

export default Lista
