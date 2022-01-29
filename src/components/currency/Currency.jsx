import React, { useState, useEffect } from 'react';
import useExchangeRateQuery from '../../hooks/useExchangeRateQuery.js';
import { controller } from '../../services/privat-bank-API.js';
import { setDataToLocalStorage, getDataFromLocalStorage } from '../../services/localStorage.js';
import Loader from './loader/Loader.jsx';
import styles from './currency.module.css';

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
    if (isSuccess) {
      const filteredRates = data.filter(({ ccy }) => ccy === 'USD' || ccy === 'EUR' || ccy === 'RUR');
      setRates(filteredRates);
      setDataToLocalStorage({
        date: Date.now(),
        rates: filteredRates,
      });
    }
    return () => {
      controller.abort();
    };
  }, [data]);

  if (isLoading || isFetching) {
    return (
      <div className={styles['currency-widget']}>
        <Loader/>
      </div>
    );
  }

  return (
    <div className={styles['currency-widget']}>
      <table border="1">
        <thead>
        <tr>
          <th>Currency</th>
          <th>Purchase</th>
          <th>Sale</th>
        </tr>
        </thead>
        <tbody>{
          rates.map(({ ccy, base_ccy, buy, sale }) => {
            return (
              <tr key={`${base_ccy}-${ccy}`}>
                <td>{ccy}</td>
                <td>{buy}</td>
                <td>{sale}</td>
              </tr>
            );
          })
        }</tbody>
      </table>
    </div>
  );
};

export default Currency;
