import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-family:Josefin Sans;
  list-style:none;
  font-size:18px;
  color:white;
}
body{
  background-color: ${(props) => props.theme.DarkTheme.VeryDarkBlue};
  position:relative;
  &::before{
    content:'';
    width:100vw;
    height:100vh;
    background-image:url("../src/bg-desktop-dark.jpg");
    background-size:cover;
    background-repeat:no-repeat;
    position:absolute;
    top:0;
    left:0;
  }
}
`

export const ContainerPrincipal = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  @media (max-width: 375px) {
    width: 100%;
  }
`
