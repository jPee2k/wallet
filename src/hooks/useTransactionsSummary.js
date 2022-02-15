import { useEffect, useState } from 'react';
import { useLoader } from './useLoader.js';
import { useGetTransactionsSummaryQuery } from '../services/transactionsAPI.js';

const useTransactionsSummary = ({ month, year }) => {
  const [skip, setSkip] = useState(false);
  const {
    isLoading, isError, isSuccess, data: transactionsSummary, refetch,
  } = useGetTransactionsSummaryQuery({ month, year }, { skip });
  useEffect(() => {
    if (isSuccess) {
      setSkip(true);
    }
  }, [transactionsSummary]);
  useLoader({ isLoading, isError, isSuccess });

  return { transactionsSummary, setSkip, refetch };
};

export default useTransactionsSummary;
