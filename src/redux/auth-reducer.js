import { authAPI } from '../api'
import { FORM_ERROR } from 'final-form'

const SET_AUTH_DATA = 'auth/SET-AUTH-DATA'
const SET_CAPTCHA_URL = 'auth/SET-CAPTCHA-URL'

const initialState = {
  ownerUserId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.payload
      }
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl
      }

    default: return state
  }
}

const setAuthData = (ownerUserId, email, login, isAuth) => ({ type: SET_AUTH_DATA, payload: { ownerUserId, email, login, isAuth } })
const setCaptchaUrl = (captchaUrl) => ({ type: SET_CAPTCHA_URL, captchaUrl })

export const authMe = () => async (dispatch) => {
  let response = await authAPI.authMe()

  if (response.resultCode === 0) {
    let { id, email, login } = response.data
    dispatch(setAuthData(id, email, login, true))
  }
}

export const login = (data) => async (dispatch) => {
  let response = await authAPI.login(data)

  if (response.resultCode === 0) {
    dispatch(authMe())
    dispatch(setCaptchaUrl(null))
  } else {
    if (response.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    return { [FORM_ERROR]: response.messages[0] }
  }
}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout()

  if (response.resultCode === 0) {
    dispatch(setAuthData(null, null, null, false))
  }
}

const getCaptchaUrl = () => async (dispatch) => {
  const response = await authAPI.getCaptchaUrl()
  const { url } = response
  dispatch(setCaptchaUrl(url))
}

export default authReducer