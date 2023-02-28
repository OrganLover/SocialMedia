import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
  getUserProfile,
  updateUserAvatar,
  setPostLike,
} from '../../redux/profile-reducer'
import Preloader from '../common/Preloader'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfilePosts from './Posts/ProfilePosts'

const ProfileContainer = ({
  profile,
  posts,
  getUserProfile,
  updateUserAvatar,
  ownerUserId,
  setPostLike,
  getUserStatus,
  ...props
}) => {
  let { userId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    refreshUserProfile()
  }, [userId])

  const refreshUserProfile = () => {
    if (!userId) {
      userId = ownerUserId
      if (!userId) {
        navigate('/login')
      }
    }
    getUserProfile(userId)
  }

  if (!profile) return <Preloader />

  return (
    <main className='profilePage'>
      <ProfileInfo
        profile={profile}
        updateUserAvatar={updateUserAvatar}
        refreshUserProfile={refreshUserProfile}
        isOwner={!userId}
      />
      <ProfilePosts
        smallAvatar={profile.photos.small}
        posts={posts}
        setPostLike={setPostLike}
      />
    </main>
  )
}

const mapStateToProps = (state) => {
  return {
    ownerUserId: state.auth.ownerUserId,
    profile: state.profilePage.profile,
    posts: state.profilePage.PostsData,
  }
}

export default connect(mapStateToProps, {
  getUserProfile,
  updateUserAvatar,
  setPostLike,
})(ProfileContainer)
