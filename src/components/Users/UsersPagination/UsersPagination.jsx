import Paginator from '../../common/Paginator'

const UsersPagination = ({
  usersPerPage,
  totalUsersCount,
  setCurrentPage,
  currentNumberOfPortion,
  ...props
}) => {
  return (
    <div className='usersPagination'>
      <Paginator
        usersPerPage={usersPerPage}
        totalUsersCount={totalUsersCount}
        setCurrentPage={setCurrentPage}
        currentNumberOfPortion={currentNumberOfPortion}
      />
    </div>
  )
}

export default UsersPagination
