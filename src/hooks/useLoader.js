import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hideSpinner, showSpinner } from '../app/slices/globalSlice.js';

export const useLoader = ({ isLoading, isError, isSuccess }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    isLoading && dispatch(showSpinner());
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess || isError) {
      dispatch(hideSpinner());
    }
  }, [isSuccess, isError]);
};
