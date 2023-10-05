import { ThemeProvider } from 'styled-components'
import Theme from './themes'
import { ContainerPrincipal, EstiloGlobal } from './style'
import Titulo from './containers/Titulo'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <EstiloGlobal />
      <ContainerPrincipal>
        <Titulo />
      </ContainerPrincipal>
    </ThemeProvider>
  )
}

export default App
