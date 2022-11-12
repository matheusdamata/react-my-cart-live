import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { ProductsType } from '../..'
import { Context } from '../../../../context/Context'
import {
  ButtonsContent,
  ButtonsDownAndUpContent,
  Container,
  ProductButtonRemove,
  ProductContent,
} from './styles'

type ProductsProps = {
  product: ProductsType
  onClick: () => void
}

export function Products({ product, onClick }: ProductsProps) {
  const { dispatch } = useContext(Context)

  const formatPrice = (value: number, amount: number) => value * amount

  const total = formatPrice(product.amount, product.value)

  function handleAmountProduct(type: 'remove' | 'add', id: number) {
    switch (type) {
      case 'add':
        dispatch({
          type: 'INCREMENT_PRODUCT',
          payload: {
            id,
            increment: 1,
          },
        })
        break
      case 'remove':
        dispatch({
          type: 'DECREMENT_PRODUCT',
          payload: {
            id,
            increment: -1,
          },
        })
        break
    }
  }

  function handleClick() {
    onClick()
  }

  return (
    <Container>
      <img src={product.imageUrl} alt="" />
      <ProductContent>
        <strong>{product.name}</strong>
        <ButtonsContent>
          <ButtonsDownAndUpContent>
            <button
              onClick={() => handleAmountProduct('remove', product.id)}
              disabled={product.amount <= 1}
            >
              <Minus size={20} weight="bold" />
            </button>
            {product.amount}
            <button onClick={() => handleAmountProduct('add', product.id)}>
              <Plus size={20} weight="bold" />
            </button>
          </ButtonsDownAndUpContent>
          <ProductButtonRemove onClick={handleClick}>
            <Trash size={20} weight="regular" />
            REMOVER
          </ProductButtonRemove>
        </ButtonsContent>
      </ProductContent>
      <span>
        R${' '}
        {total.toLocaleString('pt-br', {
          minimumFractionDigits: 2,
        })}
      </span>
    </Container>
  )
}
