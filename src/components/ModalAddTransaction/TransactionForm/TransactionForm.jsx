import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { useLoader } from '../../../hooks/useLoader.js';
import schema, { dateNow } from '../validationSchema.js';
import { closeTransactionModal } from '../../../app/slices/globalSlice.js';
import { addTransaction } from '../../../app/slices/financeSlice.js';
import { updateUserBalance } from '../../../app/slices/sessionSlice.js';
import { useCreateTransactionMutation } from '../../../services/transactionsAPI.js';
import { getAmountSignByType } from '../../../utils/data.js';

import SelectCategory from '../SelectCategory';
import Input from '../../Input';
import Button from '../../Button';
import CheckboxType from '../CheckboxType';
import Textarea from '../../Textarea';
import DatePicker from '../../DatePicker';
import styles from '../styles.module.scss';

const TYPES = { dec: 'EXPENSE', inc: 'INCOME' };

const TransactionForm = () => {
  const dispatch = useDispatch();
  const [
    createTransaction,
    { data = {}, isLoading, isError, isSuccess },
  ] = useCreateTransactionMutation();

  useLoader({ dispatch, isLoading, isError, isSuccess });
  useEffect(() => {
    if (isSuccess && data) {
      dispatch(addTransaction(data));
      data.balanceAfter && dispatch(updateUserBalance(data.balanceAfter));
    }
  }, [data]);
  useEffect(() => {
    isSuccess && dispatch(closeTransactionModal());
  }, [isSuccess]);

  const initialValues = {
    transactionDate: dateNow,
    type: TYPES.dec,
    categoryId: '',
    comment: '',
    amount: '',
  };

  const submitHandler = async (validatedData, actions) => {
    const preparedData = { ...validatedData, amount: getAmountSignByType(validatedData, TYPES) };

    try {
      await createTransaction(preparedData).unwrap();
      actions.resetForm();
    } catch (err) {
      toast.error(err.data.message);
    }
    actions.setSubmitting(false);
  };

  const { buttonConfirm, buttonCancel, form, navSection, doubleInputs, textarea } = styles;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={submitHandler}
      validateOnBlur={false}
    >
      {({ values }) => (
        <Form className={form} autoComplete="off">
          <CheckboxType name="type" types={TYPES}/>
          <div className={doubleInputs}>
            <Input name="amount" type="text" placeholder="0.00"/>
            <DatePicker name="transactionDate"/>
          </div>
          <SelectCategory type={values.type}/>
          <Textarea className={textarea} name="comment" placeholder="Comment"/>
          <div className={navSection}>
            <Button className={buttonCancel}
              onClick={() => dispatch(closeTransactionModal())}>Cancel</Button>
            <Button className={buttonConfirm} type="submit">Add</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TransactionForm;
