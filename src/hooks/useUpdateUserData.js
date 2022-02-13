import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLoader } from './useLoader.js';
import { useGetUserQuery } from '../services/userAPI.js';
import { updateUserBalance } from '../app/slices/sessionSlice.js';

const useUpdateUserData = (id = 'current') => {
  const dispatch = useDispatch();
  const skip = useRef(true);
  const { isLoading, isError, isSuccess, data, refetch } = useGetUserQuery(id, {
    skip: skip.current,
  });

  useLoader({ dispatch, isLoading, isError, isSuccess });
  useEffect(() => {
    data && dispatch(updateUserBalance(data?.balance));
    return () => {
      skip.current = true;
    };
  }, [data]);

  return { refetch, skip };
};

export default useUpdateUserData;
