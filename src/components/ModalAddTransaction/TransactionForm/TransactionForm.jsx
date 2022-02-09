import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import schema, { dateNow } from '../validationSchema.js';
import { closeModal, hideSpinner, showSpinner } from '../../../app/slices/globalSlice.js';
import { addTransactionData } from '../../../app/slices/transactionSlice.js';
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
  const [createTransaction, { isLoading, isError, isSuccess }] = useCreateTransactionMutation();

  useEffect(() => {
    isLoading && dispatch(showSpinner());
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(hideSpinner());
      dispatch(closeModal());
    } else if (isError) {
      dispatch(hideSpinner());
    }
  }, [isSuccess, isError]);

  const initialValues = {
    transactionDate: dateNow,
    type: TYPES.dec,
    categoryId: '',
    comment: '',
    amount: '',
  };

  const submitHandler = async (validatedData, actions) => {
    const data = { ...validatedData, amount: getAmountSignByType(validatedData, TYPES) };

    try {
      const response = await createTransaction(data).unwrap();
      dispatch(addTransactionData(response));
      response.balanceAfter && dispatch(updateUserBalance(response.balanceAfter));
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
    >
      <Form className={form} autoComplete="off">
        <CheckboxType name="type" types={TYPES}/>
        <div className={doubleInputs}>
          <Input name="amount" type="text" placeholder="0.00"/>
          <DatePicker name="transactionDate"/>
        </div>
        <SelectCategory/>
        <Textarea className={textarea} name="comment" placeholder="Comment"/>
        <div className={navSection}>
          <Button className={buttonCancel} onClick={() => dispatch(closeModal())}>Cancel</Button>
          <Button className={buttonConfirm} type="submit">Add</Button>
        </div>
      </Form>
    </Formik>
  );
};

export default TransactionForm;
