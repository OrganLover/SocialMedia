import axios from "axios";

let instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '38467f83-1c56-4f58-a686-98c520820e48' },
  withCredentials: true
})

export const authAPI = {
  authMe() {
    return instance.get('auth/me').then(response => response.data)
  },
  login(data) {
    return instance.post('auth/login', data).then(response => response.data)
  },
  logout() {
    return instance.delete('auth/login').then(response => response.data)
  },
  getCaptchaUrl() {
    return instance.get('/security/get-captcha-url').then(response => response.data)
  }
}

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data)
  },
  updateUserAvatar(image) {
    let formData
    if (image instanceof FormData === true) {
      formData = image
    }
    else {
      formData = new FormData()
      formData.append('image', image)
    }
    return instance.put('profile/photo', formData).then(response => response.data)
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(response => response.data)
  },
  updateUserStatus(status) {
    return instance.put('profile/status', { status }).then(response => response.data)
  },
  updateUserProfileData(data) {
    return instance.put('profile', data).then(response => response.data)
  },
  getUserFollowStatus(userId) {
    return instance.get(`follow/${userId}`).then(response => response.data)
  }
}

export const usersAPI = {
  getUsers(usersPerPage, currentNumberOfPortion) {
    return instance.get(`users?count=${usersPerPage}&page=${currentNumberOfPortion}`).then(response => response.data)
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data)
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data)
  },
}