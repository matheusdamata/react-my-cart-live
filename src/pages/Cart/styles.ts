import styled from 'styled-components'

export const CartContainer = styled.main`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme['base-title']};

  border-radius: 6px;

  h1 {
    font-size: 1.5rem;
    padding: 1rem;

    color: ${(props) => props.theme['base-title']};
  }
`

export const DividingLine = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme['gray-300']};
`

export const ProductCartList = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-height: 20.5rem;

  overflow-y: auto;
`

export const ProductContainer = styled.div`
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

export const CartEmptyContainer = styled.div`
  height: 240px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 400;
    color: ${(props) => props.theme.purple};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;

  margin: 1rem 0;
  padding: 0 1rem;
  gap: 0.5rem;

  button {
    border: 0;
    border-radius: 6px;

    background: ${(props) => props.theme.purple};

    margin-top: 1rem;
    padding: 0.75rem 0;

    color: ${(props) => props.theme.white};

    cursor: pointer;

    &:hover {
      transition: background-color 0.2s;
      background: ${(props) => props.theme['purple-dark']};
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
`
export const FreeDeliveryContainer = styled.div`
  margin-top: 1rem;
  padding: 0.5rem;
  text-align: center;

  border-radius: 25px;
  background: ${(props) => props.theme['base-delivery']};

  font-weight: 400;
  color: ${(props) => props.theme['base-delivery-text']};
`

export const ButtonRealodCart = styled.button`
  background: transparent;
  border: 0;

  font-size: 0.75rem;
  color: ${(props) => props.theme['gray-500']};

  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    transition: color 0.2s;
    color: ${(props) => props.theme.purple};
  }
`
