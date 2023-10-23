import { SContainerLista } from './style'

const SLista = () => {
  type tarefa = { titulo: 'estudar'; descricao: 'Trabalhar' }
  const Tarefas: tarefa[] = [
    { titulo: 'estudar', descricao: 'Trabalhar' },
    { titulo: 'estudar', descricao: 'Trabalhar' }
  ]

  return <SContainerLista>{}</SContainerLista>
}

export default SLista
