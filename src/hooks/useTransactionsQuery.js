import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useGetTransactionsQuery } from '../services/transactionsAPI.js';
import { addData } from '../app/slices/financeSlice.js';
import { useLoader } from './useLoader.js';

const useTransactionsQuery = () => {
  const { isLoading, isError, isSuccess, data = [], refetch } = useGetTransactionsQuery();
  const dispatch = useDispatch();

  useLoader({ dispatch, isSuccess, isError, isLoading });
  useEffect(() => refetch(), []);
  useEffect(() => {
    if (isSuccess && data) {
      dispatch(addData(data));
    }
  }, [data]);
};

export default useTransactionsQuery;
