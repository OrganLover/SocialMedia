import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProfileFollow = ({
  isOwner,
  followUser,
  unfollowUser,
  isFollowed,
  getUserFollowStatus,
  ...props
}) => {
  const { userId } = useParams()

  useEffect(() => {
    getUserFollowStatus(userId)
  }, [userId])

  return (
    <>
      <div className='profileFollowWrapper'>
        {isFollowed ? (
          <button onClick={() => unfollowUser(userId)}>unfollow</button>
        ) : (
          <button onClick={() => followUser(userId)}>follow</button>
        )}
      </div>
    </>
  )
}

export default ProfileFollow
