import { useState } from 'react'

const Paginator = ({
  usersPerPage,
  totalUsersCount,
  setCurrentPage,
  currentNumberOfPortion,
}) => {
  let [currentPortion, setCurrentPortion] = useState(1)
  let pagesCount = Math.ceil(totalUsersCount / usersPerPage)
  let pages = []
  let pagesPerPortion = 5
  for (let i = 1; i <= pagesCount; i++) pages.push(i)

  let indexOfLastElement = currentPortion * pagesPerPortion
  let indexOfFirstElement = indexOfLastElement - pagesPerPortion
  let currentPages = pages.slice(indexOfFirstElement, indexOfLastElement)

  let portionsCount = Math.ceil(pagesCount / pagesPerPortion)
  let portions = []
  for (let i = 1; i <= portionsCount; i++) portions.push(i)

  return (
    <ul className='paginationButtonsList'>
      {currentPortion === 1 ? null : (
        <button onClick={() => setCurrentPortion(currentPortion - 1)}>
          {'<'}
        </button>
      )}
      {currentPages.map((num) => {
        return (
          <li key={num}>
            <button
              onClick={() => setCurrentPage(num)}
              className={num === currentNumberOfPortion ? 'activePortion' : ''}
            >
              {num}
            </button>
          </li>
        )
      })}
      {currentPortion === portions[portions.length - 1] ? null : (
        <button onClick={() => setCurrentPortion(currentPortion + 1)}>
          {'>'}
        </button>
      )}
    </ul>
  )
}

export default Paginator
