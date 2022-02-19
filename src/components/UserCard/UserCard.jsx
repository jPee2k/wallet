import React from 'react';
import { useSelector } from 'react-redux';

import {
  getExchangeRatesFromState,
  getUserFromState,
} from '../../redux/slices/selectors.js';
import { getCardNumber } from '../../utils/useful.js';
import getFormattedCurrency from '../../utils/money.js';

import styles from './styles.module.scss';

const UserCard = () => {
  const user = useSelector(getUserFromState);
  const rates = useSelector(getExchangeRatesFromState);
  const { username = '', balance = 0 } = user;

  const { cardBlock, cardNumber, cardInfo, cardMember, cardCode } = styles;
  return (
    <section>
      <div className={cardBlock}>
        <p className={cardNumber}>{getCardNumber(user.id)}</p>
        <div className={cardInfo}>
          <p className={cardMember}>{username}</p>
          <div className={cardCode}>
            {getFormattedCurrency(balance)}
            <ul>
              {rates.map(({ ccy: code, sale }) => (
                <li key={code}>{prepareRate(balance, sale, code)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

function prepareRate(balance = '', sale = '', code = '') {
  const parsedBalance = parseFloat(balance);
  const parsedSale = parseFloat(sale);
  const convertedAmount = parsedBalance / parsedSale;
  return getFormattedCurrency(convertedAmount, code.toUpperCase());
}

export default UserCard;
