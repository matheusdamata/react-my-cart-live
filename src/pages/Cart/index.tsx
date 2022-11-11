import { useContext, useEffect, useState } from 'react'

import { ShoppingCart } from 'phosphor-react'

import {
  ButtonRealodCart,
  CartContainer,
  CartEmptyContainer,
  DividingLine,
  FooterContainer,
  FooterContent,
  FreeDeliveryContainer,
  ProductCartList,
} from './styles'

import api from '../../config/api'

import { Navigate } from 'react-router-dom'
import { Context } from '../../context/Context'
import { Products } from './components/Product'

export type ProductsType = {
  id: number
  imageUrl: string
  name: string
  description: string
  value: number
  amount: number
}

export function Cart() {
  const [products, setProducts] = useState<ProductsType[]>([])
  const [isSuccess, setIsSuccess] = useState(false)

  const delivery = 5
  const freeDeliveryValue = 40

  const { state, dispatch } = useContext(Context)

  console.log(state.user)

  async function getProductCart() {
    try {
      const json = await api.getProduct()
      console.log(json)
      if (json.length > 0) {
        setProducts(() => json)

        dispatch({
          type: 'ADD_CART',
          payload: json,
        })
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
    dispatch({
      type: 'CHECKOUT_SUCCESS',
      payload: {
        user: {
          isCheckoutSuccess: true,
        },
      },
    })

    setProducts([])
    setIsSuccess(true)
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
            <Products
              key={product.id}
              product={product}
              onClick={() => handleRemoveItemCart(product.name)}
            />
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

      {isSuccess ? <Navigate to="/success"></Navigate> : null}
    </CartContainer>
  )
}
