import React, { createContext, ReactNode, useReducer } from 'react'
import { ProductsType } from '../pages/Cart'

import { UserProps, userReducer } from '../reducer/userReducer'

type ContextType = {
  carts: ProductsType[]
  user: UserProps
  dispatch: React.Dispatch<any>
}

interface ContextProviderType {
  children: ReactNode
}

export const Context = createContext({} as ContextType)

export const ContextProvider = ({ children }: ContextProviderType) => {
  const [userState, dispatch] = useReducer(userReducer, {
    carts: [],
    user: {
      isCheckoutSuccess: false,
    },
  })

  const { carts, user } = userState

  return (
    <Context.Provider value={{ carts, user, dispatch }}>
      {children}
    </Context.Provider>
  )
}
