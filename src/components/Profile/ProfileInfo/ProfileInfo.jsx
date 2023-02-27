import ProfileAvatar from './ProfileAvatar/ProfileAvatar'
import ProfileDataContainer from './ProfileData/ProfileDataContainer'
import ProfileStatusContainer from './ProfileStatus/ProfileStatusContainer'

const ProfileInfo = ({
  profile,
  updateUserAvatar,
  refreshUserProfile,
  isOwner,
  ...props
}) => {
  return (
    <div className='profileInfo'>
      <div className='profileAvatarAndStatus'>
        <ProfileAvatar
          largeAvatar={profile.photos.large}
          updateUserAvatar={updateUserAvatar}
          refreshUserProfile={refreshUserProfile}
          isOwner={isOwner}
        />
        <ProfileStatusContainer isOwner={isOwner} />
      </div>
      <div className='profileData'>
        <ProfileDataContainer isOwner={isOwner} />
      </div>
    </div>
  )
}

export default ProfileInfo
