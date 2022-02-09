import React from 'react';
import Currency from '../../components/Currency';
import UserCard from '../../components/UserCard';
import ButtonAddTransaction from '../../components/ButtonAddTransaction';
import ModalAddTransaction from '../../components/ModalAddTransaction';
import TableTransaction from '../../components/TableTransaction';

const Transaction = () => (
  <React.Fragment>
    <Currency/>
    <UserCard/>
    <TableTransaction/>
    <ButtonAddTransaction/>
    <ModalAddTransaction/>
  </React.Fragment>
);

export default Transaction;
