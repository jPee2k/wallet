import * as yup from 'yup';

const validationSchema = yup.object({
  username: yup.string()
    .min(1, 'Must be 1 characters or more')
    .max(12, 'Must be 12 characters or less')
    .required('Field is required'),
  email: yup.string()
    .email('Invalid email address')
    .required('Field is required'),
  password: yup.string()
    .min(6, 'Must be 6 characters or more')
    .max(12, 'Must be 12 characters or less')
    .required('Field is required'),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Field is required'),
});

export default validationSchema;
