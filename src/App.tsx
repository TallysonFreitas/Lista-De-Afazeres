import { ThemeProvider } from 'styled-components'
import { DarkTheme, LightTheme } from './themes'
import { ContainerPrincipal, EstiloGlobal } from './style'
import Titulo from './containers/Titulo'
import Search from './containers/Search'
import Lista from './containers/Lista'
import { useState } from 'react'

function App() {
  const [estaUsandoDark, setEstaUsandoDark] = useState(false)

  return (
    <ThemeProvider theme={estaUsandoDark ? DarkTheme : LightTheme}>
      <EstiloGlobal />
      <ContainerPrincipal>
        <Titulo />
        <Search />
        <Lista />
      </ContainerPrincipal>
    </ThemeProvider>
  )
}

export default App
