import defaultAvatar from '../../assets/images/defaultAvatar.png'
import { NavLink } from 'react-router-dom'

const User = ({
  userName,
  userStatus,
  userAvatar,
  userId,
  followed,
  followUser,
  unfollowUser,
  ...props
}) => {
  return (
    <div className='user'>
      <div className='userAvatarWrapper'>
        <NavLink to={`/profile/${userId}`}>
          <img
            src={userAvatar ? userAvatar : defaultAvatar}
            className='userAvatar'
          />
        </NavLink>
      </div>
      <div className='userInfo'>
        <span>{userName}</span>
        {userStatus && <span>{userStatus}</span>}
        {followed ? (
          <button
            className='userFollowButton'
            onClick={() => unfollowUser(userId)}
          >
            unfollow
          </button>
        ) : (
          <button
            className='userFollowButton'
            onClick={() => followUser(userId)}
          >
            follow
          </button>
        )}
      </div>
    </div>
  )
}

export default User
