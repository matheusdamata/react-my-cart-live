import { useEffect, useState } from 'react'

import { Trash, ShoppingCart } from 'phosphor-react'

import {
  ButtonRealodCart,
  CartContainer,
  CartEmptyContainer,
  DividingLine,
  FooterContainer,
  FooterContent,
  FreeDeliveryContainer,
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

  const delivery = 5
  const freeDeliveryValue = 40

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

  function handleRemoveItemCart(name: string) {
    const updateCartProducts = products.filter(
      (product) => product.name !== name,
    )

    setProducts(() => updateCartProducts)
  }

  function handleSubmitCart() {
    setProducts([])
  }

  function handleReloadCart() {
    getProductCart()
  }

  // const formatPrice = (value: number, amount: number) => value * amount

  const cartFormatted = products.map((product) => ({
    ...product,
    subTotal: product.value,
  }))

  const subTotal = cartFormatted.reduce((sumTotal, product) => {
    return sumTotal + product.subTotal
  }, 0)

  const total = subTotal + delivery

  return (
    <CartContainer>
      <h1>Meu carrinho ({products.length})</h1>
      <DividingLine />

      {products.length > 0 ? (
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
              <ProductButtonRemove
                onClick={() => handleRemoveItemCart(product.name)}
              >
                <Trash size={20} weight="bold" />
              </ProductButtonRemove>
            </ProductContainer>
          ))}
        </ProductCartList>
      ) : (
        <CartEmptyContainer>
          <ShoppingCart size={32} weight="fill" />
          <h1>Carrinho vazio</h1>
        </CartEmptyContainer>
      )}

      <DividingLine />

      <FooterContainer>
        <FooterContent>
          <strong>Entrega</strong>
          <span>R$ 5,00</span>
        </FooterContent>
        <FooterContent>
          <strong>Total</strong>
          <span>
            R${' '}
            {total.toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
          </span>
        </FooterContent>

        {total > freeDeliveryValue ? (
          <FreeDeliveryContainer>
            <span>Parabéns, sua compra tem frete grátis!</span>
          </FreeDeliveryContainer>
        ) : null}

        <button onClick={handleSubmitCart} disabled={products.length === 0}>
          Finalizar pedido
        </button>
      </FooterContainer>

      <ButtonRealodCart onClick={handleReloadCart}>Reload</ButtonRealodCart>
    </CartContainer>
  )
}
