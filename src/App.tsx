import { ThemeProvider } from 'styled-components'
import Theme from './themes'
import { ContainerPrincipal, EstiloGlobal } from './style'
import Titulo from './containers/Titulo'
import Search from './containers/Search'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <EstiloGlobal />
      <ContainerPrincipal>
        <Titulo />
        <Search />
      </ContainerPrincipal>
    </ThemeProvider>
  )
}

export default App
