import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { useLoader } from '../../hooks/useLoader.js';
import { useGetTransactionCategoriesQuery } from '../../services/transactionCategoryAPI.js';
import { addCategories } from '../../app/slices/financeSlice.js';

import Currency from '../../components/Currency';
import UserCard from '../../components/UserCard';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import styles from './TransactionTab/styles.module.scss';

const { mainSectionBlock, currencyInfoBlock } = styles;

const HomePage = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    isError,
    isSuccess,
    data = [],
  } = useGetTransactionCategoriesQuery();

  useLoader({ dispatch, isLoading, isError, isSuccess });
  useEffect(() => {
    if (isSuccess && data) {
      dispatch(addCategories(data));
    }
  }, [data]);

  return (
    <React.Fragment>
      <Header />
      <div className={mainSectionBlock}>
        <div className={currencyInfoBlock}>
          <UserCard />
          <Currency />
        </div>
        <Outlet />
        {/* content from router */}
      </div>

      <Navigation />
    </React.Fragment>
  );
};

export default HomePage;
