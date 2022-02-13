import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import useExchangeRateQuery from '../../hooks/useExchangeRateQuery.js';
import { controller } from '../../services/privatBankAPI.js';
import { setDataToLocalStorage, getDataFromLocalStorage } from '../../utils/localStorage.js';
import { ReactComponent as CurrencyIcon } from '../../assets/images/icons/currency.svg';
import styles from './styles.module.scss';

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

  const { currencyWidget } = styles;
  return (
    <div className={currencyWidget}>
      <table>
        <thead>
        <tr>
          <th>Purchase</th>
          <th>Sale</th>
          <th><CurrencyIcon/></th>{/* Currency */}
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
