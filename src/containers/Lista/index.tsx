import ListaItem from '../../components/ListaItem'
import { SContainerLista } from './style'

const Lista = () => {
  type tarefa = {
    titulo: string
    descricao: string
    id: number
    check: boolean
  }
  const Tarefas: tarefa[] = [
    { titulo: 'estudar', descricao: 'Trabalhar', id: 1, check: true },
    { titulo: 'almocar', descricao: 'Trabalhar', id: 2, check: false }
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
