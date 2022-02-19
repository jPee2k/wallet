import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss';
import { ReactComponent as CurrencyIcon } from '../../assets/images/icons/currency.svg';

import useExchangeRateQuery from '../../hooks/useExchangeRateQuery.js';
import { controller } from '../../services/privatBankAPI.js';
import { setDataToLocalStorage, getDataFromLocalStorage } from '../../utils/localStorage.js';
import { getExchangeRatesFromState } from '../../redux/slices/selectors.js';
import { addExchangeRates } from '../../redux/slices/financeSlice.js';

import Loader from './Loader';

const ALLOWED_CURRENCY = ['USD', 'EUR', 'RUR'];

const Currency = () => {
  const { isLoading, isFetching, isSuccess, data } = useExchangeRateQuery();
  const rates = useSelector(getExchangeRatesFromState);
  const dispatch = useDispatch();

  useEffect(() => {
    const oneHour = 60 * 60 * 1000;
    const timestamp = getDataFromLocalStorage('date') + oneHour;

    if (timestamp > Date.now()) {
      controller.abort();
      const ratesFromStorage = getDataFromLocalStorage('rates');
      dispatch(addExchangeRates(ratesFromStorage));
    }
  }, []);

  useEffect(() => {
    if (isSuccess && data) {
      const filteredRates = data.filter(({ ccy }) => ALLOWED_CURRENCY.includes(ccy));
      setDataToLocalStorage({
        date: Date.now(),
        rates: filteredRates,
      });
      dispatch(addExchangeRates(filteredRates));
    }
  }, [data]);

  if (isLoading || isFetching) {
    return (
      <div className={styles['Currency-widget']}>
        <Loader/>
      </div>
    );
  }

  const { currencyWidget } = styles;
  return (
    <div className={currencyWidget}>
      <table>
        <thead>
        <tr>
          <th>Buy</th>
          <th>Sell</th>
          <th><CurrencyIcon/></th>
        </tr>
        </thead>
        <tbody>{
          rates.map(({ ccy, base_ccy: baseCcy, buy, sale }) => (
            <tr key={`${baseCcy}-${ccy}`}>
              <td>{buy}</td>
              <td>{sale}</td>
              <td>{ccy}</td>
            </tr>
          ))
        }</tbody>
      </table>
    </div>
  );
};

export default Currency;
