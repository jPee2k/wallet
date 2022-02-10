import React, { useState, useEffect } from 'react';

import { setDataToLocalStorage, getDataFromLocalStorage } from '../../utils/localStorage.js';
import useExchangeRateQuery from '../../hooks/useExchangeRateQuery.js';
import { controller } from '../../services/privatBankAPI.js';

import Loader from './Loader';
import styles from './styles.module.css';

const ALLOWED_CURRENCY = ['USD', 'EUR', 'RUR'];

const Currency = () => {
  const [rates, setRates] = useState([]);
  const { isLoading, isFetching, isSuccess, data } = useExchangeRateQuery();

  useEffect(() => {
    const oneHour = 60 * 60 * 1000;
    const timestamp = getDataFromLocalStorage('date') + oneHour;

    if (timestamp > Date.now()) {
      controller.abort();
      setRates(getDataFromLocalStorage('rates'));
    }
  }, []);

  useEffect(() => {
    if (isSuccess && data) {
      const filteredRates = data.filter(({ ccy }) => ALLOWED_CURRENCY.includes(ccy));
      setDataToLocalStorage({
        date: Date.now(),
        rates: filteredRates,
      });
      setRates(filteredRates);
    }
  }, [data]);

  if (isLoading || isFetching) {
    return (
      <div className={styles['Currency-widget']}>
        <Loader/>
      </div>
    );
  }

  return (
    <div className={styles['Currency-widget']}>
      <table border="1">
        <thead>
        <tr>
          <th>Currency</th>
          <th>Purchase</th>
          <th>Sale</th>
        </tr>
        </thead>
        <tbody>{
          rates.map(({ ccy, base_ccy: baseCcy, buy, sale }) => (
            <tr key={`${baseCcy}-${ccy}`}>
              <td>{ccy}</td>
              <td>{buy}</td>
              <td>{sale}</td>
            </tr>
          ))
        }</tbody>
      </table>
    </div>
  );
};

export default Currency;
