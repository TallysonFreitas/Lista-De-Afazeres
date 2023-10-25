import styled, { createGlobalStyle } from 'styled-components'
import img from './bg-desktop-dark.jpg'

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
  background-color: ${(props) => props.theme.background};
  position:relative;
  &::before{
    content:'';
    width:100vw;
    height:40vh;
    background-image:url(${img});
    background-size:cover;
    background-repeat:no-repeat;
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
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
