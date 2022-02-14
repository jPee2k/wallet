import React from 'react';
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

  const options = data
    .filter((category) => category.type === type)
    .map(({ id, name }) => (
      <option key={id} value={id}>{name}</option>
    ));

  const { input, label, errorMessage } = styles;
  return (
    <label className={label}>
      <Field className={input} component="select" name="categoryId">
        <option value="">Select a category</option>
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
