import { useContext } from 'react'
import { Context } from '../../context/Context'

import { Navigate } from 'react-router-dom'

export function Success() {
  const { user } = useContext(Context)

  const isCheckout = user.isCheckoutSuccess

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
