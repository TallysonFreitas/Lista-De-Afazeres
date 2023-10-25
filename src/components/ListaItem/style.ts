import styled from 'styled-components'

export const STarefaItem = styled.div<TypeButtonTarefa>`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.DarkTheme.VeryDarkDesaturatedBlue};
  padding: 12px;
  color: ${(props) => (props.checked ? '#aaa' : '#fff')};
  text-align: center;
  border-bottom: 1px solid #333;
  position: relative;
  cursor: pointer;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
  transition: scale ease 0.2s;

  &:hover {
    scale: 1.03;
    border-radius: 8px;
  }
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
      ? 'linear-gradient(90deg,rgba(	71, 218, 255, 1) 0%,rgba(	192, 88, 243, 1) 100%)'
      : 'transparent'};
  transition: all ease 0.5s;
  &:hover {
    border: 1px solid rgba(71, 218, 255, 1);
  }
  &:active {
    border: 1px solid white;
  }
`