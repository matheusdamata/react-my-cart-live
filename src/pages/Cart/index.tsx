import { useCallback, useContext, useState } from 'react'

import { ShoppingCart } from 'phosphor-react'

import {
  ButtonRealodCart,
  CartContainer,
  CartEmptyContainer,
  DividingLine,
  FooterContainer,
  FooterContent,
  FooterContentSpan,
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
  const [isSuccess, setIsSuccess] = useState(false)

  const delivery = 5
  const freeDeliveryValue = 40

  const { carts, dispatch } = useContext(Context)

  console.log(carts)

  const getProductCart = useCallback(async () => {
    try {
      const json = await api.getProduct()
      console.log(json)
      if (json.length > 0) {
        dispatch({
          type: 'ADD_CART',
          payload: json,
        })
      }
    } catch (e) {
      console.log('Tente novamente mais tarde!', e)
    }
  }, [dispatch])

  function handleRemoveItemCart(id: number) {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    })
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

    setIsSuccess(true)
  }

  function handleReloadCart() {
    getProductCart()
  }

  const formatPrice = (value: number, amount: number) => value * amount

  const cartFormatted = carts.map((product) => ({
    ...product,
    subTotal: formatPrice(product.amount, product.value),
  }))

  const subTotal = cartFormatted.reduce((sumTotal, product) => {
    return sumTotal + product.subTotal
  }, 0)

  const total = subTotal >= freeDeliveryValue ? subTotal : subTotal + delivery
  const isFreeDelivery = total > freeDeliveryValue

  return (
    <CartContainer>
      <h1>Meu carrinho ({carts.length})</h1>
      <DividingLine />

      {carts.length > 0 ? (
        <ProductCartList>
          {carts.map((product) => (
            <Products
              key={product.id}
              product={product}
              onClick={() => handleRemoveItemCart(product.id)}
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
          {isFreeDelivery ? (
            <FooterContentSpan variant="free">Frete Grátis</FooterContentSpan>
          ) : (
            <FooterContentSpan>R$ 5,00</FooterContentSpan>
          )}
        </FooterContent>
        <FooterContent>
          <strong>Total</strong>
          {carts.length > 0 ? (
            <span>
              R${' '}
              {total.toLocaleString('pt-br', {
                minimumFractionDigits: 2,
              })}
            </span>
          ) : (
            <span>R$ 0,00</span>
          )}
        </FooterContent>

        {total > freeDeliveryValue ? (
          <FreeDeliveryContainer>
            <span>Parabéns, sua compra tem frete grátis!</span>
          </FreeDeliveryContainer>
        ) : null}

        <button onClick={handleSubmitCart} disabled={carts.length === 0}>
          Finalizar pedido
        </button>
      </FooterContainer>

      <ButtonRealodCart onClick={handleReloadCart}>
        Carregar Carrinho
      </ButtonRealodCart>

      {isSuccess ? <Navigate to="/success"></Navigate> : null}
    </CartContainer>
  )
}
