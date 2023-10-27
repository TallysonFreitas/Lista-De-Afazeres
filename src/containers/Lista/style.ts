import styled from 'styled-components'

export const SContainerLista = styled.div`
  width: 100%;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  @keyframes SlideTop {
    from {
      transform: translateY(200px);
    }
    to {
      transform: translateY(0px);
    }
  }
  animation: SlideTop ease 0.6s;
`

export const SRodapeLista = styled.div`
  display: flex;
  padding: 12px;
  color: ${(props) => props.theme.text};
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.Elements};
  @media (max-width: 648px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    "text clear"
    "filter filter"
`

export const STextFooter = styled.p`
  color: ${(props) => props.theme.gray};
  font-size: 16px;
  @media (max-width: 648px) {
    padding: 8px;
  }
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
  @media (max-width: 648px) {
    padding: 8px;
  }
`
export const SContainerFilter = styled.div`
  max-width: 20%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 648px) {
    max-width: 100%;
    order: 2;
    margin: 0 auto;
    grid-area: filter;
    justify-content: center;
    gap: 32px;
    margin-top: 24px;
  }
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
