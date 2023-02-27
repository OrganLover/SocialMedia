import defaultAvatar from '../../../assets/images/defaultAvatar.png'
import { BiLike, BiComment } from 'react-icons/bi'

const ProfilePosts = ({ smallAvatar, posts, setPostLike, ...props }) => {
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id)

  return (
    <div className='profilePosts'>
      {sortedPosts.map((post) => {
        return (
          <div className='profilePost' key={post.id}>
            <div className='postAvatar postBlock'>
              <img src={smallAvatar || defaultAvatar} />
            </div>
            <div className='postText postBlock'>{post.message}</div>
            <div className='postButtons postBlock'>
              <button onClick={() => setPostLike(post.id)}>
                <BiLike style={{ verticalAlign: 'middle' }} />
                {post.likes}
              </button>
              <button>
                <BiComment style={{ verticalAlign: 'middle' }} />
                {post.comments}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProfilePosts
