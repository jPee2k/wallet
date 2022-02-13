import { useDispatch } from 'react-redux';
import { useRemoveTransactionMutation } from '../services/transactionsAPI.js';
import { useLoader } from './useLoader.js';

const useRemoveTransaction = () => {
  const [removeTransaction, { isLoading, isError, isSuccess }] = useRemoveTransactionMutation();
  const dispatch = useDispatch();
  useLoader({ dispatch, isLoading, isError, isSuccess });
  return removeTransaction;
};

export default useRemoveTransaction;
