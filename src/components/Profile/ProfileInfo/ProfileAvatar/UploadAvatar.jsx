import { useState } from 'react'
import Avatar from 'react-avatar-edit'

const UploadAvatar = ({ setAvatar }) => {
  const [preview, setPreview] = useState(null)
  const [editorVisible, setEditorVisible] = useState(true)

  const onCrop = (preview) => {
    setPreview(preview)
    setAvatar(preview)
  }

  const onFileLoad = (file) => {
    const fileType = [...file.type].splice(0, 5).join('')
    if (fileType !== 'image') {
      alert('Select the image file!')
      setEditorVisible(false)
    }
  }

  const onClose = () => {
    setPreview(null)
  }

  return (
    <>
      {editorVisible ? (
        <div>
          <Avatar
            width={300}
            height={300}
            onCrop={onCrop}
            onClose={onClose}
            onFileLoad={onFileLoad}
          />
          {preview && (
            <img
              src={preview}
              style={{
                width: '180px',
                height: '180px',
                margin: '10px 0 0 60px',
              }}
            />
          )}
        </div>
      ) : (
        <span>
          You have selected an invalid file. Please select the image file
          {'(example: jpg)'}
        </span>
      )}
    </>
  )
}

export default UploadAvatar
