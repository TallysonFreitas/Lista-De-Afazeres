import styled from 'styled-components'

export const SSearchContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 24px;
  position: relative;
`

export const SSearchInput = styled.input`
  padding: 12px;
  width: 100%;
  background-color: ${(props) => props.theme.DarkTheme.VeryDarkDesaturatedBlue};
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
