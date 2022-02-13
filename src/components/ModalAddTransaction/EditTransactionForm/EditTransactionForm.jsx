import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import schema from '../validationSchema.js';
import { useLoader } from '../../../hooks/useLoader.js';
import { closeTransactionModal } from '../../../app/slices/globalSlice.js';
import { editTransaction } from '../../../app/slices/financeSlice.js';
import { updateUserBalance } from '../../../app/slices/sessionSlice.js';
import { useUpdateTransactionMutation } from '../../../services/transactionsAPI.js';
import { getTransactionByID } from '../../../app/slices/selectors.js';
import { getAmountSignByType } from '../../../utils/data.js';

import SelectCategory from '../SelectCategory';
import Input from '../../Input';
import Button from '../../Button';
import CheckboxType from '../CheckboxType';
import Textarea from '../../Textarea';
import DatePicker from '../../DatePicker';
import styles from '../styles.module.scss';

const TYPES = { dec: 'EXPENSE', inc: 'INCOME' };

// TODO -> FIX unmount error
const EditTransactionForm = ({ transactionID = null }) => {
  const [updateTransaction, { isLoading, isError, isSuccess }] = useUpdateTransactionMutation();
  const transactionData = useSelector((state) => getTransactionByID(state, transactionID));
  const dispatch = useDispatch();

  useLoader({ dispatch, isLoading, isError, isSuccess });
  useEffect(() => {
    isSuccess && dispatch(closeTransactionModal());
  }, [isSuccess]);

  const submitHandler = async (validatedData, actions) => {
    const data = { ...validatedData, amount: getAmountSignByType(validatedData, TYPES) };

    try {
      const response = await updateTransaction({ transactionID, body: data }).unwrap();
      dispatch(editTransaction(response));
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
      initialValues={{ ...transactionData, amount: Math.abs(transactionData.amount) }}
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
            <Button className={buttonConfirm} type="submit">Edit</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

EditTransactionForm.propTypes = {
  transactionID: PropTypes.string,
};

export default EditTransactionForm;
