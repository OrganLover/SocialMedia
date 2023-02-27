import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import defaultAvatar from '../../assets/images/defaultAvatar.png'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/auth-reducer'
import HeaderPopup from './HeaderPopup'
import ThemeToggler from '../common/ThemeToggler'

const Header = ({ isAuth, profile, logout, ...props }) => {
  const [popupOpened, togglePopupOpened] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  })

  const onLogoutClick = () => {
    const value = window.confirm('Are you sure you want to logout?')
    if (value) {
      logout()
    }
  }

  const userAvatar = profile?.photos.small

  return (
    <header className='header'>
      <div className='headerLeftSide'>
        <span className='headerLogo'>LO GO</span>
      </div>
      <div className='headerRightSide'>
        <ThemeToggler />
        <img
          className='headerAvatar'
          src={userAvatar ? userAvatar : defaultAvatar}
          onClick={() => togglePopupOpened(!popupOpened)}
        />
        {popupOpened && (
          <HeaderPopup
            onLogoutClick={onLogoutClick}
            togglePopupOpened={togglePopupOpened}
          />
        )}
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, { logout })(Header)
