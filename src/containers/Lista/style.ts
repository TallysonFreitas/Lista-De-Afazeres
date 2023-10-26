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
  color: ${(props) => props.theme.text};
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.Elements};
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
export const SContainerFilter = styled.div`
  max-width: 20%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const SFilterItem = styled.button`
  border: none;
  background: transparent;
  color: ${(props) => props.theme.gray};
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: ${(props) => props.theme.text};
  }
  &:select {
    color: ${(props) => props.theme.BrightBlue};
  }
`
