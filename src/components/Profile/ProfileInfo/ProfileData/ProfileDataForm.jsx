import { useState } from 'react'
import Modal from '../../../common/Modal'
import { Form, Field } from 'react-final-form'
import { createComponent } from '../../../common/FormControls'
import {
  composeValidators,
  maxValue,
  required,
} from '../../../utils/validators'
import { FORM_ERROR } from 'final-form'

const ProfileDataForm = ({
  modalOpened,
  setModalOpened,
  profile,
  updateUserProfileData,
  ...props
}) => {
  const [initialValues] = useState(profile)

  const Input = createComponent('div', 'input')

  const onSubmit = (values) => {
    const value = window.confirm(
      'Are you sure you want to update your profile data?'
    )
    if (value) {
      const formError = updateUserProfileData(values) // formError is a promise that contains errorText if there is an error that came from API
      return formError.then((errorText) => {
        return { [FORM_ERROR]: errorText }
      })
    }
  }

  return (
    <Modal modalOpened={modalOpened} setModalOpened={setModalOpened}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, submitError }) => (
          <form onSubmit={handleSubmit}>
            <ul className='editList'>
              <li className='editListItem'>
                <label>Full name: </label>
                <Field
                  name='fullName'
                  component={Input}
                  validate={composeValidators(required, maxValue(128))}
                  initialValue={initialValues.fullName}
                />
              </li>
              <li className='editListItem'>
                <label>About me: </label>
                <Field
                  name='aboutMe'
                  component={Input}
                  validate={maxValue(128)}
                  initialValue={initialValues.aboutMe}
                />
              </li>
              <li className='editListItem'>
                <label>Looking for a job: </label>
                <Field
                  name='lookingForAJob'
                  component='input'
                  type='checkbox'
                  initialValue={initialValues.lookingForAJob}
                />
              </li>
              <li className='editListItem'>
                <label>Looking for a job description: </label>
                <Field
                  name='lookingForAJobDescription'
                  component={Input}
                  validate={maxValue(128)}
                  initialValue={initialValues.lookingForAJobDescription}
                />
              </li>
              <li>
                Contacts:{' '}
                {Object.keys(initialValues.contacts).map((item) => {
                  return (
                    <div key={item} className='editListItem'>
                      <label>{item}: </label>
                      <Field
                        name={`contacts.${item}`}
                        component={Input}
                        validate={maxValue(128)}
                        initialValue={initialValues.contacts[item]}
                      />
                    </div>
                  )
                })}
              </li>
            </ul>
            {submitError && <div>{submitError}</div>}
            <button disabled={submitting}>save</button>
          </form>
        )}
      />
    </Modal>
  )
}

export default ProfileDataForm
