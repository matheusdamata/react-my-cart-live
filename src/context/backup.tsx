import React, { createContext, useReducer } from 'react'

import { userInitialState, userReducer, UserType } from '../reducer/userReducer'

type initialStateType = {
  user: UserType
}

type ContextType = {
  state: initialStateType
  dispatch: React.Dispatch<any>
}

interface ContextProviderType {
  children: React.ReactNode
}

const initialState = {
  user: userInitialState,
}

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
})

const mainReducer = (state: initialStateType, action: any) => ({
  user: userReducer(state.user, action),
})

export const ContextProvider = ({ children }: ContextProviderType) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
