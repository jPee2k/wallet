import * as yup from 'yup';

const validationSchema = yup.object({
  month: yup.number()
    .typeError('Must be a number type')
    .positive('Only positive values')
    .max(12, 'Maximum value exceeded'),
  year: yup.number()
    .typeError('Must be a number type')
    .positive('Only positive values')
    .max(9999, 'Maximum value exceeded'),
});

export default validationSchema;
