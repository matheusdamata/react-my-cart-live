import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme['base-title']};

  border-radius: 6px;
  padding: 2rem 2rem 0 2rem;

  header {
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-size: 0.875rem;
  }
`

export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  margin-bottom: 2rem;

  strong {
    color: ${(props) => props.theme['base-text']};
  }
`

export const IconsContent = styled.div`
  display: flex;
  flex-direction: row;
`

type IconType = 'purple' | 'yellow' | 'yellowDark'

interface IconProps {
  variant: IconType
}

const backgroundVariants = {
  purple: '#8047F8',
  yellow: '#DBAC2C',
  yellowDark: '#C47F17',
}

export const IconItem = styled.div<IconProps>`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  margin-right: 0.5rem;

  ${(props) => {
    return css`
      background-color: ${backgroundVariants[props.variant]};
    `
  }}

  svg {
    color: ${(props) => props.theme.white};
  }
`
