import { useEffect, useState } from 'react'
import defaultAvatar from '../../../../assets/images/defaultAvatar.png'
import Modal from '../../../common/Modal'
import UploadAvatar from './UploadAvatar'
import DataURIToBlob from '../../../utils/DataURIToBlob'

const ProfileAvatar = ({
  largeAvatar,
  updateUserAvatar,
  refreshUserProfile,
  isOwner,
  ...props
}) => {
  let [avatar, setAvatar] = useState(defaultAvatar)
  let [modalOpened, setModalOpened] = useState(false)

  useEffect(() => {
    refreshUserProfile()
  }, [largeAvatar])

  const onSavePhotoClick = () => {
    if (avatar && avatar !== defaultAvatar) {
      const value = window.confirm(
        'are you sure you want to change your avatar?'
      )
      if (value) {
        const file = DataURIToBlob(avatar)
        const formData = new FormData()
        formData.append('upload', file, 'image.jpg')
        updateUserAvatar(formData)
      }
    } else {
      alert('you have not selected file!')
    }
  }

  return (
    <div className='profileAvatarBlock'>
      <div className='avatarWrapper'>
        {isOwner ? (
          <>
            <img
              src={largeAvatar || defaultAvatar}
              className='profileAvatar ownerProfileAvatar'
              onClick={() => setModalOpened(!modalOpened)}
            />
            <span className='avatarHoverContent'>upload avatar</span>
          </>
        ) : (
          <img src={largeAvatar || defaultAvatar} className='profileAvatar' />
        )}
      </div>
      <div className='avatarModalWindow'>
        {modalOpened && (
          <Modal modalOpened={modalOpened} setModalOpened={setModalOpened}>
            <UploadAvatar setAvatar={setAvatar} />
            <button className='saveButton' onClick={onSavePhotoClick}>
              save
            </button>
          </Modal>
        )}
      </div>
    </div>
  )
}

export default ProfileAvatar
