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

export const ProductButtonRemove = styled.button`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['red-remove']};
  cursor: pointer;

  &:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme['red-hover']};
  }

  svg {
    color: ${(props) => props.theme.white};
  }
`
