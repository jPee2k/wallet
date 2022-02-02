import { useQuery } from 'react-query';
import { getExchangeRate } from '../services/privatBankAPI.js';

export default () => {
  const options = {
    retry: false,
    retryDelay: 0,
    refetchOnWindowFocus: false,
    cacheTime: 60 * 60 * 1000,
  };

  return useQuery('GetExchangeRate', getExchangeRate, options);
};
