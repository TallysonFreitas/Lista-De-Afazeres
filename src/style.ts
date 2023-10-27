import styled, { createGlobalStyle } from 'styled-components'
import imgDark from './images/bg-desktop-dark.jpg'
import imgLight from './images/bg-desktop-light.jpg'
import imgDarkCell from './images/bg-mobile-dark.jpg'
import imgLightCell from './images/bg-mobile-light.jpg'

type ThemeType = {
  tema: boolean
}

export const EstiloGlobal = createGlobalStyle<ThemeType>`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-family:Josefin Sans;
  list-style:none;
  font-size:18px;
}
body{
  background-color: ${(props) => props.theme.background};
  position:relative;
  &::before{
    content:'';
    width:100vw;
    height:40vh;
  background-image:${(props) =>
    props.tema == true ? `url(${imgDark})` : `url(${imgLight})`};
    background-size:cover;
    background-repeat:no-repeat;
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
  }
  @media(max-width:648px){
    background-image:${(props) =>
      props.tema == true ? `url(${imgDarkCell})` : `url(${imgLightCell})`};
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
  max-width: 648px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  @media (max-width: 648px) {
    padding: 16px;
    align-items: center;
    width: 100vw;
  }
`
