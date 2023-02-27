import { NavLink } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { TbMessages } from 'react-icons/tb'
import { FaRegNewspaper } from 'react-icons/fa'
import { BsFileMusic } from 'react-icons/bs'
import { FiUsers, FiSettings } from 'react-icons/fi'

const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <ul className='links'>
        <SidebarItem path='profile' itemName='My profile'>
          <CgProfile />
        </SidebarItem>
        <SidebarItem path='dialogs' itemName='Messages'>
          <TbMessages />
        </SidebarItem>
        <SidebarItem path='news' itemName='News'>
          <FaRegNewspaper />
        </SidebarItem>
        <SidebarItem path='music' itemName='Music'>
          <BsFileMusic />
        </SidebarItem>
        <SidebarItem path='users' itemName='Find users'>
          <FiUsers />
        </SidebarItem>
        <SidebarItem path='settings' itemName='Settings'>
          <FiSettings />
        </SidebarItem>
      </ul>
    </nav>
  )
}

const SidebarItem = ({ path, itemName, children, ...props }) => {
  return (
    <li className='linkWrapper'>
      <NavLink to={path} className='link'>
        {children}
        <span className='linkText'>{itemName}</span>
      </NavLink>
    </li>
  )
}

export default Sidebar
