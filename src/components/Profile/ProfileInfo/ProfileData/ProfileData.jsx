import { MdWebAsset } from 'react-icons/md'
import {
  SlSocialFacebook,
  SlSocialVkontakte,
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialYoutube,
  SlSocialGithub,
} from 'react-icons/sl'
import { FiLink } from 'react-icons/fi'
import { BiEdit } from 'react-icons/bi'
import { VscTriangleDown } from 'react-icons/vsc'
import { useState } from 'react'

const ProfileData = ({ setModalOpened, profile, isOwner, ...props }) => {
  const [contactsOpened, setContactsOpened] = useState(false)

  const icons = [
    <SlSocialFacebook />,
    <MdWebAsset />,
    <SlSocialVkontakte />,
    <SlSocialTwitter />,
    <SlSocialInstagram />,
    <SlSocialYoutube />,
    <SlSocialGithub />,
    <FiLink />,
  ]

  let index = 0

  return (
    <>
      <ul>
        <li>
          Full name: <b>{profile.fullName}</b>
        </li>
        <li>
          About me: <b>{profile.aboutMe}</b>
        </li>
        <li>
          Looking for a job:
          <b> {profile.lookingForAJob === true ? 'positive' : 'negative'}</b>
        </li>
        <li>
          The job i am looking for: <b>{profile.lookingForAJobDescription}</b>
        </li>
        <li>
          <div
            className='profileDataContacts'
            onClick={() => setContactsOpened(!contactsOpened)}
          >
            Contacts: <VscTriangleDown className='arrowDown' />
          </div>
          {contactsOpened &&
            Object.keys(profile.contacts).map((item) => {
              return (
                <div key={item} className='contacts'>
                  {icons[index++]} :
                  <a href={profile.contacts[item]}> {profile.contacts[item]}</a>
                </div>
              )
            })}
        </li>
      </ul>
      {isOwner && (
        <button
          className='changeProfileDataButton'
          onClick={() => setModalOpened(true)}
        >
          {<BiEdit size='25px' />}
        </button>
      )}
    </>
  )
}

export default ProfileData
