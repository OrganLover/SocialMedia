import { useState } from 'react'
import ProfileDataForm from './ProfileDataForm'
import ProfileData from './ProfileData'
import { connect } from 'react-redux'
import { updateUserProfileData } from '../../../../redux/profile-reducer'

const ProfileDataContainer = ({
  profile,
  updateUserProfileData,
  isOwner,
  ...props
}) => {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <>
      <ProfileData
        setModalOpened={setModalOpened}
        profile={profile}
        isOwner={isOwner}
      />
      {modalOpened && (
        <ProfileDataForm
          setModalOpened={setModalOpened}
          modalOpened={modalOpened}
          profile={profile}
          updateUserProfileData={updateUserProfileData}
        />
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export default connect(mapStateToProps, { updateUserProfileData })(
  ProfileDataContainer
)
