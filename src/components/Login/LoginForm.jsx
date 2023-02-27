import { Form, Field } from 'react-final-form'
import { createComponent } from '../common/FormControls'
import { composeValidators, required, minValue } from '../utils/validators'

const LoginForm = ({ onSubmit, theme, setTheme, captchaUrl, ...props }) => {
  const Input = createComponent('div', 'input')

  return (
    <Form
      onSubmit={onSubmit}
      render={({
        handleSubmit,
        form,
        submitting,
        pristine,
        values,
        submitError,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className='loginForm'>
            <Field
              name='email'
              component={Input}
              validate={required}
              className='textField'
              placeholder='Email'
            />
            <Field
              name='password'
              component={Input}
              validate={composeValidators(required, minValue(4))}
              className='textField'
              placeholder='Password'
              type='password'
            />
            {captchaUrl && (
              <div>
                <img src={captchaUrl} />
                <Field
                  name='captcha'
                  component={Input}
                  validate={required}
                  className='textField'
                  placeholder='Captcha'
                />
              </div>
            )}
            <div className='rememberMe'>
              <Field name='rememberMe' component='input' type='checkbox' />
              <label>remember me</label>
            </div>
            {submitError && (
              <div className='submissionError'>{submitError}</div>
            )}
            <button id='loginButton' disabled={submitting}>
              login
            </button>
          </div>
        </form>
      )}
    />
  )
}

export default LoginForm
