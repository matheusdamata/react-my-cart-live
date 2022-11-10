import { Trash } from 'phosphor-react'
import { ProductsType } from '../..'
import { Container, ProductButtonRemove, ProductContent } from './styles'

type ProductsProps = {
  product: ProductsType
  onClick: () => void
}

export function Products({ product, onClick }: ProductsProps) {
  function handleClick() {
    onClick()
  }

  return (
    <Container>
      <img src={product.imageUrl} alt="" />
      <ProductContent>
        <strong>{product.name}</strong>
        <span>
          R${' '}
          {product.value.toLocaleString('pt-br', {
            minimumFractionDigits: 2,
          })}
        </span>
      </ProductContent>
      <ProductButtonRemove onClick={handleClick}>
        <Trash size={20} weight="bold" />
      </ProductButtonRemove>
    </Container>
  )
}
