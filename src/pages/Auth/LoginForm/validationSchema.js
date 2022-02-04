import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string()
    .email('Invalid email address')
    .required('Field is required'),
  password: yup.string()
    .min(6, 'Must be 6 characters or more')
    .max(254, 'Must be 254 characters or less')
    .required('Field is required'),
});

export default validationSchema;
