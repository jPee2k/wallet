import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useLogOutMutation } from '../../services/authAPI.js';
import { hideSpinner, showSpinner, closeLogoutModal } from '../../app/slices/globalSlice.js';
import { resetUserData } from '../../app/slices/sessionSlice.js';
import Button from '../Button';
import styles from './styles.module.scss';

const ModalLogOut = () => {
  const isModalOpen = useSelector((state) => state.global.isModalLogoutOpen);
  const [logOut, { isLoading, isError, isSuccess }] = useLogOutMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    isLoading && dispatch(showSpinner());
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess || isError) {
      dispatch(hideSpinner());
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    const closeOnPress = (evt) => (evt.code === 'Escape') && dispatch(closeLogoutModal());
    window.addEventListener('keyup', closeOnPress);
    return () => window.removeEventListener('keyup', closeOnPress);
  }, []);

  const logOutClickHandler = async () => {
    try {
      await logOut().unwrap();
      dispatch(resetUserData());
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
            onClick={() => dispatch(closeLogoutModal())}>Cancel</Button>
          <Button className={buttonConfirm} onClick={logOutClickHandler}>Exit</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogOut;
