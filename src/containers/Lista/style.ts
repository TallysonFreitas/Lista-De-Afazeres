import styled from 'styled-components'

export const SContainerLista = styled.div`
  width: 100%;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`

export const SRodapeLista = styled.div`
  display: flex;
  padding: 12px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  align-items: center;
  justify-content: space-between;
`

export const STextFooter = styled.p`
  color: ${(props) => props.theme.gray};
  font-size: 16px;
`

export const SClearButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: ${(props) => props.theme.gray};
  &:hover {
    color: ${(props) => props.theme.text};
  }
`
