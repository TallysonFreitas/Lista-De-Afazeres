import styled from 'styled-components'

export const STarefaItem = styled.div`
  width: 100%;
  height: 32px;
  background-color: ${(props) => props.theme.DarkTheme.VeryDarkGrayishBlue};
  padding: 8px;
  color: #fff;
  text-align: center;
  margin-bottom: 8px;
  border-radius: 8px;
  position: relative;
`

type TypeButtonTarefa = {
  checked: boolean
}

export const SButtonTarefa = styled.div<TypeButtonTarefa>`
  position: absolute;
  left: 8px;
  width: 24px;
  height: 24px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  padding-top: 2px;
  border: 1px solid gray;
  border-radius: 50%;
  background: ${(props) =>
    props.checked
      ? 'linear-gradient(90deg,rgba(2, 0, 36, 1) 0%,rgba(9, 9, 121, 1) 35%,rgba(0, 212, 255, 1) 100%)'
      : 'transparent'};
`
