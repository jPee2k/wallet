import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { useLoader } from '../../hooks/useLoader.js';
import { useLogOutMutation } from '../../services/authAPI.js';
import { closeLogoutModal } from '../../redux/slices/globalSlice.js';
import { resetUserData } from '../../redux/slices/sessionSlice.js';
import { resetFinanceData } from '../../redux/slices/financeSlice.js';
import { getLogOutModalState } from '../../redux/slices/selectors.js';

import Button from '../Button';
import styles from './styles.module.scss';

const ModalLogOut = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getLogOutModalState);
  const [logOut, { isLoading, isError, isSuccess }] = useLogOutMutation();

  useLoader({ dispatch, isLoading, isError, isSuccess });
  useEffect(() => {
    const closeOnPress = (evt) => (evt.code === 'Escape') && dispatch(closeLogoutModal());
    window.addEventListener('keyup', closeOnPress);
    return () => window.removeEventListener('keyup', closeOnPress);
  }, []);

  const logOutClickHandler = async () => {
    try {
      await logOut().unwrap();
      dispatch(resetUserData());
      dispatch(resetFinanceData());
      dispatch(closeLogoutModal());
    } catch (err) {
      toast.error(err?.data?.message || 'Oops, something went wrong =(');
    }
  };

  if (!isModalOpen) {
    return null;
  }

  const { buttonCancel, buttonConfirm, message, title, wrapper, modal, navSection } = styles;
  return (
    <div className={wrapper}>
      <div className={modal} style={{ color: 'black' }}>
        <h2 className={title}>Exit</h2>
        <p className={message}>Are you sure you want to log out?</p>
        <div className={navSection}>
          <Button className={buttonCancel}
            onClick={() => dispatch(closeLogoutModal())}>Stay</Button>
          <Button className={buttonConfirm} onClick={logOutClickHandler}>Leave</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogOut;
