import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/auth-reducer'
import LoginForm from './LoginForm'
import ThemeToggler from '../common/ThemeToggler'

const Login = ({ isAuth, login, captchaUrl, ...props }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      navigate('/profile')
    }
  }, [isAuth])

  const onSubmit = (values) => login(values)

  return (
    <div className='loginPage'>
      <div className='loginBlock'>
        <div className='loginHeader'>
          <div className='loginLogo'>LO GO</div>
          <ThemeToggler />
        </div>
        <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  }
}

export default connect(mapStateToProps, { login })(Login)
