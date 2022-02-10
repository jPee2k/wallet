import React from 'react';
import { useSelector } from 'react-redux';
import { getCardNumber } from '../../utils/useful.js';
import getFormattedCurrency from '../../utils/money.js';
import styles from './styles.module.scss';

const UserCard = () => {
  const { user } = useSelector((state) => state.session);
  const { username, balance } = user;
  const { cardBlock, cardNumber, cardInfo, cardMember, cardCode } = styles;

  // TODO -> exchanged currency list
  return (
    <div className={cardBlock}>
      <p className={cardNumber}>{getCardNumber(user.id)}</p>
      <div className={cardInfo}>
        <p className={cardMember}>{username}</p>
        <p className={cardCode}>
          {getFormattedCurrency(balance)}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
