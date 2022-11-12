import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './css/global'
import { defaultTheme } from './css/themes/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ContextProvider } from './context/Context'

import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function App() {
  return (
    <ContextProvider>
      <SkeletonTheme>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </SkeletonTheme>
    </ContextProvider>
  )
}
