import { ThemeProvider } from 'styled-components'
import Theme from './themes'
import { ContainerPrincipal, EstiloGlobal } from './style'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <EstiloGlobal />
      <ContainerPrincipal />
    </ThemeProvider>
  )
}

export default App
