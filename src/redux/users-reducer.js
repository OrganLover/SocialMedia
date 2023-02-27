import { usersAPI } from "../api"
import { getUserFollowStatus } from './profile-reducer'

const SET_USERS = 'users/SET-USERS'
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE'

const initialState = {
  usersPerPage: 5,
  currentNumberOfPortion: 1,
  totalUsersCount: 0,
  users: null
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        totalUsersCount: action.data.totalCount,
        users: action.data.items
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentNumberOfPortion: action.currentNumberOfPortion
      }

    default: return state
  }
}

const setUsers = (data) => ({ type: SET_USERS, data })
export const setCurrentPage = (currentNumberOfPortion) => ({ type: SET_CURRENT_PAGE, currentNumberOfPortion })

export const getUsers = () => async (dispatch, getState) => {
  const usersPerPage = getState().usersPage.usersPerPage
  const currentNumberOfPortion = getState().usersPage.currentNumberOfPortion
  const response = await usersAPI.getUsers(usersPerPage, currentNumberOfPortion)

  if (!response.error) {
    dispatch(setUsers(response))
  }
}

export const followUser = (userId) => async (dispatch) => {
  const response = await usersAPI.followUser(userId)

  if (response.resultCode === 0) {
    dispatch(getUsers())
    dispatch(getUserFollowStatus(userId))
  }
}

export const unfollowUser = (userId) => async (dispatch) => {
  const response = await usersAPI.unfollowUser(userId)

  if (response.resultCode === 0) {
    dispatch(getUsers())
    dispatch(getUserFollowStatus(userId))
  }
}

export default usersReducer