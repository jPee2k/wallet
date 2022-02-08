import * as yup from 'yup';

// TODO -> data before

const validationSchema = yup.object({
  transactionDate: yup.string()
    .required('Field is required'),
  type: yup.string()
    .oneOf(['INCOME', 'EXPENSE'])
    .required('Field is required'),
  categoryId: yup.string()
    .required('Field is required'),
  comment: yup.string()
    .max(1024, 'Must be 254 characters or less'),
  amount: yup.number('Must be a number type')
    .min(0.01, 'Only positive values')
    .max(2147483647, 'Maximum value exceeded')
    .required('Field is required'),
});

export default validationSchema;
