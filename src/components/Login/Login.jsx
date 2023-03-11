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
      <div className='instructionBlock'>
        <span>
          if authorization does not work please open this app in{' '}
          <b>Google Chrome</b> or in <b>Microsoft Edge</b>. You can fix the
          problem in your browser using the instruction below:
        </span>
        <ol>
          <li>
            visit the API site{' '}
            <a
              href='https://social-network.samuraijs.com'
              style={{ textDecoration: 'underline' }}
            >
              https://social-network.samuraijs.com
            </a>
          </li>
          <li>close the API site</li>
          <li>try to authorize again</li>
        </ol>
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
