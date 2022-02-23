import * as yup from 'yup';
import { parse, isDate } from 'date-fns';

export const dateNow = new Date();

const validationSchema = yup.object({
  transactionDate: yup.date()
    .typeError('Must be in the format "DD-MM-YYYY"')
    .min(new Date(1990, 1, 1), 'Must be greater than 1900')
    .max(dateNow, 'Can\'t be in the future')
    .transform(parseDateString)
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

function parseDateString(value, originalValue) {
  return isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'dd-MM-yyyy', dateNow);
}

export default validationSchema;
