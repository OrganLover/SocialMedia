import { useEffect } from 'react'
import { connect } from 'react-redux'
import ProfileStatus from './ProfileStatus'
import ProfileFollow from './ProfileFollow'
import {
  getUserStatus,
  updateUserStatus,
  getUserFollowStatus,
} from '../../../../redux/profile-reducer'
import { followUser, unfollowUser } from '../../../../redux/users-reducer'
import { useParams } from 'react-router-dom'

const ProfileStatusContainer = ({
  profileStatus,
  getUserStatus,
  updateUserStatus,
  ownerUserId,
  isOwner,
  followUser,
  unfollowUser,
  isFollowed,
  getUserFollowStatus,
  ...props
}) => {
  const { userId } = useParams()

  useEffect(() => {
    if (!userId) {
      getUserStatus(ownerUserId)
      return
    }
    getUserStatus(userId)
  }, [profileStatus, userId])

  return (
    <>
      <ProfileStatus
        profileStatus={profileStatus}
        updateUserStatus={updateUserStatus}
        isOwner={isOwner}
      />
      {!isOwner && (
        <ProfileFollow
          followUser={followUser}
          unfollowUser={unfollowUser}
          isFollowed={isFollowed}
          getUserFollowStatus={getUserFollowStatus}
        />
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    profileStatus: state.profilePage.status,
    ownerUserId: state.auth.ownerUserId,
    isFollowed: state.profilePage.isFollowed,
  }
}

export default connect(mapStateToProps, {
  getUserStatus,
  updateUserStatus,
  followUser,
  unfollowUser,
  getUserFollowStatus,
})(ProfileStatusContainer)
