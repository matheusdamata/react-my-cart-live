import { useContext } from 'react'
import { Context } from '../../context/Context'

import { Navigate } from 'react-router-dom'

export function Success() {
  const { state } = useContext(Context)

  const isCheckout = state.user.isCheckoutSuccess
  console.log(isCheckout)

  return (
    <>
      {isCheckout ? (
        <h1>Uhu! Seu pedido chegará em breve</h1>
      ) : (
        <Navigate to="/" />
      )}
    </>
  )
}
