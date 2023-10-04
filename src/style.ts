import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-family:Josefin Sans;
  list-style:none;
}
`

export const ContainerPrincipal = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 375px) {
    width: 100%;
  }
`
