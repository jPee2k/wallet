import * as yup from 'yup';

export const dateNow = new Date();

const validationSchema = yup.object({
  transactionDate: yup.date()
    .min(new Date('01-01-1900'), 'Must be greater than 1900')
    .max(dateNow, 'Please enter a valid date')
    .required('Field is required'),
  type: yup.string()
    .oneOf(['INCOME', 'EXPENSE'])
    .required('Field is required'),
  categoryId: yup.string()
    .required('Field is required'),
  comment: yup.string()
    .max(1024, 'Must be 1024 characters or less'),
  amount: yup.number()
    .typeError('Must be a number type')
    .positive('Only positive values')
    .max(2147483647, 'Maximum value exceeded')
    .required('Field is required'),
});

export default validationSchema;
