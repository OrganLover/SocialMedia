import { useState, useEffect } from 'react'

const ProfileStatus = ({
  profileStatus,
  updateUserStatus,
  isOwner,
  ...props
}) => {
  const [statusContent, setStatusContent] = useState(profileStatus)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    setStatusContent(profileStatus)
  }, [profileStatus])

  const onClickHandler = () => {
    const value = window.confirm('Are you sure you want to update your status?')
    if (value) {
      updateUserStatus(statusContent)
    }
    setEditMode(false)
  }

  return (
    <div className='profileStatusBlock'>
      {isOwner ? (
        <>
          {!editMode ? (
            <span
              className='profileStatus ownerProfileStatus'
              onClick={() => setEditMode(true)}
            >
              {profileStatus ? profileStatus : 'write something about yourself'}
            </span>
          ) : (
            <div>
              <input
                type='text'
                autoFocus
                value={statusContent}
                onChange={(e) => setStatusContent(e.target.value)}
              />
              <div>
                <button onClick={onClickHandler}>save</button>
                <button onClick={() => setEditMode(false)}>cancel</button>
              </div>
            </div>
          )}
        </>
      ) : (
        <span className='profileStatus'>
          {profileStatus ? profileStatus : 'no status'}
        </span>
      )}
    </div>
  )
}

export default ProfileStatus
