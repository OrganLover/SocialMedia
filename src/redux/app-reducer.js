import { authMe } from "./auth-reducer"

const SET_INITIALIZE_APP = 'app/SET-INITIALIZE-APP'

const initialState = {
  isInitialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZE_APP:
      return {
        ...state,
        isInitialized: true
      }

    default: return state
  }
}

const setInitializeApp = () => ({ type: SET_INITIALIZE_APP })

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(authMe())

  promise.then(() => {
    dispatch(setInitializeApp())
  })
}

export default appReducer