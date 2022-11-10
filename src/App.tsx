import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './css/global'
import { defaultTheme } from './css/themes/default'
import { Cart } from './pages/Cart'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Cart />
    </ThemeProvider>
  )
}
