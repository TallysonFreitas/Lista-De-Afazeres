import { ThemeProvider } from 'styled-components'
import Theme from './themes'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div>
        <h1>ola mundo</h1>
      </div>
    </ThemeProvider>
  )
}

export default App
