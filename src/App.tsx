import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './css/global'
import { defaultTheme } from './css/themes/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ContextProvider } from './context/Context'

export function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ContextProvider>
  )
}
