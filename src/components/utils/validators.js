export const required = (value) => (value ? null : 'Required')
export const minValue = (min) => (value) => (value?.length < min ? `Not less than ${min}` : null)
export const maxValue = (max) => (value) => (value?.length > max ? `Max value is ${max}` : null)
export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), null)