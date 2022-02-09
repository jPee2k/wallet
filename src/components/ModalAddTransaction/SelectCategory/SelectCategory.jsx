import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Field, ErrorMessage } from 'formik';
import { useGetTransactionCategoriesQuery } from '../../../services/transactionCategoryAPI.js';
import { hideSpinner, showSpinner } from '../../../app/slices/globalSlice';
import styles from './styles.module.css';

const SelectCategory = ({ type = '' }) => {
  const [categories, setCategories] = useState([]);
  const { isLoading, isError, isSuccess, data } = useGetTransactionCategoriesQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    isLoading && dispatch(showSpinner());
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess || isError) {
      dispatch(hideSpinner());
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    if (isSuccess && data) {
      setCategories(data);
    }
  }, [data]);

  if (isError) {
    return null;
  }

  const options = categories
    .filter((category) => category.type === type)
    .map(({ id, name }) => (
      <option key={id} value={id}>{name}</option>
    ));

  const { input, label } = styles;
  return (
    <label className={label}>
      <Field className={input} component="select" name="categoryId">
        <option value="">Select a category</option>
        {options}
      </Field>
      <ErrorMessage name="categoryId" component="span"/>
    </label>
  );
};

SelectCategory.propTypes = {
  type: PropTypes.string,
};

export default SelectCategory;
