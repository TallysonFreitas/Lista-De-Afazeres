import styled from 'styled-components'

export const SSearchContainer = styled.div`
  @keyframes SlideTop {
    from {
      transform: translateY(200px);
    }
    to {
      transform: translateY(0px);
    }
  }
  width: 100%;
  display: flex;
  margin-bottom: 24px;
  position: relative;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  animation: SlideTop ease 0.5s;
`

export const SSearchInput = styled.input`
  padding: 12px;
  width: 100%;
  background-color: ${(props) => props.theme.Elements};
  border: none;
  outline: none;
  position: relative;
  border-radius: 8px;
  color: ${(props) => props.theme.text};
  &::before {
    content: '0';
    position: absolute;
    left: 0;
    top: 0;
  }
`

export const SButton = styled.button`
  border-radius: 50%;
  background-color: 'transparent';
  border: none;
  width: 24px;
  cursor: pointer;
  position: absolute;
  margin: auto 0;
  right: 8px;
  top: 0;
  bottom: 0;
  height: 24px;
`
