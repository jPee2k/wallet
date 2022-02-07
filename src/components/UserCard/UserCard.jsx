import React from 'react';
import { useSelector } from 'react-redux';
import { getCardNumber } from '../../utils/useful.js';
import styles from './styles.module.css';

const UserCard = () => {
  const { user } = useSelector((state) => state.session);
  const { username, balance } = user;
  const { cardBlock, cardNumber, cardBalance, cardName } = styles;

  // TODO -> exchanged currency list

  return (
    <div className={cardBlock}>
      <p className={cardNumber}>{getCardNumber(user.id)}</p>
      <p className={cardBalance}>{balance.toLocaleString('ua-UA', { style: 'currency', currency: 'UAH' })}</p>
      <p className={cardName}>{username}</p>
    </div>
  );
};

export default UserCard;
