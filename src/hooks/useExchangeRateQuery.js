import { useQuery } from 'react-query';
import { getExchangeRate } from '../services/privat-bank-API';

export default () => {
  const options = {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: 60 * 60 * 1000,
  }

  return useQuery('GetExchangeRate', getExchangeRate, options);
};
