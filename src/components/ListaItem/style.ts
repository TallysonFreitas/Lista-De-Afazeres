import styled from 'styled-components'

export const STarefaItem = styled.div<TypeButtonTarefa>`
  width: 100%;
  background-color: ${(props) => props.theme.Elements};
  padding: 16px;
  color: ${(props) => (props.checked ? '#aaa' : props.theme.text)};
  text-align: center;
  border-bottom: 1px solid #ddd;
  position: relative;
  cursor: pointer;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
  transition: scale ease 0.2s;
  transition: height ease 2s;

  &:hover {
    scale: 1.005;
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

type TButtonDelete = {
  estado: boolean
}

export const SButtonDelete = styled.div<TButtonDelete>`
  position: absolute;
  right: 8px;
  width: 24px;
  height: 24px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  padding-top: 2px;
  border-radius: 50%;
  background: transparent;
  transition: all ease 0.5s;
  display: ${(props) => (props.estado ? 'flex' : 'none')};
`

export const SListaText = styled.p`
  max-width: 90%;
  margin: 0 auto;
`
