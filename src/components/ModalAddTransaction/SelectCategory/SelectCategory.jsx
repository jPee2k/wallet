import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';

import { useGetTransactionCategoriesQuery } from '../../../services/transactionCategoryAPI.js';
import { useLoader } from '../../../hooks/useLoader.js';

import styles from './styles.module.scss';

const SelectCategory = ({ type = '' }) => {
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, data = [] } = useGetTransactionCategoriesQuery();
  useLoader({ dispatch, isLoading, isError, isSuccess });

  if (isError) {
    toast.error('Oops, something went wrong =(');
    return null;
  }

  const [isFocus, setFocus] = useState(false);
  const clickHandler = () => {
    setFocus((preVal) => !preVal);
  };

  const options = data
    .filter((category) => category.type === type)
    .map(({ id, name }) => (
      <option key={id} value={id}>{name}</option>
    ));

  const { input, label, focus, errorMessage, reset } = styles;
  return (
    <label className={label}>
      <Field component="select" name="categoryId"
        className={`${input} ${isFocus ? focus : ''}`.trim()}
        onClick={clickHandler}
        onBlur={() => setFocus(false)}
      >
        <option className={reset} value="">Select a category</option>
        {options}
      </Field>
      <ErrorMessage className={errorMessage} name="categoryId" component="span"/>
    </label>
  );
};

SelectCategory.propTypes = {
  type: PropTypes.string,
};

export default SelectCategory;
