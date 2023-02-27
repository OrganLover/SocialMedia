import { useEffect } from 'react'
import './scss/app.scss'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import ProfileContainer from './components/Profile/ProfileContainer'
import Login from './components/Login/Login'
import UsersContainer from './components/Users/UsersContainer'
import { connect } from 'react-redux'
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader'
import { useTheme } from './hooks/useTheme'

const App = ({ isInitialized, initializeApp, ...props }) => {
  useTheme()

  let { pathname } = useLocation()

  useEffect(() => {
    initializeApp()
  }, [])

  if (!isInitialized) return <Preloader />

  return (
    <div className='container'>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      {pathname !== '/login' && <Main />}
    </div>
  )
}

const Main = () => {
  return (
    <div className='mainWrapper'>
      <Header />
      <Sidebar />
      <main className='mainContent'>
        <Routes>
          <Route path='/' element={<ProfileContainer />} />
          <Route path='/profile' element={<ProfileContainer />}>
            <Route path=':userId' element={<ProfileContainer />} />
          </Route>
          <Route path='/dialogs' element={<h1>Dialogs</h1>} />
          <Route path='/news' element={<h1>Coming soon...</h1>} />
          <Route path='/music' element={<h1>Coming soon...</h1>} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/settings' element={<h1>Settings</h1>} />
        </Routes>
      </main>
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitialized,
  }
}

export default connect(mapStateToProps, { initializeApp })(App)
