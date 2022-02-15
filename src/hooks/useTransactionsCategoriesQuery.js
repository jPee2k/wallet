import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addCategories } from '../app/slices/financeSlice.js';
import { useGetTransactionCategoriesQuery } from '../services/transactionCategoryAPI.js';
import { useLoader } from './useLoader.js';

const useTransactionsCategoriesQuery = () => {
  const { isLoading, isError, isSuccess, data = [] } = useGetTransactionCategoriesQuery();
  const dispatch = useDispatch();

  useLoader({ dispatch, isLoading, isError, isSuccess });
  useEffect(() => {
    if (isSuccess && data) {
      dispatch(addCategories(data));
    }
  }, [data]);
};

export default useTransactionsCategoriesQuery;
