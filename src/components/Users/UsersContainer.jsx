import { useEffect } from 'react'
import Users from './Users'
import UsersPagination from './UsersPagination/UsersPagination'
import { connect } from 'react-redux'
import {
  getUsers,
  setCurrentPage,
  followUser,
  unfollowUser,
} from '../../redux/users-reducer'

const UsersContainer = ({
  getUsers,
  users,
  totalUsersCount,
  usersPerPage,
  setCurrentPage,
  currentNumberOfPortion,
  followUser,
  unfollowUser,
  ownerUserId,
  ...props
}) => {
  useEffect(() => {
    getUsers()
  }, [currentNumberOfPortion])

  return (
    <div className='usersPage'>
      <UsersPagination
        usersPerPage={usersPerPage}
        totalUsersCount={totalUsersCount}
        setCurrentPage={setCurrentPage}
        currentNumberOfPortion={currentNumberOfPortion}
      />
      <Users
        users={users}
        followUser={followUser}
        unfollowUser={unfollowUser}
        ownerUserId={ownerUserId}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    usersPerPage: state.usersPage.usersPerPage,
    currentNumberOfPortion: state.usersPage.currentNumberOfPortion,
    ownerUserId: state.auth.ownerUserId,
  }
}

export default connect(mapStateToProps, {
  getUsers,
  setCurrentPage,
  followUser,
  unfollowUser,
})(UsersContainer)
