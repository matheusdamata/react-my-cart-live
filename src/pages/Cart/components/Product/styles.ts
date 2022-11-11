import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  margin: 1rem 0;
  padding: 0 1rem;

  img {
    width: 64px;
    height: 64px;
  }
`
export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-left: 1rem;

  strong {
    font-size: 1.125rem;
  }

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-500']};
  }
`

export const ButtonsContent = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.5rem;

  margin-top: 0.75rem;
`

export const ButtonsDownAndUpContent = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  background: ${(props) => props.theme['base-button']};
  padding: 0 0.5rem;
  margin-right: 0.5rem;
  border-radius: 8px;

  button {
    display: flex;
    align-items: center;

    border: 0;
    background: transparent;
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`

export const ProductButtonRemove = styled.button`
  width: auto;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  cursor: pointer;

  padding: 0 0.5rem;

  font-size: 0.75rem;

  &:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme['base-hover']};
  }

  svg {
    color: ${(props) => props.theme.purple};
    margin-right: 0.5rem;
  }
`
