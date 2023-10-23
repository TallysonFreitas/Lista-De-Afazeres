import styled from 'styled-components'

export const SSearchContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 24px;
`

export const SSearchInput = styled.input`
  padding: 12px;
  width: 100%;
  background-color: ${(props) => props.theme.DarkTheme.VeryDarkGrayishBlue};
  border-radius: 8px;
  border: none;
  outline: none;
  position: relative;
  &::before {
    content: '0';
    position: absolute;
    left: 0;
    top: 0;
  }
`

export const SButton = styled.button`
  padding: 12px;
  border-radius: 50%;
  background-color: 'hsl(234, 39%, 85%)';
  border: none;
  width: 44px;
  color: #000;
`
