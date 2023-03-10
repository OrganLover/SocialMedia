import User from './User'
import Preloader from '../common/Preloader'

const Users = ({ users, followUser, unfollowUser, ownerUserId, ...props }) => {
  if (!users) {
    return <Preloader />
  }

  const usersBatch = users.map((user) => {
    if (user.id !== ownerUserId) {
      return (
        <User
          key={user.id}
          userName={user.name}
          userAvatar={user.photos.small}
          userStatus={user.status}
          userId={user.id}
          followed={user.followed}
          followUser={followUser}
          unfollowUser={unfollowUser}
        />
      )
    }
  })

  return <div className='users'>{usersBatch}</div>
}

export default Users
