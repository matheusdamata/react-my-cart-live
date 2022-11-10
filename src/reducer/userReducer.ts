import produce from 'immer'

export type UserType = {
  isCheckoutSuccess: boolean
}

export const userInitialState: UserType = {
  isCheckoutSuccess: false,
}

export const userReducer = (state: UserType, action: any) => {
  console.log(action)
  if (action.type === 'CHECKOUT_SUCCESS') {
    return produce(state, (draft) => {
      draft.isCheckoutSuccess = action.payload.user.isCheckoutSuccess
    })
  }
  return state
}
