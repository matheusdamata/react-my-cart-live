import produce from 'immer'

export type ProductsType = {
  id: number
  imageUrl: string
  name: string
  description: string
  value: number
  amount: number
}

export type UserProps = {
  isCheckoutSuccess: boolean
}

export type UserType = {
  carts: ProductsType[]
  user: UserProps
}

export const userReducer = (state: UserType, action: any) => {
  switch (action.type) {
    case 'CHECKOUT_SUCCESS':
      return produce(state, (draft) => {
        draft.user.isCheckoutSuccess = action.payload.user.isCheckoutSuccess
      })
    case 'ADD_CART':
      return produce(state, (draft) => {
        draft.carts.push(action.payload)
      })
    case 'INCREMENT_PRODUCT':
      break
    case 'DECREMENT_PRODUCT':
      break
    default:
      return state
  }
}
