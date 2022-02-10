import { useEffect } from 'react';
import { hideSpinner, showSpinner } from '../app/slices/globalSlice.js';

export const useLoader = ({ dispatch, isLoading, isError, isSuccess }) => {
  useEffect(() => {
    isLoading && dispatch(showSpinner());
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess || isError) {
      dispatch(hideSpinner());
    }
  }, [isSuccess, isError]);
};
