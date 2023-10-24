import { useState } from 'react'
import { SButtonTarefa, STarefaItem } from './style'

const ListaItem = ({
  checked,
  children
}: {
  checked: boolean
  children: string
}) => {
  const [checado, setChecado] = useState(checked)

  const handleClickChecked = () => {
    setChecado(!checado)
  }

  return (
    <>
      <STarefaItem checked={checado} onClick={handleClickChecked}>
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
        {children}
      </STarefaItem>
    </>
  )
}

export default ListaItem
