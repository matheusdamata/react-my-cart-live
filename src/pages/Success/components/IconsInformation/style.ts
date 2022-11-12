import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  gap: 1rem;

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
