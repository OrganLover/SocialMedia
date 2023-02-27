import { NavLink } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { FiSettings } from 'react-icons/fi'
import { BiLogOut } from 'react-icons/bi'
import { IconContext } from 'react-icons'

const HeaderPopup = ({ togglePopupOpened, onLogoutClick, ...props }) => {
  return (
    <div className='headerPopup'>
      <ul className='headerPopupList'>
        <IconContext.Provider value={{ size: '17px' }}>
          <li>
            <span onClick={() => togglePopupOpened(false)}>
              <NavLink to='/profile'>
                <CgProfile /> My profile
              </NavLink>
            </span>
          </li>
          <li>
            <span onClick={() => togglePopupOpened(false)}>
              <NavLink to='/settings'>
                <FiSettings /> Settings
              </NavLink>
            </span>
          </li>
          <li>
            <span id='exitButton' onClick={onLogoutClick}>
              <BiLogOut /> Logout
            </span>
          </li>
        </IconContext.Provider>
      </ul>
    </div>
  )
}

export default HeaderPopup
