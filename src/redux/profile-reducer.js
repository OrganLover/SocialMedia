import { profileAPI } from '../api'

const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_USER_AVATAR = 'profile/SET-USER-AVATAR'
const SET_USER_STATUS = 'profile/SET-USER-STATUS'
const SET_USER_FOLLOW_STATUS = 'profile/SET-USER-FOLLOW-STATUS'
const SET_POST_LIKE = 'profile/SET-POST-LIKE'

let initialState = {
  PostsData: [
    { id: 1, likes: 7, comments: 2, message: 'Yo, this is my first post!' },
    { id: 2, likes: 2, comments: 0, message: 'Yo, how are you homies?!' },
    { id: 3, likes: 0, comments: 0, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae illum, minima voluptatibus explicabo ad rem similique quos obcaecati ea impedit mollitia aliquam soluta, magni, voluptates nisi quo dolorem laborum.' }
  ],
  userLikedPostsIds: [3],
  profile: null,
  status: '',
  isFollowed: null,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_USER_AVATAR:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos }
      }
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      }
    case SET_USER_FOLLOW_STATUS:
      return {
        ...state,
        isFollowed: action.isFollowed
      }
    case SET_POST_LIKE:
      return {
        ...state,
        PostsData: [...state.PostsData.map(post => {
          if (post.id === action.postId) {
            if (state.userLikedPostsIds.some(item => item === action.postId)) {
              debugger
              return { ...post, likes: post.likes - 1 }
            }
            else {
              debugger
              return { ...post, likes: post.likes + 1 }
            }
          }
          return post
        })],
        userLikedPostsIds: [state.userLikedPostsIds.map(item => {
          if (item === action.postId) {
            debugger
            return
          }
          else {
            debugger
            return item
          }
        })]
      }

    default: return state
  }
}

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setUserAvatar = (photos) => ({ type: SET_USER_AVATAR, photos })
const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
const setUserFollowStatus = (isFollowed) => ({ type: SET_USER_FOLLOW_STATUS, isFollowed })
export const setPostLike = (postId) => ({ type: SET_POST_LIKE, postId })

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getUserProfile(userId)
  if (response) {
    dispatch(setUserProfile(response))
  }
}

export const updateUserAvatar = (image) => async (dispatch) => {
  const response = await profileAPI.updateUserAvatar(image)
  if (response.resultCode === 0) {
    dispatch(setUserAvatar(response.data))
  }
}

export const getUserStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getUserStatus(userId)
  if (response) {
    dispatch(setUserStatus(response))
  }
}

export const updateUserStatus = (status) => async (dispatch, getState) => {
  const userId = getState().auth.ownerUserId
  const response = await profileAPI.updateUserStatus(status)
  if (response.resultCode === 0) {
    dispatch(getUserStatus(userId))
  }
}

export const updateUserProfileData = (data) => async (dispatch, getState) => {
  const userId = getState().auth.ownerUserId
  const response = await profileAPI.updateUserProfileData({ ...data, userId })
  if (response.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    return response.messages[0]
  }
}

export const getUserFollowStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getUserFollowStatus(userId)
  dispatch(setUserFollowStatus(response))
}

export default profileReducer