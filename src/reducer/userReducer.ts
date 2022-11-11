import produce from 'immer'

export type CartProps = {
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
  carts: CartProps[]
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
        draft.carts.push(...action.payload)
      })
    case 'INCREMENT_PRODUCT': {
      const currentProductIndex = state.carts.findIndex((cart) => {
        return cart.id === action.payload.id
      })

      console.log(currentProductIndex)

      return state
      // return produce(state, (draft) => {
      //   draft.carts[currentProductIndex].amount += action.payload.increment
      // })
    }
    // case 'DECREMENT_PRODUCT': {
    //   break
    // }
    default:
      return state
  }
}
