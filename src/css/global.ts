import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    height: 100vh;

    background: ${(props) => props.theme['base-card']};
    color: ${(props) => props.theme.white};
    -webkit-font-smoothing: antialiased;
  
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }
`
