import { useEffect, useState } from 'react'

import { Trash } from 'phosphor-react'

import {
  CartContainer,
  DividingLine,
  FooterContainer,
  FooterContent,
  ProductButtonRemove,
  ProductCartList,
  ProductContainer,
  ProductContent,
} from './styles'

import api from '../../config/api'

interface ProductsType {
  id: number
  imageUrl: string
  name: string
  description: string
  value: number
}

export function Cart() {
  const [products, setProducts] = useState<ProductsType[]>([])

  async function getProductCart() {
    try {
      const json = await api.getProduct()
      if (json.length > 0) {
        setProducts(() => json)
      }
    } catch (e) {
      console.log('Tente novamente mais tarde!', e)
      setProducts([])
    }
  }

  useEffect(() => {
    getProductCart()
    console.log(products)
  }, [])

  return (
    <CartContainer>
      <h1>Meu carrinho</h1>
      <DividingLine />

      <ProductCartList>
        {products.map((product) => (
          <ProductContainer key={product.id}>
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
            <ProductButtonRemove>
              <Trash size={20} weight="bold" />
            </ProductButtonRemove>
          </ProductContainer>
        ))}
      </ProductCartList>

      <DividingLine />

      <FooterContainer>
        <FooterContent>
          <strong>Entrega</strong>
          <span>R$ 5,00</span>
        </FooterContent>
        <FooterContent>
          <strong>Total</strong>
          <span>R$ 12,99</span>
        </FooterContent>

        <button>Finalizar pedido</button>
      </FooterContainer>
    </CartContainer>
  )
}
